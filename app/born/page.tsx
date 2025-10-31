"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { DetailModal } from "@/components/detail-modal"
import { motion } from "framer-motion"
import { useState, useRef } from "react"

const timelineEvents = [
  {
    year: "1949",
    title: "新中国成立",
    description: "醴陵市人民政府着手恢复醴陵瓷业",
    details:
      "新中国成立后,醴陵市人民政府高度重视陶瓷产业的恢复与发展。在战争的破坏后,政府组织力量开始系统性地恢复醴陵的陶瓷生产能力,为后续的产业复兴奠定了基础。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%96%B0%E4%B8%AD%E5%9B%BD%E6%88%90%E7%AB%8B-MwuqP0HsUY2gGBOh5X4VZashE5vKHT.jpg",
  },
  {
    year: "1954",
    title: "技艺传承",
    description: "林家湖拜师吴寿祺,几乎失传的釉下五彩瓷技艺开始恢复",
    details:
      "林家湖正式拜师吴寿祺,学习釉下五彩瓷的传统技艺。这一师徒关系的建立,标志着几乎失传的釉下五彩瓷技艺开始系统性恢复。通过师徒传承的方式,醴陵陶瓷的宝贵技术得以保存和发展,为后世留下了珍贵的文化遗产。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%8A%80%E8%89%BA%E4%BC%A0%E6%89%BF-qquHAYbsAWRBj6sCqbyUTQt0ir2hEf.jpg",
  },
  {
    year: "1955",
    title: "美术家汇聚",
    description: "一批省美协美术家响应党的号召来到醴陵",
    details:
      "1955年,一批来自湖南省美术家协会的优秀美术家响应党的号召,来到醴陵参与陶瓷艺术的创作与发展。他们将现代美术理念与传统陶瓷工艺相结合,为醴陵陶瓷注入了新的艺术活力,开创了醴陵陶瓷艺术的新纪元。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BE%8E%E6%9C%AF%E5%AE%B6%E6%B1%87%E8%81%9A-nq0atQojACrMcGbGAoRdaStSvzdyl7.jpg",
  },
  {
    year: "1955",
    title: "研究所成立",
    description: "陶瓷研究所成立,集结醴瓷人才烧制出失传20多年的釉下五彩瓷",
    details:
      "醴陵陶瓷研究所正式成立,汇集了醴陵地区最优秀的陶瓷技术人才和艺术家。通过系统的研究和实验,成功烧制出失传20多年的釉下五彩瓷,这是醴陵陶瓷复兴的重要里程碑。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%A0%94%E7%A9%B6%E6%89%80%E6%88%90%E7%AB%8B-gvAj8P13gB9vwxv5xuhvdJbqvQzJoI.jpg",
  },
  {
    year: "1956",
    title: "主席肯定",
    description: "毛主席称赞杨第甫的方案,成立醴陵瓷业公司统一管理醴陵瓷业",
    details:
      "毛主席对杨第甫提出的醴陵瓷业发展方案给予高度评价和肯定。随后,醴陵瓷业公司正式成立,对醴陵地区的陶瓷产业进行统一规划和管理,标志着醴陵陶瓷进入了有组织、有计划的发展阶段。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%BB%E5%B8%AD%E8%82%AF%E5%AE%9A-VmOewtgDBDimbrnh79xMqMZGLZDp3h.jpg",
  },
  {
    year: "1956",
    title: "国际展出",
    description: "醴陵瓷参加中国出口商品展览会和广交会,获得巨量订单",
    details:
      "醴陵陶瓷首次参加中国出口商品展览会和广交会,精美的釉下五彩瓷器引起了国内外客商的极大关注,获得了大量出口订单,为醴陵陶瓷走向世界市场打开了大门。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E9%99%85%E5%B1%95%E5%87%BA-o4We2gR3mq8S0NB5FgHqk0nTiKVHn8.jpg",
  },
  {
    year: "1957",
    title: "柴改煤窑",
    description: "醴陵全部120座窑从烧松柴改为烧煤",
    details:
      "1957年,醴陵地区全部120座陶瓷窑完成了从传统烧松柴到烧煤的技术改造。这一重大技术革新大大提高了烧制效率和产品质量,降低了生产成本,为醴陵陶瓷的规模化生产奠定了基础。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%9F%B4%E6%94%B9%E7%85%A4%E7%AA%91-uKxpJ9UKIQg2d1BHljp0pMHWP1hLeN.jpg",
  },
  {
    year: "1957",
    title: "瓷城美誉",
    description: "李人凤在《解放军画报》发文《瓷城传捷报》,醴陵开始有瓷城称谓",
    details:
      "著名记者李人凤在《解放军画报》上发表文章《瓷城传捷报》,详细报道了醴陵陶瓷产业的蓬勃发展。从此,瓷城这一美誉开始广泛传播,成为醴陵的代名词。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%93%B7%E5%9F%8E%E7%BE%8E%E8%AA%89-TRhcX2jet9TDBxpofXJf3V9b7p7Bx6.jpg",
  },
  {
    year: "1957",
    title: "全面恢复",
    description: "醴陵瓷器生产全面恢复,釉下彩薄胎瓷试制成功",
    details:
      "1957年,经过多年的努力,醴陵陶瓷生产全面恢复到战前水平。这张照片记录了当时窑炉重新点燃的历史时刻,烟囱冒出的浓烟象征着醴陵陶瓷产业的复兴。更重要的是,技术难度极高的釉下彩薄胎瓷试制成功,标志着醴陵陶瓷技艺达到了新的高度。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%85%A8%E9%9D%A2%E6%81%A2%E5%A4%8D-Dyo12hrrstWb0IpC9ticVsgplUJcd2.jpg",
  },
  {
    year: "1957",
    title: "使馆瓷",
    description: "醴陵首次承制国家用瓷使馆瓷",
    details:
      "使馆瓷是醴陵首次承接的国家重要任务,为中国驻外使馆制作专用瓷器。这套茶具采用了精美的釉下彩花卉装饰,设计典雅大方,代表了当时醴陵陶瓷的最高工艺水平,也标志着醴陵陶瓷获得了国家的高度认可,走向了国际舞台。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BD%BF%E9%A6%86%E7%93%B7-QVbUSNQ3meDVxzMd583wedmvvexciV.jpg",
  },
  {
    year: "1958",
    title: "胜利杯",
    description: "为毛主席制作胜利杯",
    details:
      "醴陵陶瓷艺术家为毛主席精心设计制作了胜利杯。这件作品融合了传统釉下五彩技艺与现代设计理念,象征着新中国的胜利与繁荣,成为醴陵陶瓷的代表作之一。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/58%E5%B9%B4%E8%83%9C%E5%88%A9%E6%9D%AF-g1FcqLQ1CAoiBLwTs7wsaiaEkIjJAx.png",
  },
  {
    year: "1958",
    title: "艺术瓷厂",
    description: "国家拨款800万成立全国第一家能量产釉下五彩瓷器的企业醴陵国营艺术瓷厂",
    details:
      "国家投资800万元人民币,成立了醴陵国营艺术瓷厂,这是全国第一家能够大规模量产釉下五彩瓷器的现代化企业。该厂的成立标志着醴陵陶瓷从手工作坊走向了工业化生产。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%89%BA%E6%9C%AF%E7%93%B7%E5%8E%82-wZJ0CAOp6r3xdSkUyWhnxa7Ei7HqLL.jpg",
  },
  {
    year: "1959",
    title: "三馆瓷",
    description: "承制三馆瓷（军事博物馆、民族文化宫、工人体育馆）",
    details:
      "三馆瓷是为庆祝新中国成立十周年而特制的国家用瓷。这批瓷器采用了传统的青绿色花卉纹样,设计典雅大方,工艺精湛。三馆瓷不仅数量大,而且艺术水平高,充分展示了醴陵陶瓷的综合实力和国家形象。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%B8%89%E9%A6%86%E7%93%B7-cHyBCzUhwnQT6AfwiFLtC7GLaBRrjo.jpg",
  },
  {
    year: "1959",
    title: "人民大会堂",
    description: "为人民大会堂主席台制作胜利杯,承制人民大会堂湖南厅陈设瓷",
    details:
      "人民大会堂是新中国成立十周年的献礼工程,醴陵为人民大会堂主席台制作了胜利杯,并承制了人民大会堂湖南厅的全套陈设瓷。这些作品代表了国家形象,体现了醴陵陶瓷的最高工艺水平和艺术成就,成为国家的骄傲。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E4%BA%BA%E6%B0%91%E5%A4%A7%E4%BC%9A%E5%A0%82-d42YnJzWog3jiVuyj4hY79aJueXBWs.jpg",
  },
  {
    year: "1959",
    title: "总理茶杯",
    description: "为周总理生产50套接见客人的专用茶杯",
    details:
      "醴陵为周恩来总理特制了50套接见外宾的专用茶杯。这批茶杯设计典雅,工艺精湛,成为国家领导人接待外宾的重要礼器,展现了中国陶瓷艺术的魅力。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%80%BB%E7%90%86%E8%8C%B6%E6%9D%AF-sZP9pA2j3PT2548DeNMViou2ObbyEY.jpg",
  },
  {
    year: "1964",
    title: "国庆瓷",
    description: "庆祝新中国成立十五周年,醴陵承制139花面国宴瓷",
    details:
      "为庆祝新中国成立十五周年,醴陵承制了著名的139花面国宴瓷。这套国宴瓷采用了139种不同的花卉图案,工艺复杂,艺术价值极高,成为国宴用瓷的经典之作。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%BD%E5%AE%B4%E7%93%B7-WEXw9QyalfQClXzWIel7j5cWIRzhiO.jpg",
  },
  {
    year: "1964",
    title: "常委杯",
    description: "制作周恩来总理亲自为人民大会堂选定的专用茶具常委杯",
    details:
      "周恩来总理亲自为人民大会堂选定了醴陵制作的专用茶具常委杯。这套茶具设计简洁大方,釉色温润,成为中央领导同志日常使用的茶具,体现了醴陵陶瓷的实用性与艺术性的完美结合。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B8%B8%E5%A7%94%E6%9D%AF-w9CrQJ0qaZkPOe4ztC24zADh2HjL4p.jpg",
  },
  {
    year: "1971",
    title: "毛瓷餐具",
    description: "制作毛瓷釉下彩瓷餐具和烟灰缸",
    details:
      "醴陵为毛主席制作了釉下彩瓷餐具和烟灰缸。这批毛瓷采用了最精湛的釉下五彩技艺,每一件都经过严格的质量把关,代表了醴陵陶瓷的最高水准。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E6%AF%9B%E7%93%B7%E9%A4%90%E5%85%B7-1CpV4T5s1QOI3YFTIa8eWEp4HBLymD.jpg",
  },
  {
    year: "1972",
    title: "毛瓷器皿",
    description: "制作毛瓷带盖鱼盘、浅底三大碗、假牙盒",
    details:
      "继续为毛主席制作各类日用瓷器,包括带盖鱼盘、浅底三大碗、假牙盒等。这些器皿不仅实用,而且艺术性强,充分体现了醴陵陶瓷实用与美观并重的设计理念。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%B8%A6%E7%9B%96%E9%B1%BC%E7%9B%98-YRnNApEmhQO9IwxRPtCsfsF6lHAvYy.png",
  },
  {
    year: "1974",
    title: "四季花碗",
    description: "为毛主席制作釉下彩双面有彩花薄胎碗毛瓷四季花碗",
    details:
      "醴陵艺术家为毛主席创作了技术难度极高的釉下彩双面有彩花薄胎碗,命名为毛瓷四季花碗。这套碗以春夏秋冬四季花卉为主题,内外双面绘彩,胎体薄如蝉翼,是醴陵陶瓷技艺的巅峰之作。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%9B%9B%E5%AD%A3%E8%8A%B1%E7%A2%97-pKd8wwptBd2C2y91rAS8K430tb3YrN.jpg",
  },
  {
    year: "1976",
    title: "纪念堂花缸",
    description: "为毛主席纪念堂创烧《釉下彩蓝芙蓉大花缸》",
    details:
      "为毛主席纪念堂特别创作烧制了《釉下彩蓝芙蓉大花缸》。这件大型陶瓷作品以蓝色芙蓉为主题,寓意高洁与永恒,工艺精湛,气势恢宏,成为纪念堂的重要陈设,永久纪念伟大领袖。",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BA%AA%E5%BF%B5%E5%A0%82%E5%A4%A7%E8%8A%B1%E7%BC%B8-VnPmW24MRw2OloX4VS2DRvmKUn8mIY.png",
  },
]

const stats = [
  { number: "120", label: "柴改煤窑" },
  { number: "5", label: "釉下五彩恢复" },
  { number: "3", label: "主席来醴次数" },
  { number: "45", label: "出口国数量" },
]

export default function BornPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const handlePrevious = () => {
    if (selectedEvent !== null && selectedEvent > 0) {
      setSelectedEvent(selectedEvent - 1)
    }
  }

  const handleNext = () => {
    if (selectedEvent !== null && selectedEvent < timelineEvents.length - 1) {
      setSelectedEvent(selectedEvent + 1)
    }
  }

  return (
    <main className="w-full">
      <Navigation />

      <HeroSection
        title="红窑文史"
        subtitle="醴陵陶瓷的复兴与发展"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E7%BA%A2%E7%AA%91%E6%96%87%E5%8F%B2-gRsb5xDvOPrDpjwAsOlcq6CJUT4lym.jpg"
      />

      <motion.section
        className="py-20 px-8 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 mao-red-text mao-calligraphy"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            历史时间轴
          </motion.h2>

          <div className="relative">
            <div ref={scrollContainerRef} className="overflow-y-auto max-h-[600px] pr-4 custom-scrollbar">
              <div className="flex flex-col gap-6">
                {timelineEvents.map((event, idx) => (
                  <motion.div
                    key={idx}
                    className="flex gap-4 cursor-pointer hover:bg-[#F5F2ED] p-4 rounded-lg transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    onClick={() => setSelectedEvent(idx)}
                  >
                    <div className="flex flex-col items-center flex-shrink-0">
                      <motion.div className="w-4 h-4 rounded-full bg-[#9B1D2B] mt-1" whileHover={{ scale: 1.5 }} />
                      {idx < timelineEvents.length - 1 && <div className="w-1 flex-1 bg-[#D4AF37] min-h-[40px]" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#9B1D2B]">{event.year}</p>
                      <h3 className="font-bold text-lg">{event.title}</h3>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <DetailModal
        isOpen={selectedEvent !== null}
        onClose={() => setSelectedEvent(null)}
        onPrevious={selectedEvent !== null && selectedEvent > 0 ? handlePrevious : undefined}
        onNext={selectedEvent !== null && selectedEvent < timelineEvents.length - 1 ? handleNext : undefined}
      >
        {selectedEvent !== null && (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8">
              <img
                src={timelineEvents[selectedEvent].image || "/placeholder.svg"}
                alt={timelineEvents[selectedEvent].title}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <p className="text-sm font-bold text-[#9B1D2B] mb-2">{timelineEvents[selectedEvent].year}</p>
              <h2 className="text-3xl font-bold mb-4 mao-red-text">{timelineEvents[selectedEvent].title}</h2>
              <p className="text-gray-600 mb-4 font-medium">{timelineEvents[selectedEvent].description}</p>
              <p className="text-gray-700 leading-relaxed">{timelineEvents[selectedEvent].details}</p>
            </div>
          </div>
        )}
      </DetailModal>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-[#F5F2ED]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center mao-red-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            关键数据
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold mao-red-text mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: idx * 0.15 + 0.3, type: "spring", duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f2ed;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d4af37;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #9b1d2b;
        }
      `}</style>
    </main>
  )
}
