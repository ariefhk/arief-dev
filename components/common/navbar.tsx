"use client"

import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import useScroll from "@/hooks/use-scroll"
import { cn } from "@/lib/tailwind-utils"
import { Menu, Package2 } from "lucide-react"
import Link from "next/link"
import { DarkModeButton } from "./dark-mode-button"
import SectionWrapper from "./section-wrapper"

export default function Navbar() {
  const { isScrolled } = useScroll()

  return (
    <header
      className={cn(
        "fixed top-0  z-20 backdrop-filter backdrop-blur-lg bg-opacity-40 w-full h-16 ",
        {
          "border-b": isScrolled,
        },
      )}>
      <SectionWrapper className="flex w-full justify-between items-center gap-4 ">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold md:text-base">
          <h1 className=" text-lg lg:text-text24_30 font-semibold  hover:underline hover:underline-offset-4">
            Arief Dev
          </h1>
          <span className="sr-only">Arief Dev</span>
        </Link>
        <nav className="hidden flex-col gap-6 text-sm font-medium md:flex md:flex-row md:items-center md:gap-7 md:text-text16_24 lg:gap-10">
          <Link
            href="#about-me"
            className="text-foreground transition-colors hover:underline hover:underline-offset-4">
            About Me
          </Link>
          <Link
            href="#project"
            className="text-foreground transition-colors hover:underline hover:underline-offset-4">
            Project
          </Link>
          <Link
            href="#contact"
            className="text-foreground transition-colors hover:underline hover:underline-offset-4">
            Contact
          </Link>
          <DarkModeButton className="rounded-full" />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold md:text-base">
                <h1 className="font-bold text-lg hover:underline hover:underline-offset-4">
                  Arief Dev
                </h1>
                <span className="sr-only">Arief Dev</span>
              </Link>
              <Link
                href="#about-me"
                className="text-muted-foreground transition-colors hover:text-foreground">
                About Me
              </Link>
              <Link
                href="#project"
                className="text-muted-foreground transition-colors hover:text-foreground">
                Project
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground transition-colors hover:text-foreground">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </SectionWrapper>
    </header>
  )
}
