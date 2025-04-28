import React, { useRef, useEffect, useState, memo } from 'react';
import * as THREE from 'three';

// Memoize the component to prevent unnecessary re-renders
const Letter3D = memo(() => {
  const mountRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previousMousePosition, setPreviousMousePosition] = useState({ x: 0, y: 0 });
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const letterRef = useRef(null);
  const frameIdRef = useRef(null);

  // Log to debug mounting
  useEffect(() => {
    console.log("Letter3D mounted");

    // Setup scene
    const width = 500;
    const height = 500;
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    rendererRef.current = renderer;
    
    // Create letter E
    const letterE = createLetterE();
    letterRef.current = letterE;
    scene.add(letterE);
    
    // Add lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight1.position.set(1, 1, 5);
    scene.add(directionalLight1);
    
    const directionalLight2 = new THREE.DirectionalLight(0x00ffff, 0.5);
    directionalLight2.position.set(-1, -1, 3);
    scene.add(directionalLight2);
    
    // Add renderer to DOM, but first remove any existing canvas
    if (mountRef.current) {
      // Remove any existing canvas children
      while (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      mountRef.current.appendChild(renderer.domElement);
    }
    
    // Start animation
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      
      // Auto-rotate when not dragging
      if (!isDragging && letterRef.current) {
        letterRef.current.rotation.y += 0.005;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      console.log("Letter3D unmounted");
      cancelAnimationFrame(frameIdRef.current);

      // Remove renderer DOM element
      if (mountRef.current && rendererRef.current) {
        while (mountRef.current.firstChild) {
          mountRef.current.removeChild(mountRef.current.firstChild);
        }
      }

      // Dispose of Three.js objects
      if (sceneRef.current && letterRef.current) {
        sceneRef.current.remove(letterRef.current);
        
        // Dispose of geometries and materials in the letter group
        letterRef.current.traverse((object) => {
          if (object.isMesh) {
            object.geometry.dispose();
            object.material.dispose();
          }
        });
      }

      // Dispose of lights
      if (sceneRef.current) {
        sceneRef.current.traverse((object) => {
          if (object.isLight) {
            object.dispose();
          }
        });
      }

      // Dispose of renderer
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      // Clear refs
      sceneRef.current = null;
      cameraRef.current = null;
      rendererRef.current = null;
      letterRef.current = null;
    };
  }, []); // No dependencies, runs only once on mount

  // Create the letter E geometry
  const createLetterE = () => {
    const group = new THREE.Group();
    
    // Main vertical bar
    const mainBar = new THREE.BoxGeometry(1, 4, 1);
    const mainMesh = new THREE.Mesh(
      mainBar,
      new THREE.MeshPhongMaterial({ color: 0x7b9eff })
    );
    mainMesh.position.x = -1;
    group.add(mainMesh);
    
    // Top horizontal bar
    const topBar = new THREE.BoxGeometry(2, 1, 1);
    const topMesh = new THREE.Mesh(
      topBar,
      new THREE.MeshPhongMaterial({ color: 0x7b9eff })
    );
    topMesh.position.y = 1.5;
    group.add(topMesh);
    
    // Middle horizontal bar
    const midBar = new THREE.BoxGeometry(1.5, 0.8, 1);
    const midMesh = new THREE.Mesh(
      midBar,
      new THREE.MeshPhongMaterial({ color: 0x7b9eff })
    );
    midMesh.position.x = -0.25;
    group.add(midMesh);
    
    // Bottom horizontal bar
    const bottomBar = new THREE.BoxGeometry(2, 1, 1);
    const bottomMesh = new THREE.Mesh(
      bottomBar,
      new THREE.MeshPhongMaterial({ color: 0x7b9eff })
    );
    bottomMesh.position.y = -1.5;
    group.add(bottomMesh);
    
    return group;
  };

  // Mouse/touch handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setPreviousMousePosition({
      x: e.clientX,
      y: e.clientY
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging && letterRef.current) {
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y
      };
      
      letterRef.current.rotation.y += deltaMove.x * 0.01;
      letterRef.current.rotation.x += deltaMove.y * 0.01;
      
      setPreviousMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      setPreviousMousePosition({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length === 1 && letterRef.current) {
      const deltaMove = {
        x: e.touches[0].clientX - previousMousePosition.x,
        y: e.touches[0].clientY - previousMousePosition.y
      };
      
      letterRef.current.rotation.y += deltaMove.x * 0.01;
      letterRef.current.rotation.x += deltaMove.y * 0.01;
      
      setPreviousMousePosition({
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      });
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div 
        ref={mountRef}
        className="w-full max-w-lg h-full max-h-lg cursor-pointer"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      />
    </div>
  );
});

export default Letter3D;