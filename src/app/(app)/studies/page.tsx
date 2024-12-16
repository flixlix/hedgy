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
            <h2 className="text-lg font-bold">Elektrische Gartengeräte</h2>
            <p className="line-clamp-3 text-muted-foreground">
              Sie machen vor Igeln nicht halt und sind eine tödliche Gefahr für Igel. Überlebende Tiere schleppen sich
              schwer verletzt ins Gebüsch, wo sie jämmerlich sterben müssen, wenn sie nicht gefunden werden. Wenn schon
              ein Mähroboter zum Einsatz kommen muss, dann nur unter Aufsicht und vor allem nicht in der Dämmerung oder
              in der Nacht!
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="https://www.igelverein.de/gefahren-fuer-den-igel.html">
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
            <h2 className="text-lg font-bold">Der Igel ist vom Aussterben bedroht</h2>
            <p className="line-clamp-3 text-muted-foreground">
              Der Igel steht in vielen europäischen Ländern unter strengem Naturschutz. Einst waren die stachligen Tiere
              in England weit verbreitet, heutzutage gibt es noch etwa eine Million Igel, was bereits 25 Prozent weniger
              sind als noch in der letzten Dekade. In 15 Jahren könnten laut einer neuen Studie alle Igel in England
              ausgestorben sein. Die in Deutschland vorkommenden Igel sind zwar nicht direkt vom Aussterben bedroht,
              ihre Bestandsdichte ist jedoch rückläufig. Die moderne Land- und Forstwirtschaft hat seinen natürlichen
              Lebensraum weitgehend zerstört. Auch der aufgeräumte Hausgarten erlaubt selten eine geeignete Nist oder
              Überwinterungsmöglichkeit. Menschen vernichten konsequent seine Nahrungsgrundlagen durch das Ausbringen
              von Giften und Pflanzenschutzmitteln. Die Nahrung der Igel besteht in erster Linie aus Wirbellosen
              (beispielsweise Insekten und deren Larven sowie Ringelwürmern). Igel, die zu Beginn der Frostperiode nicht
              mindestens 500 g wiegen, schaffen den Winterschlaf in freier Natur nicht und müssen verhungern. Jahr für
              Jahr trifft dieses Los unzählige Igel, die vom Muttertier im Herbst zu spät geboren werden und nun einfach
              keine Zeit mehr haben, sich dieses Gewicht bis zum Winter "anzufressen".
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="https://www.boerenlandvogels.nl/content/der-igel-ist-vom-aussterben-bedroht">
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
            <h2 className="text-lg font-bold">Igel erstmals als bedrohte Art gelistet</h2>
            <p className="line-clamp-3 text-muted-foreground">
              Immer mehr versiegelte Flächen, Schottergärten, intensive Landwirtschaft: Für Igel wird es eng. Erstmals
              tauchen die kleinen Winterschläfer in der Roten Liste der bedrohten Arten auf.
            </p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="https://www.focus.de/wissen/natur/igel-erstmals-als-bedrohte-art-gelistet-so-koennen-sie-sie-noch-retten_id_260431742.html">
              Zur Studie
              <ExternalLink />
            </Link>
          </Button>
        </li>
      </ul>
    </main>
  )
}
