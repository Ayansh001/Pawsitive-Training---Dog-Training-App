
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './dog3d/Model';
import FallbackDog from './dog3d/FallbackDog';
import TouchEffects from './dog3d/TouchEffects';
import { AnimationState } from './dog3d/types';

// Main component that sets up the 3D canvas 
const DogModel3D: React.FC = () => {
  const [feedbackText, setFeedbackText] = useState("");
  const [modelLoaded, setModelLoaded] = useState(true);
  
  // Handle interactions from the 3D model
  const handleInteraction = (action: AnimationState) => {
    // Show different feedback based on the action
    switch (action) {
      case 'bark':
        setFeedbackText("Woof! I'm excited!");
        break;
      case 'happy':
        setFeedbackText("The pup is wagging his tail!");
        break;
      case 'heart':
        setFeedbackText("The pup loves you!");
        break;
      default:
        setFeedbackText("");
    }
    
    // Clear the feedback after 2 seconds
    setTimeout(() => {
      setFeedbackText("");
    }, 2000);
  };

  // Error handling for model loading
  useEffect(() => {
    const handleError = () => {
      console.log("Error loading 3D model - using fallback");
      setModelLoaded(false);
    };

    window.addEventListener('error', handleError);
    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);
  
  return (
    <div className="w-full h-full relative">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 50 }} 
        onError={(error) => {
          console.error("Canvas error:", error);
          setModelLoaded(false);
        }}
      >
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <React.Suspense fallback={<FallbackDog />}>
          {modelLoaded ? (
            <Model onInteract={handleInteraction} />
          ) : (
            <FallbackDog />
          )}
        </React.Suspense>
        <OrbitControls 
          enablePan={false} 
          enableZoom={false} 
          rotateSpeed={0.5} 
          minPolarAngle={Math.PI / 2 - 0.5} 
          maxPolarAngle={Math.PI / 2 + 0.5} 
        />
      </Canvas>
      
      {/* Feedback display */}
      {feedbackText && (
        <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full shadow-md animate-fade-in">
          {feedbackText}
        </div>
      )}
      
      <TouchEffects />
    </div>
  );
};

export default DogModel3D;
