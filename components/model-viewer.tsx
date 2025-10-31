"use client"

interface ModelViewerProps {
  modelUrl: string
  className?: string
}

export function ModelViewer({ modelUrl, className = "" }: ModelViewerProps) {
  return (
    <div
      className={`w-full h-full relative flex items-center justify-center bg-gradient-to-br from-[#F5F2ED] to-[#E8E4DE] ${className}`}
    >
      <div className="text-center p-8">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[#9B1D2B]/10 flex items-center justify-center">
          <svg className="w-12 h-12 text-[#9B1D2B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">3D模型预览</h3>
        <p className="text-sm text-gray-600 mb-4">3D模型功能即将上线</p>
        <p className="text-xs text-gray-500">模型路径: {modelUrl}</p>
        <div className="mt-6 text-xs text-gray-400">支持180°横向旋转查看</div>
      </div>
    </div>
  )
}
