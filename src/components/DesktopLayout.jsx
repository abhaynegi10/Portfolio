// src/components/DesktopLayout.jsx
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectSlider from './ProjectSlider';
import LightPillar from './LightPillar';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
  {
    imageSrc: "/projects/project1.png",
    title: "Uni-Vibe",
    year: "2024",
    category: "Full Stack",
    description: "Developed a peer-to-peer anonymous video and text chat platform enabling users to connect randomly based on selected gender preferences. Built with React and WebRTC."
  },
  {
    imageSrc: "/projects/project2.png",
    title: "Fit-Track",
    year: "",
    category: "Mobile App",
    description: "Designed a cross-platform mobile app for tracking workouts, setting fitness goals, and connecting with a community of users. Features real-time GPS tracking."
  },
  {
    imageSrc: "/projects/project3.png",
    title: "Portfolio",
    year: "",
    category: "Creative Dev",
    description: "The interactive website you are looking at now. Featuring heavy animations, 3D tilt effects, and a custom design built with GSAP and Tailwind CSS."
  }
];

export default function DesktopLayout() {

  // This hook handles the Entry Animation (scaling up)
  useGSAP(() => {
    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1", // Starts slightly before the intro finishes
      ease: "Expo.easeInOut",
    });
    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2.5,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2.5,
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".char", {
      scale: 1,
      rotate: 0,
      duration: 1.9,
      bottom: '-25%',
      delay: "-1",
      ease: "Expo.easeInOut",
    });
    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2.3,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    // Mouse Movement Parallax (Desktop Only)
    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".imagesdiv .text", { x: `${xMove * 0.4}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 1.4 });
    });
  }, []);

  // This hook handles the Scroll Animations
  useGSAP(() => {
    gsap.from(".projects-heading", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#about",
        scroller: ".main",
        start: "top 80%",
      }
    });

    gsap.from(".limg, .about-text", {
      y: 150,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".container",
        scroller: ".main",
        start: "top 75%",
      }
    });
  }, []);

  return (
    <div className="main w-full rotate-[-10deg] scale-[1.7]">
      <div className="landing overflow-hidden relative w-full h-screen bg-black">
        <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 flex justify-between text-white items-center">
          <div className="logo">
            <div className="lines"></div>
            <h1 className='text-8xl text-white font-bold'>Welcome</h1>
          </div>
          <div className="nav-links flex gap-8 ">
            <a href="#projects" className="hover:text-gray-300 transition-colors text-4xl text-white">Projects</a>
            <a href="#about" className="hover:text-gray-300 transition-colors text-4xl text-white">About Me</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors text-4xl text-white">Contact</a>
          </div>
        </div>

        <div className="imagesdiv relative overflow-hidden w-full h-screen">
          <img className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="" />
          <img className="absolute bg scale-[1.5] rotate-[-3deg] top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="" />
          <div className="text text-white flex flex-col gap-0.5 absolute top-30 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-15deg]">
            <h1 className="text-8xl -ml-40">Grand</h1>
            <h1 className="text-8xl  ml-20">Design</h1>
            <h1 className="text-8xl -ml-20">Portfolio</h1>
          </div>
          {/* Fixed invalid w-150 to w-[600px] */}
          <img className="w-[450px] h-auto absolute char -bottom-[150%] left-1/2 -translate-x-1/2 rotate-[-20deg]" src="./char3.png" alt="" />
        </div>

        <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
          <div className="flex gap-4 justify-center items-center">
            <i className="text-4xl ri-arrow-down-long-line animate-bounce"></i>
            <h3 className='text-4xl'>Scroll Down</h3>
          </div>
        </div>
      </div>

      <div id="about" className="relative w-full min-h-screen flex flex-col p-10 gap-16 items-center justify-center bg-black overflow-hidden">
        <h2 className="projects-heading text-8xl text-white top-10">
          Hello People !!
        </h2>

        <div className="container h-[70vh] flex items-center gap-10">
          <div className="limg w-1/2 h-full relative">
            <img className="w-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2]" src="./imag.png" alt="" />
          </div>
          <div className="about-text w-full lg:w-1/2 h-auto text-white flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-4xl font-bold mb-6">A Bit About Myself</h3>
            <p className="text-lg text-white mb-4 font-[Roboto-bold]">
              I’m Abhay Negi, a creative full-stack developer and UI/UX designer who enjoys building visually engaging, user-focused web and mobile applications. I work across the MERN stack and Flutter to create responsive high-performance products. With hands-on experience through real-world projects and an international full-stack internship, I focus on blending clean design, smooth interactions, and scalable architecture to deliver meaningful digital experiences.

            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-26 bg-gradient-to-t from-black via-gray to-transparent z-20 pointer-events-none"></div>
      </div>
     {/* 
        ======== NEW PROJECTS SECTION ======== 
        id="projects" for navbar linking
      */}
      <div id="projects" className="w-full min-h-screen flex flex-col p-10 items-center justify-center bg-black overflow-hidden relative">
        
        {/* Floating Background Elements to merge styling */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/20 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full"></div>

        {/* Section Heading */}
        <h2 className="text-8xl text-white mb-10 z-10">Projects</h2>

        {/* 
            Container for Slider
            We rotate it +10deg to counter the Main -10deg.
            This makes the carousel look straight/horizontal! 
        */}
        <div className="w-full scale-90 z-10">
            <ProjectSlider projects={projectsData} />
        </div>

      </div>

    </div>
  );
}