import ScrollCTA from "@/components/scroll-cta"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import AnimationHedgehog from "@/features/landing/components/animation-hedgehog"
import HedgehogsInDanger from "@/features/landing/components/in-danger"
import MainQuote from "@/features/landing/components/main-quote"
import Map from "@/features/landing/components/map"
import Parallax from "@/features/landing/components/parallax"
import ScrollSnapper from "@/features/landing/components/scroll-snapper"
import WhyAmIHere from "@/features/landing/components/why-here"
import Link from "next/link"

export default function LandingPage() {
  return (
    <main className="flex flex-1 flex-col pb-20">
      <Hero />
      <ScrollSnapper />
      <MainQuote />
      <Parallax />
      <HedgehogsInDanger />
      <WhyAmIHere />
      <Map />
      <ScrollCTA />
    </main>
  )
}

function Hero() {
  return (
    <div className="relative flex snap-center flex-col-reverse justify-end gap-10 py-10 md:top-[-58px] md:min-h-[calc(100vh-116px)] md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col items-start gap-6">
        <section className="prose prose-h1:mb-2 prose-p:mt-2 prose-p:leading-normal">
          <h1>{siteConfig.title} - das Igelhaus</h1>
          <p className="text-balance">
            Unser Igelhaus ist ein Ort, an dem unsere stacheligen Freunde ein Zuhause finden. Wir bieten artgerechte
            Haltung und Pflege für Igel, die aus unterschiedlichen Gründen nicht in der freien Natur überleben können.
          </p>
        </section>
        <div className="flex gap-2">
          <Button asChild>
            <Link href="/diy">Eigenes Igelhaus bauen</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/studies">Mehr erfahren</Link>
          </Button>
        </div>
      </div>
      <AnimationHedgehog className="pointer-events-none w-full max-w-80 md:max-w-max" />
    </div>
  )
}
