import React, { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import './index.css';

// Import our new split layouts
import DesktopLayout from './components/DesktopLayout';
import MobileLayout from './components/MobileLayout';

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Check screen size on load and resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is a common breakpoint for Tablets/Laptops
    };
    
    // Check initially
    handleResize();

    // Add listener
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 2. The Intro Animation (Runs once for everyone)
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: 'Power4.easeinOut',
      transformOrigin: "50% 50%",
    })
    .to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= .9) {
          // Remove the loading SVG and show the main app
          const svgElement = document.querySelector(".svg");
          if(svgElement) svgElement.remove();
          setShowContent(true);
          this.kill();
        }
      }
    });
  });

  return (
    <>
      {/* The Loading Screen (Always Rendered Initially) */}
      <div className='svg fixed top-0 left-0 z-[99] w-full h-screen overflow-hidden bg-[#000]'>
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id="viMask">
              <rect width='100%' height='100%' fill="black" />
              <g className='vi-mask-group'>
                <text x="50%" y="40%" fontSize="200" textAnchor='middle' fill='white' dominantBaseline='middle'>
                  ABHAY
                </text>
              </g>
            </mask>
          </defs>
          <image href='./sky.png' width='100%' height='100%' preserveAspectRatio='xMidYMid slice' mask='url(#viMask)' />
        </svg>
      </div>

      {/* The Content (Conditionally Rendered) */}
      {showContent && (
        <>
          {isMobile ? <MobileLayout /> : <DesktopLayout />}
        </>
      )}
    </>
  );
}

export default App;