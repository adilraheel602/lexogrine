import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Overlay with enhanced responsiveness */}
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[150vh] 
                       bg-white animate-curtain-drop 
                       transform-gpu will-change-transform">
            <svg
              className="absolute bottom-[-1px] w-full 
                      h-[20vh] sm:h-[25vh] md:h-[30vh] 
                      block transition-all duration-300 
                      transform-gpu"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M0,0L48,26.7C96,53,192,107,288,106.7C384,107,480,53,576,21.3C672,-11,768,-21,864,10.7C960,43,1056,117,1152,144C1248,171,1344,149,1392,138.7L1440,128L1440,320L0,320Z"
                className="transition-all duration-500"
              />
            </svg>
          </div>
        </div>
      )}

      {/* Content with improved transitions */}
      <div
        className={`transition-opacity duration-500 ease-in 
                  transform-gpu will-change-opacity 
                  ${isReady && !showOverlay ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </>
  );
}
