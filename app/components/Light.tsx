import React, { FC } from "react";

interface LightProps {
  [key: string]: any;
}

const Light: FC<LightProps> = (props) => {
  return (
    <mesh {...props} >
      <pointLight castShadow />
      <bufferGeometry>
        <sphereGeometry args={[0.2, 30, 10]} />
      </bufferGeometry>
      <meshPhongMaterial emissive={"yellow"}  />
    </mesh>
  );
}

export default Light;
