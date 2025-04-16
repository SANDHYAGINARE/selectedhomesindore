import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to Find Your Perfect Property in Indore?</h2>
            <p className="text-primary-foreground/80 mb-6 max-w-lg">
              Whether you're looking for a rental property, guest house, commercial space, or a property to buy, our
              team of experts is ready to help you find the perfect match for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/properties">
                  Browse Properties <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              >
                <Phone className="mr-2 h-4 w-4" /> Call Us Now
              </Button>
            </div>
          </div>

          <div className="bg-primary-foreground/10 p-6 rounded-lg backdrop-blur-sm border border-primary-foreground/20">
            <h3 className="text-xl font-bold mb-4">Why Choose Selected Homes?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <span>Wide range of properties across Indore</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <span>Specialized options for students, couples, families, and businesses</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <span>Transparent dealings with no hidden charges</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <span>Personalized property search based on your requirements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-xl">•</span>
                <span>Expert guidance throughout the process</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

