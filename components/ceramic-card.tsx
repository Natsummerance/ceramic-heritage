"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface CeramicCardProps {
  title: string
  year: string
  image: string
  onClick?: () => void
}

export function CeramicCard({ title, year, image, onClick }: CeramicCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-lg cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-200">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Gold border on hover */}
        <motion.div
          className="absolute inset-0 border-2 border-[#D4AF37] opacity-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Text overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm opacity-90">{year}</p>
      </div>
    </motion.div>
  )
}
