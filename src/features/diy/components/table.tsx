import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function BOMDIYHedgehogShelter() {
  return (
    <Card className="p-4">
      <Table>
        <TableCaption>Materialliste für das Igelhaus</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Material</TableHead>
            <TableHead>Menge</TableHead>
            <TableHead>Bemerkung</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Wasserfestes Holz (z.B. Siebdruckplatte)</TableCell>
            <TableCell>
              1x Bodenplatte (30x30 cm), 2x Seitenwände (20x30 cm), 2x Front- und Rückwände (20x30 cm)
            </TableCell>
            <TableCell>Für Basis, Seiten- und Rückwände, wetterfest</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Holzplatte für das Dach</TableCell>
            <TableCell>1x Dach (35x35 cm)</TableCell>
            <TableCell>Größer als das Haus für Wasserabfluss</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Scharnier</TableCell>
            <TableCell>2 Stück</TableCell>
            <TableCell>Zum Aufklappen des Dachs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Nägel oder Schrauben</TableCell>
            <TableCell>Genügend für Montage</TableCell>
            <TableCell>Zum Befestigen der Wände und des Dachs</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Wetterschutzmittel (ungiftig)</TableCell>
            <TableCell>1 Dose</TableCell>
            <TableCell>Schutz vor Feuchtigkeit und Schimmel</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Trockenes Laub oder Stroh</TableCell>
            <TableCell>Ausreichend für den Innenraum</TableCell>
            <TableCell>Zum Einrichten des Nests</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Card>
  )
}
