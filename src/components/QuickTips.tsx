
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ListCheck } from 'lucide-react';

const tips = [
  {
    id: 1,
    title: "Consistent Commands",
    text: "Use the same word or phrase every time for a specific command. Consistency helps your dog understand what you want.",
    icon: <ListCheck className="w-10 h-10 text-dogblue" />,
    color: "bg-doggreen/20"
  },
  {
    id: 2,
    title: "Reward Timing",
    text: "Reward your dog immediately after they perform the desired behavior to strengthen the connection between action and reward.",
    icon: <ListCheck className="w-10 h-10 text-dogblue" />,
    color: "bg-dogyellow/30"
  },
  {
    id: 3,
    title: "Short Sessions",
    text: "Keep training sessions short (5-15 minutes) but frequent. Dogs learn better with multiple short sessions than one long one.",
    icon: <ListCheck className="w-10 h-10 text-dogblue" />,
    color: "bg-dogpeach/40"
  },
  {
    id: 4,
    title: "End Positively",
    text: "Always end training sessions on a positive note with a command your dog knows well to boost confidence.",
    icon: <ListCheck className="w-10 h-10 text-dogblue" />,
    color: "bg-dogpink/30"
  }
];

const QuickTips: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Quick Training Tips
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Try these expert tips today for immediate improvement in your training sessions
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={`h-full border-none shadow-md hover:shadow-lg transition-all ${tip.color} rounded-xl`}>
                <CardContent className="p-6 flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2 text-gray-800">{tip.title}</h3>
                    <p className="text-gray-700">{tip.text}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickTips;
