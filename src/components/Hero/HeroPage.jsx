
import { useNavigate } from "react-router-dom";  
import { motion } from "framer-motion"
import CoffeeSVG from '../../assets/coffee.svg'
import NeuButton from "../Button/NeuButton"
import ChipTabs from "../DropDown/DropDown"
const HeroPage = ({ onChatStart }) => {
  const navigate = useNavigate(); 
  
  const handleChatStart = () => {
    // console.log("Navigating to ChatPage...");
    navigate("/chat");
  };
  return (
    <div className="min-h-screen w-full bg-[#FCC88F] flex flex-col justify-center items-center p-8 text-gray-800 font-poppins">
      
     
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: -10 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold mb-4">Meet Ohm!</h1>
        <p className="text-xl">Your safe space to Share & Heal</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x : -80 }}
        animate={{ opacity: 1, scale: 1.6, x : 70}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <img src={CoffeeSVG || "/placeholder.svg"} alt="Logo" className="w-64 h-64" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x : -80}}
        animate={{ opacity: 1, scale: 1.0, x : -30, y : -60}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
     <NeuButton label="lets talk"  onClick={handleChatStart}  />
      {/* <NeuButton label="lets talk" onClick={onChatStart}></NeuButton> */}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x : 280, y : -600}}
        animate={{ opacity: 1, scale: 1.3, x : 680, y : -710}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-12"
      >
        <ChipTabs />
      </motion.div>

     
    
    
    </div>
  )
}

export default HeroPage
