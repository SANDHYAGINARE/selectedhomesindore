import Hero from "@/components/hero"
import FeaturedProperties from "@/components/featured-properties"
import Services from "@/components/services"
import Testimonials from "@/components/testimonials"
import LocationMap from "@/components/location-map"
import ContactSection from "@/components/contact-section"
import PropertySearch from "@/components/property-search"
import FeaturedNeighborhoods from "@/components/featured-neighborhoods"
import CallToAction from "@/components/call-to-action"
import PropertyCategories from "@/components/property-categories"
import TeamSection from "@/components/team-section"
import Stats from "@/components/stats"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      {/* <PropertySearch /> */}
      <PropertyCategories />
      <FeaturedProperties />
      <Services />
      <Stats />
      <FeaturedNeighborhoods />
      <TeamSection />
      <Testimonials />
      <LocationMap />
      <CallToAction />
      <ContactSection />
    </main>
  )
}

