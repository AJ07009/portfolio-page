import { AboutSection } from "./components/AboutSection"
import CardComponent from "./components/CardComponent"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black md:ml-12">
      <Navbar />
      <div className="container md:mt-40 mt-20 mx-auto px-12 py-4 flex " >
        <HeroSection />
      </div>
        <AboutSection />
        <CardComponent />
    </main>
  )
}
// having a colour gradient background:
// bg-gradient-to-r from-purple-600  to-yellow-600