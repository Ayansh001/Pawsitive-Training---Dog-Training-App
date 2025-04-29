
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TrainingGuide from '@/components/TrainingGuide';
import DogShowcase from '@/components/DogShowcase';
import SuccessStories from '@/components/SuccessStories';
import AboutTrainer from '@/components/AboutTrainer';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PawDivider from '@/components/PawDivider';
import RandomQuote from '@/components/RandomQuote';
import WelcomeCard from '@/components/WelcomeCard';
import QuickTips from '@/components/QuickTips';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const { toast } = useToast();
  
  useEffect(() => {
    // Check if this is the first visit
    const hasVisited = localStorage.getItem('hasVisitedPawsitive');
    
    if (!hasVisited) {
      // Show welcome card for first-time visitors
      setShowWelcome(true);
      localStorage.setItem('hasVisitedPawsitive', 'true');
    }
    
    // Show toast notifications with name on every refresh/page load
    const welcomeTimeout = setTimeout(() => {
      toast({
        title: "Welcome to Pawsitive Training!",
        description: "Created by AYANSH SINGH to help you and your furry friend.",
      });
    }, 1500);
    
    const updateTimeout = setTimeout(() => {
      toast({
        title: "Training Updates",
        description: "AYANSH SINGH's latest training tips and techniques are available now!",
      });
    }, 4000);
    
    return () => {
      clearTimeout(welcomeTimeout);
      clearTimeout(updateTimeout);
    };
  }, [toast]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <div className="container mx-auto px-4 my-6">
        <RandomQuote />
      </div>
      <PawDivider />
      <QuickTips />
      <PawDivider />
      <TrainingGuide />
      <PawDivider />
      <DogShowcase />
      <PawDivider />
      <SuccessStories />
      <PawDivider />
      <AboutTrainer />
      <PawDivider />
      <ContactForm />
      <Footer />
      
      {showWelcome && <WelcomeCard onClose={() => setShowWelcome(false)} />}
    </div>
  );
};

export default Index;
