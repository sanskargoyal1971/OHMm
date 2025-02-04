import { motion } from "framer-motion";
import './HeroPage.css';
import coffee from '../../assets/coffee.jpg';

const HeroPage = ({ onChatStart }) => {
  return (
    <div className="hero-container">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="hero-title"
      >
        <h1>Welcome to ComfortChat</h1>
        <p>Your safe space for emotional support</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-img-container"
      >
        <img src={coffee} alt="Logo" className="hero-img" />
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        onClick={onChatStart}
        className="hero-button"
      >
        Start Your Journey
      </motion.button>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="feature-container"
      >
        <FeatureCard icon="💬" title="24/7 Support" description="Always here when you need us" />
        <FeatureCard icon="🔒" title="Safe & Secure" description="Your privacy is our priority" />
        <FeatureCard icon="🌱" title="Personal Growth" description="Grow at your own pace" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="testimonial-container"
      >
        <p>Join thousands finding comfort and support</p>
        <div className="flex justify-center space-x-4">
          <TestimonialBubble text="Life-changing!" />
          <TestimonialBubble text="Always there for me" />
          <TestimonialBubble text="So helpful!" />
        </div>
      </motion.div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="feature-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const TestimonialBubble = ({ text }) => (
  <div className="testimonial-bubble">{text}</div>
);

export default HeroPage;
