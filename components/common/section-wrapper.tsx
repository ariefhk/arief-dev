import { cn } from "@/lib/tailwind-utils"

type SectionWrapperProps = {
  className?: string
  children: React.ReactNode
}

export default function SectionWrapper({
  className,
  children,
}: Readonly<SectionWrapperProps>) {
  return (
    <section
      className={cn("max-w-screen-xl mx-auto px-5 lg:px-7 h-full", className)}>
      {children}
    </section>
  )
}
