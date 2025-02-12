"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Pen, Search, Sparkles, Rocket, Puzzle, Gift, Info } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

const navItems = [
  { title: "Introduction", url: "/", icon: Sparkles },
  { title: "Getting Started", url: "/getting-started", icon: Rocket },
  { title: "Features", url: "/features", icon: Gift },
  { title: "Contribute", url: "/contribute", icon: Puzzle },
  { title: "Release Info", url: "/release-info", icon: Info },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                  <Pen className="size-4 text-white" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">PURE-Studio</span>
                  <span className="text-xs text-muted-foreground">Documentation</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <form>
          <SidebarGroup className="py-0">
            <SidebarGroupContent className="relative">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <Input id="search" placeholder="Search documentation..." className="pl-8" />
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
            </SidebarGroupContent>
          </SidebarGroup>
        </form>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map(({ title, url, icon: Icon }) => (
                <SidebarMenuItem key={url}>
                  <SidebarMenuButton asChild isActive={pathname === url}>
                    <Link href={url} className="flex items-center gap-3">
                      <Icon className="h-4 w-4" />
                      {title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

