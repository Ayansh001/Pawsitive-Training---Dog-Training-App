
import { useRef, useEffect } from 'react';
import { AudioListener, Audio, AudioLoader } from 'three';
import { useThree } from '@react-three/fiber';
import { AnimationState } from '../types';

export const useModelAudio = () => {
  const { camera } = useThree();
  const audioRef = useRef<Audio>();
  
  // Initialize audio listener
  useEffect(() => {
    const listener = new AudioListener();
    camera.add(listener);
    
    const sound = new Audio(listener);
    audioRef.current = sound;
    
    return () => {
      // Cleanup
      if (audioRef.current) {
        audioRef.current.stop();
      }
      camera.remove(listener);
    };
  }, [camera]);

  // Play different sounds based on the animation
  const playSound = (action: AnimationState) => {
    if (!audioRef.current) return;
    
    const audioLoader = new AudioLoader();
    
    // Using Google Drive shared audio URL
    const audioUrl = "https://docs.google.com/uc?export=download&id=1r0JsixPw7unFqCkcSQLPdJOcP-L5U8fh";
    
    // We'll use the same audio for all actions
    audioLoader.load(audioUrl, (buffer) => {
      if (audioRef.current) {
        audioRef.current.setBuffer(buffer);
        audioRef.current.setLoop(false);
        audioRef.current.setVolume(0.5);
        audioRef.current.play();
      }
    }, undefined, (error) => {
      console.log('Error loading sound:', error);
      // Continue without sound if there's an error
    });
  };

  return { playSound };
};
