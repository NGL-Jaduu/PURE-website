import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, DiscIcon as Discord } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PURE-Studio - Professional Universal Rich Editor",
  description: "The Future of Text Editing. Crafted for Professionals.",
}

export default function Home() {
  return (
    <div className="relative space-y-8">
      {/* Floating orbs */}
      <div className="floating-orb from-purple-500/20 h-32 w-32 left-[10%] top-[20%]" />
      <div className="floating-orb from-blue-500/20 h-40 w-40 right-[15%] top-[40%]" />
      <div className="floating-orb from-pink-500/20 h-24 w-24 left-[20%] bottom-[20%]" />

      <div className="space-y-4">
        <h1 className="bg-gradient-to-br from-purple-400 via-primary to-blue-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent lg:text-6xl">
          PURE-Studio
        </h1>
        <p className="text-xl text-muted-foreground">The Future of Text Editing. Crafted for Professionals.</p>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <Button asChild size="lg" className="hover-3d shadow-primary/25">
          <Link href="/getting-started">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button variant="outline" size="lg" asChild className="hover-3d shadow-primary/25">
          <Link href="https://github.com/NGL-Jaduu/PURE-studio" target="_blank">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Sleek UI",
            description: "Designed to be as beautiful as it is functional, with a modern and intuitive interface.",
          },
          {
            title: "Unified Workflow",
            description: "Systematic tools that integrate perfectly for a seamless editing experience.",
          },
          {
            title: "Lightweight Power",
            description: "Get all the features you need without the bloated software.",
          },
          {
            title: "Open Source",
            description: "Free to use and always evolving with contributions from the community.",
          },
        ].map((feature, i) => (
          <div
            key={i}
            className="group hover-3d relative space-y-4 rounded-lg border bg-card p-6 transition-all hover:border-primary shadow-lg shadow-primary/5"
          >
            <h2 className="text-2xl font-semibold">{feature.title}</h2>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-card p-8 hover-3d shadow-lg shadow-primary/5">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Join Our Community</h2>
          <p className="text-muted-foreground">
            Be part of our growing community. Join our Discord server to contribute, get help, and connect with other
            PURE-Studio enthusiasts.
          </p>
          <Button asChild size="lg" className="bg-[#5865F2] hover:bg-[#4752C4] hover-3d shadow-[#5865F2]/25">
            <Link href="https://discord.gg/3XbwPs9WZF" target="_blank">
              <Discord className="mr-2 h-5 w-5" />
              Join Discord Server
            </Link>
          </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-8 hover-3d shadow-lg shadow-primary/5">
        <blockquote className="space-y-2">
          <p className="text-xl font-medium italic">
            "Great ideas come from the purest minds. Welcome to PURE-Studio."
          </p>
          <footer className="text-sm text-muted-foreground">– NGL-Jaduu</footer>
        </blockquote>
      </div>
    </div>
  )
}

