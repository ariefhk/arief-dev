"use client"

import useScroll from "@/hooks/use-scroll"
import { cn } from "@/lib/tailwind-utils"
import { MdArrowUpward } from "react-icons/md"
import { Button } from "../ui/button"

const ScrollTopButton = () => {
  const { isScrolled } = useScroll(300)

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
  return (
    <Button
      onClick={handleScrollTop}
      className={cn(
        " z-20 fixed  hidden h-max  justify-center items-center rounded-full border-2 group border-white  p-2 text-white bottom-10 right-5 ",
        {
          flex: isScrolled,
        },
      )}>
      <MdArrowUpward className="h-6 w-6  lg:h-8 lg:w-8 flex-shrink-0  text-background" />
    </Button>
  )
}

export default ScrollTopButton
