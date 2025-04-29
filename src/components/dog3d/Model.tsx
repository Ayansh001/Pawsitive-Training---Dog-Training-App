
import React, { useRef, useState, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Html, useGLTF } from '@react-three/drei';
import { Group, AnimationMixer, Clock } from 'three';
import { Heart } from 'lucide-react';
import { AnimationState } from './types';
import { useModelAudio } from './hooks/useModelAudio';

function Model({ onInteract }: { onInteract: (action: AnimationState) => void }) {
  const group = useRef<Group>();
  const { camera } = useThree();
  const [hovered, setHovered] = useState(false);
  
  // Load the dog model from a reliable public source
  // Using a sample dog model from the Three.js examples
  const { scene, animations } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/dog/model.gltf');
  
  // Animation state management
  const [currentAnimation, setCurrentAnimation] = useState<AnimationState>('idle');
  const mixer = useRef<AnimationMixer>();
  const clock = useRef(new Clock());
  
  // Use our custom audio hook
  const { playSound } = useModelAudio();

  // Initialize the model on first render
  useEffect(() => {
    if (scene) {
      scene.scale.set(1.5, 1.5, 1.5);
      scene.position.set(0, -1, 0);
      scene.rotation.y = Math.PI / 8;
      
      // Setup animation mixer if animations are available
      if (animations && animations.length) {
        mixer.current = new AnimationMixer(scene);
        // Setup default idle animation
        const idle = mixer.current.clipAction(animations[0]);
        idle.play();
      }
    }
  }, [scene, animations]);

  // Handle animation updates
  useFrame(() => {
    const delta = clock.current.getDelta();
    if (mixer.current) {
      mixer.current.update(delta);
    }
    
    // Return to idle after a short time
    if (currentAnimation !== 'idle' && clock.current.elapsedTime > 2) {
      setCurrentAnimation('idle');
    }
  });

  // Handle model interaction
  const handleInteraction = () => {
    // Choose a random animation when interacted with
    const animations: AnimationState[] = ['bark', 'happy', 'heart'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
    
    setCurrentAnimation(randomAnimation);
    onInteract(randomAnimation);
    playSound(randomAnimation);
    
    // Reset the clock for animation timing
    clock.current = new Clock();
  };

  return (
    <group ref={group}>
      <primitive 
        object={scene} 
        onClick={handleInteraction}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
      
      {/* Show heart effect when that animation is played */}
      {currentAnimation === 'heart' && (
        <Html position={[0, 1.5, 0]}>
          <div className="animate-float">
            <Heart className="w-8 h-8 text-red-500" />
          </div>
        </Html>
      )}
      
      {/* Show hand cursor when hoverable */}
      {hovered && (
        <Html position={[0, -1.5, 0]}>
          <div className="text-sm bg-white/80 rounded-md px-2 py-1 shadow-sm">
            Click to interact
          </div>
        </Html>
      )}
    </group>
  );
}

export default Model;
