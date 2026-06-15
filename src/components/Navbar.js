import DarkModeToggle from './DarkModeToggle';

function Navbar({ darkMode, setDarkMode }) {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Conditional styles based on darkMode
  const navbarStyle = {
    ...styles.nav,
    backgroundColor: darkMode ? '#1e293b' : 'rgba(255, 255, 255, 0.95)',
    boxShadow: darkMode ? '0 2px 10px rgba(0,0,0,0.3)' : '0 2px 10px rgba(0,0,0,0.1)',
  };

  const linkBtnStyle = {
    ...styles.linkBtn,
    color: darkMode ? '#e2e8f0' : '#333',
  };

  const logoStyle = {
    ...styles.logo,
    color: darkMode ? '#a5b4fc' : '#4f46e5',
  };

  return (
    <nav style={navbarStyle}>
      <div style={logoStyle} onClick={() => scrollTo('hero')}>
        🤖 Kidrove
      </div>
      <div style={styles.links}>
        <button onClick={() => scrollTo('hero')} style={linkBtnStyle}>Home</button>
        <button onClick={() => scrollTo('why-choose')} style={linkBtnStyle}>Workshops</button>
        <button onClick={() => scrollTo('contact')} style={linkBtnStyle}>Contact</button>
        <button onClick={() => scrollTo('registration')} style={styles.enrollBtn}>Enroll Now</button>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    flexWrap: 'wrap',
    transition: 'background-color 0.2s, box-shadow 0.2s',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  links: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  linkBtn: {
    background: 'none',
    border: 'none',
    fontSize: '1rem',
    cursor: 'pointer',
    padding: '0.5rem 0.2rem',
    transition: 'color 0.2s',
  },
  enrollBtn: {
    background: '#4f46e5',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1.2rem',
    borderRadius: '30px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Navbar;