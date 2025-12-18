// src/components/MobileLayout.jsx
import React from 'react';



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
        </div>
    );
}