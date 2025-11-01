"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { DetailModal } from "@/components/detail-modal"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

const spirits = [
  {
    id: 1,
    title: "群众路线的精神",
    icon: "👥",
    quote: "从群众中来，到群众中去",
    content:
      "醴陵陶瓷的发展始终坚持群众路线。新中国成立后，政府组织工人、技术人员和艺术家共同参与陶瓷产业的恢复与发展。老工匠将技艺传授给年轻一代，美术家深入车间与工人交流，共同创作。这种群众路线的工作方法，使醴陵陶瓷既保持了传统特色，又融入了时代精神，真正做到了艺术来自人民、服务人民。",
  },
  {
    id: 2,
    title: "艰苦奋斗的精神",
    icon: "💪",
    quote: "自力更生，艰苦奋斗",
    content:
      "醴陵陶瓷的复兴之路充满艰辛。在物资匮乏的年代，陶瓷工作者们克服重重困难，自己动手改造设备，研制原料，攻克技术难关。1957年的技术改造，120座窑的改造工作在短时间内完成，靠的就是艰苦奋斗的精神。正是这种不怕困难、勇于创新的精神，使醴陵陶瓷在困难时期仍能取得辉煌成就。",
  },
  {
    id: 3,
    title: "同甘共苦的精神",
    icon: "🤝",
    quote: "团结就是力量",
    content:
      "醴陵陶瓷的发展凝聚了无数人的心血。从政府官员到普通工人，从艺术家到技术人员，大家同心协力，共同为醴陵陶瓷的复兴而奋斗。在生产任务紧张时，领导干部与工人一起加班；在技术攻关时，专家与工人并肩作战。这种同甘共苦、团结协作的精神，是醴陵陶瓷能够在短时间内恢复并超越历史水平的重要原因。",
  },
  {
    id: 4,
    title: "调查研究的精神",
    icon: "🔍",
    quote: "没有调查，就没有发言权",
    content:
      "醴陵陶瓷的技术创新和艺术创作都建立在深入调查研究的基础上。为了恢复釉下五彩技艺，技术人员走访老工匠，查阅历史资料，进行大量实验。为了设计出符合时代需求的产品，设计师深入了解用户需求，研究国内外陶瓷发展趋势。这种实事求是、调查研究的科学态度，保证了醴陵陶瓷发展的正确方向。",
  },
  {
    id: 5,
    title: "积极学习的精神",
    icon: "📚",
    quote: "学习，学习，再学习",
    content:
      "醴陵陶瓷工作者始终保持积极学习的态度。老工匠学习新技术、新理念，年轻人虚心向老师傅学习传统技艺。1955年，省美协的美术家来到醴陵，与陶瓷工作者相互学习，美术家学习陶瓷工艺，陶瓷工作者学习现代美术理念。这种相互学习、共同提高的氛围，推动了醴陵陶瓷艺术水平的不断提升，创作出了许多经典作品。",
  },
]

export default function LegacyPage() {
  const [selectedSpirit, setSelectedSpirit] = useState<number | null>(null)

  const handlePrevious = () => {
    if (selectedSpirit !== null && selectedSpirit > 0) {
      setSelectedSpirit(selectedSpirit - 1)
    }
  }

  const handleNext = () => {
    if (selectedSpirit !== null && selectedSpirit < spirits.length - 1) {
      setSelectedSpirit(selectedSpirit + 1)
    }
  }

  return (
    <main className="w-full">
      <Navigation />

      <HeroSection
        title="醴瓷精神"
        subtitle="瓷火不息，红韵长存"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%86%B4%E7%93%B7%E7%B2%BE%E7%A5%9E-Kw88I1Kk1Q3ezb4872dH5BlF0FlCKh.jpg"
      />

      <section className="py-20 px-8 bg-gradient-to-b from-[#F5F2ED] to-white relative overflow-hidden">
        {/* Decorative scroll background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('/ancient-chinese-scroll-pattern.jpg')] bg-repeat-y bg-center" />
        </div>

        <div className="max-w-4xl mx-auto relative">
          <motion.h2
            className="text-4xl font-bold mb-16 mao-red-text text-center stkaiti-font"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            醴瓷精神
          </motion.h2>

          {/* Timeline with nodes */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#9B1D2B] via-[#D4AF37] to-[#9B1D2B] -translate-x-1/2" />

            {spirits.map((spirit, idx) => (
              <motion.div
                key={spirit.id}
                className={`relative mb-16 flex items-center ${idx % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Content card */}
                <div className={`w-5/12 ${idx % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <motion.div
                    className="inline-block p-6 bg-white rounded-lg shadow-lg border-2 border-[#D4AF37] cursor-pointer hover:shadow-xl transition-all hover:scale-105"
                    onClick={() => setSelectedSpirit(idx)}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-3">{spirit.icon}</div>
                    <h3 className="text-xl font-bold mao-red-text mb-2">{spirit.title}</h3>
                    <p className="text-sm text-gray-600 italic">点击查看详情</p>
                  </motion.div>
                </div>

                {/* Center node */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#D4AF37] border-4 border-white shadow-lg cursor-pointer z-10"
                  onClick={() => setSelectedSpirit(idx)}
                  whileHover={{ scale: 1.5 }}
                  whileTap={{ scale: 0.9 }}
                />

                {/* Empty space on the other side */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DetailModal
        isOpen={selectedSpirit !== null}
        onClose={() => setSelectedSpirit(null)}
        onPrevious={selectedSpirit !== null && selectedSpirit > 0 ? handlePrevious : undefined}
        onNext={selectedSpirit !== null && selectedSpirit < spirits.length - 1 ? handleNext : undefined}
      >
        {selectedSpirit !== null && (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/5 p-8 bg-[#9B1D2B] text-white flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-6">{spirits[selectedSpirit].icon}</div>
                <h2 className="text-2xl font-bold mb-6 stkaiti-font">{spirits[selectedSpirit].title}</h2>
                <p className="text-xl italic leading-relaxed">"{spirits[selectedSpirit].quote}"</p>
                <p className="text-sm mt-4 opacity-90">— 毛泽东</p>
              </div>
            </div>
            <div className="md:w-3/5 p-8">
              <h3 className="font-bold text-lg mb-4 mao-red-text">精神内涵</h3>
              <p className="text-gray-700 leading-relaxed text-base">{spirits[selectedSpirit].content}</p>
            </div>
          </div>
        )}
      </DetailModal>

      <section className="py-20 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-32 h-32 rounded-lg bg-[#F5F2ED] flex items-center justify-center">
                <span className="text-6xl">🏺</span>
              </div>
            </motion.div>

            <h2 className="text-4xl font-bold mb-6 mao-red-text mao-calligraphy">向所有醴陵瓷业从业者致敬！</h2>

            <p className="text-xl text-gray-600 mb-12 leading-relaxed">瓷火不息，红韵长存</p>

            <Link href="/">
              <motion.button
                className="px-8 py-3 bg-[#9B1D2B] text-white rounded-lg font-medium hover:bg-[#C43945] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                返回首页
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
