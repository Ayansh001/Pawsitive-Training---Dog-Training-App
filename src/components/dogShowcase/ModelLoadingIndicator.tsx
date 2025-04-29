
import React from 'react';
import { Loader2 } from 'lucide-react';

const ModelLoadingIndicator: React.FC = () => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 z-10 rounded-lg">
      <Loader2 className="h-12 w-12 text-dogblue animate-spin" />
      <p className="mt-4 text-sm font-medium text-gray-600">Loading puppy model...</p>
    </div>
  );
};

export default ModelLoadingIndicator;
