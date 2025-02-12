import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contribute to PURE-Studio",
  description: "Learn how you can contribute to the development of PURE-Studio",
}

export default function Contribute() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">🤝 Contribute to PURE-Studio</h1>
      <p className="text-xl">
        Want to make <strong>PURE-Studio</strong> even better? Here's how you can get involved:
      </p>
      <ul className="list-disc list-inside space-y-4 mt-6">
        <li>
          <strong>Fork</strong> the repo and send us your pull requests.
        </li>
        <li>
          <strong>Report bugs</strong> and suggest new features.
        </li>
        <li>
          <strong>Join our community</strong> and shape the future of this tool.
        </li>
      </ul>
      <p className="text-xl mt-8">
        Together, we'll <strong>build the next big thing</strong>. 🌍
      </p>
      <h2 className="text-2xl font-semibold mt-8">How to Contribute</h2>
      <ol className="list-decimal list-inside space-y-4 mt-4">
        <li>Fork the PURE-Studio repository on GitHub.</li>
        <li>Clone your fork locally.</li>
        <li>Create a new branch for your feature or bug fix.</li>
        <li>Make your changes and commit them with a clear commit message.</li>
        <li>Push your changes to your fork on GitHub.</li>
        <li>Open a pull request from your fork to the main PURE-Studio repository.</li>
      </ol>
      <p className="mt-6">
        For more detailed information on contributing, please check our
        <a
          href="https://github.com/NGL-Jaduu/PURE-studio/blob/main/CONTRIBUTING.md"
          className="text-blue-500 hover:underline ml-1"
        >
          contribution guidelines
        </a>
        .
      </p>
    </div>
  )
}

