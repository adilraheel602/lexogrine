import React, { useEffect, useRef } from "react";
import stay from "../Images/stay.png";
import bubbles from "../Images/bubbles.jpg";

const EmailOrbitSection = () => {
  const containerRef = useRef(null);
  const bubbleRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      bubbleRef.current.style.left = `${x - 150}px`;
      bubbleRef.current.style.top = `${y - 150}px`;
    };

    const container = containerRef.current;
    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-white"
    >
      {/* Floating dashed bubble */}
      <div
        ref={bubbleRef}
        className="absolute w-[200px] sm:w-[250px] lg:w-[300px] h-[200px] sm:h-[250px] lg:h-[300px] rounded-full border border-dashed border-purple-300 opacity-40 backdrop-blur-sm transition-all duration-300 ease-out pointer-events-none z-0"
      />

      {/* Main content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-4 sm:px-6 lg:px-20 py-10 gap-8 lg:gap-12">
        {/* Left Bubble Image with rounded top-left */}
        <div className="w-[280px] sm:w-[340px] lg:w-[420px] h-[280px] sm:h-[340px] lg:h-[420px] overflow-hidden lg:mr-8 rounded-tl-[100px] sm:rounded-tl-[140px] lg:rounded-tl-full">
          <img
            src={bubbles}
            alt="Bubbles"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Orbit Email Icon in center top */}
        <div className="absolute top-[140px] left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
          <div className="relative w-[120px] sm:w-[140px] lg:w-[160px] h-[120px] sm:h-[140px] lg:h-[160px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 200 200"
              className="absolute animate-spin-slow"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 100, 100 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                />
              </defs>

              <text fill="#4B5563" fontSize="10" fontFamily="sans-serif">
                <textPath href="#circlePath" startOffset="0%">
                  • L E T ’ S   T A L K      
                </textPath>
              </text>
            </svg>
            <div className="w-[80px] sm:w-[90px] lg:w-[100px] h-[80px] sm:h-[90px] lg:h-[100px] rounded-full bg-gray-200/50 shadow-xl flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <svg
                className="w-5 sm:w-6 h-5 sm:h-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18 0v8a2 2 0 002 2h14a2 2 0 002-2V8m-18 0l9 6 9-6"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right: Stay in Sync Image */}
        <div className="max-w-2xl p-4 sm:p-6 lg:p-10 mt-8 sm:mt-16 lg:mt-36 w-full">
          <img
            src={stay}
            alt="Stay in Sync"
            className="w-full rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] border-[20px] sm:border-[40px] lg:border-[60px] border-gray-200 shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailOrbitSection;
