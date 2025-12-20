// src/components/MobileLayout.jsx
import React from 'react';
import MobileProjectSlider from './MobileProjectSlider';

const projectsData = [
  {
    imageSrc: "/projects/project1.png",
    title: "Uni-Vibe",
    category: "Full Stack",
    year: "2024", 
    description: "Developed a peer-to-peer anonymous video and text chat platform enabling users to connect randomly based on selected gender preferences. Built with React and WebRTC."
  },
  {
    imageSrc: "/projects/project2.png",
    title: "Fit-Track",
    category: "Mobile App",
    year: "2023",
    description: "Designed a cross-platform mobile app for tracking workouts, setting fitness goals, and connecting with a community of users. Features real-time GPS tracking."
  },
  {
    imageSrc: "/projects/project3.png",
    title: "Portfolio",
    category: "Creative Dev",
    year: "2025",
    description: "The interactive website you are looking at now. Featuring heavy animations, 3D tilt effects, and a custom design built with GSAP and Tailwind CSS."
  }
];



export default function MobileLayout() {
    return (
        <div className="w-full bg-black min-h-screen text-white overflow-y-auto">

            {/* Mobile Top Bar */}
            <div className=" absolute top-0 left-0 z-30 w-full px-2 py-3 flex items-center justify-between text-white bg-black/50 backdrop-blur-md">
                {/* Left: Welcome */}
                <h1 className="text-3xl font-bold whitespace-nowrap">
                    Welcome
                </h1>

                {/* Right: Navigation */}
                <div className="flex items-center gap-3 text-xs font-semibold">
                    <a href="#projects" className="hover:text-gray-300 transition">
                        Projects
                    </a>
                    <a href="#about" className="hover:text-gray-300 transition">
                        About Me
                    </a>
                    <a href="#contact" className="hover:text-gray-300 transition">
                        Contact
                    </a>
                </div>
            </div>



            {/* Mobile Hero Section */}
            <div className="relative w-full h-screen pt-10 overflow-hidden flex items-center justify-center">

                {/* Sky Layer */}
                <img
                    src="./sky.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover scale-110"
                />

                {/* Background Layer */}
                <img
                    src="./bg.png"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Hero Text */}
                <div className="relative z-10 text-center text-white mt-[-80px]">
                    <h1 className="text-5xl font-bold">Grand</h1>
                    <h1 className="text-5xl font-bold ">Design</h1>
                    <h1 className="text-5xl font-bold">Portfolio</h1>
                </div>

                {/* Character */}
                <img
                    src="./char3.png"
                    alt=""
                    className="absolute bottom-[-10%] w-[240px] z-10"
                />
             

        {/* --- ADD THE GRADIENT EFFECT HERE --- */}
        <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
            </div>



            {/* Mobile About Section */}
            <div id="about" className="p-4 flex flex-col gap-3">
                <h2 className="text-4xl font-bold text-center mt-10">Hello People !!</h2>
                <div className="w-full rounded-lg overflow-hidden">
                    <img src="./imag.png" className="w-full object-cover" alt="Me" />
                </div>
                <div className=" w-full flex justify-center px-6">
                    <p className=' max-w-prose text-left text-lg text-white leading-relaxed font-[Roboto-bold]'>
                       I’m Abhay Negi, a creative full-stack developer and UI/UX designer who enjoys building visually engaging, user-focused web and mobile applications. I work across the MERN stack and Flutter to create responsive, high-performance products. With hands-on experience through real-world projects and an international full-stack internship, I focus on blending clean design, smooth interactions, and scalable architecture to deliver meaningful digital experiences.
                    </p>
                </div>
            </div>
            {/* Spacer for About scroll overlap */}
      <div className="h-10 bg-black"></div>

      {/* 4. MOBILE PROJECTS SECTION */}
      <div id="projects" className="relative w-full min-h-[90vh] bg-black overflow-hidden flex flex-col pt-10">
        

        {/* SECTION HEADER */}
        <div className="relative z-10 text-center px-4 mb-4">
             <h2 className="text-5xl font-bold text-white mb-2 drop-shadow-md">Projects</h2>
             <p className="font-[system-ui] text-gray-400 text-sm">Tap or swipe to explore</p>
        </div>

        {/* CAROUSEL CARD */}
        <div className="relative z-20">
             <MobileProjectSlider projects={projectsData} />
        </div>

        {/* BOTTOM GRADIENT (To fade out page bottom smoothly) */}
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none z-10"></div>
        
      </div>
        </div>
    );
}