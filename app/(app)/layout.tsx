import Navbar from "@/components/common/navbar"
import ScrollTopButton from "@/components/common/scroll-top"
import React from "react"

type AppLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: Readonly<AppLayoutProps>) {
  return (
    <main>
      <Navbar />
      <section className="py-[64px]"> {children}</section>
      <ScrollTopButton />
    </main>
  )
}
