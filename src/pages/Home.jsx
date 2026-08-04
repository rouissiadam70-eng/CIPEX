import Hero from '../components/Hero'
import MarketsMarquee from '../components/MarketsMarquee'
import Stats from '../components/Stats'
import About from '../components/About'
import Services from '../components/Services'
import Sectors from '../components/Sectors'
import BusinessOpportunities from '../components/BusinessOpportunities'
import MarketplaceTeaser from '../components/MarketplaceTeaser'
import ExploreGrid from '../components/ExploreGrid'
import News from '../components/News'
import Partners from '../components/Partners'
import Social from '../components/Social'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <MarketsMarquee />
      <Stats />
      <About />
      <Services />
      <Sectors />
      <BusinessOpportunities />
      <MarketplaceTeaser />
      <ExploreGrid />
      <News />
      <Partners />
      <Social />
      <CTABanner />
    </>
  )
}
