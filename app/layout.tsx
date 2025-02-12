import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "PURE-Studio Documentation",
  description: "The Future of Text Editing. Crafted for Professionals.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-background/95 bg-[size:200%_200%] animate-gradient">
            <div className="pointer-events-none fixed inset-0 select-none bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(to_bottom,white,transparent)]" />
            <SidebarProvider>
              <div className="flex min-h-screen">
                <AppSidebar />
                <div className="flex-1">
                  <SidebarTrigger className="fixed left-4 top-4 z-50 md:hidden" />
                  <main className="relative mx-auto max-w-5xl px-4 py-8 md:px-8 md:py-16">{children}</main>
                </div>
              </div>
            </SidebarProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'