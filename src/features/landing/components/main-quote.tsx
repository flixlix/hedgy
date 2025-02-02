"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useRef } from "react"

export default function MainQuote() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] })
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
  return (
    <motion.div
      ref={ref}
      className="mx-auto -mt-20 flex min-h-screen snap-center flex-col justify-center gap-2"
      style={{ opacity }}
    >
      Wichtig zu wissen:
      <span className="ps-8 text-2xl font-bold">
        Die größte Gefährdung ist der <span className="text-destructive">Mensch</span>.
      </span>
      <ArrowDown className="animate-bounce mx-auto mt-10" />
    </motion.div>
  )
}
