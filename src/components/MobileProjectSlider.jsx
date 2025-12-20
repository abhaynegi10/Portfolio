import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileProjectSlider({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe logic: Determine direction based on drag distance
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipeThreshold = 50; // Distance needed to trigger a change
    
    if (offset.x < -swipeThreshold) {
      // Swiped Left -> Next Project
      nextSlide();
    } else if (offset.x > swipeThreshold) {
      // Swiped Right -> Prev Project
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full h-[600px] flex flex-col items-center justify-start pt-10">
      
      {/* 1. Main Swipe Area */}
      <div className="relative w-full max-w-[350px] aspect-[4/5] perspective-1000 z-20">
        <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                // Initial animation state
                initial={{ opacity: 0, x: 100, scale: 0.9 }}
                // Animation to play
                animate={{ opacity: 1, x: 0, scale: 1 }}
                // Animation when leaving
                exit={{ opacity: 0, x: -100, scale: 0.9 }}
                // Drag properties for swiping
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="w-full h-full bg-gray-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
            >
                {/* Image */}
                <img 
                    src={currentProject.imageSrc} 
                    alt={currentProject.title} 
                    className="w-full h-3/5 object-cover pointer-events-none"
                />

                {/* Content Card at Bottom */}
                <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black via-gray-900 to-transparent p-6 flex flex-col justify-end text-left">
                    <div className="font-[system-ui] text-xs font-bold text-blue-400 tracking-widest mb-2 uppercase">
                        {currentProject.category || "Development"} • {currentProject.year || "2024"}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 leading-none">
                        {currentProject.title}
                    </h3>
                    <p className="font-[system-ui] text-sm text-gray-400 line-clamp-3">
                        {currentProject.description}
                    </p>
                </div>
                
                {/* Floating "Swipe" Badge */}
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full border border-white/10">
                    SWIPE ➔
                </div>
            </motion.div>
        </AnimatePresence>
      </div>

      {/* 2. Dots Indicator */}
      <div className="flex gap-2 mt-8 z-20">
        {projects.map((_, idx) => (
            <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                    idx === currentIndex ? 'w-8 h-2 bg-white' : 'w-2 h-2 bg-white/30'
                }`}
            />
        ))}
      </div>
    </div>
  );
}