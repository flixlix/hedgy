import BOMDIYHedgehogShelter from "@/features/diy/components/table"
import DIYIntruction from "@/features/diy/components/timeline"

export default function StudiesPage() {
  return (
    <main className="flex flex-1 flex-col gap-20 pb-20 md:min-h-[calc(100vh-116px)] md:pb-[58px]">
      <section className="prose prose-h1:mb-2 prose-p:mt-2 prose-p:leading-normal">
        <h1>Eigenes Igelhaus bauen</h1>
        <p className="text-balance">
          Du möchtest Igeln helfen und ein eigenes Igelhaus bauen? Hier findest du eine Anleitung, wie du ein Igelhaus
          bauen kannst.
        </p>
      </section>

      <DIYIntruction />
      <BOMDIYHedgehogShelter />
    </main>
  )
}
