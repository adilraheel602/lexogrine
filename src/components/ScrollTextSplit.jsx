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
  const lastScrollY = useRef(0);
  const [offset, setOffset] = useState(0);
  const [activeIndex, setActiveIndex] = useState(-1);

  const MAX_MOVEMENT = 300;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;

      setOffset((prev) => {
        let next = prev + delta * 0.5;
        return Math.max(Math.min(next, MAX_MOVEMENT), -MAX_MOVEMENT);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeOutThreshold = 200;
  const opacity = 1 - Math.min(Math.abs(offset) / fadeOutThreshold, 1);

  const textStrokeStyle = {
    color: "transparent",
    WebkitTextStroke: "1px #a78bfa",
    transition: "transform 0.1s linear, opacity 0.3s ease-out",
  };

  return (
    <div className="overflow-hidden">
      {/* Scroll Split Animation Section */}
      <div ref={containerRef} className="relative w-full min-h-[80vh] bg-white">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Split Background */}
          <div className="absolute inset-0 z-0">
            <div className="h-1/2 bg-white" />
            <div className="h-1/2 bg-[#17181E]" />
          </div>

          {/* Top Word: Unveiling */}
          <div className="absolute top-0 h-1/2 w-full flex items-center justify-center z-10 px-4">
            <h1
              className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-black tracking-tight"
              style={{
                ...textStrokeStyle,
                transform: `translateX(${-offset}px)`,
                opacity,
              }}
            >
              Unveiling
            </h1>
          </div>

          {/* Bottom Word: Possibilities */}
          <div className="absolute bottom-0 h-1/2 w-full flex items-center justify-center z-10 px-4">
            <h1
              className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-black tracking-tight"
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

      {/* Services Accordion Section */}
      <div className="bg-[#15161A] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              What we do
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl">
              Lexogrine specializes in multiple types of services - from custom
              software development to team augmentation and body leasing. Our
              experienced team of experts will help you choose the right
              solution for your business.
            </p>
          </div>

          {/* Right Content - Accordion */}
          <div className="space-y-2 sm:space-y-4 w-full">
            {services.map((service, index) => (
              <div key={index} className="border-b border-gray-600/50">
                <button
                  onClick={() =>
                    setActiveIndex(index === activeIndex ? -1 : index)
                  }
                  className="w-full text-left font-semibold text-white py-4 sm:py-5 flex justify-between items-center focus:outline-none hover:text-purple-400 transition-colors duration-200"
                >
                  <span className="text-sm sm:text-base lg:text-lg">
                    {service.title}
                  </span>
                  <span className="transform transition-transform duration-300 text-lg sm:text-xl">
                    {index === activeIndex ? "−" : "+"}
                  </span>
                </button>
                {index === activeIndex && service.content && (
                  <div className="text-gray-400 text-sm sm:text-base py-3 sm:py-4 pr-8 leading-relaxed">
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
