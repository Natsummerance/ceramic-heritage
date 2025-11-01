import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

const maoFont = localFont({
  src: "../public/fonts/maozedong-1.ttf",
  variable: "--font-mao",
  display: "swap",
})

export const metadata: Metadata = {
  title: "数字红色瓷典 - 毛泽东与醴陵陶瓷",
  description: "用当代前端语言讲一段 1950-1970 年代毛泽东与醴陵釉下五彩的往事",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body className={`font-sans antialiased ${maoFont.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
