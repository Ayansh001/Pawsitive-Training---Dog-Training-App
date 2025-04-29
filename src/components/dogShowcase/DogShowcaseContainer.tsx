
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAudioHandler } from '@/hooks/useAudioHandler';
import ModelSelector from './ModelSelector';
import GreatDaneModel from './GreatDaneModel';
import RunningDogModel from './RunningDogModel';
import InteractivePuppyModel from './InteractivePuppyModel';

const DogShowcaseContainer: React.FC = () => {
  const [activeModel, setActiveModel] = useState<'greatdane' | 'running' | 'interactive'>('greatdane');
  const [animationAction, setAnimationAction] = useState<'smile' | 'heart' | 'treat' | null>(null);
  
  // Use our custom audio handler hook
  const { initializeAudio } = useAudioHandler();
  
  // Initialize audio when component mounts
  useEffect(() => {
    initializeAudio();
  }, [initializeAudio]);
  
  // Handler for model tab changes
  const handleModelChange = (model: 'greatdane' | 'running' | 'interactive') => {
    setActiveModel(model);
  };

  return (
    <section id="showcase" className="section-padding bg-gradient-to-b from-white to-dogpeach/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          3D Dog Showcase
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Interact with our virtual dog models to see different training postures, behaviors and reactions.
        </motion.p>
        
        <ModelSelector activeModel={activeModel} onModelChange={handleModelChange} />
        
        <div className="max-w-3xl h-[500px] mx-auto bg-white rounded-xl shadow-lg p-4 overflow-hidden">
          {activeModel === 'greatdane' ? (
            <GreatDaneModel />
          ) : activeModel === 'running' ? (
            <RunningDogModel />
          ) : (
            <InteractivePuppyModel 
              animationAction={animationAction} 
              setAnimationAction={setAnimationAction} 
            />
          )}
        </div>
        
        <div className="text-center mt-6 text-gray-500 text-sm">
          {activeModel === 'greatdane' ? (
            <span>Great Dane model by <a href="https://sketchfab.com/alexlashko" target="_blank" rel="nofollow" className="text-dogblue hover:underline">alexlashko</a> on <a href="https://sketchfab.com" target="_blank" rel="nofollow" className="text-dogblue hover:underline">Sketchfab</a></span>
          ) : activeModel === 'running' ? (
            <span>Dog Run Cycle by <a href="https://sketchfab.com/3d-models/dog-run-cycle-496fcd675d214b5d82a6d37bf18d2374" target="_blank" rel="nofollow" className="text-dogblue hover:underline">Sketchfab</a></span>
          ) : (
            <span>Interactive Puppy Models from various artists on <a href="https://sketchfab.com" target="_blank" rel="nofollow" className="text-dogblue hover:underline">Sketchfab</a></span>
          )}
        </div>
      </div>
    </section>
  );
};

export default DogShowcaseContainer;
