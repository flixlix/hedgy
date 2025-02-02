import * as tmImage from "@teachablemachine/image"
import express from "express"
import mqtt from "mqtt"
import multer from "multer"
import path from "path"

const app = express()
const port = 3000 // You can change the port if necessary
const DOOR_TOPIC = "door-add2eaa7-0d32-46f4-8afb-eb16edc5fd97/open"

// Set up MQTT client
const mqttClient = mqtt.connect("wss://test.mosquitto.org:8081")
mqttClient.on("connect", () => {
  console.log("MQTT connected")
})

// Configure Multer to handle image uploads
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

// Load your model
async function loadModel() {
  const modelPath = path.resolve(__dirname, "..", "tm-my-image-model", "model.json")
  const metadataPath = path.resolve(__dirname, "..", "tm-my-image-model", "metadata.json")
  const model = await tmImage.load(modelPath, metadataPath)

  console.log("Model loaded")
  return model
}

let model: tmImage.CustomMobileNet
loadModel().then((m) => {
  model = m
})

// Function to preprocess image for model prediction
async function preprocessImage(imageBuffer: Buffer) {
  const image = new Image()
  image.src = imageBuffer.toString("base64")
  return image
}

// Route to receive the image
app.post("/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    res.status(400).send("No file uploaded")
    return void 0
  }

  try {
    // Preprocess the image
    const inputTensor = await preprocessImage(req.file.buffer)

    // Run prediction
    const prediction = await model.predict(inputTensor)

    // Log probabilities to the console
    console.log("Prediction probabilities:", prediction)

    // Send the result via MQTT
    const mqttMessage = JSON.stringify({
      class_probabilities: prediction,
    })
    mqttClient.publish("your/mqtt/topic", mqttMessage)

    // Send response to the client
    res.status(200).json({ prediction })
  } catch (error) {
    console.error("Error processing image:", error)
    res.status(500).send("Error processing image")
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
