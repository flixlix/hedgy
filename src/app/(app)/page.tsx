import ScrollCTA from "@/components/scroll-cta"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import HedgehogsInDanger from "@/features/landing/components/in-danger"
import Map from "@/features/landing/components/map"
import Parallax from "@/features/landing/components/parallax"
import WhyAmIHere from "@/features/landing/components/why-here"
import Image from "next/image"

export default function LandingPage() {
  return (
    <main className="flex flex-1 flex-col pb-20">
      <Hero />
      <Parallax />
      <WhyAmIHere />
      <HedgehogsInDanger />
      <Map />
      <ScrollCTA />
    </main>
  )
}

function Hero() {
  return (
    <div className="relative flex flex-col-reverse justify-end gap-10 py-10 md:top-[-58px] md:min-h-[calc(100vh-116px)] md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col items-start gap-6">
        <section className="prose prose-h1:mb-2 prose-p:mt-2 prose-p:leading-normal">
          <h1>{siteConfig.title} - das Igelhaus</h1>
          <p className="text-balance">
            Unser Igelhaus ist ein Ort, an dem unsere stacheligen Freunde ein Zuhause finden. Wir bieten artgerechte
            Haltung und Pflege für Igel, die aus unterschiedlichen Gründen nicht in der freien Natur überleben können.
          </p>
        </section>
        <div className="flex gap-2">
          <Button>Eigenes Igelhaus bauen</Button>
          <Button variant="ghost">Mehr erfahren</Button>
        </div>
      </div>
      <Image
        src="/assets/hero-hedgehog.png"
        alt="Hedgy the hedgehog"
        className="mx-auto w-full max-w-80 md:w-auto md:max-w-max"
        width={400}
        height={400}
      />
    </div>
  )
}
