"use client"

import { useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { motion } from "framer-motion"
import Link from "next/link"
import { Flame, Sparkles } from "lucide-react"

export default function Home() {
  const sparkles = useMemo(() => 
    Array.from({ length: 6 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 3 + Math.random() * 2,
      delay: Math.random() * 2,
    })),
    []
  )
  return (
    <main className="w-full">
      <Navigation />

      <HeroSection
        title="红窑瓷典"
        subtitle="回望毛瓷历史"
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E9%A6%96%E9%A1%B5-izEzrPi0daFSgrYFEesU4sXw8yJXiX.jpg"
      />

      <section className="relative py-16 px-8 bg-gradient-to-b from-[#9B1D2B] to-[#7A1622] overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url(/ancient-chinese-scroll-pattern.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2 }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              >
                <Flame className="w-8 h-8 text-[#D4AF37]" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold text-white stkaiti-font">醴陵红窑</h2>
              <motion.div
                animate={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
              >
                <Sparkles className="w-8 h-8 text-[#D4AF37]" />
              </motion.div>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              1950-1970年代，毛泽东与醴陵釉下五彩的相遇
            </motion.p>
            <motion.p
              className="text-base md:text-lg text-white/80 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              见证了中国陶瓷工艺的复兴与辉煌
            </motion.p>
          </motion.div>
        </div>

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#D4AF37] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </section>

      <section className="py-16 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { number: "27", label: "年历史跨度", suffix: "年" },
              { number: "9", label: "陶瓷大师", suffix: "位" },
              { number: "5", label: "醴瓷精神", suffix: "种" },
              { number: "∞", label: "传承价值", suffix: "" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="text-4xl md:text-5xl font-bold text-[#9B1D2B] mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 + 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                  <span className="text-2xl text-[#D4AF37]">{stat.suffix}</span>
                </motion.div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-8 bg-gradient-to-b from-[#F5F2ED] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 mao-red-text mao-calligraphy"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              四大篇章
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-transparent via-[#9B1D2B] to-transparent mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "红窑出世",
                href: "/born",
                description: "醴陵陶瓷的复兴与发展",
                gradient: "from-[#9B1D2B] to-[#7A1622]",
              },
              {
                title: "毛瓷故事",
                href: "/story",
                description: "珍贵瓷器的历史印记",
                gradient: "from-[#7A1622] to-[#5A1118]",
              },
              {
                title: "醴瓷人物",
                href: "/masters",
                description: "陶瓷大师的匠心传承",
                gradient: "from-[#5A1118] to-[#3A0B0F]",
              },
              {
                title: "醴瓷精神",
                href: "/legacy",
                description: "时代精神的永恒传承",
                gradient: "from-[#3A0B0F] to-[#1A0507]",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Link href={item.href}>
                  <motion.div
                    className={`relative p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all cursor-pointer h-64 overflow-hidden group bg-gradient-to-br ${item.gradient}`}
                    whileHover={{ scale: 1.05, y: -8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                      animate={{
                        backgroundPosition: ["0px 0px", "20px 20px"],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                      }}
                    />

                    <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                        <motion.h3
                          className="font-bold text-2xl md:text-3xl text-white mb-3 stkaiti-font"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.title}
                        </motion.h3>
                        <motion.p
                          className="text-white/80 text-sm leading-relaxed"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: idx * 0.15 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          {item.description}
                        </motion.p>
                      </div>

                      <motion.div
                        className="flex items-center text-[#D4AF37] font-medium"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.15 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="mr-2">探索</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>

                    <motion.div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </main>
  )
}
