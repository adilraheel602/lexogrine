import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectDeliveryTimeline = () => {
  const sections = [
    {
      heading: "Workshops",
      subtopics: [
        "Kick-off meeting",
        "Q&A Session",
        "Project scope of work & estimate",
        "Stakeholder interviews",
      ],
    },
    {
      heading: "Research",
      subtopics: [
        "Market analysis",
        "User surveys",
        "Competitor analysis",
        "Data collection",
        "Insights gathering",
      ],
    },
    {
      heading: "Development",
      subtopics: [
        "Prototyping",
        "Frontend coding",
        "Backend integration",
        "API development",
        "Testing iterations",
      ],
    },
    {
      heading: "Testing",
      subtopics: [
        "Usability testing",
        "Performance testing",
        "Bug fixing",
        "User feedback",
      ],
    },
  ];

  const containerRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Animation transforms
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundTranslateX = useTransform(scrollYProgress, [0, 1], [0, -400]);

  // Handle viewport entry and scroll locking
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !animationComplete) {
          // Lock scroll and fix position
          const scrollY = window.scrollY;
          document.body.style.overflow = "hidden";
          document.body.style.position = "fixed";
          document.body.style.top = `-${scrollY}px`;
          document.body.style.width = "100%";

          // Simulate scroll progress for animation
          let progress = 0;
          const animate = () => {
            progress += 0.005; // Slower progression for smoother animation
            scrollYProgress.set(progress);
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setAnimationComplete(true);
              // Unlock scroll
              const storedScrollY = -parseInt(document.body.style.top || "0");
              document.body.style.overflow = "auto";
              document.body.style.position = "";
              document.body.style.top = "";
              document.body.style.width = "";
              window.scrollTo(0, storedScrollY + window.innerHeight); // Move to next section
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.8, rootMargin: "0px" } // Trigger when 80% visible
    );

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      // Cleanup scroll lock
      document.body.style.overflow = "auto";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [scrollYProgress, animationComplete]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-white"
      style={{
        minHeight: "100vh",
        margin: "150px 0", // Increased margin to prevent overlap
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        className="fixed top-0 left-0 w-full h-screen flex items-center justify-center overflow-hidden"
        style={{
          opacity: isInView ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path d=\"M0 0L20 20M20 0L0 20\" stroke=\"rgba(0, 173, 239, 0.1)\" stroke-width=\"1\"/></svg>')`,
            backgroundSize: "20px 20px",
            backgroundPosition: `${backgroundTranslateX.get()}px 0px`,
            zIndex: -1,
          }}
        />

        <div className="relative w-full max-w-5xl mx-auto z-10">
          <motion.div
            className="h-1 bg-black origin-left"
            style={{ width: lineWidth }}
          />
        </div>

        {sections.map((section, sectionIndex) => {
          const sectionProgress = useTransform(
            scrollYProgress,
            [
              sectionIndex / sections.length,
              (sectionIndex + 0.95) / sections.length,
            ],
            [0, 1]
          );

          const headingOpacity = useTransform(sectionProgress, [0, 0.2], [0, 1]);
          const headingTranslateY = useTransform(sectionProgress, [0, 0.2], ["3em", "0em"]);

          return (
            <motion.div
              key={section.heading}
              className="absolute w-full max-w-5xl flex flex-col items-center"
              style={{
                opacity: useTransform(
                  scrollYProgress,
                  [
                    sectionIndex / sections.length,
                    (sectionIndex + 0.1) / sections.length,
                    (sectionIndex + 0.9) / sections.length,
                    (sectionIndex + 1) / sections.length,
                  ],
                  [0, 1, 1, 0]
                ),
              }}
            >
              <motion.h2
                className="absolute top-10 text-8xl font-light text-gray-300"
                style={{
                  opacity: headingOpacity,
                  y: headingTranslateY,
                  transformStyle: "preserve-3d",
                }}
              >
                {section.heading}
              </motion.h2>

              <div className="relative w-full flex justify-between mt-40">
                {section.subtopics.map((_, index) => (
                  <motion.div
                    key={index}
                    className="w-0.5 h-16 bg-black origin-top"
                    style={{
                      scaleY: useTransform(
                        sectionProgress,
                        [0.1 + index * 0.1, 0.2 + index * 0.1],
                        [0, 1]
                      ),
                      transformStyle: "preserve-3d",
                    }}
                  />
                ))}
              </div>

              <div className="relative w-full mt-8 flex justify-between">
                {section.subtopics.map((step, index) => (
                  <motion.div
                    key={index}
                    className="text-center px-2 w-1/4"
                    style={{
                      opacity: useTransform(
                        sectionProgress,
                        [0.15 + index * 0.1, 0.25 + index * 0.1],
                        [0, 1]
                      ),
                      y: useTransform(
                        sectionProgress,
                        [0.15 + index * 0.1, 0.25 + index * 0.1],
                        ["1em", "0em"]
                      ),
                    }}
                  >
                    <span className="text-sm font-medium text-gray-800">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDeliveryTimeline;