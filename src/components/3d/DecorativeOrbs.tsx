import { Canvas, useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Mesh } from 'three';

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);
  return reduced;
}

function Orb({ position, size = 0.8, speed = 0.6 }: { position: [number, number, number]; size?: number; speed?: number }) {
  const ref = useRef<Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed;
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(t) * 0.3;
      ref.current.position.x = position[0] + Math.cos(t / 2) * 0.2;
    }
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial color={0xffffff} transparent opacity={0.15} roughness={0.3} metalness={0.1} />
    </mesh>
  );
}

export const DecorativeOrbs = ({ className }: { className?: string }) => {
  const reduced = useReducedMotion();
  const dpr = useMemo(() => (typeof window !== 'undefined' && window.devicePixelRatio > 1 ? 1.5 : 1), []);
  if (reduced) return null;

  return (
    <div className={className ?? ''}>
      <Canvas dpr={dpr} camera={{ position: [0, 0, 6], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 4, 5]} intensity={0.7} />
        <Orb position={[-3, 0.5, -4]} size={1.2} speed={0.5} />
        <Orb position={[0, -0.5, -5]} size={0.9} speed={0.8} />
        <Orb position={[3, 1, -6]} size={1.6} speed={0.4} />
      </Canvas>
    </div>
  );
};

export default DecorativeOrbs;
