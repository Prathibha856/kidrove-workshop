import { useState, useEffect } from 'react';
export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => setShow(window.scrollY > 500));
    return () => window.removeEventListener('scroll', () => {});
  }, []);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  if (!show) return null;
  return <button onClick={scrollTop} style={{ position: 'fixed', bottom: '20px', right: '20px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', fontSize: '24px', cursor: 'pointer' }}>↑</button>;
}