import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowRight, Terminal, GitBranch, Package, Play } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Getting Started with PURE-Studio",
  description: "Learn how to set up and start using PURE-Studio",
}

export default function GettingStarted() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">Getting Started</h1>
        <p className="text-lg text-muted-foreground">
          Follow these steps to set up PURE-Studio on your machine and start creating.
        </p>
      </div>

      <div className="grid gap-8">
        <div className="group relative space-y-4 rounded-lg border bg-card p-6 transition-all hover:border-primary">
          <div className="flex items-center gap-4">
            <div className="rounded-lg border bg-muted p-2">
              <GitBranch className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">1. Clone the repo</h2>
          </div>
          <p className="text-muted-foreground">Download the code to your local machine using git.</p>
          <div className="command-line">
            <pre>git clone https://github.com/NGL-Jaduu/PURE-studio.git</pre>
          </div>
        </div>

        <div className="group relative space-y-4 rounded-lg border bg-card p-6 transition-all hover:border-primary">
          <div className="flex items-center gap-4">
            <div className="rounded-lg border bg-muted p-2">
              <Terminal className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">2. Navigate to the project directory</h2>
          </div>
          <p className="text-muted-foreground">Change into the project directory using the terminal.</p>
          <div className="command-line">
            <pre>cd PURE-studio</pre>
          </div>
        </div>

        <div className="group relative space-y-4 rounded-lg border bg-card p-6 transition-all hover:border-primary">
          <div className="flex items-center gap-4">
            <div className="rounded-lg border bg-muted p-2">
              <Package className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">3. Install Dependencies</h2>
          </div>
          <p className="text-muted-foreground">Install all required packages and dependencies.</p>
          <div className="command-line">
            <pre>npm install</pre>
          </div>
        </div>

        <div className="group relative space-y-4 rounded-lg border bg-card p-6 transition-all hover:border-primary">
          <div className="flex items-center gap-4">
            <div className="rounded-lg border bg-muted p-2">
              <Play className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-semibold">4. Run the Editor</h2>
          </div>
          <p className="text-muted-foreground">Launch PURE-Studio and start creating!</p>
          <div className="command-line">
            <pre>npm run dev</pre>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg border bg-card p-6">
        <div className="space-y-1">
          <h3 className="text-xl font-medium">Ready to start creating?</h3>
          <p className="text-sm text-muted-foreground">Check out our features and documentation to learn more.</p>
        </div>
        <Button asChild>
          <Link href="/features">
            Explore Features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

