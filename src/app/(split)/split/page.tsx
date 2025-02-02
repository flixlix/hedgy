"use client"

import hedgehogImg from "@/features/split/assets/hedgehog.png"
import { motion, type MotionValue, useInView, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function SplitPage() {
  return (
    <div className="grid flex-1">
      <Image src={hedgehogImg} alt="Hedgy the hedgehog" className="h-screen object-cover" width={1092} height={1000} />
      <Image src={hedgehogImg} alt="Hedgy the hedgehog" className="h-screen object-cover" width={1092} height={1000} />
      <Parallax />
    </div>
  )
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function ParallaxImage({ id }: { id: number }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <section className="relative flex h-screen snap-start items-center justify-center">
      <div ref={ref} className="m-5 h-[200px] w-[150px] overflow-hidden bg-gray-100 sm:h-[400px] sm:w-[300px]">
        <Image
          src={hedgehogImg}
          alt="A London skyscraper"
          className="h-full w-full rounded-br-3xl rounded-tl-3xl object-cover"
          width={300}
          height={400}
        />
      </div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
        className="absolute left-[calc(50%+120px)] top-[calc(50%-25px)] inline-block text-5xl font-bold text-[#4ff0b7]"
      >{`#00${id}`}</motion.h2>
    </section>
  )
}

function Parallax() {
  const target = useRef(null)
  const inView = useInView(target, { margin: "0px 0px 0px 0px", amount: "some" })
  const inViewValue = inView ? 1 : 0

  const { scrollYProgress } = useScroll({ target, offset: ["start start", "end end"] })
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div id="example" ref={target}>
      {[1, 2, 3, 4, 5].map((image) => (
        <ParallaxImage key={image} id={image} />
      ))}
      <motion.figure className="fixed bottom-12 left-12 h-20 w-20" style={{ opacity: inViewValue }}>
        <svg className="h-[75px] w-[75px] -rotate-90 stroke-[#4ff0b7]" viewBox="0 0 100 100">
          <circle className="fill-none stroke-[#4ff0b7] opacity-20" cx="50" cy="50" r="32" pathLength="1" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="fill-none stroke-[5px]"
            style={{ pathLength }}
          />
        </svg>
      </motion.figure>
      <StyleSheet />
    </div>
  )
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style jsx global>{`
      html {
        scroll-snap-type: y mandatory;
      }

      .progress {
        position: fixed;
        left: 0;
        right: 0;
        height: 5px;
        background: #4ff0b7;
        bottom: 50px;
        transform: scaleX(0);
      }
    `}</style>
  )
}
