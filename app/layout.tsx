import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ClickScript — Record Browser Clicks into Automation Scripts',
  description: 'Chrome extension that records your browser interactions and generates Playwright/Puppeteer scripts for repetitive web tasks. Perfect for QA engineers, developers, and digital marketers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3ed969f3-1d3d-4ebd-abdc-b177d9867f04"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">
        {children}
      </body>
    </html>
  )
}
