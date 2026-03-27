"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { useTheme } from "@/components/ThemeContext";

function SmallBlob({ position, scale, speedFactor, color, offset }: { position: [number, number, number], scale: number, speedFactor: number, color: string, offset: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(offset);

  useFrame((_, delta) => {
    time.current += delta;
    if (meshRef.current) {
      // Gentle floating up and down
      meshRef.current.position.y = position[1] + Math.sin(time.current * speedFactor) * 0.3;
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <Sphere args={[1, 64, 64]} scale={scale} position={position} ref={meshRef}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.6}
        transparent={true}
        opacity={0.8}
      />
    </Sphere>
  );
}

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const { theme } = useTheme();
  
  // Track global mouse position
  const mouse = useRef({ x: 0, y: 0, currentX: 0, currentY: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.current.x = (e.touches[0].clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(e.touches[0].clientY / window.innerHeight) * 2 + 1;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useFrame((_, delta) => {
    // Keep the internal geometric rotation for the distort effect
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
    }

    // Stretch the group towards the cursor
    if (groupRef.current) {
      // Use smooth dampening with frame-independent delta for a silky cubic-bezier like ease-out effect
      mouse.current.currentX = THREE.MathUtils.damp(mouse.current.currentX, mouse.current.x, 3.5, delta);
      mouse.current.currentY = THREE.MathUtils.damp(mouse.current.currentY, mouse.current.y, 3.5, delta);

      const x = mouse.current.currentX;
      const y = mouse.current.currentY;

      // Determine angle to rotate the group towards the cursor
      const angle = Math.atan2(y, x);
      // Determine distance to scale (stretch) the blob
      const distance = Math.sqrt(x * x + y * y);

      groupRef.current.rotation.z = angle;
      // Elongate on the pointing axis (X) and slightly squish others
      groupRef.current.scale.set(1 + distance * 0.6, 1 - distance * 0.1, 1 - distance * 0.1);
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[1, 100, 200]} scale={2.2} ref={meshRef}>
        <MeshDistortMaterial
          color={theme === "light" ? "#f97316" : "#00c9a7"} // #f97316 is a nice modern orange
          attach="material"
          distort={0.4}
          speed={1.5}
          roughness={0.2}
          metalness={0.5}
        />
      </Sphere>
    </group>
  );
}

export default function Canvas3D() {
  const { theme, mounted } = useTheme();
  
  const blobs: Array<{ position: [number, number, number], scale: number, speedFactor: number, offset: number, colorLight: string, colorDark: string }> = useMemo(() => [
    { position: [-4, 2, -2], scale: 0.6, speedFactor: 1.2, offset: 0, colorLight: "#facc15", colorDark: "#3498db" },
    { position: [4, -2, -1], scale: 0.8, speedFactor: 0.8, offset: 2, colorLight: "#f43f5e", colorDark: "#9b59b6" },
    { position: [-5, -2, -3], scale: 0.5, speedFactor: 1.5, offset: 4, colorLight: "#fb923c", colorDark: "#1abc9c" },
    { position: [5, 2.5, -2], scale: 0.7, speedFactor: 1.0, offset: 1, colorLight: "#fcd34d", colorDark: "#00b4d8" },
  ], []);

  if (!mounted) return null; // Wait for theme to be available

  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <AnimatedSphere />
      {blobs.map((blob, idx) => (
        <SmallBlob
          key={idx}
          position={blob.position}
          scale={blob.scale}
          speedFactor={blob.speedFactor}
          offset={blob.offset}
          color={theme === "light" ? blob.colorLight : blob.colorDark}
        />
      ))}
    </Canvas>
  );
}
