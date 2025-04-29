
import React from 'react';
import { Dog, Bone } from 'lucide-react';

interface DogMascotProps {
  size?: 'sm' | 'md' | 'lg';
  animation?: 'wag' | 'jump' | 'float' | 'none';
}

const DogMascot: React.FC<DogMascotProps> = ({ 
  size = 'md', 
  animation = 'wag'
}) => {
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };
  
  const animationClasses = {
    wag: 'animate-wag',
    jump: 'animate-jump',
    float: 'animate-float',
    none: ''
  };

  return (
    <div className="relative inline-block">
      <div className={`${animationClasses[animation]} relative z-10`}>
        <Dog className={`${sizeClasses[size]} text-dogbrown`} strokeWidth={1.5} />
      </div>
      {animation === 'wag' && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 -z-10">
          <Bone className="w-8 h-8 text-dogbrown/20 animate-spin-slow" />
        </div>
      )}
    </div>
  );
};

export default DogMascot;
