"use client";

import React, { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { Footer } from '@/components/footer';

const Canvas = dynamic(() => import('@react-three/fiber').then(mod => mod.Canvas), { ssr: false });

const LiquidBackground = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
  }), []);

  useFrame((state) => {
    const { clock, mouse } = state;
    if (meshRef.current) {
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = clock.getElapsedTime();
      (meshRef.current.material as THREE.ShaderMaterial).uniforms.uMouse.value.lerp(mouse, 0.05);
    }
  });

  return (
    <mesh ref={meshRef} scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        transparent
        uniforms={uniforms}
        vertexShader={`varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`}
        fragmentShader={`
          uniform float uTime; uniform vec2 uMouse; varying vec2 vUv;
          void main() {
            vec2 uv = vUv; float t = uTime * 0.15;
            vec2 m = uMouse * 0.1;
            float color = smoothstep(0.0, 1.0, (sin(uv.x * 8.0 + t + m.x * 12.0) + sin(uv.y * 6.0 - t + m.y * 12.0)) * 0.5 + 0.5);
            gl_FragColor = vec4(mix(vec3(0.005), vec3(0.05), color), 1.0);
          }
        `}
      />
    </mesh>
  );
};

const Monolith = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[13, 1]} />
        <MeshDistortMaterial color="#0a0a0a" speed={4} distort={0.4} roughness={0.05} metalness={1.0} />
      </mesh>
    </Float>
  );
};

export const SiteShell = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-background text-white overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        {mounted && (
          <Canvas camera={{ position: [0, 0, 60], fov: 35 }}>
            <ambientLight intensity={0.4} />
            <spotLight position={[50, 50, 50]} intensity={3} />
            <LiquidBackground />
            <Monolith />
          </Canvas>
        )}
      </div>

      <div className="relative z-10">
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};
