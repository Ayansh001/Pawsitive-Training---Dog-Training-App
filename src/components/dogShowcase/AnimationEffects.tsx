
import React from 'react';
import { Heart, Bone, Smile } from 'lucide-react';

interface AnimationEffectsProps {
  animationAction: 'smile' | 'heart' | 'treat' | null;
}

const AnimationEffects: React.FC<AnimationEffectsProps> = ({ animationAction }) => {
  return (
    <>
      {animationAction === 'smile' && (
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white/80 px-4 py-2 rounded-full shadow-md z-10 animate-bounce">
          <div className="flex items-center">
            <Smile className="text-dogblue mr-2" />
            <span>Puppy is smiling!</span>
          </div>
        </div>
      )}
      
      {animationAction === 'heart' && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="animate-ping">
            <Heart className="h-16 w-16 text-red-500" />
          </div>
        </div>
      )}
      
      {animationAction === 'treat' && (
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 animate-float">
          <div className="animate-spin-slow">
            <Bone className="h-12 w-12 text-dogbrown" />
          </div>
          <div className="mt-2 bg-white/80 px-2 py-1 rounded-md text-sm text-center">
            Yum! Tasty treat!
          </div>
        </div>
      )}
    </>
  );
};

export default AnimationEffects;
