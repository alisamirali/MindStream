import { Providers } from "@/components/theme/Providers"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { KeyboardShortcutsProvider } from "./context/KeyboardShortcutsContext"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MindStream | Free your mind.",
  description:
    "MindStream - a distinctive platform for unburdening your mind through uninhibited writing. Unleash your thoughts and witness them seamlessly blend into the stream, paving the way for new perspectives and creativity.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}, container mx-auto selection:bg-black selection:text-white dark:bg-black dark:selection:bg-white dark:selection:text-black`}
      >
        <Providers>
          <KeyboardShortcutsProvider>{children}</KeyboardShortcutsProvider>
        </Providers>
      </body>
    </html>
  )
}
