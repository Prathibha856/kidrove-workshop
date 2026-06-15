import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What equipment do I need for this workshop?",
    answer: "You'll need a computer (Windows/Mac) with a stable internet connection. All software tools we use are free and web‑based – no additional hardware required!"
  },
  {
    question: "Do I need prior coding experience?",
    answer: "Not at all! This workshop is designed for complete beginners. We start from the very basics and gradually build up to advanced concepts. Our instructors are patient and experienced with young learners."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes! Every participant who completes the workshop will receive a personalized certificate of completion from Kidrove. It’s a great addition to your portfolio."
  },
  {
    question: "What if I miss a live session?",
    answer: "All sessions are recorded and uploaded to our learning portal within 24 hours. You can watch them anytime, and our support team is available to answer your questions."
  },
  {
    question: "Are there any scholarships or discounts?",
    answer: "Yes, we offer early‑bird discounts and need‑based scholarships. Contact our support team for more details."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={styles.title}
        >
          ❓ Frequently Asked Questions
        </motion.h2>
        <div style={styles.faqGrid}>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              style={styles.faqItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div 
                style={styles.question}
                onClick={() => toggleFAQ(index)}
              >
                <span style={styles.questionText}>{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={styles.icon}
                >
                  {openIndex === index ? '−' : '+'}
                </motion.span>
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    style={styles.answerWrapper}
                  >
                    <p style={styles.answer}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    background: 'linear-gradient(135deg, #f5f7ff 0%, #eef2ff 100%)',
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
    fontSize: '2.2rem',
    fontWeight: '700',
    marginBottom: '40px',
    color: '#1e1b4b',
  },
  faqGrid: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  faqItem: {
    background: 'white',
    borderRadius: '20px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
    overflow: 'hidden',
    transition: 'box-shadow 0.2s',
    border: '1px solid rgba(0,0,0,0.05)',
  },
  question: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    transition: 'background 0.2s',
  },
  questionText: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#1f2937',
    letterSpacing: '-0.2px',
  },
  icon: {
    fontSize: '28px',
    fontWeight: '300',
    color: '#6366f1',
    lineHeight: 1,
    userSelect: 'none',
  },
  answerWrapper: {
    overflow: 'hidden',
  },
  answer: {
    padding: '0 24px 24px 24px',
    margin: 0,
    color: '#4b5563',
    lineHeight: 1.6,
    fontSize: '0.95rem',
    borderTop: '1px solid #e5e7eb',
    background: '#fefefe',
  },
};

export default FAQSection;