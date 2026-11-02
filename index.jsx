import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Edges, ContactShadows } from '@react-three/drei';

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: '#e8e8e8' }}>
      <Canvas camera={{ position: [0, 4, 6], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <BookScene />
        <OrbitControls enablePan={false} minPolarAngle={0} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
}

function BookScene() {
  return (
    <group>
      {/* Left Page (Text/UI) */}
      <mesh position={[-1.55, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3, 4.5]} />
        <meshStandardMaterial color="#fdfbf7" roughness={0.9} />
        <Text position={[0, 1.5, 0.01]} fontSize={0.2} color="#111" font="https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdOqd.woff" anchorX="center">
          مجهر القوة الذرية (AFM)
        </Text>
        <Text position={[0, 0.5, 0.01]} fontSize={0.12} color="#333" maxWidth={2.5} textAlign="right" font="https://fonts.gstatic.com/s/cairo/v28/SLXVc1nY6HkvangtZmpQdOqd.woff">
          يلمس السطح بإبرة ويرسم تضاريسه بدقة ثلاثية الأبعاد. 
          القاعدة الأساسية: AFM لا "يرى" السطح بل "يتحسّسه".
        </Text>
      </mesh>

      {/* Right Page (3D Pop-up) */}
      <mesh position={[1.55, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3, 4.5]} />
        <meshStandardMaterial color="#fdfbf7" roughness={0.9} />
      </mesh>

      {/* AFM Pop-up Model */}
      <group position={[1.5, 0.5, 0]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <coneGeometry args={[0.3, 1, 4]} />
          <meshStandardMaterial color="#fff" />
          <Edges scale={1.05} threshold={15} color="black" />
        </mesh>
        <mesh position={[0, 1, 0]} rotation={[0, 0, -Math.PI / 2]} castShadow>
          <boxGeometry args={[0.1, 2, 0.2]} />
          <meshStandardMaterial color="#fff" />
          <Edges scale={1.01} color="black" />
        </mesh>
      </group>
      
      <ContactShadows position={[0, -0.05, 0]} opacity={0.4} scale={10} blur={2} far={4} />
    </group>
  );
}
