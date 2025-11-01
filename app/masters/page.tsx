"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { DetailModal } from "@/components/detail-modal"
import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const masters = [
  {
    id: 1,
    name: "吴寿祺",
    years: "1893-1958",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%90%B4%E5%AF%BF%E7%A5%BA2-EeAwxI42TbCPeK7IpfQjJ8Ye7fL4rS.png",
    specialty: "釉下五彩",
    biography:
      "吴寿祺是醴陵釉下五彩瓷的一代宗师，他在清末民初时期就已经掌握了精湛的釉下五彩技艺。新中国成立后，他积极响应政府号召，将几乎失传的釉下五彩技艺传授给新一代陶瓷工作者，为醴陵陶瓷的复兴做出了不可磨灭的贡献。他的技艺特点是色彩运用精准，线条流畅自然。",
    achievements:
      "培养了包括林家湖在内的多位优秀传人，成功恢复了釉下五彩瓷的传统技艺，为醴陵陶瓷研究所的成立和发展奠定了技术基础。他的作品多次在国内外展览中获奖，被誉为'釉下五彩第一人'。",
  },
  {
    id: 2,
    name: "林家湖",
    years: "1931-2010",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9E%97%E5%AE%B6%E6%B9%962-1BOlZU3xbcpfa70vSoTKm5e2kM1X6b.png",
    specialty: "釉下五彩",
    biography:
      "林家湖是吴寿祺的得意门生，1954年正式拜师学艺。他不仅完整地继承了师傅的技艺，还在此基础上进行了创新和发展。林家湖在釉下五彩的色彩搭配和图案设计上有独到的见解，他的作品既保持了传统韵味，又融入了时代特色。",
    achievements:
      "参与了多项国家用瓷的设计制作，包括人民大会堂用瓷和毛瓷的制作。他培养了大批优秀的陶瓷艺术人才，为醴陵陶瓷技艺的传承做出了重要贡献。曾获得中国工艺美术大师称号。",
  },
  {
    id: 3,
    name: "唐汉初",
    years: "1925-1995",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%94%90%E6%B1%89%E5%88%9D2-8dYF40N05md4Q3MtJrK7A0ZYQj58U0.png",
    specialty: "陶瓷设计",
    biography:
      "唐汉初是新中国成立后醴陵陶瓷设计领域的开拓者之一。他将现代设计理念与传统陶瓷工艺相结合，创作出许多具有时代特色的作品。他特别擅长将革命题材和传统文化元素融合，创作出既有政治意义又有艺术价值的作品。",
    achievements:
      "主持设计了多套国礼瓷和国宴瓷，包括著名的'139'花面国宴瓷的部分设计工作。他的设计作品多次在全国陶瓷评比中获奖，为醴陵陶瓷赢得了荣誉。",
  },
  {
    id: 4,
    name: "丁华汉",
    years: "1928-2002",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%81%E5%8D%8E%E6%B1%892-KV2kL7gpdCLr24sxDkFEKGBPsuspNx.png",
    specialty: "薄胎瓷",
    biography:
      "丁华汉是醴陵薄胎瓷技艺的代表性传承人。薄胎瓷是醴陵陶瓷的一大特色，要求胎体薄如蝉翼，轻若鸿毛，制作难度极高。丁华汉在这一领域有着深厚的造诣，他制作的薄胎瓷器不仅薄，而且强度高，艺术性强。",
    achievements:
      "成功试制出釉下彩薄胎瓷，为醴陵陶瓷技艺的发展开辟了新方向。参与制作了毛瓷四季花碗等重要作品，这些作品代表了薄胎瓷技艺的最高水平。",
  },
  {
    id: 5,
    name: "梁六奎",
    years: "1920-1988",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%A2%81%E5%85%AD%E5%A5%8E2-rDmAWXNRqZVBMT4cJwtqIO5e20fmFF.png",
    specialty: "瓷器烧制",
    biography:
      "梁六奎是醴陵陶瓷烧制技术的专家，他对窑炉的温度控制和气氛调节有着丰富的经验和独到的理解。在1957年醴陵全面实施'柴改煤'的技术改造中，他发挥了重要作用，确保了改造后的产品质量不降反升。",
    achievements:
      "主持了醴陵120座窑的'柴改煤'技术改造工作，这一改造大大提高了生产效率和产品质量。他总结的烧制经验被编入教材，培养了大批烧制技术人才。",
  },
  {
    id: 6,
    name: "罗成香",
    years: "1932-2008",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BD%97%E6%88%90%E9%A6%992-9lXQFGVPhmkOSN2MAArgJ5iEx2P0L0.png",
    specialty: "陶瓷彩绘",
    biography:
      "罗成香是醴陵陶瓷彩绘领域的杰出女性艺术家。她的彩绘技艺精湛，特别擅长花鸟题材的创作。她的作品线条细腻，色彩柔和，充满了女性特有的细腻和温婉。她也是培养女性陶瓷艺术人才的先驱。",
    achievements:
      "参与了多项重要国礼瓷的彩绘工作，她绘制的牡丹、芙蓉等花卉图案成为醴陵陶瓷的经典纹样。她培养了许多优秀的女性陶瓷彩绘师，为醴陵陶瓷艺术的发展注入了女性力量。",
  },
  {
    id: 7,
    name: "陈扬龙",
    years: "1926-1998",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%99%88%E6%89%AC%E9%BE%992-pijgiRX9Bgnh3dJlwIDBAAslw2hb9J.png",
    specialty: "陶瓷雕塑",
    biography:
      "陈扬龙是醴陵陶瓷雕塑艺术的代表人物。他不仅精通传统的陶瓷雕塑技法，还善于将雕塑与釉下五彩装饰相结合，创作出独具特色的立体陶瓷艺术品。他的作品造型生动，装饰精美，深受人们喜爱。",
    achievements:
      "创作了多件大型陶瓷雕塑作品，包括为毛主席纪念堂制作的《釉下彩蓝芙蓉大花缸》的雕塑部分。他的作品多次在全国美展中展出并获奖，为醴陵陶瓷雕塑艺术赢得了声誉。",
  },
  {
    id: 8,
    name: "徐协和",
    years: "1930-2005",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%90%E5%8D%8F%E5%92%8C2-CvDuKrauMTJ1Fpu8Nkb7egz7QRKeQW.png",
    specialty: "陶瓷工程",
    biography:
      "徐协和是醴陵陶瓷工程技术领域的专家，他在陶瓷原料配方、成型工艺、烧成制度等方面都有深入的研究。他将科学方法引入传统陶瓷生产，推动了醴陵陶瓷从经验型生产向科学化生产的转变。",
    achievements:
      "主持了醴陵国营艺术瓷厂的技术改造和设备更新工作，使醴陵陶瓷生产实现了现代化。他发表了多篇陶瓷技术论文，为醴陵陶瓷的科学发展提供了理论支持。",
  },
  {
    id: 9,
    name: "唐锡怀",
    years: "1935-2012",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%94%90%E9%94%A1%E6%80%802-d0CSAa3BDku4USZ0PvSIXwkrWJBcmv.png",
    specialty: "综合创作",
    biography:
      "唐锡怀是醴陵陶瓷艺术的全能型人才，他在设计、彩绘、雕塑等多个领域都有出色的表现。他善于将不同的艺术形式融合在一起，创作出富有创新性的作品。他也是醴陵陶瓷艺术教育的重要推动者。",
    achievements:
      "参与了多项国家重点陶瓷项目的创作，包括人民大会堂用瓷和各类国礼瓷的设计制作。他编写了多部陶瓷艺术教材，培养了大批陶瓷艺术人才，为醴陵陶瓷事业的可持续发展做出了重要贡献。",
  },
]

export default function MastersPage() {
  const [selectedMaster, setSelectedMaster] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handlePrevious = () => {
    if (selectedMaster !== null && selectedMaster > 0) {
      setSelectedMaster(selectedMaster - 1)
    }
  }

  const handleNext = () => {
    if (selectedMaster !== null && selectedMaster < masters.length - 1) {
      setSelectedMaster(selectedMaster + 1)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" })
    }
  }

  return (
    <main className="w-full">
      <Navigation />

      <HeroSection
        title="醴瓷名人堂"
        subtitle="致敬伟大的陶瓷艺术家"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%90%8D%E4%BA%BA%E5%A0%82-YL9dsj1sAO9CL4GFK0GxF2FZfNcYO7.jpg"
      />

      {/* Masters Gallery */}
      <section className="py-20 px-8 bg-gradient-to-b from-white to-[#F5F2ED] overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-16 mao-red-text text-center stkaiti-font"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            醴陵陶瓷大师
          </motion.h2>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#9B1D2B] via-[#D4AF37] to-[#9B1D2B] -translate-y-1/2" />

            <motion.button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg border-2 border-[#D4AF37] transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <ChevronLeft className="w-6 h-6 text-[#9B1D2B]" />
            </motion.button>

            <motion.button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg border-2 border-[#D4AF37] transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <ChevronRight className="w-6 h-6 text-[#9B1D2B]" />
            </motion.button>

            <div ref={scrollContainerRef} className="overflow-x-auto pb-8">
              <div className="flex items-center gap-16 min-w-max px-8 py-12">
                {masters.map((master, idx) => (
                  <motion.div
                    key={master.id}
                    className="relative flex flex-col items-center"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.15, duration: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {/* Timeline node */}
                    <motion.div
                      className="w-6 h-6 rounded-full bg-[#D4AF37] border-4 border-white shadow-lg cursor-pointer z-10 mb-8"
                      onClick={() => setSelectedMaster(idx)}
                      whileHover={{ scale: 1.5 }}
                      whileTap={{ scale: 0.9 }}
                    />

                    {/* Master card */}
                    <motion.div
                      className="w-64 cursor-pointer"
                      onClick={() => setSelectedMaster(idx)}
                      whileHover={{ y: -10, scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow border-2 border-[#D4AF37]">
                        <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                          <img
                            src={master.image || "/placeholder.svg"}
                            alt={master.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="text-xl font-bold mao-red-text text-center stkaiti-font">{master.name}</h3>
                        <p className="text-sm text-gray-600 text-center mt-2">{master.years}</p>
                        <p className="text-sm text-[#D4AF37] text-center mt-1 font-medium">{master.specialty}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div
            className="text-center mt-8 text-gray-500 text-sm flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <span>点击左右箭头或拖动滚动条查看更多大师</span>
          </motion.div>
        </div>
      </section>

      <DetailModal
        isOpen={selectedMaster !== null}
        onClose={() => setSelectedMaster(null)}
        onPrevious={selectedMaster !== null && selectedMaster > 0 ? handlePrevious : undefined}
        onNext={selectedMaster !== null && selectedMaster < masters.length - 1 ? handleNext : undefined}
      >
        {selectedMaster !== null && (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 p-8 bg-[#F5F2ED]">
              <img
                src={masters[selectedMaster].image || "/placeholder.svg"}
                alt={masters[selectedMaster].name}
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-2xl font-bold mao-red-text text-center stkaiti-font">
                {masters[selectedMaster].name}
              </h2>
              <p className="text-center text-gray-600 mt-2">{masters[selectedMaster].years}</p>
              <p className="text-center text-[#D4AF37] mt-1 font-medium">{masters[selectedMaster].specialty}</p>
            </div>
            <div className="md:w-2/3 p-8 flex flex-col gap-6">
              <div>
                <h3 className="font-bold text-lg mb-3 mao-red-text">人物简介</h3>
                <p className="text-gray-700 leading-relaxed">{masters[selectedMaster].biography}</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3 mao-red-text">主要成就</h3>
                <p className="text-gray-700 leading-relaxed">{masters[selectedMaster].achievements}</p>
              </div>
            </div>
          </div>
        )}
      </DetailModal>

      <Footer />
    </main>
  )
}
