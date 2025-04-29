
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
          src="https://sketchfab.com/models/c69afc6664da48b9b1d9ab476d8c6dbd/embed?ui_theme=dark&dnt=1"
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default GreatDaneModel;
