
import React from 'react';

const RunningDogModel: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="sketchfab-embed-wrapper h-full">
        <iframe 
          title="Dog Run Cycle"
          frameBorder="0"
          allowFullScreen={true}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/496fcd675d214b5d82a6d37bf18d2374/embed"
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default RunningDogModel;
