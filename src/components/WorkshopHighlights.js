import React from 'react';
import { motion } from 'framer-motion';

const highlights = [
  { icon: '👥', label: 'Age Group', value: '8-14 Years', color: '#ff6b6b' },
  { icon: '⏱️', label: 'Duration', value: '4 Weeks', color: '#feca57' },
  { icon: '💻', label: 'Mode', value: 'Online', color: '#48dbfb' },
  { icon: '💰', label: 'Fee', value: '₹2,999', color: '#1dd1a1' },
  { icon: '📅', label: 'Start Date', value: '15 July 2026', color: '#a5b4fc' },
  { icon: '📜', label: 'Certificate', value: 'Yes, upon completion', color: '#ff9ff3' }
];

const WorkshopHighlights = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>✨ Workshop Highlights</h2>
      <div style={styles.grid}>
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            style={{ ...styles.card, borderTop: `4px solid ${item.color}` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, boxShadow: '0 20px 30px rgba(0,0,0,0.1)' }}
          >
            <div style={styles.icon}>{item.icon}</div>
            <div style={styles.label}>{item.label}</div>
            <div style={styles.value}>{item.value}</div>
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
    maxWidth: '1100px',
    margin: '0 auto',
  },
  card: {
    flex: '1 1 180px',
    minWidth: '160px',
    background: '#f8fafc',
    borderRadius: '20px',
    padding: '25px 15px',
    textAlign: 'center',
    transition: 'all 0.3s',
    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '2.5rem',
    marginBottom: '12px',
  },
  label: {
    fontSize: '0.85rem',
    fontWeight: '500',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '8px',
  },
  value: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#0f172a',
  },
};

export default WorkshopHighlights;