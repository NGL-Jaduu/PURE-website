import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PURE-Studio Release Information",
  description: "Get the latest release information for PURE-Studio",
}

export default function ReleaseInfo() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">📅 Release Information</h1>
      <div className="space-y-4">
        <p>
          <strong>Current Version</strong>: Pre-Alpha
        </p>
        <p>
          <strong>License</strong>:{" "}
          <a href="https://opensource.org/licenses/MIT" className="text-blue-500 hover:underline">
            MIT License
          </a>
        </p>
        <p>
          <strong>Release Date</strong>: Coming soon
        </p>
      </div>
      <h2 className="text-2xl font-semibold mt-8">Stay Updated</h2>
      <p>
        PURE-Studio is still in its <strong>pre-alpha</strong> version, and there's more <strong>coming soon</strong>.
        We're just getting started, and <strong>we want you to be a part of it</strong>.
      </p>
      <p className="mt-4">To stay up-to-date with the latest developments:</p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          Follow our{" "}
          <a href="https://github.com/NGL-Jaduu/PURE-studio" className="text-blue-500 hover:underline">
            GitHub repository
          </a>
        </li>
        <li>Join our community forums</li>
        <li>Subscribe to our newsletter</li>
      </ul>
      <h2 className="text-2xl font-semibold mt-8">Contact Information</h2>
      <p className="mt-4">
        Have any questions or want to chat? <strong>We'd love to hear from you</strong>.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          GitHub:{" "}
          <a href="https://github.com/NGL-Jaduu/PURE-studio" className="text-blue-500 hover:underline">
            PURE-Studio
          </a>
        </li>
        <li>Email: t0xic.4pric0t@gmail.com</li>
      </ul>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic mt-8">
        "Great ideas come from the <strong>purest</strong> minds. Welcome to PURE-Studio."
        <footer className="text-right mt-2">– NGL-Jaduu</footer>
      </blockquote>
    </div>
  )
}

