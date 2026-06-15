// FAQSection.js
import { useState } from 'react';  // Import the useState hook

function FAQSection() {
  // State to track which FAQ is open (null = none open)
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ data
  const faqs = [
    {
      question: "What equipment do I need?",
      answer: "You'll need a computer (Windows/Mac) with internet. All tools are free online!"
    },
    {
      question: "Do I need coding experience?",
      answer: "No! This workshop is for beginners. We'll teach you everything from scratch."
    },
    {
      question: "Will I get a certificate?",
      answer: "Yes! All participants receive a completion certificate from Kidrove."
    }
  ];

  // Function to toggle FAQ open/close
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);  // Close if already open
    } else {
      setOpenIndex(index); // Open the clicked one
    }
  };

  return (
    <section style={{ padding: '50px', background: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>
        Frequently Asked Questions
      </h2>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {faqs.map((faq, index) => (
          <div key={index} style={{ 
            marginBottom: '15px',
            border: '1px solid #ddd',
            borderRadius: '10px',
            overflow: 'hidden'
          }}>
            {/* Question - Clickable */}
            <div 
              onClick={() => toggleFAQ(index)}
              style={{
                padding: '15px 20px',
                background: 'black',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontWeight: 'bold'
              }}
            >
              {faq.question}
              <span style={{ fontSize: '24px' }}>
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            {/* Answer - Shows only when open */}
            {openIndex === index && (
              <div style={{ padding: '20px', background: '#fff', borderTop: '1px solid #ddd' }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;