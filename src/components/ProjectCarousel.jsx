// src/components/ProjectCarousel.jsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// This component takes the array of projects as a "prop"
export default function ProjectCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next slide
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  // Function to go to the previous slide
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  // This `useEffect` hook handles the automatic sliding every 15 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 10000); // 15000 milliseconds = 15 seconds

    // This is a cleanup function that stops the timer if the component is removed
    return () => clearInterval(timer);
  }, [projects.length]); // Re-run effect if the number of projects changes

  if (!projects || projects.length === 0) {
    return <div>No projects to display.</div>;
  }
  
  const currentProject = projects[currentIndex];

  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-[#1a1a2e] rounded-lg p-8 border border-dashed border-gray-600">
      {/* Main content area with animation */}
      <div className="flex-grow relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex} // The key is crucial for AnimatePresence to detect changes
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full h-full absolute top-0 left-0 flex flex-col md:flex-row items-center gap-8"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 h-48 md:h-full rounded-md overflow-hidden">
              <img 
                src={currentProject.imageSrc} 
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text Content Section */}
            <div className="w-full md:w-1/2 text-white">
              <h3 className="text-4xl lg:text-5xl font-bold mb-4">{currentProject.title}</h3>
              <p className="text-lg text-gray-300">{currentProject.description}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation and Pagination */}
      <div className="flex-shrink-0 pt-6 flex justify-between items-center">
        {/* Previous/Next Buttons */}
        <div className="flex gap-4">
          <button onClick={goToPrevious} className="text-3xl text-white hover:text-gray-400 transition-colors">
            <i className="ri-arrow-left-s-line"></i>
          </button>
          <button onClick={goToNext} className="text-3xl text-white hover:text-gray-400 transition-colors">
            <i className="ri-arrow-right-s-line"></i>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-white' : 'bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}