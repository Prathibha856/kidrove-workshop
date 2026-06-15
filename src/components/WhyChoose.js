import React from 'react';
import { motion } from 'framer-motion';

const features = [
  { icon: '🎥', title: 'Live Interactive Classes', desc: 'Real‑time engagement with expert instructors' },
  { icon: '🛠️', title: 'Hands‑on Projects', desc: 'Build 5+ real‑world AI & robotics projects' },
  { icon: '👨‍🏫', title: 'Industry Mentors', desc: 'Learn from professionals with years of experience' },
  { icon: '📜', title: 'Certificate', desc: 'Recognised completion certificate for every student' },
  { icon: '👥', title: 'Small Batch Size', desc: 'Personalised attention, max 15 students per batch' }
];

const WhyChoose = () => {
  return (
    <section id="why-choose" style={styles.section}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        style={styles.title}
      >
        🌟 Why Choose This Workshop?
      </motion.h2>
      <div style={styles.grid}>
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            style={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, boxShadow: '0 20px 30px rgba(0,0,0,0.15)' }}
          >
            <div style={styles.icon}>{item.icon}</div>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.desc}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    background: '#ffffff',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: '700',
    marginBottom: '50px',
    color: '#1e1b4b',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  card: {
    flex: '1 1 200px',
    minWidth: '200px',
    background: '#f8fafc',
    borderRadius: '20px',
    padding: '25px 15px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
    border: '1px solid #e2e8f0',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '15px',
  },
  cardTitle: {
    fontSize: '1.1rem',
    fontWeight: '700',
    marginBottom: '10px',
    color: '#0f172a',
  },
  desc: {
    fontSize: '0.85rem',
    color: '#475569',
    lineHeight: 1.4,
  },
};

export default WhyChoose;