
import { useRef, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

type SoundAction = 'smile' | 'heart' | 'treat';

export const useAudioHandler = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();
  
  // Google Drive file ID
  const fileId = '1r0JsixPw7unFqCkcSQLPdJOcP-L5U8fh';
  const audioUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;
  
  // Initialize the audio
  const initializeAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio();
      audio.preload = "auto";
      audio.src = audioUrl;
      
      // Load audio without playing it (for faster playback when needed)
      audio.load();
      
      // Store the audio element in ref
      audioRef.current = audio;
      
      // Add event listeners for debugging
      audio.addEventListener('canplaythrough', () => {
        console.log('Audio is ready to play');
      });
      
      audio.addEventListener('error', (e) => {
        console.error('Audio loading error:', e);
        toast({
          title: "Audio couldn't load",
          description: "There was an issue loading the audio file. Please try again later.",
        });
      });
    }
  }, [toast, audioUrl]);
  
  // Play sound with user interaction
  const playSound = useCallback((action: SoundAction) => {
    if (!audioRef.current) {
      initializeAudio();
    }
    
    if (audioRef.current) {
      // Reset to beginning
      audioRef.current.currentTime = 0;
      
      // Create a user gesture context for playback
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Audio playback failed:', error);
          toast({
            title: "Audio couldn't play",
            description: "This may be due to browser autoplay restrictions. Try clicking again or check your browser settings.",
          });
        });
      }
    }
  }, [initializeAudio, toast]);
  
  return {
    playSound,
    initializeAudio
  };
};
