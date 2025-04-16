import { Button } from "@/components/ui/button"
import { ArrowRight, Building, Home, Users, Briefcase } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 hero-gradient z-10" />
      <div
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
      >
        <div className="container relative z-20 flex flex-col items-start justify-center h-full space-y-5 pt-16">
          <div className="space-y-4 max-w-3xl">
            <div className="inline-flex px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary mb-4">
              Premium Real Estate Services in Indore
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white text-glow">
              SELECTED HOMES
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-xl">
              We provide rental & sell-purchase services for all types of properties nearby Indore
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="group" asChild>
                <Link href="/properties">
                  Browse Properties{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-background/20 backdrop-blur-sm border-white/20 text-white hover:bg-background/30"
              >
                Contact Us
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full max-w-4xl mt-12">
            <div className="glass-effect p-4 rounded-lg border border-white/10 flex items-center">
              <Home className="h-8 w-8 text-primary mr-3" />
              <div>
                <h3 className="font-bold text-white">Rental</h3>
                <p className="text-white/80 text-sm">For families</p>
              </div>
            </div>
            <div className="glass-effect p-4 rounded-lg border border-white/10 flex items-center">
              <Building className="h-8 w-8 text-primary mr-3" />
              <div>
                <h3 className="font-bold text-white">Guest Houses</h3>
                <p className="text-white/80 text-sm">For students</p>
              </div>
            </div>
            <div className="glass-effect p-4 rounded-lg border border-white/10 flex items-center">
              <Users className="h-8 w-8 text-primary mr-3" />
              <div>
                <h3 className="font-bold text-white">Lease</h3>
                <p className="text-white/80 text-sm">Long-term</p>
              </div>
            </div>
            <div className="glass-effect p-4 rounded-lg border border-white/10 flex items-center">
              <Briefcase className="h-8 w-8 text-primary mr-3" />
              <div>
                <h3 className="font-bold text-white">Commercial</h3>
                <p className="text-white/80 text-sm">For business</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

