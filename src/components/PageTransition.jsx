import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isReady, setIsReady] = useState(false); // For hiding body flicker

  useEffect(() => {
    setIsReady(true); // Wait until React mounts

    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2500); // Match curtain animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative min-h-screen ${isReady ? "" : "opacity-0"}`}>
      {/* ✨ Main Content */}
      <div
        className={`transition-opacity duration-500 ease-in ${
          showOverlay ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>

      {/* 🖤 Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[150vh] bg-white animate-curtain-drop">
            <svg
              className="absolute bottom-0 w-full h-[30vh]" // Set explicit height to ensure coverage
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                // Adjusted path to start at y=0 and end at y=320 to remove transparent areas
                d="M0,0L48,26.7C96,53,192,107,288,106.7C384,107,480,53,576,21.3C672,-11,768,-21,864,10.7C960,43,1056,117,1152,144C1248,171,1344,149,1392,138.7L1440,128L1440,320L0,320Z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}