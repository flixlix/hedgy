"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Percent, Thermometer, TrendingUp } from "lucide-react"
import Image from "next/image"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 pb-20">
      <h1 className="text-3xl font-semibold">Igelhaus von Peter</h1>
      <p className="text-sm text-muted-foreground">
        Peter ist ein Igel, der in einem Igelhaus lebt. Hier sind einige Informationen über das Igelhaus und Peter.
      </p>
      <div className="mt-4 grid grid-cols-3 items-start gap-4">
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <SecurityCamera />
          <TemperatureNumber />
          <HumidityNumber />
        </div>
        <div className="col-span-1 grid grid-cols-1 gap-4">
          <PresenceCard />
          <Temperature />
          <Humidity />
        </div>
      </div>
    </div>
  )
}

function TemperatureNumber() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>17,8 °C</CardTitle>
        <CardDescription className="inline-flex items-center gap-1">
          Temperatur im Igelhaus
          <Thermometer className="size-4" />
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

function HumidityNumber() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>17,8 %</CardTitle>
        <CardDescription className="inline-flex items-center gap-1">
          Luftfeuchtigkeit im Igelhaus
          <Percent className="size-4" />
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

function Temperature() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]
  const chartConfig = {
    desktop: {
      label: "Innen",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Außen",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader>
        <CardTitle>Temperatur</CardTitle>
        <CardDescription>Temperatur im und außerhalb vom Igelhaus in den letzten 6 Monaten</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Tendenz steigend um 5.2% diesen Monat <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">Januar - Juni 2024</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

function Humidity() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]
  const chartConfig = {
    desktop: {
      label: "Innen",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Außen",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader>
        <CardTitle>Luftfeuchtigkeit</CardTitle>
        <CardDescription>Luftfeuchtigkeit im und außerhalb vom Igelhaus in den letzten 6 Monaten</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function SecurityCamera() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Viedoüberwachung</CardTitle>
        <CardDescription>Der Igel hat sich in der Nacht bewegt und wurde von der Kamera aufgenommen.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex aspect-video items-center justify-center overflow-hidden rounded-lg">
          <Image src="/hedgehog-security-footage.png" width={1920} height={1080} alt="Security Camera Footage" />
        </div>
      </CardContent>
    </Card>
  )
}

function PresenceCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="relative">
          Anwesend
          <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-green-500" />
        </CardTitle>
        <CardDescription>Die Anwesenheit von Igel</CardDescription>
      </CardHeader>
    </Card>
  )
}
