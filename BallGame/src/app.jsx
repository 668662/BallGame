import React from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "react-native";
import SpinningBox from "./SpinningBox";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Canvas style={{ flex: 1 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SpinningBox />
      </Canvas>
    </View>
  );
}
