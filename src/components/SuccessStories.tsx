
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    dogName: 'Max',
    dogBreed: 'Golden Retriever',
    text: 'Before we started training with these techniques, Max would pull on his leash and ignore our commands. Now he\'s so well-behaved that we can take him anywhere!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Michael Torres',
    dogName: 'Bella',
    dogBreed: 'German Shepherd',
    text: 'Bella was extremely anxious around other dogs. The positive reinforcement methods helped her gain confidence and now she has several doggy friends!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1546975490-e8b92a360b24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Sarah Williams',
    dogName: 'Cooper',
    dogBreed: 'Border Collie Mix',
    text: 'Cooper\'s energy was overwhelming until we learned how to channel it properly with these training techniques. Now he\'s still energetic but much more focused!',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'David Rodriguez',
    dogName: 'Luna',
    dogBreed: 'Labrador Retriever',
    text: 'Luna used to have terrible separation anxiety. The techniques we learned here made a huge difference. Now I can leave the house without her getting upset!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1583511655826-05700442982d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Jessica Chen',
    dogName: 'Rocky',
    dogBreed: 'Siberian Husky',
    text: 'Rocky was so stubborn and hard to train until I found these methods. The positive reinforcement approach worked wonders for his personality!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

const TestimonialCard: React.FC<{ testimonial: typeof testimonials[0] }> = ({ testimonial }) => {
  return (
    <Card className="h-full border-none shadow-lg hover:shadow-xl transition-shadow rounded-xl">
      <CardContent className="p-6">
        <div className="flex items-start mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
            <img 
              src={testimonial.image} 
              alt={`${testimonial.name} and ${testimonial.dogName}`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-lg">{testimonial.name}</h3>
            <p className="text-gray-600">with {testimonial.dogName} ({testimonial.dogBreed})</p>
            <div className="flex mt-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-700 italic">"{testimonial.text}"</p>
      </CardContent>
    </Card>
  );
};

const SuccessStories: React.FC = () => {
  return (
    <section id="success" className="section-padding bg-dogyellow/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Success Stories
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          See the amazing transformations our training methods have achieved with dogs just like yours.
        </motion.p>
        
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="h-full"
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="static relative translate-y-0 mx-2" />
              <CarouselNext className="static relative translate-y-0 mx-2" />
            </div>
          </Carousel>
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button className="bg-dogblue hover:bg-dogblue/80 rounded-full px-8 py-6 text-lg">
            Read More Stories
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;
