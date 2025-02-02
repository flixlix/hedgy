// http://172.20.10.5:3000/api/predict

import * as tmImage from "@/lib/tm"
import { NextResponse } from "next/server"

// Define the model URLs
const MODEL_URL = `${process.env.API_URL}/tm-my-image-model/model.json`
const METADATA_URL = `${process.env.API_URL}/tm-my-image-model/metadata.json`

export async function POST(req: Request) {
  // Read the raw body from the request (binary data)
  const arrayBuffer = await req.arrayBuffer()
  const buffer = Buffer.from(arrayBuffer)

  if (!buffer.length) {
    return NextResponse.json({ error: "No image data provided" }, { status: 400 })
  }

  // Load the Teachable Machine model
  const model = await tmImage.load(MODEL_URL, METADATA_URL)
  const predictions = await model.predict(buffer) // Use the buffer as the input for prediction

  // Sort and return the predictions
  const sortedPredictions = predictions.sort((a, b) => b.probability - a.probability)

  return NextResponse.json({ predictions: sortedPredictions })
}
