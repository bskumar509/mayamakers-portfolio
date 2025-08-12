import { Canvas, useFrame } from '@react-three/fiber';
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
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

const Blob = () => {
  const ref = useRef<Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = Math.sin(t / 2) * 0.2 + 0.2;
      ref.current.rotation.y = Math.cos(t / 2) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -6]}>
      <torusKnotGeometry args={[1.4, 0.32, 220, 32]} />
      <meshStandardMaterial color={0xffffff} metalness={0.2} roughness={0.15} emissive={0x222222} />
    </mesh>
  );
};

export const HeroCanvas = () => {
  const reduced = useReducedMotion();
  const dpr = useMemo(() => (typeof window !== 'undefined' && window.devicePixelRatio > 1 ? 1.5 : 1), []);
  if (reduced) return null;

  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas dpr={dpr} camera={{ position: [0, 0, 4.5], fov: 55 }} gl={{ antialias: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, -5]} intensity={0.4} />
        <Suspense fallback={null}>
          <Blob />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroCanvas;
