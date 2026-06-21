"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { liquidFragmentShader, liquidVertexShader } from "@/shaders/liquid";
import { prefersReducedMotion } from "@/lib/motion";

function LiquidPlane() {
  const material = useRef<THREE.ShaderMaterial | null>(null);
  const mouse = useRef(new THREE.Vector2(0.5, 0.5));

  useFrame(({ clock, pointer }) => {
    mouse.current.lerp(new THREE.Vector2(pointer.x * 0.5 + 0.5, pointer.y * 0.5 + 0.5), 0.08);
    if (material.current) {
      material.current.uniforms.uTime.value = clock.elapsedTime;
      material.current.uniforms.uMouse.value = mouse.current;
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.18}>
      <mesh rotation={[-0.2, 0.18, 0]} position={[0, 0, -0.8]}>
        <planeGeometry args={[9.8, 5.4, 72, 72]} />
        <shaderMaterial
          ref={material}
          transparent
          depthWrite={false}
          vertexShader={liquidVertexShader}
          fragmentShader={liquidFragmentShader}
          uniforms={{
            uTime: { value: 0 },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) }
          }}
        />
      </mesh>
    </Float>
  );
}

function seededRandom(index: number) {
  const value = Math.sin(index * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

function ParticleVeil() {
  const points = useRef<THREE.Points | null>(null);
  const positions = useMemo(() => {
    const count = 600;
    const values = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      values[i * 3] = (seededRandom(i * 3) - 0.5) * 11;
      values[i * 3 + 1] = (seededRandom(i * 3 + 1) - 0.5) * 7;
      values[i * 3 + 2] = (seededRandom(i * 3 + 2) - 0.5) * 4;
    }
    return values;
  }, []);

  useFrame(({ clock, pointer }) => {
    if (!points.current) return;
    points.current.rotation.y = clock.elapsedTime * 0.03 + pointer.x * 0.05;
    points.current.rotation.x = pointer.y * 0.035;
  });

  return (
    <Points ref={points} positions={positions} stride={3}>
      <PointMaterial transparent color="#f4f3ef" size={0.015} sizeAttenuation depthWrite={false} opacity={0.38} />
    </Points>
  );
}

export function HeroScene() {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(true);
  const [enabled] = useState(() => !prefersReducedMotion());

  // Met le rendu en pause quand le hero quitte l'écran (économie GPU/batterie).
  useEffect(() => {
    if (!enabled || !wrapper.current) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0
    });
    observer.observe(wrapper.current);
    return () => observer.disconnect();
  }, [enabled]);

  if (!enabled) {
    return <div className="liquid-fallback" aria-hidden />;
  }

  return (
    <div ref={wrapper} aria-hidden role="presentation" className="pointer-events-none absolute inset-0 z-0 opacity-90">
      <Canvas
        frameloop={visible ? "always" : "never"}
        camera={{ position: [0, 0, 5.6], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#070708"]} />
        <ambientLight intensity={0.9} />
        <ParticleVeil />
        <LiquidPlane />
      </Canvas>
    </div>
  );
}
