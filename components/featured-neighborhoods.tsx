import { Card, CardContent } from "@/components/ui/card"
import { Building, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const neighborhoods = [
  {
    id: 1,
    name: "Vijay Nagar",
    description: "Popular area with many educational institutions and shopping centers",
    properties: 24,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Palasia",
    description: "Upscale residential area with premium properties and amenities",
    properties: 18,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "LIG Colony",
    description: "Affordable housing options with good connectivity",
    properties: 32,
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    name: "Bhawarkuan",
    description: "Student-friendly area near universities and colleges",
    properties: 27,
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function FeaturedNeighborhoods() {
  return (
    <section className="py-16 container">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Neighborhoods</h2>
        <p className="text-muted-foreground max-w-2xl">Explore popular areas in Indore with the best properties</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {neighborhoods.map((neighborhood) => (
          <Card
            key={neighborhood.id}
            className="overflow-hidden group bg-card/50 border-primary/20 hover:border-primary/50 transition-colors"
          >
            <div className="relative h-48">
              <Image
                src={neighborhood.image || "/placeholder.svg"}
                alt={neighborhood.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="font-bold text-lg">{neighborhood.name}</h3>
                <div className="flex items-center text-sm">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>Indore</span>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{neighborhood.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm">
                  <Building className="h-4 w-4 mr-1 text-primary" />
                  <span>{neighborhood.properties} Properties</span>
                </div>
                <Link href={`/neighborhoods/${neighborhood.id}`} className="text-sm text-primary hover:underline">
                  View Area
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

