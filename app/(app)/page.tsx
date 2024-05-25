import SectionWrapper from "@/components/common/section-wrapper"
import Hero from "@/components/home/hero"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
}

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      {/* <SectionWrapper className="h-screen">
        <h1>Test</h1>
      </SectionWrapper> */}
    </div>
  )
}
