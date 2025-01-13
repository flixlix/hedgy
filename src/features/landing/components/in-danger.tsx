"use client"

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
      className="flex flex-col-reverse gap-16 md:flex-row md:items-center md:justify-between"
    >
      <section className="prose me-auto max-w-prose">
        <h2>Warum bauen wir für Igel?</h2>
        <p>
          Laut{" "}
          <Link href="https://www.nationalgeographic.de/tiere/2024/04/igel-in-deutschland-das-leise-verschwinden">
            National Geographic
          </Link>{" "}
          sind Igel in Deutschland gefährdet. Die Gründe dafür sind vielfältig. Einer davon ist der Verlust von
          Lebensraum. Igel finden in der freien Natur immer weniger Unterschlupf und Nahrung. Unser Igelhaus soll ein
          kleiner Beitrag dazu sein, diesen stacheligen Freunden zu helfen.
        </p>
      </section>
      <Image
        src="https://static.nationalgeographic.de/files/styles/image_3200/public/igelhilfe-tierschutz.webp?w=1600&h=900"
        alt="Illustration of a hedgehog shelter"
        className="w-full px-10 md:w-auto md:px-0"
        width={400}
        height={400}
      />
    </motion.div>
  )
}
