import React, { useRef, useEffect, useState } from 'react';

const RippleEffectCanvas = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    let animationFrameId;
    let currentRippleX = -100;
    let currentRippleY = -100;

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    // Initial setup
    updateDimensions();
    const lineSpacing = Math.max(15, Math.min(20, window.innerWidth / 50));

    // Function to draw lines with ripple effect
    const drawLines = (rippleX, rippleY) => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      ctx.strokeStyle = '#e5e7eb';
      ctx.lineWidth = 1;

      for (let y = 0; y < dimensions.height; y += lineSpacing) {
        ctx.beginPath();
        for (let x = 0; x < dimensions.width; x += Math.max(5, Math.min(10, window.innerWidth / 150))) {
          const distance = Math.sqrt((x - rippleX) ** 2 + (y - rippleY) ** 2);
          const amplitude = Math.min(20, window.innerWidth / 50);
          const offset = Math.exp(-distance / 100) * amplitude * Math.sin(distance / 5);
          ctx.lineTo(x, y + offset);
        }
        ctx.stroke();
      }
    };

    // Smooth animation function
    const animate = () => {
      drawLines(currentRippleX, currentRippleY);
      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle mouse/touch movement
    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      currentRippleX = (e.clientX || e.touches[0].clientX) - rect.left;
      currentRippleY = (e.clientY || e.touches[0].clientY) - rect.top;
    };

    // Event listeners
    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('resize', updateDimensions);

    // Start animation
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('resize', updateDimensions);
    };
  }, [dimensions]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full touch-none"
      style={{
        imageRendering: 'pixelated',
        willChange: 'transform'
      }}
    />
  );
};

export default RippleEffectCanvas;
