"use client"
import { useEffect } from "react"

export default function ScrollSnapper() {
  useEffect(() => {
    const scrollContainer = document.querySelector("body")
    let isScrolling = false

    const onWheel = (
      e:
        | WheelEvent
        | {
            deltaY: number
          }
    ) => {
      if (isScrolling) return

      const delta = e.deltaY
      if (delta > 0) {
        scrollContainer?.scrollBy({ top: window.innerHeight, behavior: "smooth" })
      } else {
        scrollContainer?.scrollBy({ top: -window.innerHeight, behavior: "smooth" })
      }

      isScrolling = true
      setTimeout(() => {
        isScrolling = false
      }, 1000) // Adjust the timeout to control scroll speed
    }

    scrollContainer?.addEventListener("wheel", onWheel)

    return () => {
      scrollContainer?.removeEventListener("wheel", onWheel) // Clean up event listener
    }
  }, [])
  return null
}
