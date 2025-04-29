
import React, { useState, useEffect } from 'react';
import { Heart, Bone, Smile, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAudioHandler } from '@/hooks/useAudioHandler';
import InteractionButtons from './InteractionButtons';
import AnimationEffects from './AnimationEffects';
import ModelLoadingIndicator from './ModelLoadingIndicator';

// Model URLs for different actions
const dogModels = {
  default: "https://sketchfab.com/models/0c3fe5368c674361b6eeb0acb4649dd1/embed?ui_theme=dark&auto_spin=0.4",
  smile: "https://sketchfab.com/models/e162db8230634385b2a4f5c5b21131c4/embed?autospin=1&autostart=1&preload=1&transparent=1",
  heart: "https://sketchfab.com/models/17ad827294ef44f6a6a50f652dd59311/embed?autostart=1",
  treat: "https://sketchfab.com/models/f71e839b7c224056b709a2747868593f/embed?autostart=1"
};

interface InteractivePuppyModelProps {
  animationAction: 'smile' | 'heart' | 'treat' | null;
  setAnimationAction: React.Dispatch<React.SetStateAction<'smile' | 'heart' | 'treat' | null>>;
}

const InteractivePuppyModel: React.FC<InteractivePuppyModelProps> = ({ 
  animationAction, 
  setAnimationAction 
}) => {
  // Track current displayed model
  const [currentDogModel, setCurrentDogModel] = useState(dogModels.default);
  // Use our custom audio handler hook
  const { playSound } = useAudioHandler();
  // Add loading state
  const [isLoading, setIsLoading] = useState(true);
  
  const handleAnimationAction = (action: 'smile' | 'heart' | 'treat') => {
    setAnimationAction(action);
    setIsLoading(true); // Set loading when changing models
    
    // Change the model based on which button was clicked
    switch(action) {
      case 'smile':
        setCurrentDogModel(dogModels.smile);
        break;
      case 'heart':
        setCurrentDogModel(dogModels.heart);
        break;
      case 'treat':
        setCurrentDogModel(dogModels.treat);
        break;
    }
    
    // Play the audio - this is now user-initiated from a button click
    playSound(action);
    
    // Reset animation state after a short time
    setTimeout(() => {
      setAnimationAction(null);
    }, 2000);
  };
  
  // Reset to default model
  const handleReset = () => {
    setCurrentDogModel(dogModels.default);
    setAnimationAction(null);
    setIsLoading(true);
  };

  return (
    <div className="w-full h-full flex flex-col bg-gradient-to-b from-white to-dogpeach/30 rounded-lg">
      <div className="flex-1 flex items-center justify-center relative">
        {isLoading && <ModelLoadingIndicator />}
        
        <div className="absolute inset-0 flex items-center justify-center">
          <iframe 
            title="Interactive Puppy"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; fullscreen; xr-spatial-tracking"
            src={currentDogModel}
            className="w-full h-full rounded-lg"
            onLoad={() => setIsLoading(false)}
          />
        </div>
        
        {/* Animation Effects */}
        <AnimationEffects animationAction={animationAction} />
      </div>
      <div className="flex flex-col">
        <InteractionButtons onAnimationAction={handleAnimationAction} />
        <div className="p-2 flex justify-center">
          <Button 
            onClick={handleReset} 
            variant="outline" 
            className="text-sm flex items-center"
            aria-label="Reset to default puppy model"
          >
            <RotateCcw className="w-4 h-4 mr-1" /> Reset
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InteractivePuppyModel;
