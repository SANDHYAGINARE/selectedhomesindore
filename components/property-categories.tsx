import { Card, CardContent } from "@/components/ui/card"
import { Home, Users, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "students",
    title: "For Students",
    description: "Affordable accommodations near educational institutions",
    icon: Users,
    properties: 42,
    color: "from-blue-600/20 to-blue-800/20 border-blue-600/30",
    iconColor: "text-blue-500",
  },
  {
    id: "families",
    title: "For Families",
    description: "Spacious homes with all the amenities families need",
    icon: Home,
    properties: 38,
    color: "from-green-600/20 to-green-800/20 border-green-600/30",
    iconColor: "text-green-500",
  },
  {
    id: "couples",
    title: "For Couples",
    description: "Cozy apartments perfect for couples and newlyweds",
    icon: Users,
    properties: 25,
    color: "from-purple-600/20 to-purple-800/20 border-purple-600/30",
    iconColor: "text-purple-500",
  },
  {
    id: "business",
    title: "For Business",
    description: "Commercial spaces for offices, shops, and more",
    icon: Briefcase,
    properties: 31,
    color: "from-amber-600/20 to-amber-800/20 border-amber-600/30",
    iconColor: "text-amber-500",
  },
]

export default function PropertyCategories() {
  return (
    <section className="py-16 container">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Categories available</h2>
        {/* Browse by  */}
        <p className="text-muted-foreground max-w-2xl">
          We offer specialized properties for different needs - find what suits you best
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/category/${category.id}`}>
            <Card
              className={`bg-gradient-to-br ${category.color} border hover:shadow-lg transition-all duration-300 h-full`}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div
                  className={`w-12 h-12 rounded-full bg-background/10 flex items-center justify-center mb-4 ${category.iconColor}`}
                >
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{category.description}</p>
                {/* <div className="flex justify-between items-center mt-2">
                  <span className="text-sm font-medium">{category.properties} Properties</span>
                  <ArrowRight className="h-4 w-4 text-foreground/70" />
                </div> */}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

