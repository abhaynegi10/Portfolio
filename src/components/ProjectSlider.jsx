import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectSlider({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[600px] flex items-center justify-center">
      
      {/* 1. Cinematic Background (Blurred version of project image) */}
      <AnimatePresence mode="wait">
        <motion.div
            key={currentIndex + "-bg"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0 overflow-hidden rounded-3xl"
        >
            <img 
                src={currentProject.imageSrc} 
                className="w-full h-full object-cover blur-3xl scale-110" 
                alt="bg" 
            />
        </motion.div>
      </AnimatePresence>

      {/* 2. The Main Floating Card Content */}
      <div className="relative z-10 w-full flex items-center gap-12 px-12">
        
        {/* LEFT SIDE: Text Info */}
        <div className="w-1/2 flex flex-col gap-6 text-white text-left pl-8">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex + "-text"}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Project Title (Pricedown font via CSS) */}
                    <h2 className="text-7xl font-bold tracking-wider mb-2">
                        {currentProject.title}
                    </h2>

                    {/* Meta info (System UI font for readability) */}
                    <div className="font-[system-ui] flex gap-4 text-sm font-semibold tracking-wide text-gray-400 mb-4 uppercase">
                        <span>{currentProject.category || "Development"}</span>
                        <span>•</span>
                        <span>{currentProject.year}</span>
                    </div>
                    
                    {/* Description */}
                    <p className="font-[system-ui] text-lg text-gray-200 leading-relaxed shadow-black drop-shadow-md">
                        {currentProject.description}
                    </p>

                    {/* View Project Button */}
                    <button className="font-[system-ui] mt-8 px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform w-fit flex items-center gap-2">
                        <i className="ri-play-fill text-xl"></i> 
                        View Project
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>

        {/* RIGHT SIDE: The Floating Image */}
        <div className="w-1/2 relative h-[400px] perspective-1000">
             <AnimatePresence mode="wait">
                <motion.img 
                    key={currentIndex + "-img"}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                    animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        rotateY: 0,
                        // Floating animation Y-axis loop
                        y: [0, -15, 0]
                    }}
                    exit={{ opacity: 0, scale: 0.8, x: 50 }}
                    transition={{ 
                        opacity: { duration: 0.4 },
                        scale: { duration: 0.4 },
                        y: { repeat: Infinity, duration: 3, ease: "easeInOut" } // This makes it float!
                    }}
                    src={currentProject.imageSrc}
                    alt="Project"
                    className="w-full h-full object-cover rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-700/50"
                />
            </AnimatePresence>
        </div>

      </div>

      {/* Navigation Arrows */}
      <button onClick={prevSlide} className="absolute left-0 text-5xl text-white/50 hover:text-white transition-colors hover:scale-110 z-20">
        <i className="ri-arrow-left-s-line"></i>
      </button>
      <button onClick={nextSlide} className="absolute right-0 text-5xl text-white/50 hover:text-white transition-colors hover:scale-110 z-20">
        <i className="ri-arrow-right-s-line"></i>
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {projects.map((_, idx) => (
            <button 
                key={idx} 
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-125' : 'bg-gray-600'}`}
            />
        ))}
      </div>
      
    </div>
  );
}