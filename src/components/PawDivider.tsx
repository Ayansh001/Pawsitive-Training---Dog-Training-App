
import React from 'react';
import { PawPrint } from 'lucide-react';

interface PawDividerProps {
  color?: string;
  className?: string;
}

const PawDivider: React.FC<PawDividerProps> = ({ color = "text-dogblue/70", className = "" }) => {
  return (
    <div className={`flex items-center justify-center my-6 ${className}`}>
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-grow"></div>
      <PawPrint className={`w-6 h-6 mx-2 ${color} rotate-[-15deg]`} />
      <PawPrint className={`w-5 h-5 mx-1 ${color} rotate-[10deg]`} />
      <PawPrint className={`w-6 h-6 mx-2 ${color} rotate-[-5deg]`} />
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gray-300 to-transparent flex-grow"></div>
    </div>
  );
};

export default PawDivider;
