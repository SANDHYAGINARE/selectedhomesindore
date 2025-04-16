import { Building, Home, Users, Briefcase } from "lucide-react"

export default function Stats() {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
              <Home className="h-6 w-6" />
            </div>
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-primary-foreground/80">Rental Properties</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
              <Building className="h-6 w-6" />
            </div>
            <div className="text-4xl font-bold mb-2">150+</div>
            <div className="text-primary-foreground/80">Commercial Spaces</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6" />
            </div>
            <div className="text-4xl font-bold mb-2">1200+</div>
            <div className="text-primary-foreground/80">Happy Clients</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center mb-4">
              <Briefcase className="h-6 w-6" />
            </div>
            <div className="text-4xl font-bold mb-2">10+</div>
            <div className="text-primary-foreground/80">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  )
}

