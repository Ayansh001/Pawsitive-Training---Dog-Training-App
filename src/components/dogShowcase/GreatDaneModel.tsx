
  import React from 'react';

const GreatDaneModel: React.FC = () => {
  return (
    <div className="w-full h-full">
      <div className="sketchfab-embed-wrapper h-full">
        <iframe 
          title="Great Dane" 
          frameBorder="0" 
          allowFullScreen={true}
          allow="autoplay; fullscreen; xr-spatial-tracking" 
          src="https://sketchfab.com/models/c69afc6664da48b9b1d9ab476d8c6dbd/embed?autospin=1&autostart=1&transparent=1"
          className="w-full h-full rounded-lg"
          // Using data attributes for non-standard properties
          data-mozallowfullscreen="true"
          data-webkitallowfullscreen="true"
          data-xr-spatial-tracking=""
          data-execution-while-out-of-viewport=""
          data-execution-while-not-rendered=""
          data-web-share=""
        />
      </div>
    </div>
  );
};


