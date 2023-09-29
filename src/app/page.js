import HeroSection from "./components/HeroSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      <div className="container mx-auto px-12 py-4" >
        <HeroSection />
      </div>
    </main>
  )
}
// having a colour gradient background:
// bg-gradient-to-r from-purple-600  to-yellow-600