"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/button"
import { MapPin, Bed, Bath, SquareIcon as SquareFeet, Heart, ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const properties = [
  {
    id: 1,
    title: "Modern Apartment near IIT Indore",
    type: "rental",
    category: "apartment",
    price: "₹15,000/month",
    location: "Simrol, Indore",
    bedrooms: 2,
    bathrooms: 1,
    area: "950 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    forStudents: true,
    forFamilies: false,
    forCouples: true,
    forBusiness: false,
    rating: 4.8,
    reviews: 12,
  },
  {
    id: 2,
    title: "Spacious Villa with Garden",
    type: "rental",
    category: "house",
    price: "₹35,000/month",
    location: "Vijay Nagar, Indore",
    bedrooms: 3,
    bathrooms: 2,
    area: "1800 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    forStudents: false,
    forFamilies: true,
    forCouples: true,
    forBusiness: false,
    rating: 4.9,
    reviews: 24,
  },
  {
    id: 3,
    title: "Furnished Guest House",
    type: "guesthouse",
    category: "guesthouse",
    price: "₹20,000/month",
    location: "Bhawarkuan, Indore",
    bedrooms: 1,
    bathrooms: 1,
    area: "750 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    forStudents: true,
    forFamilies: false,
    forCouples: true,
    forBusiness: false,
    rating: 4.7,
    reviews: 18,
  },
  {
    id: 4,
    title: "Commercial Space for Lease",
    type: "commercial",
    category: "commercial",
    price: "₹50,000/month",
    location: "MG Road, Indore",
    bedrooms: 0,
    bathrooms: 2,
    area: "2200 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    forStudents: false,
    forFamilies: false,
    forCouples: false,
    forBusiness: true,
    rating: 4.6,
    reviews: 9,
  },
  {
    id: 5,
    title: "Student Accommodation near DAVV",
    type: "rental",
    category: "apartment",
    price: "₹8,000/month",
    location: "Takshashila, Indore",
    bedrooms: 1,
    bathrooms: 1,
    area: "550 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    forStudents: true,
    forFamilies: false,
    forCouples: false,
    forBusiness: false,
    rating: 4.5,
    reviews: 32,
  },
  {
    id: 6,
    title: "Family Home with Parking",
    type: "rental",
    category: "house",
    price: "₹28,000/month",
    location: "Saket Nagar, Indore",
    bedrooms: 3,
    bathrooms: 2,
    area: "1600 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    forStudents: false,
    forFamilies: true,
    forCouples: false,
    forBusiness: false,
    rating: 4.9,
    reviews: 15,
  },
]

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredProperties =
    activeTab === "all" ? properties : properties.filter((property) => property.type === activeTab)

  return (
    <section className="py-16 container">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Properties</h2>
        <p className="text-muted-foreground max-w-2xl">
          Discover our handpicked selection of properties in Indore, perfect for students, couples, families, and
          businesses
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="bg-background/10 backdrop-blur-sm">
            <TabsTrigger value="all">All Properties</TabsTrigger>
            <TabsTrigger value="rental">Rental</TabsTrigger>
            <TabsTrigger value="guesthouse">Guest House</TabsTrigger>
            <TabsTrigger value="commercial">Commercial</TabsTrigger>
            <TabsTrigger value="lease">Lease</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="rental" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="guesthouse" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="commercial" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="lease" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-10">
        <Link
          href="/properties"
          className="inline-flex items-center px-4 py-2 border border-primary rounded-md text-primary hover:bg-primary hover:text-primary-foreground transition-colors group"
        >
          View All Properties
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}

function PropertyCard({ property }) {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Card className="overflow-hidden group border border-border/50 bg-card/50 hover:bg-card/80 transition-colors">
      <div className="relative">
        <Image
          src={property.image || "/placeholder.svg"}
          alt={property.title}
          width={800}
          height={600}
          className="h-48 w-full object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="h-8 w-8 rounded-full bg-background/80 flex items-center justify-center backdrop-blur-sm"
          >
            <Heart className={`h-4 w-4 ${isFavorite ? "fill-red-500 text-red-500" : ""}`} />
          </button>
        </div>
        <div className="absolute top-2 left-2 flex gap-2">
          {property.forStudents && (
            <Badge variant="secondary" className="bg-blue-500/20 text-blue-500 border-blue-500/20">
              Students
            </Badge>
          )}
          {property.forFamilies && (
            <Badge variant="secondary" className="bg-green-500/20 text-green-500 border-green-500/20">
              Families
            </Badge>
          )}
          {property.forCouples && (
            <Badge variant="secondary" className="bg-purple-500/20 text-purple-500 border-purple-500/20">
              Couples
            </Badge>
          )}
          {property.forBusiness && (
            <Badge variant="secondary" className="bg-amber-500/20 text-amber-500 border-amber-500/20">
              Business
            </Badge>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 property-card-gradient p-4">
          <div className="flex items-center text-white/90 text-sm">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span>{property.rating}</span>
            <span className="mx-1">•</span>
            <span>{property.reviews} reviews</span>
          </div>
        </div>
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
            <div className="flex items-center text-muted-foreground text-sm mt-1">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
          <Badge variant="outline" className="capitalize">
            {property.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex justify-between items-center">
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div className="flex items-center">
              <Bed className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>
                {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
              </span>
            </div>
            <div className="flex items-center">
              <Bath className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>
                {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
              </span>
            </div>
            <div className="flex items-center">
              <SquareFeet className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{property.area}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <div className="font-bold text-lg">{property.price}</div>
        <Link href={`/properties/${property.id}`} className="text-sm text-primary hover:underline">
          View Details
        </Link>
      </CardFooter>
    </Card>
  )
}

