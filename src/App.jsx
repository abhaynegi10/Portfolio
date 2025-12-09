import React, { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import './index.css'



function App() {
  let [showContent, setShowContent] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline()

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
            document.querySelector(".svg").remove();
            setShowContent(true);
            this.kill();
          }
        }
      })
  })

  useGSAP(() => {
    if(!showContent) return;
    gsap.to(".main",{
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    })
    gsap.to(".sky",{
      scale: 1.1,
      rotate: 0,
      duration: 2.5,
      delay: "-1",
      ease: "Expo.easeInOut",
    })
    gsap.to(".bg",{
      scale: 1.1,
      rotate: 0,
      duration: 2.5,
      delay: "-1",
      ease: "Expo.easeInOut",
    })
    gsap.to(".char",{
      scale: 1,
      rotate: 0,
      duration: 1.9,
      bottom:'-25%',
      delay: "-1",
      ease: "Expo.easeInOut",
    })
    gsap.to(".text",{
      scale: 1,
      rotate: 0,
      duration: 2.3,
      delay: "-1",
      ease: "Expo.easeInOut",
    })
    

    const main = document.querySelector(".main");
    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      console.log(e.clientX, e.clientY);
      gsap.to(".imagesdiv .text", {
        x: `${xMove * 0.4}%`
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.4,
      });
    });

  }, [showContent])

  useGSAP(() =>{
    if(!showContent) return;

    gsap.from(".projects-heading",{
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger:{
        trigger: "#projects",
        scroller: ".main",
        start: "top 80%",
      }
    })
     gsap.from(".limg, .carousel-container",{
      y: 150,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger:{
        trigger: ".container",
        scroller: ".main",
        start: "top 75%",
      }
    });
  
  },[showContent]);
  return (
    <>
      <div className='svg fixed top-0 left-0 z-[99] w-full h-screen overflow-hidden bg-[#000]'>
        <svg viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
          <defs>
            <mask id="viMask">
              <rect width='100%' height='100%' fill="black" />
              <g className='vi-mask-group'>
                <text
                  x="50%"
                  y="40%"
                  fontSize="200"
                  textAnchor='middle'
                  fill='white'
                  dominantBaseline='middle'
                >
                  ABHAY
                </text>

              </g>

            </mask>
          </defs>
          <image
            href='./sky.png'
            width='100%'
            height='100%'
            preserveAspectRatio='xMidYMid slice'
            mask='url(#viMask)'
          />
        </svg>
      </div>
      {showContent && <div className="main w-fullrotate-[-10deg] scale-[1.7]">
        <div className="landing overflow-hidden relative w-full h-screen bg-black relative">
          <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10 flex justify-between text-white items-center">
            <div className="logo">
              <div className="lines"></div>
              <h1 className='text-7xl text-white font-bold'>Welcome</h1>
            </div>
            <div className="nav-links flex gap-8 ">
              <a href="#projects" className="hover:text-gray-300 transition-colors text-4xl">Projects</a>
              <a href="#about" className="hover:text-gray-300 transition-colors text-4xl">About Me</a>
              <a href="#contact" className="hover:text-gray-300 transition-colors text-4xl">Contact</a>
            </div>
          </div>


          <div className="imagesdiv relative overflow-hidden w-full h-screen">
            <img className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover" src="./sky.png" alt="" />
            <img className="absolute bg scale-[1.5] rotate-[-3deg] top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="" />
            <div className="text text-white flex flex-col gap-0.5 absolute top-10 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-15deg]">
              <h1 className="text-9xl -ml-40">Grand</h1>
              <h1 className="text-9xl  ml-20">Design</h1>
              <h1 className="text-9xl -ml-20">Portfolio</h1>
            </div>
            img className ="w-150 h-auto absolute char -bottom-[25%] left-1/2 -translate-x-1/2" src = "./char4.png" alt="" /
            <img className="w-150 h-auto absolute char -bottom-[150%] left-1/2 -translate-x-1/2 rotate-[-20deg]" src="./char3.png" alt="" />

          </div>
          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-4 justify-center items-center">
              <i className="text-4xl ri-arrow-down-long-line animate-bounce"></i>
              <h3 className='text-4xl'>Scroll Down</h3>
            </div>

          </div>
        </div>
        <div id="projects" className=" w-full min-h-screen flex flex-col p-10 gap-16 items-center justify-center bg-black overflow-hidden">
          <h2 className="projects-heading text-8xl text-white top-10">
            Hello People !! 
          </h2>

          <div className="container w-full max-w-7xl h-[70vh] flex items-center gap-10 ">
            <div className="limg w-1/2 h-full relative">
              <img className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[1.3]" src="./imag.png" alt="" />
            </div>
            <div className="carousel-container w-1/2 h-full bg-gray-900 rounded-lg p-4">
              <div className="w-full h-full border-2 border-dashed border-gray-500 flex items-center justify-center">
                <p className="text-gray-400">Carousel Goes Here</p>
              </div>
            </div>

          </div>

        </div>
      </div>
      }
    </>
  )
}

export default App;