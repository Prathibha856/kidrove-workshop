import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WorkshopHighlights from './components/WorkshopHighlights';
import CountdownTimer from './components/CountdownTimer';
import AboutWorkshop from './components/AboutWorkshop';
import WhyChoose from './components/WhyChoose';
import LearningOutcomes from './components/LearningOutcomes';
import WeeklyRoadmap from './components/WeeklyRoadmap';
import FAQSection from './components/FAQSection';
import RegistrationForm from './components/RegistrationForm';
import BackToTop from './components/BackToTop';
import { Toaster } from 'react-hot-toast';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (darkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  }, [darkMode]);

  return (
    <div className="App">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <HeroSection />

      <WorkshopHighlights />
      <CountdownTimer targetDate="2026-07-15T00:00:00" />
      <AboutWorkshop />
      <WhyChoose />
      <LearningOutcomes />
      <WeeklyRoadmap />
      <FAQSection />

      <div id="registration">
        <RegistrationForm />
      </div>

      {/* Contact section with id for smooth scrolling */}
      <section id="contact" style={{ padding: '40px', background: '#1a1a2e', color: 'white', textAlign: 'center' }}>
        <h2>Contact Information</h2>
        <p>📧 support@kidrove.com</p>
        <p>📞 +91 98765 43210</p>
        <p>🕒 Mon-Fri, 9 AM – 6 PM</p>
      </section>

      <footer style={{ padding: '20px', textAlign: 'center', background: '#111', color: '#aaa' }}>
        <p>© 2026 Kidrove. All rights reserved.</p>
        <p>📱 Facebook | Twitter | Instagram</p>
      </footer>

      <BackToTop />
      <Toaster position="top-right" />
    </div>
  );
}

export default App;