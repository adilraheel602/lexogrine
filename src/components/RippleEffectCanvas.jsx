import React, { useRef, useEffect } from 'react';

const RippleEffectCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = window.innerHeight;
    const lineSpacing = 20;

    // Function to draw lines with ripple effect
    const drawLines = (rippleX, rippleY) => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = '#e5e7eb';
      for (let y = 0; y < height; y += lineSpacing) {
        ctx.beginPath();
        for (let x = 0; x < width; x += 10) {
          const distance = Math.sqrt((x - rippleX) ** 2 + (y - rippleY) ** 2);
          const offset = Math.exp(-distance / 100) * 20 * Math.sin(distance / 5);
          ctx.lineTo(x, y + offset);
        }
        ctx.stroke();
      }
    };

    // Initial draw
    drawLines(-100, -100);

    // Mouse move event listener
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      drawLines(mouseX, mouseY);
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default RippleEffectCanvas;
