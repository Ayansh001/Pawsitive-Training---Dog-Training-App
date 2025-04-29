
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, PawPrint, Bone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DogMascot from './DogMascot';
import DogModel3D from './DogModel3D';

const Hero: React.FC = () => {
  const dogRef = useRef<HTMLDivElement>(null);

  // Paw prints animation for walking effect
  const pawPrints = Array.from({ length: 6 }, (_, i) => (
    <div 
      key={i} 
      className="absolute bottom-8 animate-paws-walking"
      style={{
        left: `${i * -10}%`, 
        animationDelay: `${i * 0.5}s`, 
        zIndex: 1
      }}
    >
      <PawPrint 
        className="w-6 h-6 text-dogbrown/30" 
        style={{ transform: `rotate(${i % 2 === 0 ? 25 : -25}deg)` }} 
      />
    </div>
  ));

  return (
    <section className="min-h-screen pt-24 pb-10 relative overflow-hidden bg-bone-pattern">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 h-[calc(100vh-6rem)] min-h-[600px]">
          <motion.div 
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center md:justify-start mb-2">
              <DogMascot size="lg" animation="jump" />
              <div className="relative ml-3">
                <Bone className="w-10 h-10 text-dogblue/30 rotate-12 absolute -top-6 right-0 animate-float" />
              </div>
            </div>
            
            <h1 className="font-fredoka text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
              Wag More, <br />
              <span className="text-dogblue">Bark Less!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              Discover tail-wagging, positive training techniques that build a 
              paw-some bond with your furry best friend!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button className="bg-dogblue hover:bg-dogblue/80 rounded-full text-lg px-8 py-6 font-fredoka">
                Start Training <PawPrint className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="rounded-full text-lg px-8 py-6 border-2 font-fredoka">
                Meet Our Pups
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 relative h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 3D Dog Model with Interactions */}
            <div 
              ref={dogRef}
              className="w-full h-full max-w-[400px] max-h-[400px] rounded-3xl bg-gradient-to-b from-white to-dogpeach/30 shadow-lg overflow-hidden transition-transform duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <DogModel3D />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated walking paw prints */}
      {pawPrints}

      <motion.a
        href="#training"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <span className="text-sm text-gray-600 mb-2 font-fredoka">Scroll Down for Treats!</span>
        <ArrowDown className="w-6 h-6 text-dogblue" />
      </motion.a>
    </section>
  );
};

export default Hero;
