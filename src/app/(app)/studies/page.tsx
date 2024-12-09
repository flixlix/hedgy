import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function StudiesPage() {
  return (
    <main className="flex flex-1 flex-col gap-20 pb-20 md:min-h-[calc(100vh-116px)] md:pb-[58px]">
      <section className="prose prose-h1:mb-2 prose-p:mt-2 prose-p:leading-normal">
        <h1>Studien zu Igeln</h1>
        <p className="text-balance">
          Laut verschiedener Studien sind Igel in Deutschland gefährdet. Im Jahr 2024 wurde der Igel zum Tier des Jahres
          ernannt. Hier finden Sie einige Studien zu Igeln.
        </p>
      </section>

      <ul className="flex flex-col gap-5">
        <li className="flex w-full items-start justify-between gap-10">
          <div className="flex max-w-prose flex-col gap-2">
            <h2 className="text-lg font-bold">Gefährdung von Igeln durch Mähroboter</h2>
            <p className="line-clamp-3 text-muted-foreground">
              Viele Igel werden in Igelstationen bzw. bei Tierärzten mit verschiedenen Arten von Schnittverletzungen
              einge- liefert. Obwohl nicht genau quantifi- ziert, wächst die Besorgnis, dass eine zunehmende Anzahl
              solcher Vor- kommnisse durch Roboter-Rasen- mäher verursacht worden sein könnte. Wenn diese Bedrohung
              durch Roboter-Rasenmäher für die Igel real ist, dann wäre dies in der Tat ein Grund zur Sorge, da der
              globale Markt für diese Geräte dramatisch expandiert und im Jahr 2020 einen Umsatz von 1,3 Milliarden
              US-Dollar erreichte mit einer voraussichtlich jährlichen Wachstumsrate von mehr als 12 Prozent im Zeitraum
              2019 bis 2025.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="https://igelzentrum.ch/images/Doc/rasenroboter-im-test.pdf">
              Zur Studie
              <ExternalLink />
            </Link>
          </Button>
        </li>
        <li>
          <Separator />
        </li>
        <li className="flex w-full items-start justify-between gap-10">
          <div className="flex max-w-prose flex-col gap-2">
            <h2 className="text-lg font-bold">Gefährdung von Igeln durch Mähroboter</h2>
            <p className="line-clamp-3 text-muted-foreground">
              Viele Igel werden in Igelstationen bzw. bei Tierärzten mit verschiedenen Arten von Schnittverletzungen
              einge- liefert. Obwohl nicht genau quantifi- ziert, wächst die Besorgnis, dass eine zunehmende Anzahl
              solcher Vor- kommnisse durch Roboter-Rasen- mäher verursacht worden sein könnte. Wenn diese Bedrohung
              durch Roboter-Rasenmäher für die Igel real ist, dann wäre dies in der Tat ein Grund zur Sorge, da der
              globale Markt für diese Geräte dramatisch expandiert und im Jahr 2020 einen Umsatz von 1,3 Milliarden
              US-Dollar erreichte mit einer voraussichtlich jährlichen Wachstumsrate von mehr als 12 Prozent im Zeitraum
              2019 bis 2025.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="https://igelzentrum.ch/images/Doc/rasenroboter-im-test.pdf">
              Zur Studie
              <ExternalLink />
            </Link>
          </Button>
        </li>
        <li>
          <Separator />
        </li>
        <li className="flex w-full items-start justify-between gap-10">
          <div className="flex max-w-prose flex-col gap-2">
            <h2 className="text-lg font-bold">Gefährdung von Igeln durch Mähroboter</h2>
            <p className="line-clamp-3 text-muted-foreground">
              Viele Igel werden in Igelstationen bzw. bei Tierärzten mit verschiedenen Arten von Schnittverletzungen
              einge- liefert. Obwohl nicht genau quantifi- ziert, wächst die Besorgnis, dass eine zunehmende Anzahl
              solcher Vor- kommnisse durch Roboter-Rasen- mäher verursacht worden sein könnte. Wenn diese Bedrohung
              durch Roboter-Rasenmäher für die Igel real ist, dann wäre dies in der Tat ein Grund zur Sorge, da der
              globale Markt für diese Geräte dramatisch expandiert und im Jahr 2020 einen Umsatz von 1,3 Milliarden
              US-Dollar erreichte mit einer voraussichtlich jährlichen Wachstumsrate von mehr als 12 Prozent im Zeitraum
              2019 bis 2025.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="https://igelzentrum.ch/images/Doc/rasenroboter-im-test.pdf">
              Zur Studie
              <ExternalLink />
            </Link>
          </Button>
        </li>
        <li>
          <Separator />
        </li>
        <li className="flex w-full items-start justify-between gap-10">
          <div className="flex max-w-prose flex-col gap-2">
            <h2 className="text-lg font-bold">Gefährdung von Igeln durch Mähroboter</h2>
            <p className="line-clamp-3 text-muted-foreground">
              Viele Igel werden in Igelstationen bzw. bei Tierärzten mit verschiedenen Arten von Schnittverletzungen
              einge- liefert. Obwohl nicht genau quantifi- ziert, wächst die Besorgnis, dass eine zunehmende Anzahl
              solcher Vor- kommnisse durch Roboter-Rasen- mäher verursacht worden sein könnte. Wenn diese Bedrohung
              durch Roboter-Rasenmäher für die Igel real ist, dann wäre dies in der Tat ein Grund zur Sorge, da der
              globale Markt für diese Geräte dramatisch expandiert und im Jahr 2020 einen Umsatz von 1,3 Milliarden
              US-Dollar erreichte mit einer voraussichtlich jährlichen Wachstumsrate von mehr als 12 Prozent im Zeitraum
              2019 bis 2025.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="https://igelzentrum.ch/images/Doc/rasenroboter-im-test.pdf">
              Zur Studie
              <ExternalLink />
            </Link>
          </Button>
        </li>
      </ul>
    </main>
  )
}
