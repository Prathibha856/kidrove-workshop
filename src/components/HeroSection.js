import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [currentThought, setCurrentThought] = useState('');

  useEffect(() => {
    const thoughts = [
      "Machine Learning 🤖",
      "Neural Networks 🧠",
      "Computer Vision 👁️",
      "Robotics 🔧",
      "Natural Language 💬",
      "AI Ethics ⚖️",
      "Future Tech 🚀"
    ];
    let index = 0;
    const interval = setInterval(() => {
      setCurrentThought(thoughts[index % thoughts.length]);
      index++;
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('registration');
    if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={styles.section}>
      <div style={styles.overlay}></div>
      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.content}
        >
          <h1 style={styles.title}>
            🤖 AI & Robotics <br />
            Summer Workshop
          </h1>
          <div style={styles.thoughtContainer}>
            <span style={styles.thoughtLabel}>✨ Exploring</span>
            <motion.span
              key={currentThought}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              style={styles.thoughtValue}
            >
              {currentThought}
            </motion.span>
          </div>
          <p style={styles.description}>
            Learn to build intelligent robots and AI applications in 4 weeks!
          </p>
          <motion.button
            onClick={scrollToForm}
            whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(255,107,107,0.6)' }}
            whileTap={{ scale: 0.98 }}
            style={styles.button}
          >
            Enroll Now →
          </motion.button>
          <div style={styles.badges}>
            <span>📅 Starts 15 July 2026</span>
            <span>👥 Ages 8-14</span>
            <span>💻 Online</span>
            <span>💰 ₹2,999</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    position: 'relative',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(145deg, #0b0f2a 0%, #1a1a4e 50%, #2d1b69 100%)',
    overflow: 'hidden',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle at 30% 40%, rgba(168,85,247,0.15) 0%, transparent 60%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    width: '100%',
  },
  content: {
    textAlign: 'center',
    color: 'white',
  },
  title: {
  fontSize: '3.8rem',
  fontWeight: '800',
  marginBottom: '20px',
  lineHeight: '1.2',
  color: 'white',
  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  
  thoughtContainer: {
    display: 'inline-flex',
    gap: '12px',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.45)',
    backdropFilter: 'blur(12px)',
    padding: '10px 24px',
    borderRadius: '60px',
    marginBottom: '30px',
    border: '1px solid rgba(192,132,252,0.5)',
    boxShadow: '0 0 15px rgba(192,132,252,0.3)',
  },
  thoughtLabel: {
    fontWeight: '500',
    color: '#e2e8f0',
    fontSize: '1.2rem',
  },
  thoughtValue: {
    fontWeight: '800',
    background: 'linear-gradient(135deg, #f0abfc, #a5b4fc)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    fontSize: '1.3rem',
    minWidth: '200px',
    textAlign: 'left',
    letterSpacing: '0.5px',
  },
  description: {
    fontSize: '1.3rem',
    maxWidth: '700px',
    margin: '0 auto 30px',
    opacity: 0.95,
    color: '#cbd5e1',
  },
  button: {
    background: 'linear-gradient(95deg, #ff6b6b, #ee5a24)',
    color: 'white',
    padding: '14px 42px',
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    marginBottom: '40px',
    transition: '0.3s',
    boxShadow: '0 8px 20px rgba(238,90,36,0.4)',
  },
  badges: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
    fontSize: '1rem',
    color: '#e2e8f0',
    background: 'rgba(255,255,255,0.08)',
    padding: '12px 28px',
    borderRadius: '60px',
    width: 'fit-content',
    margin: '0 auto',
    backdropFilter: 'blur(8px)',
  },
};

export default HeroSection;