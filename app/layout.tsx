import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import NPProgresBarProvider from "@/components/provider/np-progress-provider"
import ReactQueryProvider from "@/components/provider/react-query-provider"
import { ThemeProvider } from "@/components/provider/theme-provider"

const jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Arief Dev",
    default: "Arief Dev",
  },
  description: "Official Web for Arief Dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${jakarta_sans.className} antialiased`}
        suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <NPProgresBarProvider>
            <ReactQueryProvider>{children}</ReactQueryProvider>
          </NPProgresBarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
