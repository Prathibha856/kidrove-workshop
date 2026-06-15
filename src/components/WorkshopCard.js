// WorkshopCard.js
function WorkshopCard({ ageGroup, duration, mode, fee, startDate ,certificate }) {
  // The { } around the parameters is called "destructuring"
  // It's a shortcut to access props directly
  
  return (
    <div style={{
      background: 'blue',
      padding: '25px',
      borderRadius: '15px',
      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
      maxWidth: '400px',
      margin: '20px auto'
    }}>
      <h3 style={{ color: 'black', marginBottom: '20px' }}>Workshop Details</h3>
      <p><strong>👥 Age Group:</strong> {ageGroup}</p>
      <p><strong>⏱️ Duration:</strong> {duration}</p>
      <p><strong>💻 Mode:</strong> {mode}</p>
      <p><strong>💰 Fee:</strong> {fee}</p>
      <p><strong>📅 Start Date:</strong> {startDate}</p>
      <p><strong>📜 Certificate:</strong> {certificate}</p>


    </div>
  );
}

export default WorkshopCard;