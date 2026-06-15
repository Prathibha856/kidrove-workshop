import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot, Float, Stars } from '@react-three/drei';

function AnimatedKnot() {
  const knotRef = useRef();
  useFrame(() => {
    if (knotRef.current) {
      knotRef.current.rotation.x += 0.008;
      knotRef.current.rotation.y += 0.012;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1}>
      <TorusKnot ref={knotRef} args={[1.2, 0.32, 180, 24, 3, 4]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ff6b6b" metalness={0.8} roughness={0.2} emissive="#441155" emissiveIntensity={0.6} />
      </TorusKnot>
    </Float>
  );
}

export default function Simple3D() {
  return (
    <div style={{ width: '100%', height: '400px', background: 'transparent' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-5, 0, 5]} color="#ff88aa" intensity={0.6} />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade />
        <AnimatedKnot />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} enablePan={false} />
      </Canvas>
    </div>
  );
}