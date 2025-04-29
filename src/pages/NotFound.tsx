
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { DogMascot } from "@/components";
import { PawPrint } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-dogpeach/30">
      <div className="text-center max-w-md p-6">
        <div className="mb-6">
          <DogMascot size="lg" animation="jump" />
        </div>
        <h1 className="text-6xl font-bold font-fredoka text-gray-800 mb-4">
          Oops! <span className="text-dogblue">404</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This page seems to have run off to chase squirrels! We can't find what you're looking for.
        </p>
        <Button asChild className="bg-dogblue hover:bg-dogblue/80 rounded-full font-fredoka">
          <Link to="/">
            Go Back Home <PawPrint className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
      <div className="mt-4 text-gray-500 text-sm">
        Couldn't fetch: {location.pathname}
      </div>
    </div>
  );
};

export default NotFound;
