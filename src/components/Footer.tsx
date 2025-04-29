
import React from 'react';
import { Dog, Bone, PawPrint } from 'lucide-react';
import PawDivider from './PawDivider';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 relative">
      <div className="absolute top-0 left-0 right-0 overflow-hidden h-6">
        <div className="flex justify-around">
          {Array.from({ length: 20 }).map((_, i) => (
            <PawPrint 
              key={i} 
              className="text-white/10" 
              style={{ transform: `rotate(${Math.random() * 40 - 20}deg)` }} 
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center gap-2">
              <Dog className="h-8 w-8 text-dogblue animate-wag" />
              <span className="text-2xl font-bold font-fredoka">Pawsitive Training</span>
              <Bone className="w-6 h-6 text-dogbrown/40 rotate-12" />
            </div>
            <p className="mt-2 text-gray-400">
              Tail-wagging training techniques for a happier relationship with your furry BFF!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 font-fredoka flex items-center">
                <PawPrint className="w-4 h-4 mr-1 text-dogblue" /> Quick Links
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-dogblue transition-colors">Home</a></li>
                <li><a href="#training" className="hover:text-dogblue transition-colors">Training Guides</a></li>
                <li><a href="#showcase" className="hover:text-dogblue transition-colors">Dog Showcase</a></li>
                <li><a href="#success" className="hover:text-dogblue transition-colors">Success Stories</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 font-fredoka flex items-center">
                <PawPrint className="w-4 h-4 mr-1 text-dogblue" /> Resources
              </h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-dogblue transition-colors">Doggy Blog</a></li>
                <li><a href="#" className="hover:text-dogblue transition-colors">Woof FAQ</a></li>
                <li><a href="#" className="hover:text-dogblue transition-colors">Training Videos</a></li>
                <li><a href="#" className="hover:text-dogblue transition-colors">Puppy Care Tips</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-bold mb-4 font-fredoka flex items-center">
                <PawPrint className="w-4 h-4 mr-1 text-dogblue" /> Treat Mail
              </h3>
              <p className="text-gray-400 mb-3">Subscribe for training tips and treats!</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="px-4 py-2 w-full rounded-l-lg focus:outline-none focus:ring-2 focus:ring-dogblue text-gray-800"
                />
                <button 
                  type="submit"
                  className="bg-dogblue hover:bg-dogblue/80 px-4 py-2 rounded-r-lg transition-colors flex items-center"
                >
                  <span>Subscribe</span>
                  <Bone className="w-4 h-4 ml-1" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <PawDivider color="text-dogblue/30" className="my-8" />
        
        <div className="text-center text-gray-400">
          <p>© {new Date().getFullYear()} Pawsitive Training by AYANSH SINGH. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Made with <span className="text-dogpink">♥</span> for furry friends everywhere by AYANSH SINGH!
            <span className="inline-block ml-2 animate-wag"><Bone className="w-4 h-4 inline-block" /></span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
