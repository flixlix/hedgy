import { Button } from "@/components/ui/button"
import { Fullscreen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="container flex min-h-screen max-w-screen-xl flex-col px-6 lg:px-20">
      {/* <header className="sticky inset-x-0 top-2">
        <div className="flex min-h-10 items-center justify-between rounded-xl border bg-[#F3E3CF]/80 px-4 backdrop-blur-sm">
          <Link href="/" className="font-bold">
            Hedgy
          </Link>
        </div>
      </header> */}
      <main className="flex flex-1 flex-col gap-20 pb-20">
        <Hero />
        <WhyAmIHere />
        <HedgehogsInDanger />
        <Map />
      </main>
      <footer className="border-t py-10">
        <div className="flex justify-center gap-4">
          <Button variant="ghost">Impressum</Button>
          <Button variant="ghost">Datenschutz</Button>
          <Button variant="ghost">Kontakt</Button>
        </div>
      </footer>
    </div>
  )
}

function Hero() {
  return (
    <div className="flex flex-col-reverse justify-end gap-10 py-10 md:min-h-screen md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col items-start gap-6">
        <section className="prose prose-h1:mb-2 prose-p:mt-2 prose-p:leading-normal">
          <h1>Hedgy - das Igelhaus</h1>
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
        className="mx-auto w-full max-w-80 md:me-10 md:w-auto md:max-w-max"
        width={400}
        height={400}
      />
    </div>
  )
}

function WhyAmIHere() {
  return (
    <div className="flex flex-col gap-16 md:flex-row md:items-center md:justify-between">
      <Image
        src="/assets/illu.png"
        alt="Illustration of a hedgehog shelter"
        className="w-full px-10 md:w-auto md:px-0"
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
    </div>
  )
}

function HedgehogsInDanger() {
  return (
    <div className="flex flex-col-reverse gap-16 md:flex-row md:items-center md:justify-between">
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
    </div>
  )
}

function Map() {
  return (
    <div className="mx-auto flex min-h-screen w-auto flex-col items-start justify-center gap-2">
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
    </div>
  )
}
