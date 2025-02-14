import { Space_Grotesk as SpaceGrotesk } from "next/font/google"

const spaceGrotesk = SpaceGrotesk({ subsets: ["latin"] })

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-center bg-black ${spaceGrotesk.className}`}>
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center text-white tracking-tight">
        Attention
        <br />
        Capital
        <br />
        Markets
      </h1>
    </main>
  )
}

