import { useState } from 'react';

const prefixes = ['Mega', 'Ultra', 'Neon', 'Cyber', 'Quantum', 'Turbo'];
const suffixes = ['Bot', 'Droid', 'Mech', 'Unit', 'X', 'Prime'];

export default function RobotAlias() {
  const [alias, setAlias] = useState('');
  const generate = () => {
    const random = prefixes[Math.floor(Math.random() * prefixes.length)] + 
                    suffixes[Math.floor(Math.random() * suffixes.length)];
    setAlias(random);
  };
  return (
    <div style={{ marginTop: '1rem', textAlign: 'center' }}>
      <button onClick={generate} style={{ background: '#333', color: 'white', padding: '0.5rem 1rem', borderRadius: '20px' }}>
        🤖 Generate Your Robot Alias
      </button>
      {alias && <p style={{ marginTop: '0.5rem', fontSize: '1.2rem', fontWeight: 'bold' }}>You are: {alias}!</p>}
    </div>
  );
}