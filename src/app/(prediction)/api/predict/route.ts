// http://172.20.10.5:3000/api/predict

import * as tmImage from "@/lib/tm"
import mqtt from "mqtt"
import { NextResponse } from "next/server"

const DOOR_TOPIC = "door-add2eaa7-0d32-46f4-8afb-eb16edc5fd97/door"
const IMAGE_TOPIC = "door-add2eaa7-0d32-46f4-8afb-eb16edc5fd97/image"

// Define the model URLs
const MODEL_URL = `${process.env.API_URL}/tm-my-image-model/model.json`
const METADATA_URL = `${process.env.API_URL}/tm-my-image-model/metadata.json`

export async function POST(req: Request) {
  // connect to the MQTT broker
  const client = mqtt.connect("wss://test.mosquitto.org:8081")
  await new Promise((resolve) => client.on("connect", resolve))
  // Read the raw body from the request (binary data)
  const arrayBuffer = await req.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  // upload the image to the server
  // const image = fs.createWriteStream(path.join(process.cwd(), "uploads", `image-${Date.now()}.jpg`))
  // image.write(buffer)

  // send the image to mqtt broker
  client.publish(IMAGE_TOPIC, buffer)

  if (!buffer.length) {
    return NextResponse.json({ error: "No image data provided" }, { status: 400 })
  }

  // Load the Teachable Machine model
  const model = await tmImage.load(MODEL_URL, METADATA_URL)
  const predictions = await model.predict(buffer) // Use the buffer as the input for prediction

  // Sort and return the predictions
  const sortedPredictions = predictions.sort((a, b) => b.probability - a.probability)

  console.log(sortedPredictions)

  // send open door command if is a "Hedgehog" with a probability of 0.7 or higher
  if (sortedPredictions[0].className === "Hedgehog" && sortedPredictions[0].probability >= 0.7) {
    console.log("opening door")
    client.publish(DOOR_TOPIC, "open")
  } else {
    console.log("closing door")
    client.publish(DOOR_TOPIC, "close")
  }

  return NextResponse.json({ predictions: sortedPredictions })
}
