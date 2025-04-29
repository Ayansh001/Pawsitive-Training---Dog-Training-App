
import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const AboutTrainer: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meet Your Trainer
        </motion.h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <motion.div 
              className="lg:w-2/5"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                  alt="Professional Dog Trainer" 
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-3/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Alex Morgan</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-dogblue">Certified Dog Trainer</Badge>
                <Badge className="bg-doggreen">10+ Years Experience</Badge>
                <Badge variant="outline">Animal Behavior Specialist</Badge>
              </div>
              
              <p className="text-gray-600 mb-6">
                Hi! I'm Alex, a passionate dog trainer with over a decade of experience working with all breeds and temperaments. My approach focuses on positive reinforcement and building a strong bond between you and your furry companion.
              </p>
              
              <p className="text-gray-600 mb-6">
                I believe that every dog can learn and thrive with the right guidance. My training philosophy centers on understanding your dog's unique personality and adapting techniques to suit their individual needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  'Force-free training methods',
                  'Behavior modification expert',
                  'Puppy socialization specialist',
                  'Reactive dog rehabilitation',
                  'Agility & trick training',
                  'Ongoing support for owners'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="w-5 h-5 text-doggreen mt-0.5 mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTrainer;
