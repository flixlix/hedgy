import TypingAnimation from "@/features/introduction/components/type-animate"

export default function IntroductionPage() {
  return (
    <main className="flex flex-1 flex-col gap-20 pb-20 md:min-h-[calc(100vh-116px)] md:pb-[58px]">
      <section className="prose prose-h1:mb-2 prose-p:mt-2 prose-p:leading-normal">
        <h1>Einführung</h1>
      </section>

      <TypingAnimation />
    </main>
  )
}
