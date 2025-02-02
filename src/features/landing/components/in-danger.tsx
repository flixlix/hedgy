"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function HedgehogsInDanger() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-20 flex snap-center flex-col-reverse gap-16 md:flex-row md:items-center md:justify-between"
    >
      <section className="prose me-auto max-w-prose">
        <h2>Weiter informieren</h2>
        <p>
          Du möchtest mehr über die Gefahren für Igel erfahren und wie du ihnen helfen kannst? Dann schau dir unsere
          Sammlung an Studien und Dokumenten an. Hier findest du wissenschaftliche Arbeiten und Berichte, die sich mit
          den Gefahren für Igel beschäftigen.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/studies" className="no-underline">
            Studien sehen
          </Link>
        </Button>
      </section>
      <Image
        src="/assets/documents.png"
        alt="Illustration of a hedgehog shelter"
        className="w-full px-10 md:w-auto md:px-0"
        width={400}
        height={400}
      />
    </motion.div>
  )
}
