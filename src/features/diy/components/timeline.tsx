import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineLine,
} from "@/components/ui/timeline"

export default function DIYIntruction() {
  return (
    <Timeline positions="left" className="max-w-prose">
      <TimelineItem status="done">
        <TimelineHeading side="right">1. Material sammeln</TimelineHeading>
        <TimelineDot status="done" />
        <TimelineLine done />
        <TimelineContent side="right">
          Bevor du mit dem Bau deines Igelhauses beginnst, solltest du alle benötigten Materialien sammeln. Unten
          findest du eine Tabelle mit den erforderlichen Materialien und Werkzeugen.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="default">
        <TimelineHeading side="right">2. Bodenplatte zuschneiden</TimelineHeading>
        <TimelineDot status="current" />
        <TimelineLine />
        <TimelineContent side="right">
          Schneide die Bodenplatte (aus wasserfestem Holz, z.B. Siebdruckplatte) auf die Maße 30 x 30 cm zu. Diese dient
          als stabile Basis für das Igelhaus.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="default">
        <TimelineHeading side="right">3. Seitenwände vorbereiten</TimelineHeading>
        <TimelineDot status="default" />
        <TimelineLine />
        <TimelineContent side="right">
          Schneide zwei Seitenwände mit einer Höhe von 20 cm und einer Länge von 30 cm zu. Diese sollten ebenfalls aus
          wetterbeständigem Holz bestehen.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="default">
        <TimelineHeading side="right">4. Front- und Rückwand zuschneiden</TimelineHeading>
        <TimelineDot status="default" />
        <TimelineLine />
        <TimelineContent side="right">
          Für die Front- und Rückwand benötigst du zwei weitere Holzbretter, jeweils 20 cm hoch und 30 cm lang. In die
          Frontwand kannst du einen Eingang mit einem Durchmesser von etwa 12 cm sägen.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="default">
        <TimelineHeading side="right">5. Wände montieren</TimelineHeading>
        <TimelineDot status="default" />
        <TimelineLine />
        <TimelineContent side="right">
          Befestige die zugeschnittenen Wände an der Bodenplatte, indem du Nägel oder Schrauben verwendest. Achte
          darauf, dass die Ecken rechtwinklig sind, um ein stabiles Gehäuse zu schaffen.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="default">
        <TimelineHeading side="right">6. Dach befestigen</TimelineHeading>
        <TimelineDot status="default" />
        <TimelineLine />
        <TimelineContent side="right">
          Das Dach sollte etwas größer als die Grundfläche sein, damit Regenwasser ablaufen kann. Verwende ein Brett von
          etwa 35 x 35 cm und befestige es mit Scharnieren an einer der Seitenwände, sodass es aufklappbar ist.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="default">
        <TimelineHeading side="right">7. Igelhaus wetterfest machen</TimelineHeading>
        <TimelineDot status="default" />
        <TimelineLine />
        <TimelineContent side="right">
          Behandle das Holz mit einem ungiftigen Wetterschutzmittel, um das Igelhaus vor Feuchtigkeit und Schimmel zu
          schützen. Achte darauf, dass das Mittel keine Schadstoffe enthält, die den Igeln schaden könnten.
        </TimelineContent>
      </TimelineItem>

      <TimelineItem status="default">
        <TimelineHeading side="right">8. Aufstellen und einrichten</TimelineHeading>
        <TimelineDot status="default" />
        <TimelineLine />
        <TimelineContent side="right">
          Stelle das Igelhaus an einem ruhigen, geschützten Ort im Garten auf, idealerweise in der Nähe von Sträuchern
          oder einer Hecke. Fülle den Innenraum mit trockenem Laub oder Stroh, damit der Igel ein gemütliches Nest bauen
          kann.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}
