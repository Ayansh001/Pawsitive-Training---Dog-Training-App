
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dog, Menu, X, PawPrint, Bone } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Dog className="h-8 w-8 text-dogblue animate-wag" />
            <span className="text-2xl font-bold font-fredoka text-gray-800 flex items-center">
              Pawsitive Training
              <Bone className="w-5 h-5 text-dogbrown/40 ml-1 rotate-12" />
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#training" className="font-fredoka font-medium text-gray-700 hover:text-dogblue transition-colors flex items-center">
              <PawPrint className="w-4 h-4 mr-1" />Training
            </a>
            <a href="#showcase" className="font-fredoka font-medium text-gray-700 hover:text-dogblue transition-colors flex items-center">
              <PawPrint className="w-4 h-4 mr-1" />Showcase
            </a>
            <a href="#success" className="font-fredoka font-medium text-gray-700 hover:text-dogblue transition-colors flex items-center">
              <PawPrint className="w-4 h-4 mr-1" />Success Stories
            </a>
            <a href="#about" className="font-fredoka font-medium text-gray-700 hover:text-dogblue transition-colors flex items-center">
              <PawPrint className="w-4 h-4 mr-1" />About
            </a>
            <Button asChild className="bg-dogblue hover:bg-dogblue/80 rounded-full font-fredoka">
              <a href="#contact">Contact Us <PawPrint className="w-4 h-4 ml-1" /></a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <a 
              href="#training" 
              className="font-fredoka font-medium text-gray-700 hover:text-dogblue transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PawPrint className="w-4 h-4 mr-1" />Training
            </a>
            <a 
              href="#showcase" 
              className="font-fredoka font-medium text-gray-700 hover:text-dogblue transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PawPrint className="w-4 h-4 mr-1" />Showcase
            </a>
            <a 
              href="#success" 
              className="font-fredoka font-medium text-gray-700 hover:text-dogblue transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PawPrint className="w-4 h-4 mr-1" />Success Stories
            </a>
            <a 
              href="#about" 
              className="font-fredoka font-medium text-gray-700 hover:text-dogblue transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <PawPrint className="w-4 h-4 mr-1" />About
            </a>
            <Button 
              asChild 
              className="bg-dogblue hover:bg-dogblue/80 rounded-full w-full font-fredoka"
              onClick={() => setMobileMenuOpen(false)}
            >
              <a href="#contact">Contact Us <PawPrint className="w-4 h-4 ml-1" /></a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navigation;
