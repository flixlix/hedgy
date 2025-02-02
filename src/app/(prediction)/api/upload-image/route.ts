import fs from "fs"
import path from "path"

export const config = {
  api: {
    bodyParser: false, // Disable default body parser
  },
}

export async function POST(req: Request) {
  try {
    // Parse the form data using the Web API's formData method
    const formData = await req.formData()

    // Get the file from the form data
    const file = formData.get("file")

    if (!file || !(file instanceof Blob)) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), { status: 400 })
    }

    // Create the uploads directory if it doesn't exist
    const uploadDir = path.join(process.cwd(), "uploads")
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir)
    }

    // Save the file to the server
    const filePath = path.join(uploadDir, file.name)
    const buffer = Buffer.from(await file.arrayBuffer())
    fs.writeFileSync(filePath, buffer)

    // Return a success response with the file path
    return new Response(JSON.stringify({ message: "File uploaded successfully", filePath }), { status: 200 })
  } catch (error) {
    console.error("Error processing file upload:", error)
    return new Response(JSON.stringify({ error: "Internal server error" }), { status: 500 })
  }
}
