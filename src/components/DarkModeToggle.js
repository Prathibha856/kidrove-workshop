export default function DarkModeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        background: darkMode ? '#f1f5f9' : '#334155',
        color: darkMode ? '#0f172a' : '#f8fafc',
        border: 'none',
        borderRadius: '40px',
        padding: '8px 18px',
        cursor: 'pointer',
        fontSize: '0.9rem',
        fontWeight: '600',
      }}
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
}