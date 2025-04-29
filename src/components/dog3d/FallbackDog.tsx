
import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';

function FallbackDog() {
  const [rotation, setRotation] = useState(0);
  
  useFrame(() => {
    setRotation(prev => prev + 0.01);
  });
  
  return (
    <group>
      <mesh rotation={[0, rotation, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      <Html position={[0, 1.5, 0]}>
        <div className="text-sm bg-white/80 rounded-md px-2 py-1 shadow-sm">
          Interactive Dog Model
        </div>
      </Html>
    </group>
  );
}

export default FallbackDog;
