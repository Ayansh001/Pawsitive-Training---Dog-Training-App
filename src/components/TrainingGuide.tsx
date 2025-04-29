
import React from 'react';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PawPrint, Bone } from 'lucide-react';
import PawDivider from './PawDivider';

const commands = [
  {
    id: 'sit',
    name: 'Sit',
    description: 'The "sit" command is perfect for helping your pup learn impulse control!',
    steps: [
      'Start with your furry friend standing in front of you',
      'Hold a tasty treat close to their nose',
      'Move your hand up, letting their cute nose follow the treat and causing their bottom to lower',
      "Once they're sitting pretty, say \"sit\" clearly, give them the treat and lots of pets!"
    ]
  },
  {
    id: 'stay',
    name: 'Stay',
    description: 'Teaching your pup to stay in one spot is super important for keeping them safe and sound!',
    steps: [
      'Ask your furry friend to "sit" first',
      'Open your palm in front of them, and say "stay" in a calm voice',
      'Take a few steps back. If they stay put, reward them with a yummy treat and happy praise!',
      'Gradually increase the number of steps before giving the reward',
      'Always celebrate your pup for staying — even if it\'s just for a few tail wags!'
    ]
  },
  {
    id: 'come',
    name: 'Come',
    description: 'This recall command can save your buddy from trouble and bring them back to you for cuddles!',
    steps: [
      'Put a leash and collar on your pup',
      'Get down to their level and say "come" while gently guiding them with the leash',
      'When they come to you, shower them with love and a tasty treat',
      'Once they\'ve got it down with the leash, practice without it in a safe, fenced area',
      'Always make coming to you the BEST thing ever, even if it takes time!'
    ]
  },
  {
    id: 'down',
    name: 'Down',
    description: 'The "down" command helps your furry friend chill out when excitement is running high!',
    steps: [
      'Find an extra special treat that smells amazing, and hold it in your closed hand',
      'Hold your hand up to your pup\'s snout. When they sniff it, move your hand to the floor',
      'Slide your hand along the ground so they follow with their whole body',
      'Once they\'re lying down, say "down," give them the treat, and tell them how smart they are!'
    ]
  }
];

const CommandCard: React.FC<{ command: typeof commands[0]; index: number }> = ({ command, index }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 flex items-center font-fredoka">
          <span className="inline-block w-10 h-10 rounded-full bg-dogblue text-white text-center leading-10 mr-3 relative">
            {index + 1}
            <PawPrint className="absolute -bottom-1 -right-1 w-4 h-4 text-dogpurple" />
          </span>
          {command.name}
        </h3>
        <p className="text-gray-600 mb-4">{command.description}</p>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="steps">
            <AccordionTrigger className="text-dogblue font-medium font-fredoka">
              How to Train Your Buddy
            </AccordionTrigger>
            <AccordionContent>
              <ol className="pl-5 list-decimal space-y-2">
                {command.steps.map((step, i) => (
                  <li key={i} className="text-gray-700 flex items-start">
                    <Bone className="w-4 h-4 text-dogbrown/40 mr-2 mt-1 flex-shrink-0 rotate-90" />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.div>
  );
};

const TrainingGuide: React.FC = () => {
  return (
    <section id="training" className="section-padding bg-doghouse-pattern relative">
      {/* Added overlay with semi-transparent background to separate content from pattern */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          className="section-title font-fredoka"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Pawsome Training Tips
          <span className="inline-block ml-3"><PawPrint className="w-8 h-8 text-dogblue inline-block" /></span>
        </motion.h2>
        
        <PawDivider />
        
        <motion.p 
          className="section-subtitle font-fredoka"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Master these tail-wagging commands to build a strong bond with your furry best friend!
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {commands.map((command, index) => (
            <CommandCard key={command.id} command={command} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingGuide;
