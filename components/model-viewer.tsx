"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useProgress, Html, useGLTF, Environment } from "@react-three/drei"
import { Suspense, useState } from "react"

interface ModelProps {
  url: string
}

function Model({ url }: ModelProps) {
  const { scene } = useGLTF(url)

  return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />
}

function Loader() {
  const { progress } = useProgress()
  return (
    <Html center>
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[#9B1D2B] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-sm text-gray-600">加载中... {progress.toFixed(0)}%</p>
      </div>
    </Html>
  )
}

interface ModelViewerProps {
  modelUrl: string | string[]
  className?: string
}

export function ModelViewer({ modelUrl, className = "" }: ModelViewerProps) {
  const [currentModelIndex, setCurrentModelIndex] = useState(0)

  const isMultiModel = Array.isArray(modelUrl)
  const currentModel = isMultiModel ? modelUrl[currentModelIndex] : modelUrl

  const seasonNames = ["春", "夏", "秋", "冬"]

  return (
    <div className={`w-full h-full relative ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} className="w-full h-full" gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={<Loader />}>
          <Environment preset="studio" />
          <hemisphereLight intensity={0.6} groundColor="#444444" color="#ffffff" />
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={1.2} castShadow />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.3} penumbra={1} />
          <pointLight position={[0, 0, 5]} intensity={0.5} />

          <Model url={currentModel} />

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={-Math.PI / 2}
            maxAzimuthAngle={Math.PI / 2}
            autoRotate={true}
            autoRotateSpeed={2}
          />
        </Suspense>
      </Canvas>

      {isMultiModel && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
          {modelUrl.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentModelIndex(index)}
              className={`w-12 h-12 rounded-full font-bold transition-all ${
                currentModelIndex === index
                  ? "bg-[#9B1D2B] text-white scale-110"
                  : "bg-[#F5F2ED] text-gray-700 hover:bg-[#E8E4DE]"
              }`}
            >
              {seasonNames[index]}
            </button>
          ))}
        </div>
      )}

      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 text-xs text-gray-600 shadow-md">
        <p>🖱️ 拖动旋转 | 滚轮缩放</p>
        <p className="text-[10px] text-gray-500 mt-1">支持180°横向旋转</p>
      </div>
    </div>
  )
}
