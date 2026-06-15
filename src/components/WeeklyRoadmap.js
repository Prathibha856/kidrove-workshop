import React from 'react';
import { motion } from 'framer-motion';

const weeks = [
  { week: 1, title: 'Introduction to AI & Tools', icon: '🤖', color: '#6366f1', description: 'Explore AI concepts, ethics, and set up coding tools.' },
  { week: 2, title: 'Robotics & Sensors', icon: '🔧', color: '#ec4899', description: 'Learn about sensors, actuators, and basic robot control.' },
  { week: 3, title: 'Machine Learning Basics', icon: '⚙️', color: '#10b981', description: 'Train simple models, understand data & predictions.' },
  { week: 4, title: 'Final Project & Presentation', icon: '🏆', color: '#f59e0b', description: 'Build your own AI robot and present to the class.' }
];

const WeeklyRoadmap = () => {
  return (
    <section style={styles.section}>
      <h2 style={styles.title}>📅 Weekly Learning Roadmap</h2>
      <div style={styles.timeline}>
        {weeks.map((week, index) => (
          <motion.div
            key={week.week}
            style={styles.weekCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: '0 20px 35px rgba(0,0,0,0.2)' }}
          >
            <div style={{ ...styles.iconWrapper, backgroundColor: week.color + '20', borderColor: week.color }}>
              <span style={styles.icon}>{week.icon}</span>
              <span style={styles.weekNumber}>{week.week}</span>
            </div>
            <h3 style={styles.weekTitle}>{week.title}</h3>
            <p style={styles.weekDesc}>{week.description}</p>
            <div style={{ ...styles.progressLine, background: week.color }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    color: 'white',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.5rem',
    marginBottom: '50px',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #fff, #a5b4fc)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
  },
  timeline: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '25px',
    maxWidth: '1300px',
    margin: '0 auto',
  },
  weekCard: {
    flex: '1 1 220px',
    minWidth: '220px',
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    padding: '24px 16px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    border: '1px solid rgba(255,255,255,0.15)',
    position: 'relative',
    overflow: 'hidden',
  },
  iconWrapper: {
    width: '70px',
    height: '70px',
    margin: '0 auto 20px auto',
    borderRadius: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderWidth: '2px',
    borderStyle: 'solid',
  },
  icon: {
    fontSize: '32px',
    lineHeight: 1,
  },
  weekNumber: {
    fontSize: '12px',
    fontWeight: 'bold',
    marginTop: '4px',
    background: 'rgba(0,0,0,0.6)',
    padding: '2px 8px',
    borderRadius: '20px',
    color: 'white',
  },
  weekTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    marginBottom: '12px',
    color: '#fff',
  },
  weekDesc: {
    fontSize: '0.85rem',
    color: '#cbd5e1',
    lineHeight: 1.4,
  },
  progressLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '4px',
    width: '100%',
    borderRadius: '0 0 24px 24px',
  },
};

export default WeeklyRoadmap;