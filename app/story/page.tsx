"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { CeramicCard } from "@/components/ceramic-card"
import { DetailModal } from "@/components/detail-modal"
import { ModelViewer } from "@/components/model-viewer"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const ceramics = [
  {
    id: 1,
    title: "胜利杯",
    year: "1958",
    category: "国礼瓷",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/58%E5%B9%B4%E8%83%9C%E5%88%A9%E6%9D%AF-g1FcqLQ1CAoiBLwTs7wsaiaEkIjJAx.png",
    story:
      "为庆祝新中国成立而设计的国礼瓷器,象征胜利与荣耀。胜利杯的设计融合了传统与现代元素,杯身绘有象征胜利的图案,釉色鲜艳而不失庄重。这件作品不仅是艺术品,更是时代精神的体现,见证了新中国的诞生与发展。",
    technique: "釉下五彩手绘工艺,采用传统青花与红彩相结合。",
    modelUrl: "/models/victory-cup.obj",
  },
  {
    id: 2,
    title: "四季花碗",
    year: "1960",
    category: "日用瓷",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%9B%E5%AD%A3%E8%8A%B1%E7%A2%97-pbZzGaULIrK80IZxHts1pFUVx6l7rG.png",
    story:
      "融合中国传统文人画意象的日用瓷,体现高雅品味。四季花碗以春夏秋冬四季花卉为装饰主题,每只碗代表一个季节,展现了中国传统文化的精髓。这套碗不仅实用,更是将艺术融入日常生活的典范。",
    technique: "手工绘制四季花卉纹样,釉下五彩烧制。",
    modelUrl: "/models/four-seasons-bowl.obj",
  },
  {
    id: 3,
    title: "假牙盒",
    year: "1962",
    category: "日用瓷",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%81%87%E7%89%99%E7%9B%92-bgan7p2MhdgsscVhijD1OMJCSrxFZb.png",
    story:
      "专为毛主席设计的日用瓷器,体现了醴陵陶瓷工匠的细致入微。假牙盒虽小,但制作工艺精湛,釉色温润,既实用又美观。这件作品展现了醴陵陶瓷工匠对细节的极致追求和对领袖的深厚感情。",
    technique: "采用薄胎瓷工艺,釉下彩装饰。",
    modelUrl: "/models/denture-box.obj",
  },
  {
    id: 4,
    title: "带盖鱼盘",
    year: "1965",
    category: "国礼瓷",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B8%A6%E7%9B%96%E9%B1%BC%E7%9B%98-YRnNApEmhQO9IwxRPtCsfsF6lHAvYy.png",
    story:
      "以鱼为主题的装饰瓷盘,寓意年年有余。带盖鱼盘设计独特,盖子与盘身完美契合,盘中绘有栩栩如生的鱼纹,象征着富足和吉祥。这件作品不仅是餐具,更是艺术品,体现了中国传统文化中的美好寓意。",
    technique: "大面积釉下五彩手绘,烧制难度高。",
    modelUrl: "/models/fish-plate.obj",
  },
  {
    id: 5,
    title: "釉下彩蓝芙蓉大花缸",
    year: "1976",
    category: "国礼瓷",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BA%AA%E5%BF%B5%E5%A0%82%E5%A4%A7%E8%8A%B1%E7%BC%B8-VnPmW24MRw2OloX4VS2DRvmKUn8mIY.png",
    story:
      "为毛主席纪念堂特制的大型装饰瓷器,工艺精湛。大花缸以蓝色芙蓉为主题,芙蓉是湖南的省花,象征着对毛主席的深切怀念。这件作品体量巨大,制作难度极高,代表了醴陵陶瓷技艺的最高水平,是国礼瓷中的精品。",
    technique: "多层釉下五彩手绘,大型器物烧制技术。",
    modelUrl: "/models/lotus-vase.obj",
  },
]

export default function StoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("全部")
  const [selectedCeramic, setSelectedCeramic] = useState<number | null>(null)
  const [viewMode, setViewMode] = useState<"image" | "model">("image")

  const categories = ["全部", "日用瓷", "国礼瓷"]
  const filtered = selectedCategory === "全部" ? ceramics : ceramics.filter((c) => c.category === selectedCategory)

  const handlePrevious = () => {
    if (selectedCeramic !== null && selectedCeramic > 0) {
      const prevIndex = selectedCeramic - 1
      setSelectedCeramic(prevIndex)
      setViewMode("image")
    }
  }

  const handleNext = () => {
    if (selectedCeramic !== null && selectedCeramic < ceramics.length - 1) {
      const nextIndex = selectedCeramic + 1
      setSelectedCeramic(nextIndex)
      setViewMode("image")
    }
  }

  return (
    <main className="w-full">
      <Navigation />

      <HeroSection
        title="毛瓷故事"
        subtitle="五件核心瓷器的传奇"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%AF%9B%E7%93%B7%E6%95%85%E4%BA%8B-eaIaOep6go2blpjwYNIgRyoMFGnvOB.jpg"
      />

      {/* Filter Section */}
      <motion.section
        className="py-12 px-8 bg-white border-b border-[#E8E4DE]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 justify-center">
            {categories.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2 font-medium transition-colors relative ${
                  selectedCategory === cat ? "mao-red-text" : "text-gray-600 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                    layoutId="filter"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Waterfall Grid */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
            <AnimatePresence mode="wait">
              {filtered.map((ceramic, idx) => (
                <motion.div
                  key={ceramic.id}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  className="break-inside-avoid mb-6"
                >
                  <CeramicCard
                    title={ceramic.title}
                    year={ceramic.year}
                    image={ceramic.image}
                    onClick={() => {
                      setSelectedCeramic(idx)
                      setViewMode("image")
                    }}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <DetailModal
        isOpen={selectedCeramic !== null}
        onClose={() => {
          setSelectedCeramic(null)
          setViewMode("image")
        }}
        onPrevious={selectedCeramic !== null && selectedCeramic > 0 ? handlePrevious : undefined}
        onNext={selectedCeramic !== null && selectedCeramic < ceramics.length - 1 ? handleNext : undefined}
      >
        {selectedCeramic !== null && (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden bg-[#F5F2ED]">
                {viewMode === "image" ? (
                  <img
                    src={ceramics[selectedCeramic].image || "/placeholder.svg"}
                    alt={ceramics[selectedCeramic].title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ModelViewer modelUrl={ceramics[selectedCeramic].modelUrl} />
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("image")}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    viewMode === "image" ? "bg-[#9B1D2B] text-white" : "bg-[#F5F2ED] text-gray-700 hover:bg-[#E8E4DE]"
                  }`}
                >
                  图片
                </button>
                <button
                  onClick={() => setViewMode("model")}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                    viewMode === "model" ? "bg-[#9B1D2B] text-white" : "bg-[#F5F2ED] text-gray-700 hover:bg-[#E8E4DE]"
                  }`}
                >
                  3D模型
                </button>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-2 mao-red-text mao-calligraphy">
                {ceramics[selectedCeramic].title}
              </h2>
              <p className="text-gray-600 mb-6">{ceramics[selectedCeramic].year}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2 text-lg">历史故事</h3>
                  <p className="text-gray-700 leading-relaxed">{ceramics[selectedCeramic].story}</p>
                </div>

                <div>
                  <h3 className="font-bold mb-2 text-lg">工艺技术</h3>
                  <p className="text-gray-700 leading-relaxed">{ceramics[selectedCeramic].technique}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </DetailModal>

      <Footer />
    </main>
  )
}
