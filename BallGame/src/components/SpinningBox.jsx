import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const SpinningBox = () => {
  const meshRef = useRef();

  // Rotate the box in the render loop
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime();
      meshRef.current.rotation.y = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default SpinningBox;
