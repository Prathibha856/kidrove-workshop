// LearningOutcomes.js
function LearningOutcomes() {
  // Array of learning outcomes
  const outcomes = [
    { id: 1, title: "AI Fundamentals", desc: "Understand how AI works and build simple models" },
    { id: 2, title: "Robotics Basics", desc: "Learn sensors, motors, and how robots make decisions" },
    { id: 3, title: "Python Programming", desc: "Write real Python code for AI projects" },
    { id: 4, title: "Hands-on Projects", desc: "Build 3 complete projects for your portfolio" },
    { id: 5, title: "Problem Solving", desc: "Develop logical thinking and debugging skills" }
  ];

  return (
    <section style={{ padding: '50px', background: '#f0f2f5' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
        What You Will Learn
      </h2>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {outcomes.map(outcome => (
          <div key={outcome.id} style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '10px' }}>✅</div>
            <h3 style={{ marginBottom: '10px', color: '#333' }}>{outcome.title}</h3>
            <p style={{ color: '#666', lineHeight: '1.5' }}>{outcome.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LearningOutcomes;