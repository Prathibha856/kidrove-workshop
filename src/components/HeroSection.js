// HeroSection.js
function HeroSection() {
  return (
    <section style={{ padding: '50px', textAlign: 'center' }}>
      <h1>🤖 AI & Robotics Summer Workshop</h1>
      <p style={{ fontSize: '18px', margin: '20px 0' }}>
        Learn to build intelligent robots and AI applications in 4 weeks!
      </p>
      <button style={{ 
        background: '#ff6b6b', 
        color: 'white', 
        padding: '12px 30px',
        border: 'none',
        borderRadius: '25px',
        cursor: 'pointer',
        fontSize: '16px'
      }}>
        Enroll Now →
      </button>
      <div style={{ marginTop: '30px' }}>
        <span>📅 Starts 15 July 2026 | </span>
        <span>👥 Ages 8-14 | </span>
        <span>💻 Online | </span>
        <span>💰 ₹2,999</span>
      </div>
    </section>
  );
}

export default HeroSection;