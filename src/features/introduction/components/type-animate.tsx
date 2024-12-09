"use client"

import { useState } from "react"
import { TypeAnimation } from "react-type-animation"

const CURSOR_CLASS_NAME = "custom-type-animation-cursor"

export default function TypingAnimation() {
  const [finishedSequences, setFinishedSequences] = useState(0)
  return (
    <div className="flex flex-col items-start gap-20 text-lg font-medium">
      <TypeAnimation
        aria-label="Welcome to the present."
        cursor={false}
        className={CURSOR_CLASS_NAME}
        sequence={[
          "Hallo, ich bin der Hedgy!",
          1000,
          "Hallo, ich bin der Hedgy!\nIch bin ein Igel, der sich freut, endlich ein Zuhause gefunden zu haben.",
          100,
          (el) => el?.parentElement?.classList.remove(CURSOR_CLASS_NAME),
          () => setFinishedSequences(1),
        ]}
        wrapper="span"
        repeat={0}
        speed={71}
        style={{
          whiteSpace: "pre-wrap",
          display: "inline-block",
        }}
      />
    </div>
  )
}
