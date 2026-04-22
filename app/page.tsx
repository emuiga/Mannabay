import Hero from '@/components/home/Hero'
import QuickLinks from '@/components/home/QuickLinks'
import About from '@/components/home/About'
import VisionPillars from '@/components/home/VisionPillars'
import Foundation from '@/components/home/Foundation'
import ImpactStory from '@/components/home/ImpactStory'
import JoinCTA from '@/components/home/JoinCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <About />
      <VisionPillars />
      <Foundation />
      <ImpactStory />
      <JoinCTA />
    </>
  )
}
