"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronsDown } from "lucide-react"
import { useEffect, useState } from "react"

const SCROLL_TRIGGER = 50

export default function ScrollCTA({ className }: { className?: string }) {
  const isMobile = useIsMobile()
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_TRIGGER) {
        setHasScrolled(true)
      } else {
        setHasScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <AnimatePresence>
      {!hasScrolled && !isMobile && (
        <motion.div
          className={cn("fixed inset-x-0 bottom-4 flex h-16 flex-col items-center justify-center gap-y-2", className)}
          initial={{ opacity: 0, filter: "blur(4px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(4px)" }}
        >
          <p className="text-xs font-semibold text-muted-foreground">Scrolle runter um mehr zu sehen</p>
          <ChevronsDown className="animate-bounce motion-reduce:animate-none" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
