"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Bed,
  Bath,
  SquareIcon as SquareFeet,
  Heart,
  Share2,
  Calendar,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Building,
  Car,
  Wifi,
  Utensils,
  Tv,
  Wind,
  Lock,
  Star,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample property data
const properties = [
  {
    id: 1,
    title: "1 BHK Apartment in LIG Colony",
    type: "rental",
    category: "apartment",
    price: "₹9,500/month",
    location: "LIG Colony, Indore",
    bedrooms: 1,
    bathrooms: 1,
    area: "600 sq.ft",

    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    featured: true,
    forStudents: true,
    forFamilies: false,
    forCouples: true,
    forBusiness: false,
    rating: 4.8,
    reviews: 12,
    description:
      "This modern apartment is located near IIT Indore, making it perfect for students and faculty. The apartment features 2 bedrooms, a spacious living area, and a fully equipped kitchen. It's well-connected to public transportation and has all the amenities you need for a comfortable stay.",
    amenities: [
      { name: "Furnished", icon: Building },
      { name: "Parking", icon: Car },
      { name: "Wi-Fi", icon: Wifi },
      { name: "Kitchen", icon: Utensils },
      { name: "TV", icon: Tv },
      { name: "AC", icon: Wind },
      { name: "Security", icon: Lock },
    ],
    agent: {
      name: "Priya Patel",
      role: "Residential Property Expert",
      phone: "+91 98765 43211",
      email: "priya@selectedhomesindore.com",
      image: "/placeholder.svg?height=100&width=100",
    },
    nearbyPlaces: [
      { name: "IIT Indore", distance: "0.5 km" },
      { name: "Bus Stop", distance: "0.2 km" },
      { name: "Grocery Store", distance: "0.3 km" },
      { name: "Restaurant", distance: "0.7 km" },
    ],
    reviews: [
      {
        id: 1,
        name: "Rahul Sharma",
        date: "2 months ago",
        rating: 5,
        comment:
          "Great apartment with all the amenities I needed as a student. The location is perfect for IIT students.",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Anjali Gupta",
        date: "3 months ago",
        rating: 4,
        comment: "Clean and well-maintained apartment. The only issue is that it gets a bit noisy during weekends.",
        avatar: "/placeholder.svg?height=50&width=50",
      },
    ],
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
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    featured: true,
    forStudents: false,
    forFamilies: true,
    forCouples: true,
    forBusiness: false,
    rating: 4.9,
    reviews: 24,
    description:
      "A beautiful villa located in the heart of Vijay Nagar. This property features 3 spacious bedrooms, 2 bathrooms, a large living area, and a beautiful garden. Perfect for families looking for a comfortable and luxurious living space in a prime location of Indore.",
    amenities: [
      { name: "Furnished", icon: Building },
      { name: "Parking", icon: Car },
      { name: "Wi-Fi", icon: Wifi },
      { name: "Kitchen", icon: Utensils },
      { name: "TV", icon: Tv },
      { name: "AC", icon: Wind },
      { name: "Security", icon: Lock },
    ],
    agent: {
      name: "Rajesh Sharma",
      role: "Founder & CEO",
      phone: "+91 82360 32162",
      email: "rajesh@selectedhomesindore.com",
      image: "/placeholder.svg?height=100&width=100",
    },
    nearbyPlaces: [
      { name: "Vijay Nagar Square", distance: "1 km" },
      { name: "C21 Mall", distance: "1.5 km" },
      { name: "Apollo Hospital", distance: "2 km" },
      { name: "School", distance: "0.5 km" },
    ],
    reviews: [
      {
        id: 1,
        name: "Suresh Agarwal",
        date: "1 month ago",
        rating: 5,
        comment: "Excellent property! Spacious, well-maintained, and in a great location. My family loves living here.",
        avatar: "/placeholder.svg?height=50&width=50",
      },
      {
        id: 2,
        name: "Meera Singh",
        date: "2 months ago",
        rating: 5,
        comment:
          "The garden is beautiful and the house is perfect for a family. The staff is very responsive to any issues.",
        avatar: "/placeholder.svg?height=50&width=50",
      },
    ],
  },
]

export default function PropertyDetailPage({ params }) {
  const propertyId = Number.parseInt(params.id)
  const property = properties.find((p) => p.id === propertyId) || properties[0]

  const [isFavorite, setIsFavorite] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length)
  }

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? property.images.length - 1 : prev - 1))
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Back Button */}
      <div className="container pt-8">
        <Link
          href="/properties"
          className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Properties
        </Link>
      </div>

      {/* Property Images */}
      <section className="container py-8">
        <div className="relative rounded-lg overflow-hidden h-[60vh]">
          <Image
            src={property.images[activeImageIndex] || "/placeholder.svg"}
            alt={property.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Image Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 flex items-center justify-center backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 flex items-center justify-center backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
            {activeImageIndex + 1} / {property.images.length}
          </div>

          {/* Property Title on Mobile */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:hidden">
            <h1 className="text-2xl font-bold text-white mb-2">{property.title}</h1>
            <div className="flex items-center text-white/90">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{property.location}</span>
            </div>
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="grid grid-cols-4 gap-2 mt-2">
          {property.images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-md overflow-hidden cursor-pointer h-20 ${
                index === activeImageIndex ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setActiveImageIndex(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${property.title} - image ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Property Details */}
      <section className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Title and Actions */}
            <div className="hidden md:flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-red-500" : ""}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500" : ""}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Property Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                <div className="text-muted-foreground text-sm mb-1">Bedrooms</div>
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-primary mr-2" />
                  <span className="font-bold">{property.bedrooms}</span>
                </div>
              </div>
              <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                <div className="text-muted-foreground text-sm mb-1">Bathrooms</div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 text-primary mr-2" />
                  <span className="font-bold">{property.bathrooms}</span>
                </div>
              </div>
              <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                <div className="text-muted-foreground text-sm mb-1">Area</div>
                <div className="flex items-center">
                  <SquareFeet className="h-5 w-5 text-primary mr-2" />
                  <span className="font-bold">{property.area}</span>
                </div>
              </div>
              <div className="bg-card/50 p-4 rounded-lg border border-primary/20">
                <div className="text-muted-foreground text-sm mb-1">Type</div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-primary mr-2" />
                  <span className="font-bold capitalize">{property.category}</span>
                </div>
              </div>
            </div>

            {/* Price and Actions (Mobile) */}
            <div className="flex justify-between items-center mb-6 md:hidden">
              <div className="text-2xl font-bold">{property.price}</div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={isFavorite ? "text-red-500" : ""}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? "fill-red-500" : ""}`} />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="description" className="mt-8">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">About This Property</h3>
                  <p className="text-muted-foreground">{property.description}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Nearby Places</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {property.nearbyPlaces.map((place, index) => (
                      <div key={index} className="flex items-center">
                        <MapPin className="h-4 w-4 text-primary mr-2" />
                        <span className="text-muted-foreground">{place.name}</span>
                        <span className="ml-auto">{place.distance}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="amenities">
                <h3 className="text-xl font-bold mb-4">Amenities</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                        <amenity.icon className="h-4 w-4 text-primary" />
                      </div>
                      <span>{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <div className="flex items-center mb-6">
                  <h3 className="text-xl font-bold">Reviews</h3>
                  <div className="ml-4 flex items-center">
                    <Star className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                    <span className="font-bold">{property.rating}</span>
                    <span className="text-muted-foreground ml-1">({property.reviews.length} reviews)</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {property.reviews.map((review) => (
                    <div key={review.id} className="border-b border-border pb-6 last:border-0">
                      <div className="flex items-start">
                        <Image
                          src={review.avatar || "/placeholder.svg"}
                          alt={review.name}
                          width={40}
                          height={40}
                          className="rounded-full mr-4"
                        />
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-bold">{review.name}</h4>
                            <span className="text-muted-foreground text-sm ml-2">{review.date}</span>
                          </div>
                          <div className="flex my-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
                                }`}
                              />
                            ))}
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div>
            {/* Price Card */}
            <Card className="mb-6 bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-4 hidden md:block">{property.price}</div>
                <div className="space-y-4">
                  <Button className="w-full">
                    <Phone className="mr-2 h-4 w-4" /> Call Agent
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="mr-2 h-4 w-4" /> Email Agent
                  </Button>
                  <Button variant="secondary" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" /> Schedule Viewing
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Agent Card */}
            <Card className="mb-6 bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Property Agent</h3>
                <div className="flex items-center mb-4">
                  <Image
                    src={property.agent.image || "/placeholder.svg"}
                    alt={property.agent.name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{property.agent.name}</h4>
                    <p className="text-sm text-primary">{property.agent.role}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{property.agent.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                    <span>{property.agent.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Suitable For */}
            <Card className="mb-6 bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Suitable For</h3>
                <div className="space-y-2">
                  {property.forStudents && (
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Students</span>
                    </div>
                  )}
                  {property.forFamilies && (
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Families</span>
                    </div>
                  )}
                  {property.forCouples && (
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-purple-500 mr-2" />
                      <span>Couples</span>
                    </div>
                  )}
                  {property.forBusiness && (
                    <div className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-amber-500 mr-2" />
                      <span>Business</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="bg-card/50 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Availability</h3>
                <div className="flex items-center mb-2">
                  <Clock className="h-4 w-4 text-primary mr-2" />
                  <span className="text-green-500 font-medium">Available Now</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  This property is currently available for {property.type === "rental" ? "rent" : "lease"}. Contact our
                  agent for more details.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      <section className="container py-8">
        <h2 className="text-2xl font-bold mb-6">Similar Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties
            .filter((p) => p.id !== property.id)
            .slice(0, 3)
            .map((similarProperty) => (
              <Card
                key={similarProperty.id}
                className="overflow-hidden group border border-border/50 bg-card/50 hover:bg-card/80 transition-colors"
              >
                <div className="relative">
                  <Image
                    src={similarProperty.images[0] || "/placeholder.svg"}
                    alt={similarProperty.title}
                    width={800}
                    height={600}
                    className="h-48 w-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 property-card-gradient p-4">
                    <div className="flex items-center text-white/90 text-sm">
                      <Star className="h-4 w-4 text-yellow-400 mr-1" />
                      <span>{similarProperty.rating}</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg line-clamp-1 mb-1">{similarProperty.title}</h3>
                  <div className="flex items-center text-muted-foreground text-sm mb-3">
                    <MapPin className="h-3 w-3 mr-1" />
                    <span>{similarProperty.location}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="font-bold">{similarProperty.price}</div>
                    <Link href={`/properties/${similarProperty.id}`} className="text-sm text-primary hover:underline">
                      View Details
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </section>
    </main>
  )
}
