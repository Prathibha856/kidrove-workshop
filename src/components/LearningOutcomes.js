import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const outcomes = [
  { id: 1, title: "AI Fundamentals", desc: "Understand how AI works and build simple models", emoji: "🤖" },
  { id: 2, title: "Robotics Basics", desc: "Learn sensors, motors, and how robots make decisions", emoji: "🔧" },
  { id: 3, title: "Python Programming", desc: "Write real Python code for AI projects", emoji: "🐍" },
  { id: 4, title: "Hands-on Projects", desc: "Build 3 complete projects for your portfolio", emoji: "📁" },
  { id: 5, title: "Problem Solving", desc: "Develop logical thinking and debugging skills", emoji: "🧠" },
  { id: 6, title: "Certificate of Completion", desc: "Earn a certificate to showcase your skills", emoji: "📜" }
];

function LearningOutcomes() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section style={{ padding: '50px', background: '#f0f2f5' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>What You Will Learn</h2>
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '25px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {outcomes.map(outcome => (
          <motion.div
            key={outcome.id}
            variants={itemVariants}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
            style={{
              background: 'white',
              padding: '25px',
              borderRadius: '16px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
              transition: 'box-shadow 0.3s'
            }}
          >
            <div style={{ fontSize: '48px', marginBottom: '15px' }}>{outcome.emoji}</div>
            <h3 style={{ marginBottom: '12px', color: '#1e1e2f' }}>{outcome.title}</h3>
            <p style={{ color: '#555', lineHeight: '1.5' }}>{outcome.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default LearningOutcomes;