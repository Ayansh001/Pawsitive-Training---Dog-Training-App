
import React from 'react';
import { trainingQuotes } from '@/data/QuotesData';

const RandomQuote = () => {
  // Get a random quote
  const randomIndex = Math.floor(Math.random() * trainingQuotes.length);
  const { quote, author } = trainingQuotes[randomIndex];
  
  return (
    <div className="bg-dogpeach/10 p-4 rounded-xl border border-dogpeach/30 my-4 shadow-sm">
      <blockquote className="text-gray-700 italic">
        "{quote}"
      </blockquote>
      <div className="text-right mt-2 text-sm text-gray-500">
        — {author}
      </div>
    </div>
  );
};

export default RandomQuote;
