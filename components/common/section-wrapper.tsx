import { cn } from "@/lib/tailwind-utils"

interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
  children: React.ReactNode
}

export default function SectionWrapper({
  className,
  children,
  ...props
}: Readonly<SectionWrapperProps>) {
  return (
    <div
      {...props}
      className={cn("max-w-screen-xl mx-auto px-5 lg:px-7 h-full", className)}>
      {children}
    </div>
  )
}
