import React from 'react';
import { motion } from 'framer-motion';

const AboutWorkshop = () => {
  const stats = [
    { value: '4', label: 'Weeks', icon: '📅' },
    { value: '15+', label: 'Hands‑on Projects', icon: '🛠️' },
    { value: '100%', label: 'Live Online', icon: '💻' },
    { value: '8-14', label: 'Age Group', icon: '👥' }
  ];

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Left side – text content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={styles.content}
        >
          <h2 style={styles.title}>🚀 About the Workshop</h2>
          <p style={styles.description}>
            This <strong style={styles.highlight}>4‑week online journey</strong> introduces students to the exciting world of 
            <strong style={styles.highlight}> Artificial Intelligence and Robotics</strong>. No prior coding experience needed – 
            we start from the very basics and guide you step‑by‑step to build real‑world projects.
          </p>
          <div style={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                style={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <span style={styles.statIcon}>{stat.icon}</span>
                <span style={styles.statValue}>{stat.value}</span>
                <span style={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right side – illustration / animated graphic */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={styles.illustration}
        >
          <div style={styles.robotIcon}>🤖</div>
          <div style={styles.codeBlock}>
            <span>{/* AI & Robotics */}</span>
            <span>def learn():</span>
            <span>    return "awesome!"</span>
          </div>
          <div style={styles.floatingOrb}></div>
        </motion.div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '70px 20px',
    background: 'linear-gradient(115deg, #0b1120 0%, #1a1a3e 100%)',
    color: 'white',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    gap: '50px',
    flexWrap: 'wrap',
  },
  content: {
    flex: '1.2',
    minWidth: '280px',
  },
  title: {
    fontSize: '2.4rem',
    fontWeight: '700',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #a5b4fc, #c084fc)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  description: {
    fontSize: '1.1rem',
    lineHeight: '1.7',
    color: '#cbd5e1',
    marginBottom: '35px',
  },
  highlight: {
    color: '#a5b4fc',
    fontWeight: '600',
  },
  statsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  statCard: {
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(8px)',
    borderRadius: '24px',
    padding: '15px 20px',
    minWidth: '100px',
    textAlign: 'center',
    border: '1px solid rgba(165,180,252,0.3)',
    transition: 'transform 0.2s',
  },
  statIcon: {
    fontSize: '1.8rem',
    display: 'block',
    marginBottom: '8px',
  },
  statValue: {
    fontSize: '1.8rem',
    fontWeight: '800',
    display: 'block',
    color: '#a5b4fc',
  },
  statLabel: {
    fontSize: '0.8rem',
    fontWeight: '500',
    opacity: 0.8,
  },
  illustration: {
    flex: '1',
    minWidth: '260px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  robotIcon: {
    fontSize: '6rem',
    filter: 'drop-shadow(0 0 15px #a5b4fc)',
    animation: 'float 4s ease-in-out infinite',
  },
  codeBlock: {
    background: 'rgba(0,0,0,0.6)',
    padding: '15px 20px',
    borderRadius: '20px',
    fontFamily: 'monospace',
    fontSize: '0.9rem',
    textAlign: 'left',
    lineHeight: '1.6',
    width: '100%',
    borderLeft: '4px solid #a5b4fc',
  },
  floatingOrb: {
    position: 'absolute',
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(165,180,252,0.3), transparent)',
    top: '-20px',
    right: '-30px',
    zIndex: -1,
    animation: 'pulse 6s infinite',
  },
};

// Add keyframes to the document
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
  @keyframes pulse {
    0% { opacity: 0.3; transform: scale(1); }
    50% { opacity: 0.8; transform: scale(1.1); }
    100% { opacity: 0.3; transform: scale(1); }
  }
`;
document.head.appendChild(styleSheet);

export default AboutWorkshop;