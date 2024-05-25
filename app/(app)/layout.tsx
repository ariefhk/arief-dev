import React from "react"

type AppLayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: Readonly<AppLayoutProps>) {
  return <main>{children}</main>
}
