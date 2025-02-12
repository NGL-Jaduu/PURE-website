import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PURE-Studio Features",
  description: "Explore the powerful features of PURE-Studio",
}

export default function Features() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">⚡ Features You'll Love</h1>
      <p className="text-xl">
        PURE-Studio is packed with features designed to enhance your productivity and creativity. Here's what you can
        expect:
      </p>
      <ul className="space-y-4 mt-6">
        <li>
          <h3 className="text-2xl font-semibold">Stunning Design</h3>
          <p>
            The most <strong>aesthetic</strong> text editor you'll ever use.
          </p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold">Rich Functionality</h3>
          <p>Advanced tools for seamless coding and editing.</p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold">Lightning Fast</h3>
          <p>Designed to make you work smarter, not harder.</p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold">Customizable</h3>
          <p>Tailor PURE-Studio to your exact needs.</p>
        </li>
        <li>
          <h3 className="text-2xl font-semibold">Cross-platform</h3>
          <p>Works anywhere, anytime, on any device.</p>
        </li>
      </ul>
      <p className="text-xl italic mt-8">
        With <strong>PURE-Studio</strong>, the sky's the limit. 🌌
      </p>
    </div>
  )
}

