import { AboutSection } from "./components/AboutSection"
import CardComponent from "./components/CardComponent"
import EmailSection from "./components/EmailSection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div class="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <CardComponent />
        {/* <EmailSection /> */}
      </div>
      {/* <Footer /> */}
    </main>
  )
}
// having a colour gradient background:
// bg-gradient-to-r from-purple-600  to-yellow-600