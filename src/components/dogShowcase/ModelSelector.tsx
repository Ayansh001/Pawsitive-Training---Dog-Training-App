
import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface ModelSelectorProps {
  activeModel: 'greatdane' | 'running' | 'interactive';
  onModelChange: (model: 'greatdane' | 'running' | 'interactive') => void;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ activeModel, onModelChange }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      <Button 
        variant={activeModel === 'greatdane' ? 'default' : 'outline'} 
        className={activeModel === 'greatdane' ? 'bg-dogblue hover:bg-dogblue/80' : ''}
        onClick={() => onModelChange('greatdane')}
      >
        Great Dane Model
      </Button>
      <Button 
        variant={activeModel === 'running' ? 'default' : 'outline'}
        className={activeModel === 'running' ? 'bg-dogblue hover:bg-dogblue/80' : ''}
        onClick={() => onModelChange('running')}
      >
        Running Animation
      </Button>
      <Button 
        variant={activeModel === 'interactive' ? 'default' : 'outline'}
        className={activeModel === 'interactive' ? 'bg-doggreen hover:bg-doggreen/80' : ''}
        onClick={() => onModelChange('interactive')}
      >
        <Heart className="mr-1" /> Interactive Puppy
      </Button>
    </div>
  );
};

export default ModelSelector;
