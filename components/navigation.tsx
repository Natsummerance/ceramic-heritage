"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const navItems = [
  { label: "首页", href: "/" },
  { label: "红窑文史", href: "/born" },
  { label: "毛瓷故事", href: "/story" },
  { label: "名人堂", href: "/masters" },
  { label: "醴瓷精神", href: "/legacy" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-8 transition-all duration-300 ${
        isScrolled ? "bg-white/92 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className={`text-xl font-bold transition-colors ${isScrolled ? "mao-red-text" : "text-white"}`}>
          红窑瓷典
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors relative pb-1 ${
                pathname === item.href
                  ? isScrolled
                    ? "mao-red-text"
                    : "text-white font-bold"
                  : isScrolled
                    ? "text-foreground hover:mao-red-text"
                    : "text-white hover:text-white/80"
              }`}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]"
                  layoutId="underline"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}
