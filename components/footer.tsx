"use client"

import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="w-full bg-[#9B1D2B] text-white py-12">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold mb-2">瓷火不息，红韵长存</h3>
            <p className="text-sm opacity-90">23级数字产品策划小组：陈显巍，刘夏天</p>
          </div>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <a href="#" className="hover:opacity-80 transition-opacity">
              微博
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              小红书
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              微信
            </a>
          </motion.div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-xs opacity-75">
          <p>© 2025 数字红色瓷典 | 保留所有权利</p>
        </div>
      </div>
    </footer>
  )
}
