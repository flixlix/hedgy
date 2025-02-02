import * as tmImage from "@teachablemachine/image"
import { createCanvas, loadImage } from "canvas" // canvas library
import fs from "fs"
import mqtt from "mqtt"
import path from "path"

const DOOR_TOPIC = "door-add2eaa7-0d32-46f4-8afb-eb16edc5fd97/open"
const MQTT_BROKER = "wss://test.mosquitto.org:8081"
const MODEL_URL = `${process.env.API_URL}/tm-my-image-model/model.json`
const METADATA_URL = `${process.env.API_URL}/tm-my-image-model/metadata.json`

const client = mqtt.connect(MQTT_BROKER)

export const config = {
  api: {
    bodyParser: false,
  },
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const file = formData.get("file")

    if (!file || !(file instanceof Blob)) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 })
    }

    const uploadDir = path.join(process.cwd(), "uploads")
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir)
    }

    const filePath = path.join(uploadDir, file.name)
    const buffer = Buffer.from(await file.arrayBuffer())
    fs.writeFileSync(filePath, buffer)

    const model = await tmImage.load(MODEL_URL, METADATA_URL)

    const image = await loadImage(buffer) // Load image from buffer
    const canvas = createCanvas(image.width, image.height) // Create canvas from image dimensions
    const ctx = canvas.getContext("2d")
    ctx.drawImage(image, 0, 0) // Draw the image on the canvas

    // Convert canvas to buffer (as an image)
    const canvasBuffer = canvas.toBuffer("image/jpeg")

    // You can now use the dataUri as the input for Teachable Machine model prediction
    const prediction = await model.predict(canvasBuffer as any)

    const hedgehogPrediction = prediction.find((p) => p.className === "Hedgehog" && p.probability > 0.5)

    if (hedgehogPrediction) {
      client.publish(DOOR_TOPIC, "open")
      console.log(`Hedgehog detected: Door opened on ${DOOR_TOPIC}`)
    } else {
      client.publish(DOOR_TOPIC, "close")
      console.log(`No hedgehog detected: Door closed on ${DOOR_TOPIC}`)
    }

    return new Response(JSON.stringify({ message: "File uploaded and prediction made successfully", filePath }), {
      status: 200,
    })
  } catch (error) {
    console.error("Error processing file upload:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 })
  }
}
