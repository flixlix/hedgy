"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function WhyAmIHere() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between"
    >
      <Image
        src="/assets/illu.png"
        alt="Illustration of a hedgehog shelter"
        className="w-full object-contain px-10 md:w-auto md:px-0"
        width={400}
        height={400}
      />
      <section className="prose me-auto max-w-prose">
        <h2>Warum bin ich hier?</h2>
        <p>
          Dieses Igelhaus ist ein Ort, an dem Igel, die aus unterschiedlichen Gründen nicht in der freien Natur
          überleben können, ein Zuhause finden. Wir bieten artgerechte Haltung und Pflege für Igel, die aus
          unterschiedlichen Gründen nicht in der freien Natur überleben können.
        </p>
      </section>
    </motion.div>
  )
}
