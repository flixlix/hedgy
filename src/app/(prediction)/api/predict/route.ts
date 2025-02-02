import * as tmImage from "@teachablemachine/image"
import { NextResponse } from "next/server"

// Define the model URLs
const MODEL_URL = `${process.env.API_URL}/tm-my-image-model/model.json`
const METADATA_URL = `${process.env.API_URL}/tm-my-image-model/metadata.json`

export async function POST(req: Request) {
  const data = await req.formData()
  const file = data.get("image") as File

  if (!file) {
    return NextResponse.json({ error: "No image file provided" }, { status: 400 })
  }

  // Convert image to a format that can be used for prediction
  const arrayBuffer = await file.arrayBuffer()
  const blob = new Blob([new Uint8Array(arrayBuffer)])
  const img = new Image()
  img.src = URL.createObjectURL(blob)

  // Load the Teachable Machine model
  const model = await tmImage.load(MODEL_URL, METADATA_URL)
  const predictions = await model.predict(img)

  // Sort and return the predictions
  const sortedPredictions = predictions.sort((a, b) => b.probability - a.probability)
  return NextResponse.json({ predictions: sortedPredictions })
}
