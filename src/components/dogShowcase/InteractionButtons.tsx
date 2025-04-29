
import React from 'react';
import { Button } from '@/components/ui/button';
import { Smile, Heart, Bone } from 'lucide-react';

interface InteractionButtonsProps {
  onAnimationAction: (action: 'smile' | 'heart' | 'treat') => void;
}

const InteractionButtons: React.FC<InteractionButtonsProps> = ({ onAnimationAction }) => {
  // Handle keyboard shortcuts
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      // Use number keys for quick access
      switch (e.key) {
        case '1':
          onAnimationAction('smile');
          break;
        case '2':
          onAnimationAction('heart');
          break;
        case '3':
          onAnimationAction('treat');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [onAnimationAction]);

  return (
    <div className="p-4 bg-white flex flex-wrap gap-4 justify-center" role="toolbar" aria-label="Puppy interaction controls">
      <Button 
        onClick={() => onAnimationAction('smile')} 
        className="bg-dogblue"
        aria-label="Make puppy smile (or press 1)"
      >
        <Smile className="mr-2" /> Make Smile
      </Button>
      <Button 
        onClick={() => onAnimationAction('heart')} 
        className="bg-dogpink text-gray-800"
        aria-label="Show love to puppy (or press 2)"
      >
        <Heart className="mr-2" /> Show Love
      </Button>
      <Button 
        onClick={() => onAnimationAction('treat')} 
        className="bg-dogyellow text-gray-800"
        aria-label="Feed treat to puppy (or press 3)"
      >
        <Bone className="mr-2" /> Feed Treat
      </Button>
      <div className="w-full text-center text-xs text-gray-500 mt-1">
        Keyboard shortcuts: 1 = Smile, 2 = Love, 3 = Treat
      </div>
    </div>
  );
};

export default InteractionButtons;
