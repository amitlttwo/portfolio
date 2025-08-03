import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const MatrixRain = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);

    const mount = mountRef.current;
    mount.appendChild(renderer.domElement);

    const fontLoader = new FontLoader();
    const matrixChars =
      "01アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッンABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const characters = matrixChars.split('');
    const raindrops = [];
    const raindropCount = 100;

    fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
      for (let i = 0; i < raindropCount; i++) {
        const char = characters[Math.floor(Math.random() * characters.length)];
        const geometry = new TextGeometry(char, {
          font,
          size: 0.2,
          height: 0,
        });
        const material = new THREE.MeshBasicMaterial({
          color: new THREE.Color(`hsl(${Math.random() * 60 + 120}, 100%, 50%)`),
          transparent: true,
          opacity: 0.8,
        });
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = Math.random() * 40 - 20;
        mesh.position.y = Math.random() * 20 - 10;
        mesh.position.z = Math.random() * -50;
        mesh.velocity = Math.random() * 0.1 + 0.05;
        scene.add(mesh);
        raindrops.push(mesh);
      }
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      raindrops.forEach((drop) => {
        drop.position.y -= drop.velocity;
        if (drop.position.y < -10) {
          drop.position.y = 10;
          drop.position.x = Math.random() * 40 - 20;
        }
        if (Math.random() > 0.98) {
          drop.material.color.setHSL(Math.random() * 0.2 + 0.4, 1, 0.5);
        }
      });
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="matrix-rain" />;
};

export default MatrixRain;

