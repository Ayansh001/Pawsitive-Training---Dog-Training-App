
import React from 'react';
import { X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface WelcomeCardProps {
  onClose: () => void;
}

const WelcomeCard = ({ onClose }: WelcomeCardProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <Card className="w-[90%] max-w-md border-dogblue/20 shadow-xl">
        <CardHeader className="relative pb-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-2 top-2 rounded-full h-7 w-7" 
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl font-fredoka text-dogblue">Welcome to Pawsitive Training!</CardTitle>
          <CardDescription>Created by AYANSH SINGH</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-sm">
              This website was created by AYANSH SINGH who wants to help you build a stronger bond with your furry friend through positive training methods.
            </p>
            <p className="text-sm">
              Explore our training guides, success stories, and connect with our community of dog lovers!
            </p>
            <div className="bg-dogpeach/30 p-3 rounded-lg border border-dogpeach mt-4">
              <p className="text-xs text-center italic">
                "A well-trained dog is a reflection of a dedicated owner."
              </p>
            </div>
            <Button 
              className="w-full bg-dogblue hover:bg-dogblue/80 mt-2" 
              onClick={onClose}
            >
              Start Exploring
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeCard;
