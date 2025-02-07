"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function WhyAmIHere() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-52 flex snap-center flex-col gap-16 md:flex-row md:items-center md:justify-between"
    >
      <Image
        src="/assets/illu.png"
        alt="Illustration of a hedgehog shelter"
        className="w-full object-contain px-10 md:w-auto md:px-0"
        width={400}
        height={400}
      />
      <section className="prose me-auto max-w-prose">
        <h2>Du möchtest auch helfen?</h2>
        <p>
          Du möchtest auch ein Igelhaus bauen und den Igeln helfen? Dann bist du hier genau richtig! Wir zeigen dir, wie
          du ein Igelhaus bauen kannst und was du dabei beachten musst. Schau dir unsere Bauanleitung an und werde Teil
          der Igelhilfe.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/diy" className="no-underline">
            Eigenes Igelhaus bauen
          </Link>
        </Button>
      </section>
    </motion.div>
  )
}
