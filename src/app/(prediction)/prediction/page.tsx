/* eslint-disable @next/next/no-img-element */
"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import * as tmImage from "@teachablemachine/image"
import { DoorClosed, DoorOpen } from "lucide-react"
import mqtt, { type MqttClient } from "mqtt"
import { useEffect, useState } from "react"

const MODEL_URL = "/tm-my-image-model/model.json"
const METADATA_URL = "/tm-my-image-model/metadata.json"

const DOOR_TOPIC = "door-add2eaa7-0d32-46f4-8afb-eb16edc5fd97/door"

export default function MqttTeachableMachine() {
  const [model, setModel] = useState<tmImage.CustomMobileNet | null>(null)
  const [image, setImage] = useState<HTMLImageElement | null>(null)
  const [labelContainer, setLabelContainer] = useState<string[] | undefined>([])
  const [client, setClient] = useState<MqttClient | null>(null)
  const [doorStatus, setDoorStatus] = useState(false)

  useEffect(() => {
    async function initModel() {
      const loadedModel = await tmImage.load(MODEL_URL, METADATA_URL)
      setModel(loadedModel)
      setLabelContainer(Array(loadedModel.getTotalClasses()).fill(""))
    }

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
        console.log(message.toString())
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

    initModel()
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
        const prediction = await model?.predict(img)
        const updatedLabels = prediction
          ?.sort((a, b) => b.probability - a.probability)
          ?.map((pred, i) => `${pred.className}: ${(pred.probability * 100).toFixed(0)}%`)
        setLabelContainer(updatedLabels)

        const class1Prediction = prediction?.find((p) => p.className === "Hedgehog" && p.probability > 0.5)

        if (class1Prediction) {
          client?.publish(DOOR_TOPIC, "open") // Publish to open the door if Class 1 is detected
          console.log(`Door opened: ${DOOR_TOPIC}`)
          setDoorStatus(true)
          return
        }
        client?.publish(DOOR_TOPIC, "close") // Publish to close the door if Class 1 is not detected
        console.log(`Door closed: ${DOOR_TOPIC}`)
        setDoorStatus(false)
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
          {image && <img src={image.src} alt="Uploaded" className="h-64 w-full object-contain" />}
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
