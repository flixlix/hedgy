"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Fullscreen } from "lucide-react"
import Link from "next/link"

export default function Map() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mx-auto flex min-h-screen w-auto flex-col items-start justify-center gap-4"
    >
      <section className="prose mb-4">
        <h2>Wo sind unsere Häuser?</h2>
        <p>Unser Igelhäuser sind in ganz Deutschland verteilt. Hier findest du eine Karte mit allen Standorten.</p>
      </section>
      <iframe
        width="670"
        height="350"
        src="https://www.openstreetmap.org/export/embed.html?bbox=9.651317596435549%2C48.74985082796366%2C9.90846633911133%2C48.861778610526834&amp;layer=mapnik&amp;marker=48.80584594616148%2C9.779891967773438"
        className="mx-auto max-w-full border-none outline-none focus-visible:outline-none"
      ></iframe>
      <Button variant="link" className="ms-auto" asChild>
        <Link href="https://www.openstreetmap.org/?mlat=48.80585&amp;mlon=9.77989#map=13/48.80585/9.77989">
          <Fullscreen />
          Große Karte anzeigen
        </Link>
      </Button>
    </motion.div>
  )
}
