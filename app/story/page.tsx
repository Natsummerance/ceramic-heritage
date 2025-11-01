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
      "1958年4月醴陵瓷器公司负责人陪同省委一位同志来到陶瓷研究所，他们带来一个桶形茶杯，无花无盖，质量粗糙，灰不溜秋的。要求照此改制一件，说是中央一位领导同志要的，时间越快越好。1958年6月，陶瓷研究所所长李维善接到了醴陵瓷器公司负责人王林卿从省会长沙打来的电话：“省委领导告诉我，此前试制的杯子是专门为主席做的，毛主席对最后送去的样品很满意。省委要求赶制40件，其中花杯20件（蝴蝶花），白的20件，7月5日前送省委。”听到这个特大好消息，李维善激动不已。他这才知道研究所工程师们2个多月的辛勤劳动竟然是承担了这么荣耀的任务！",
    technique: "釉下五彩手绘工艺,采用传统青花与红彩相结合。",
    modelUrl: "/models/victory-cup.glb",
  },
  {
    id: 2,
    title: "四季花碗",
    year: "1960",
    category: "日用瓷",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%9B%E5%AD%A3%E8%8A%B1%E7%A2%97-pbZzGaULIrK80IZxHts1pFUVx6l7rG.png",
    story:
      "1974年秋，毛泽东同志最后一次回湖南，在省委九所住了114天。那时，伟人年事已高，手有些抖。时任省委书记的张平化为了庆祝他的生日，提议烧制一批轻巧的瓷器，作为家乡人民对他的祝福。很快，毛泽东的生活“管家”原中央警卫局副科长吴连登和原湖南省委接待处处长肖根如持中央办公厅的介绍信，来到醴陵群力瓷厂和陶瓷研究所，下达了制瓷任务，但当时并没有说为谁制作，只是要求：这批釉下五彩，内外双面都要有花；重量轻而结实耐用；保温效果好；无铅毒，不含镉，确保使用者健康；永不褪色。\n“当我们拿出醴陵烧制的这批瓷器时，毛主席很高兴，饶有兴趣地拿了两个碗看了又看，并轻轻地相互碰了一下，声音很清脆。特别是瓷器上的图案，主席很喜欢，连声称赞‘家乡的瓷器真好啊！’”吴连登还回忆，用上醴陵瓷器后，直到他老人家临终前吃的最后一顿饭，使用的都是醴陵的餐具。",
    technique: "手工绘制四季花卉纹样,釉下五彩烧制。",
    modelUrl: [
      "/models/four-seasons-bowl-spring.glb",
      "/models/four-seasons-bowl-summer.glb",
      "/models/four-seasons-bowl-autumn.glb",
      "/models/four-seasons-bowl-winter.glb",
    ],
  },
  {
    id: 3,
    title: "假牙盒",
    year: "1962",
    category: "日用瓷",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%81%87%E7%89%99%E7%9B%92-bgan7p2MhdgsscVhijD1OMJCSrxFZb.png",
    story:
      "到了晚年，毛主席的牙齿也和平常人一样有脱落现象，不得不佩戴假牙，根据保健医生建议，特为主席研制烧造这款假牙盒。\n这款假牙盒首先要安全，经三次烧制，在高温下保证任何有害化学物质被彻底除掉。第二要美观大方，让毛主席随取随用，又不轻易被人发现。第三要轻巧耐用。盒子里除了放假牙，还会放消毒液。\n因为毛主席健康情况属于绝密，所以当时除了警卫局的吴连登，只有设计者梁六奎真正知道这款瓷器是做什么用的。\n梁六奎回忆说，作假牙盒最难的就是从来没做过这种东西，形状和大小都得靠想象，所以当时边实验边做，几个多月后才正式送到毛主席手中。\n毛主席非常喜欢这个假牙盒，晚上睡觉就放在身边，随取随用。这个假牙盒现在已经成为国家特级文物。",
    technique: "采用薄胎瓷工艺,釉下彩装饰。",
    modelUrl: "/models/denture-box.glb",
  },
  {
    id: 4,
    title: "带盖鱼盘",
    year: "1965",
    category: "国礼瓷",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B8%A6%E7%9B%96%E9%B1%BC%E7%9B%98-YRnNApEmhQO9IwxRPtCsfsF6lHAvYy.png",
    story:
      "毛主席工作忙碌，废寝忘食，安排的饭菜常常放凉了才有空食用。为了让主席能吃上热的饭菜,工作人员来醴陵定制餐具时要求既保温又安全卫生。这个重要的使命落到了当时担任陶瓷研究所成型研究室主任的梁六奎肩上。为了使做好的鱼能够较长时间保持温度和鲜度，在完成这项特殊的任务中,高级工程师梁六奎精心研究、反复试制,成功地研制出毛泽东专用特制带盖鱼盘。鱼盘42厘米长,内深3厘米。为使鱼盘盖和椭圆形鱼盘相吻合,梁六奎大胆设想,采用与鱼盘规格一致的不带釉的素胎鱼盘衬烧盘盖,解决了盖子变形的问题。",
    technique: "大面积釉下五彩手绘,烧制难度高。",
    modelUrl: null,
  },
  {
    id: 5,
    title: "釉下彩蓝芙蓉大花缸",
    year: "1976",
    category: "国礼瓷",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BA%AA%E5%BF%B5%E5%A0%82%E5%A4%A7%E8%8A%B1%E7%BC%B8-VnPmW24MRw2OloX4VS2DRvmKUn8mIY.png",
    story:
      "48年前的今天，一代伟人毛泽东与世长辞。在全民怀念他的日子里，瓷都醴陵人的思念因为陶瓷而具象化了。陈设在毛主席纪念堂的釉下彩蓝芙蓉纹大花缸，就是醴陵群力瓷厂1977年为纪念堂特别烧制的。它寄托着醴陵儿女对新中国缔造者的敬仰之情和无尽思念。\n毛主席纪念堂工程指挥部要求纪念瓷器要庄严肃穆、美观大方，做到“七个一致，八个不准”。即大小一致、高矮一致、重量一致、颜色一致、线条一致、花型部位一致、白度一致；不准有变形、不准有黑点、不准现毛孔、不准有接缝、不准有釉子、不准有釉面不光、不准有灰砂、不准有擦伤。为此，成型、彩绘、烧制等工艺都需要攻坚克难。\n在醴陵，原来较高的花缸，坯体大都是由上下两部分接上去的。但指挥部要求花缸不能有接口，因此，必须一次拉坯成型。面对挑战，群力瓷厂的陈月发、周谷良等人采取了接力拉坯的办法，即拉坯师傅一个人在那里拉，同时，另外两个人抓住他的手臂一块使劲，这样才能拉起来。\n蓝芙蓉大花缸的彩绘，要分多种颜色水1000多笔。为加快工作进度又确保质量。唐汉初老人的弟子张震创造了双人配合分水新工艺。经过工厂彩绘人员认真操作，精心绘制，创造了大花缸内外2平方米的面积无斑点、无掉砂、无压釉、无色脏、无变形的最佳效果。",
    technique: "多层釉下五彩手绘,大型器物烧制技术。",
    modelUrl: "/models/lotus-vase.glb",
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

  const currentCeramic = selectedCeramic !== null ? ceramics[selectedCeramic] : null
  const hasModel = currentCeramic?.modelUrl !== null

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
                  <ModelViewer modelUrl={ceramics[selectedCeramic].modelUrl!} />
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
                {hasModel && (
                  <button
                    onClick={() => setViewMode("model")}
                    className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
                      viewMode === "model" ? "bg-[#9B1D2B] text-white" : "bg-[#F5F2ED] text-gray-700 hover:bg-[#E8E4DE]"
                    }`}
                  >
                    3D模型
                  </button>
                )}
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-2 mao-red-text stkaiti-font">
                {ceramics[selectedCeramic].title}
              </h2>
              <p className="text-gray-600 mb-6">{ceramics[selectedCeramic].year}</p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2 text-lg">历史故事</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{ceramics[selectedCeramic].story}</p>
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
