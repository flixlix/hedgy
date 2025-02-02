import Parallax from "@/features/landing/components/parallax"

export default function SplitPage() {
  return (
    <div className="grid flex-1">
      <div className="h-[200vh]" />
      <Parallax />
      <div className="h-[200vh]" />
    </div>
  )
}
