"use client"

import { useIsMobile } from "@/hooks/use-mobile"
import { motion, type MotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

const images: { src: string; alt: string; title: string; description: string }[] = [
  {
    src: "/assets/headlights.jpg",
    alt: "headlights at night",
    title: "Straßenverkehr",
    description:
      "Igel sind in Deutschland gefährdet. Einer der Gründe dafür ist der Straßenverkehr. Jedes Jahr werden viele Igel von Autos überfahren.",
  },
  {
    src: "/assets/forest-motion.jpg",
    alt: "life room",
    title: "Verlust von Lebensraum",
    description: "Igel finden in der freien Natur immer weniger Unterschlupf und Nahrung.",
  },
  {
    src: "/assets/mowing-robot.jpg",
    alt: "mow robots",
    title: "Mähroboter",
    description:
      "Automatische Mähroboter können für Igel eine große Gefahr darstellen, besonders in den Abend- und Nachtstunden, wenn die Tiere aktiv sind. Da Mähroboter oft leise und ohne menschliche Überwachung arbeiten, besteht das Risiko, dass sie Igel verletzen oder töten, wenn diese sich im Gras oder Gebüsch aufhalten.",
  },
  {
    src: "/assets/climate-change.jpg",
    alt: "climate change",
    title: "Klimawandel",
    description:
      "Durch die milderen Winter verlieren Igel ihren natürlichen Rhythmus für den Winterschlaf. Dies kann zu Schwächung und Tod führen, da die Tiere nicht genug Fettreserven aufgebaut haben, um den Winter zu überstehen.",
  },
  {
    src: "/assets/backyard.jpg",
    alt: "clean gardens",
    title: "Gärten ohne Unterschlupfmöglichkeiten",
    description:
      "Viele Gärten sind heute so gestaltet, dass sie für Igel keinen geeigneten Lebensraum bieten. Die Tiere finden keine Unterschlupfmöglichkeiten und Nahrung.",
  },
  {
    src: "/assets/garden-fence.jpg",
    alt: "garden fence",
    title: "Zäune und Mauern um Grundstücke",
    description:
      "Zäune und Mauern können für Igel unüberwindbare Hindernisse darstellen. Die Tiere finden keinen Zugang zu den Gärten und Grundstücken, in denen sie Nahrung und Unterschlupf finden könnten.",
  },
]

export default function Parallax() {
  const target = useRef(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const isMobile = useIsMobile()

  const { scrollYProgress } = useScroll({ target, offset: ["start 100vh", "end end"] })
  const { scrollYProgress: scrollYProgressOffset } = useScroll({ target, offset: ["start end", "end 90vh"] })
  const inViewValue = useTransform(scrollYProgressOffset, [0, 0.1, 0.99, 1], [0, 1, 1, 0])
  const inViewValueSpring = useSpring(inViewValue, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const { scrollYProgress: headingScrollYProgress } = useScroll({
    target: headingRef,
    offset: ["center end", "center center"],
  })
  const transformHeadingScrollY = useTransform(headingScrollYProgress, [0.7, 1], [0, 1])
  const titleOpacity = useSpring(transformHeadingScrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  const { scrollYProgress: headingContainerScrollY } = useScroll({
    target: target,
    offset: ["end end", "end center"],
  })
  const headingContainerScrollYOffset = useTransform(headingContainerScrollY, [0, 1], [1, 0])
  const headingContainerOpacity = useSpring(headingContainerScrollYOffset, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div id="example" className="relative" ref={target}>
      <motion.div className="prose sticky left-0 top-10 z-10 md:top-40" style={{ opacity: headingContainerOpacity }}>
        <motion.h2 style={{ opacity: titleOpacity }}>Warum wir für Igel bauen</motion.h2>
      </motion.div>
      {images.map((image, index) => (
        <ParallaxImage key={image.alt} id={index + 1} headingRef={index === 0 ? headingRef : undefined} {...image} />
      ))}
      {!isMobile && (
        <div className="container fixed inset-x-0 bottom-12 max-w-screen-xl px-6 lg:px-20">
          <motion.figure className="h-20 w-20" style={{ opacity: inViewValueSpring }}>
            <svg className="h-[75px] w-[75px] -rotate-90 stroke-[#b06c2d]" viewBox="0 0 100 100">
              <circle className="fill-none stroke-[#b06c2d] opacity-20" cx="50" cy="50" r="32" pathLength="1" />
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
        </div>
      )}
      <StyleSheet />
    </div>
  )
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function ParallaxImage({
  id,
  headingRef,
  src,
  title,
  description,
  alt,
}: {
  id: number
  headingRef?: React.RefObject<HTMLHeadingElement | null>
  src: string
  title: string
  description: string
  alt: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)
  const contentY = useParallax(scrollYProgress, 100)
  const isMobile = useIsMobile()

  return (
    <section className="mx-auto flex h-screen max-w-screen-md snap-start flex-col items-center justify-center gap-10 overflow-x-clip md:flex-row md:justify-between">
      <div className="relative">
        <div ref={ref} className="size-[300px] overflow-hidden bg-gray-100">
          <Image
            src={src}
            alt={alt}
            className="h-full w-full object-cover opacity-90 contrast-75 saturate-[80%]"
            width={300}
            height={300}
          />
        </div>
        <motion.h2
          ref={headingRef}
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          style={{ y: isMobile ? 0 : y }}
          className="absolute -right-4 -top-8 inline-block text-5xl font-bold text-[#b06c2d] md:left-[calc(50%+100px)] md:right-0 md:top-[calc(0%-25px)]"
        >{`#0${id}`}</motion.h2>
      </div>
      <motion.div className="prose" style={{ y: isMobile ? 0 : contentY }}>
        <h2>{title}</h2>
        <p>{description}</p>
      </motion.div>
    </section>
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
