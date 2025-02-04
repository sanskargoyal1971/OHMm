from django.shortcuts import render
from django.http import JsonResponse,HttpResponse
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
import google.generativeai as genai
from dotenv import load_dotenv
import os, json
import requests, asyncio

load_dotenv()

GROQ_API_KEY = os.getenv('GROQ_API_KEY')
GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'


conversation_history = [] 


# system prompt - " assume - actions - decide - breathing exercise  
def home(request):
    csrf_token = get_token(request)
    return render(request,'index.html',{'csrf_token':csrf_token})

def get_breathing_exercise():
    exercise = """
    Take a deep breath in. Now let it out.
    
    1. Close your eyes if they are open. 👁️✨ 
    2. Take a few big, deep breaths. 
    3. Breathe in. Imagine the air is filled with peace and calm. Try to feel it throughout your body. 😌  
    4. Breathe out. Picture the air leaving with your stress and tension. 
    5. As you inhale, silently say in your mind: *"I breathe in peace and calm."*  
    6. As you exhale, silently say: *"I breathe out stress and tension."* 
    7. Continue this for 10-20 minutes, focusing on the sensations in your body.  

    Tap the ❤️ above to start a calming breathing animation for a better relaxation experience
    """
    return exercise

def get_spotify_playlist():
    playlist_url = "https://open.spotify.com/playlist/6EIVswdPfoE9Wac7tB6FNg"  
    playlist_message = f"Here is a calming playlist to help you relax: {playlist_url}\nTake some time to listen and unwind."
    return playlist_message


# def bard(request):
#     csrf_token = get_token(request)
    
#     if request.method == 'POST':
    
#        # msg = request.POST.get('message')
#         data = json.loads(request.body)
#         msg = data.get('message', '')
#         print("Received message:", msg)
    
#         response = call_the_bard(msg)

#         if not msg:
#             return JsonResponse({'error': 'Message cannot be empty'}, status=400)
        
#         try:
#             response = call_the_bard(msg)
#             return JsonResponse({'message': msg, 'response': response, 'csrf_token': csrf_token})
        
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)
      
#     return JsonResponse({'message':msg,'response':response,'csrf_token': csrf_token})
    

def call_the_bard(msg):
    conversation_history.append({"role": "user", "content": msg})

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    system_prompt = """
    You are an AI mental health support assistant. Your goal is to provide emotional support, recommend coping strategies, and guide users through relaxation techniques like breathing exercises or calming music. Follow these rules:

    1. **Be empathetic and validating**: Acknowledge the user's feelings and provide supportive responses.
    2. **Be concise**: Keep responses short and to the point.
    3. **Avoid medical advice**: Do not provide diagnoses or treatment recommendations.
    4. **Use tools when appropriate**: If the user mentions stress, anxiety, or relaxation, use the available tools to guide them through breathing exercises or recommend calming music.
    5. **Stay positive**: Encourage the user and maintain a hopeful tone.

    Example interaction:
    User: "I'm feeling really stressed."
    Assistant: "I'm sorry you're feeling stressed. Let's try a quick breathing exercise to help you relax."
    """

    payload = {
        "model": "llama-3.3-70b-versatile",
        "messages": [
            {"role": "system", "content": system_prompt}
        ] + conversation_history,
        "temperature": 0.7,
        "max_tokens": 300
    }

    response = requests.post(GROQ_API_URL, headers=headers, json=payload)

    if response.status_code == 200:
        bot_reply = response.json()["choices"][0]["message"]["content"]
        conversation_history.append({"role": "assistant", "content": bot_reply})


        if "stress" in msg.lower() or "anxiety" in msg.lower():
            bot_reply += "\n\n" + get_breathing_exercise()
        elif "breathing exercise" in bot_reply.lower():
            bot_reply += "\n\n" + get_breathing_exercise()

        if "calm" in msg.lower() or "relax" in msg:
            bot_reply += "\n\n" + get_spotify_playlist()
        elif "calm music" in bot_reply.lower() or "playlist" in bot_reply.lower():
            bot_reply += "\n\n" + get_spotify_playlist()

        return bot_reply
    else:
        print("API Error:", response.status_code, response.text)
        return "I'm having trouble responding right now. Please try again later."
        
def bard(request):
    csrf_token = get_token(request)
    
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            msg = data.get('message', '')
            print("Received message:", msg)

            if not msg:
                return JsonResponse({'error': 'Message cannot be empty'}, status=400)

            response = call_the_bard(msg)
            
            return JsonResponse({'message': msg, 'response': response, 'csrf_token': csrf_token})
        
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
      
    return JsonResponse({'error': 'Invalid request method'}, status=400)