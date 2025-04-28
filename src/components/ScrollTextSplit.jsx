import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Web & Software Development",
    content:
      "Bring new digital products to the market or extend the existing ones with our experienced team of designers, developers, and testers. Build an MVP to test the idea or scale your development by adding our experienced specialists.",
  },
  {
    title: "Mobile Development",
    content:
      "Our team builds high-performance native and cross-platform mobile apps tailored to your business needs, ensuring seamless user experiences.",
  },
  {
    title: "AI & Data Science",
    content:
      "We develop intelligent AI-powered solutions to help businesses make better decisions, automate processes, and uncover hidden insights in data.",
  },
  {
    title: "Design",
    content:
      "Our creative design team crafts beautiful, intuitive interfaces that deliver engaging user experiences and align with your brand identity.",
  },
  {
    title: "Strategy",
    content:
      "We provide strategic consulting services to help you plan and execute digital transformations, market entry, and long-term growth.",
  },
];

const ScrollTextSplit = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isFixed, setIsFixed] = useState(false);

  const MAX_MOVEMENT = 500;
  const fadeOutThreshold = 400;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "0px 0px -100px 0px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (rect.height + windowHeight))
      );

      const newOffset = scrollProgress * MAX_MOVEMENT * 2 - MAX_MOVEMENT;
      setOffset(newOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const opacity = 1 - Math.min(Math.abs(offset) / fadeOutThreshold, 1);

  const textStrokeStyle = {
    color: "transparent",
    WebkitTextStroke: "1px #a78bfa",
    transition: "transform 0.1s linear, opacity 0.3s ease-out",
  };

  return (
    <div className="overflow-hidden">
      {/* Scroll Split Animation Section */}
      <div ref={containerRef} className="relative w-full h-[200vh] bg-white">
        <div
          ref={animationRef}
          className={`h-screen w-full overflow-hidden ${
            isFixed ? "fixed top-0 left-0" : "relative"
          }`}
        >
          {/* Split Background with improved transition */}
          <div className="absolute inset-0 z-0">
            <div className="h-1/2 bg-white transition-colors duration-300" />
            <div className="h-1/2 bg-[#17181E] transition-colors duration-300" />
          </div>

          {/* Top Word: Unveiling with enhanced responsiveness */}
          <div className="absolute top-0 h-1/2 w-full 
                       flex items-center justify-center 
                       z-10 px-4 sm:px-6 md:px-8">
            <h1
              className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[10vw] 
                      font-black tracking-tight 
                      transform-gpu will-change-transform"
              style={{
                ...textStrokeStyle,
                transform: `translateX(${-offset}px)`,
                opacity,
              }}
            >
              Unveiling
            </h1>
          </div>

          {/* Bottom Word: Possibilities with enhanced responsiveness */}
          <div className="absolute bottom-0 h-1/2 w-full 
                       flex items-center justify-center 
                       z-10 px-4 sm:px-6 md:px-8">
            <h1
              className="text-[12vw] sm:text-[10vw] md:text-[8vw] lg:text-[10vw] 
                      font-black tracking-tight 
                      transform-gpu will-change-transform"
              style={{
                ...textStrokeStyle,
                transform: `translateX(${offset}px)`,
                opacity,
              }}
            >
              Possibilities
            </h1>
          </div>
        </div>
      </div>

      {/* Services Accordion Section with improved spacing */}
      <div className="bg-[#15161A] text-white 
                   py-12 sm:py-16 md:py-20 lg:py-24 
                   px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto 
                    grid md:grid-cols-2 
                    gap-8 md:gap-12 lg:gap-16 xl:gap-20 
                    items-start">
          {/* Left Content with better typography */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 
                       sticky top-24 self-start">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 
                       font-bold tracking-tight">
              What we do
            </h2>
            <p className="text-base sm:text-lg lg:text-xl 
                       text-gray-300 
                       leading-relaxed 
                       max-w-xl">
              Lexogrine specializes in multiple types of services - from custom
              software development to team augmentation and body leasing. Our
              experienced team of experts will help you choose the right
              solution for your business.
            </p>
          </div>

          {/* Right Content - Accordion with enhanced interactions */}
          <div className="space-y-2 sm:space-y-4 w-full">
            {services.map((service, index) => (
              <div key={index} 
                   className="border-b border-gray-600/50 
                          transition-colors duration-300">
                <button
                  onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
                  className="w-full text-left 
                         font-semibold text-white 
                         py-4 sm:py-5 md:py-6 
                         flex justify-between items-center 
                         focus:outline-none focus:text-purple-400 
                         hover:text-purple-400 
                         transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base lg:text-lg xl:text-xl">
                    {service.title}
                  </span>
                  <span className="transform transition-transform duration-300 
                               text-lg sm:text-xl lg:text-2xl">
                    {index === activeIndex ? "−" : "+"}
                  </span>
                </button>
                {index === activeIndex && service.content && (
                  <div className="text-gray-400 
                               text-sm sm:text-base lg:text-lg 
                               py-3 sm:py-4 md:py-5 
                               pr-8 
                               leading-relaxed 
                               animate-fadeIn">
                    {service.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollTextSplit;