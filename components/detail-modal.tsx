"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

interface DetailModalProps {
  isOpen: boolean
  onClose: () => void
  onPrevious?: () => void
  onNext?: () => void
  children: React.ReactNode
}

export function DetailModal({ isOpen, onClose, onPrevious, onNext, children }: DetailModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          {/* Previous button */}
          {onPrevious && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onPrevious()
              }}
              className="absolute left-4 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
          )}

          {/* Modal content */}
          <motion.div
            className="relative w-[90vw] max-w-5xl max-h-[85vh] bg-white rounded-lg overflow-hidden shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-md transition-colors"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[85vh]">{children}</div>
          </motion.div>

          {/* Next button */}
          {onNext && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onNext()
              }}
              className="absolute right-4 z-10 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
