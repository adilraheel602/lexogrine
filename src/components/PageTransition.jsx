import { useEffect, useState } from "react";

export default function PageTransition({ children }) {
  const [showOverlay, setShowOverlay] = useState(true);
  const [isReady, setIsReady] = useState(false); // For hiding body flicker

  useEffect(() => {
    setIsReady(true); // Wait until React mounts

    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 2500); // match curtain animation duration

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
              className="absolute bottom-0 w-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000000"
                d="M0,96L48,122.7C96,149,192,203,288,202.7C384,203,480,149,576,117.3C672,85,768,75,864,106.7C960,139,1056,213,1152,240C1248,267,1344,245,1392,234.7L1440,224L1440,320L0,320Z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
