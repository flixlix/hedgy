import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import HedgyNavigationMenu from "@/features/landing/header/components/nav"
import Link from "next/link"

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex min-h-screen max-w-screen-xl flex-col px-6 lg:px-20">
      <header className="sticky inset-x-0 top-0 z-10 -mx-12 hidden items-center justify-between gap-6 bg-background/60 px-12 py-10 backdrop-blur-md md:flex">
        <Link href="/" className="font-bold">
          {siteConfig.title}
        </Link>
        <HedgyNavigationMenu />
      </header>
      {children}
      <footer className="border-t py-10">
        <div className="flex justify-center gap-4">
          <Button variant="ghost">Impressum</Button>
          <Button variant="ghost">Datenschutz</Button>
          <Button variant="ghost">Kontakt</Button>
        </div>
      </footer>
    </div>
  )
}
