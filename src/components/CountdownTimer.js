import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = ({ targetDate }) => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;
      if (distance < 0) {
        clearInterval(interval);
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTime({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (86400000)) / 3600000),
          minutes: Math.floor((distance % 3600000) / 60000),
          seconds: Math.floor((distance % 60000) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: time.days, color: '#ff6b6b' },
    { label: 'Hours', value: time.hours, color: '#feca57' },
    { label: 'Minutes', value: time.minutes, color: '#48dbfb' },
    { label: 'Seconds', value: time.seconds, color: '#1dd1a1' }
  ];

  return (
    <section style={styles.section}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.title}
      >
        ⏳ Workshop Starts In
      </motion.h2>
      <div style={styles.container}>
        {timeUnits.map((unit, idx) => (
          <motion.div
            key={unit.label}
            style={{ ...styles.card, borderBottomColor: unit.color }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <span style={{ ...styles.value, color: unit.color }}>{unit.value}</span>
            <span style={styles.label}>{unit.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    background: 'linear-gradient(145deg, #0f172a, #1e1b4b)',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.2rem',
    fontWeight: '700',
    marginBottom: '40px',
    background: 'linear-gradient(135deg, #fff, #a5b4fc)',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    letterSpacing: '-0.5px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    gap: '25px',
    flexWrap: 'wrap',
    maxWidth: '800px',
    margin: '0 auto',
  },
  card: {
    background: 'rgba(255,255,255,0.08)',
    backdropFilter: 'blur(12px)',
    borderRadius: '24px',
    padding: '20px 0',
    width: '120px',
    textAlign: 'center',
    borderBottom: '4px solid',
    transition: '0.3s',
    boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
  },
  value: {
    fontSize: '3rem',
    fontWeight: '800',
    display: 'block',
    lineHeight: 1,
    fontFamily: 'monospace',
  },
  label: {
    fontSize: '1rem',
    fontWeight: '500',
    color: '#ccc',
    letterSpacing: '1px',
  },
};

export default CountdownTimer;