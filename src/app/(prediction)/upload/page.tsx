"use client"

import React, { useState } from "react"

const ImageUploader = () => {
  const [file, setFile] = useState<File | null>(null)
  const [message, setMessage] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null
    setFile(selectedFile)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file) {
      setMessage("No file selected.")
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    setLoading(true)
    setMessage("")

    try {
      const response = await fetch("/api/predict-image", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (response.ok) {
        setMessage(`File uploaded successfully! Path: ${result.filePath}`)
      } else {
        setMessage(`Error: ${result.error}`)
      }
    } catch (error) {
      setMessage(`An error occurred: ${error}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h2>Upload an Image</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  )
}

export default ImageUploader
