// ECanvas.jsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const ECanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Lighting
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5).normalize();
    scene.add(light);

    // Load Font and Add "E"
    const loader = new FontLoader();
    loader.load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json", (font) => {
      const geometry = new TextGeometry("E", {
        font,
        size: 2,
        height: 1,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.1,
        bevelSegments: 5,
      });

      const material = new THREE.MeshPhongMaterial({ color: 0x5b84e8 });
      const textMesh = new THREE.Mesh(geometry, material);
      geometry.center();
      scene.add(textMesh);

      // Animation
      const animate = () => {
        requestAnimationFrame(animate);
        textMesh.rotation.y += 0.01;
        textMesh.rotation.x += 0.005;
        renderer.render(scene, camera);
      };
      animate();
    });

    // Clean-up
    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ width: 235, height: 384 }}
      id="glcanvas"
      tabIndex="1"
    />
  );
};

export default ECanvas;
