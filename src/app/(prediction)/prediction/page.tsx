/* eslint-disable @next/next/no-img-element */
"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DoorClosed, DoorOpen } from "lucide-react"
import mqtt, { type MqttClient } from "mqtt"
import { useEffect, useState } from "react"

const DOOR_TOPIC = "door-add2eaa7-0d32-46f4-8afb-eb16edc5fd97/door"

export default function MqttTeachableMachine() {
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [labelContainer, setLabelContainer] = useState<string[] | undefined>([])
  const [client, setClient] = useState<MqttClient | null>(null)
  const [doorStatus, setDoorStatus] = useState(false)

  useEffect(() => {
    async function connectClient() {
      const client = mqtt.connect("wss://test.mosquitto.org:8081")
      console.log("connecting...")
      await new Promise((resolve) => client.on("connect", resolve))
      console.log("done")
      console.log(client)
      setClient(client)

      client.subscribe(DOOR_TOPIC, (err) => {
        if (!err) {
          console.log(`Subscribed to ${DOOR_TOPIC}`)
          return
        }
        console.log(
          "%cerror src/app/(prediction)/prediction/page.tsx line:37 ",
          "color: red; display: block; width: 100%;",
          err
        )
      })

      client.on("error", (err) => {
        console.error("Connection error: ", err)
        client.end()
      })

      client.on("message", (topic, message) => {
        if (topic === DOOR_TOPIC) {
          console.log(
            "%csrc/app/(prediction)/prediction/page.tsx:49 message",
            "color: white; background-color: #007acc;",
            message
          )
          setDoorStatus(message.toString() === "open")
        }
      })
    }

    connectClient()

    return () => {
      if (client) client.end()
    }
  }, [])

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const img = new Image()
      img.src = URL.createObjectURL(file)
      img.onload = async () => {
        setImage(img)
      }
      // Read the file as array buffer and send directly to the server
      const arrayBuffer = await file.arrayBuffer()

      const res = await fetch("/api/predict", {
        method: "POST",
        body: arrayBuffer,
      })

      if (res.ok) {
        const { predictions } = await res.json()

        const updatedLabels = predictions
          .sort((a: any, b: any) => b.probability - a.probability)
          .map((pred: any) => `${pred.className}: ${(pred.probability * 100).toFixed(0)}%`)

        setLabelContainer(updatedLabels)

        const hedgehogDetected = predictions.some((p: any) => p.className === "Hedgehog" && p.probability > 0.5)

        if (hedgehogDetected) {
          client?.publish(DOOR_TOPIC, "open")
          console.log(`Door opened: ${DOOR_TOPIC}`)
          setDoorStatus(true)
        } else {
          client?.publish(DOOR_TOPIC, "close")
          console.log(`Door closed: ${DOOR_TOPIC}`)
          setDoorStatus(false)
        }
      } else {
        console.error("Failed to fetch predictions")
      }
    }
  }

  return (
    <div className="container max-w-screen-md py-20">
      <Card>
        <CardHeader className="flex-row items-center justify-between gap-4">
          <CardTitle>Teachable Machine MQTT Door Opener</CardTitle>
          <Badge variant={doorStatus ? "outline" : "destructive"} className="ms-auto">
            {doorStatus ? (
              <>
                <DoorOpen />
                Door is open
              </>
            ) : (
              <>
                <DoorClosed />
                Door is closed
              </>
            )}
          </Badge>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          {image && <img src={image.src} alt="Uploaded" className="mx-auto aspect-square size-64 object-cover" />}
          <Input className="mx-auto max-w-sm" type="file" accept="image/*" onChange={handleFileChange} />
          {!!labelContainer?.length && labelContainer.some((label) => !!label) && (
            <div className="flex flex-wrap items-center gap-2" id="label-container">
              {labelContainer?.map((label, index) => (
                <Badge key={index} variant={index === labelContainer.length - 1 ? "secondary" : "default"}>
                  {label}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
