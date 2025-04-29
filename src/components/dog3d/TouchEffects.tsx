
import React from 'react';

const TouchEffects = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm text-gray-600 bg-white/80 rounded-full px-4 py-1">
        Touch the dog to see animations!
      </div>
    </div>
  );
};

export default TouchEffects;
