// src/components/DesktopLayout.jsx
import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
            <h1 className='text-7xl text-white font-bold'>Welcome</h1>
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

      <div id="about" className="w-full min-h-screen flex flex-col p-10 gap-16 items-center justify-center bg-black overflow-hidden">
        <h2 className="projects-heading text-8xl text-white top-10">
          Hello People !!
        </h2>

        <div className="container h-[70vh] flex items-center gap-10">
          <div className="limg w-1/2 h-full relative">
            <img className="w-[600px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.2]" src="./imag.png" alt="" />
          </div>
          <div className="about-text w-full lg:w-1/2 h-auto text-white flex flex-col justify-center text-center lg:text-left">
            <h3 className="text-5xl font-bold mb-6">A Bit About Myself</h3>
            <p className="text-lg text-gray-300 mb-4">
              Hello! I'm a passionate web developer and designer...
            </p>
            <p className="text-lg text-gray-300">
              I specialize in the MERN stack...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}