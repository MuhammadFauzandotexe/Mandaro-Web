import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 rounded-full overflow-hidden">
              <Image src="/images/mandaro-logo.png" alt="Mandaro Technologies Logo" fill className="object-cover" />
            </div>
            <span className="inline-block font-bold">Mandaro Technologies</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="#about" className="flex items-center text-lg font-medium transition-colors hover:text-blue-600">
              About
            </Link>
            <Link
              href="#services"
              className="flex items-center text-lg font-medium transition-colors hover:text-blue-600"
            >
              Services
            </Link>
            <Link
              href="/products"
              className="flex items-center text-lg font-medium transition-colors hover:text-blue-600"
            >
              Products
            </Link>
            <Link
              href="#contact"
              className="flex items-center text-lg font-medium transition-colors hover:text-blue-600"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
