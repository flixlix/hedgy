import * as tmImage from "@teachablemachine/image"
import express from "express"
import mqtt from "mqtt"
import multer from "multer"
import path from "path"

const app = express()
const port = 3000
const DOOR_TOPIC = "door-add2eaa7-0d32-46f4-8afb-eb16edc5fd97/open"

const mqttClient = mqtt.connect("wss://test.mosquitto.org:8081")
mqttClient.on("connect", () => {
  console.log("MQTT connected")
})

const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

async function loadModel() {
  const modelPath = path.resolve(__dirname, "..", "tm-my-image-model", "model.json")
  const metadataPath = path.resolve(__dirname, "..", "tm-my-image-model", "metadata.json")
  const model = await tmImage.load(modelPath, metadataPath)

  return model
}

let model: tmImage.CustomMobileNet
loadModel().then((m) => {
  model = m
})

async function preprocessImage(imageBuffer: Buffer) {
  const image = new Image()
  image.src = imageBuffer.toString("base64")
  return image
}

app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    res.status(400).send("No file uploaded")
    return void 0
  }

  try {
    const inputTensor = await preprocessImage(req.file.buffer)

    const prediction = await model.predict(inputTensor)

    console.log("Prediction probabilities:", prediction)

    const mqttMessage = JSON.stringify({
      class_probabilities: prediction,
    })
    mqttClient.publish("your/mqtt/topic", mqttMessage)

    res.status(200).json({ prediction })
  } catch (error) {
    console.error("Error processing image:", error)
    res.status(500).send("Error processing image")
  }
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
