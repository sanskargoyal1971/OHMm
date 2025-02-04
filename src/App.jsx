import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./components/Hero/HeroPage";
import ChatPage from "./components/ChatPage/ChatPage";
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<HeroPage />} />
      <Route path="/chat" element={<ChatPage />} />
    </Routes>
  </Router>
  );
}

export default App;
