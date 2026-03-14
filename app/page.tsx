import Hero from '@/components/Hero'
import CoffeeMarquee from '@/components/CoffeeMarquee'
import FeatureStrip from '@/components/FeatureStrip'
import CoffeeGrid from '@/components/CoffeeGrid'
import DrinkMarquee from '@/components/DrinkMarquee'
import MenuSection from '@/components/MenuSection'
import AboutSection from '@/components/AboutSection'
import TrailerSection from '@/components/TrailerSection'
import LocationSection from '@/components/LocationSection'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <main>
      <Hero />
      <CoffeeMarquee />
      <FeatureStrip />
      <CoffeeGrid />
      <DrinkMarquee />
      <MenuSection />
      <AboutSection />
      <TrailerSection />
      <LocationSection />
      <Newsletter />
    </main>
  )
}
