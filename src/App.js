import HeroSection from './components/HeroSection';
import WorkshopCard from './components/WorkshopCard';
import FAQSection from './components/FAQSection';
import LearningOutcomes from './components/LearningOutcomes';
import RegistrationForm from './components/RegistrationForm';  // Add this
import './App.css';

function App() {
  const workshopInfo = {
    ageGroup: "8-14 Years",
    duration: "4 Weeks",
    mode: "Online",
    fee: "₹2,999",
    startDate: "15 July 2026"
  };

  return (
    <div className="App">
      <HeroSection />
      
      <section style={{ padding: '50px', background: '#f8f9fa' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>
          Workshop Details
        </h2>
        <WorkshopCard 
          ageGroup={workshopInfo.ageGroup}
          duration={workshopInfo.duration}
          mode={workshopInfo.mode}
          fee={workshopInfo.fee}
          startDate={workshopInfo.startDate}
        />
      </section>

      <LearningOutcomes />
      <FAQSection />
      <RegistrationForm />  {/* Add this line */}
    </div>
  );
}

export default App;