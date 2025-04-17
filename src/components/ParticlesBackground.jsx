// components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: { value: "#05070f" } },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: true,
            speed: 0.5,
          },
          number: {
            density: { enable: true, area: 800 },
            value: 100,
          },
          opacity: {
            value: { min: 0.1, max: 0.3 },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBackground;
