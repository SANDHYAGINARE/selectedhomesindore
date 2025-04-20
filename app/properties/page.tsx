"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/button"
import { MapPin, Bed, Bath, SquareIcon as SquareFeet, Heart, Star, Search, SlidersHorizontal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample property data
const allProperties = [
  {
    id: 5,
    title: "Single Room for Rent in LIG Colony",
    type: "rental",
    category: "room",
    price: "₹16,000/month",
    location: "LIG Colony, Behind CHL Hospital, Indore",
    bedrooms: 1,
    bathrooms: 1,
    area: "300 sq.ft",
    image: "/images/1sh.jpg?height=600&width=800",
    featured: false,
    forStudents: true,
    forFamilies: false,
    forCouples: false,
    forBusiness: false,
    rating: 5.0,
    reviews: 7,
  },
  {
    
    id: 1,
    title: "Single Room in MIG Colony",
    type: "rental",
    category: "apartment",
    price: "₹8,000/month",
    location: "Nehru Nagar, Opposite MIG Thana, Indore",
    bedrooms: 1,
    bathrooms: 1,
    area: "600 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    forStudents: true,
    forFamilies: true,
    forCouples: true,
    forBusiness: false,
    rating: 4.5,
    reviews: 14,
  },
  {
    id: 2,
    title: "2 BHK Flat in Goutam Residency",
    type: "rental",
    category: "apartment",
    price: "₹20,000/month",
    location: "LIG Colony, Indore",
    bedrooms: 2,
    bathrooms: 2,
    area: "950 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    forStudents: false,
    forFamilies: true,
    forCouples: true,
    forBusiness: false,
    rating: 4.7,
    reviews: 18,
  },
  {
    id: 3,
    title: "3 BHK Spacious Flat in Industry House",
    type: "rental",
    category: "apartment",
    price: "₹25,000/month",
    location: "Industry House, Indore",
    bedrooms: 3,
    bathrooms: 2,
    area: "1350 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: true,
    forStudents: false,
    forFamilies: true,
    forCouples: true,
    forBusiness: false,
    rating: 4.9,
    reviews: 22,
  },
  {
    id: 4,
    title: "Studio Room at LIG Square",
    type: "rental",
    category: "apartment",
    price: "₹10,000/month",
    location: "LIG Square, Indore",
    bedrooms: 1,
    bathrooms: 1,
    area: "400 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    forStudents: true,
    forFamilies: false,
    forCouples: false,
    forBusiness: false,
    rating: 4.2,
    reviews: 10,
  },
 
  {
    id: 6,
    title: "Studio Room in LIG Colony",
    type: "rental",
    category: "house",
    price: "₹11,000/month",
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
  {
    id: 7,
    title: "1 RK in LIG Colony",
    type: "rental",
    category: "apartment",
    price: "₹11,500/month",
    location: "LIG Colony, Indore",
    bedrooms: 1,
    bathrooms: 1,
    area: "2100 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    forStudents: false,
    forFamilies: true,
    forCouples: true,
    forBusiness: false,
    rating: 4.9,
    reviews: 8,
  },
  {
    id: 8,
    title: "Single Room in MIG Colony",
    type: "rental",
    category: "apartment",
    price: "₹10,000/month",
    location: "MIG Colony, Indore",
    bedrooms: 1,
    bathrooms: 1,
    area: "450 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    forStudents: true,
    forFamilies: false,
    forCouples: true,
    forBusiness: false,
    rating: 4.3,
    reviews: 21,
  },
  {
    id: 9,
    title: "Single Room near Medanta Hospital",
    type: "rental",
    category: "apartment",
    price: "₹9,500/month",
    location: "Near Medanta Hospital, Indore",
    bedrooms: 1,
    bathrooms: 1,
    area: "1200 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    forStudents: false,
    forFamilies: false,
    forCouples: false,
    forBusiness: true,
    rating: 4.7,
    reviews: 6,
  },
  {
    id: 10,
    title: "Single Room in Shree Nagar",
    type: "rental",
    category: "apartment",
    price: "₹8,500/month",
    location: "Shree Nagar, Indore",
    bedrooms: 1,
    bathrooms: 1,
    area: "1100 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    forStudents: true,
    forFamilies: false,
    forCouples: false,
    forBusiness: false,
    rating: 4.2,
    reviews: 45,
  },
  {
    id: 11,
    title: "1 RK in LIG Colony",
    type: "rental",
    category: "apartment",
    price: "₹7,500/month",
    location: "LIG Colony, Indore",
    bedrooms: 0,
    bathrooms: 1,
    area: "800 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    forStudents: false,
    forFamilies: false,
    forCouples: false,
    forBusiness: true,
    rating: 4.8,
    reviews: 7,
  },
  {
    id: 12,
    title: "Single Room in LIG Colony",
    type: "rental",
    category: "apartment",
    price: "₹6,500/month",
    location: "LIG Colony, Indore",
    bedrooms: 4,
    bathrooms: 3,
    area: "2400 sq.ft",
    image: "/placeholder.svg?height=600&width=800",
    featured: false,
    forStudents: false,
    forFamilies: true,
    forCouples: false,
    forBusiness: false,
    rating: 4.9,
    reviews: 11,
  },
]

export default function PropertiesPage() {
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false)
  const [priceRange, setPriceRange] = useState([5000, 50000])
  const [filteredProperties, setFilteredProperties] = useState(allProperties)
  const [filters, setFilters] = useState({
    location: "",
    propertyType: "",
    purpose: "",
    bedrooms: "",
    forWho: "",
  })
  const [searchQuery, setSearchQuery] = useState("")

  const handlePriceChange = (value) => {
    setPriceRange(value)
  }

  const toggleAdvancedSearch = () => {
    setIsAdvancedSearch(!isAdvancedSearch)
  }

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value })
  }

  const applyFilters = () => {
    let filtered = [...allProperties]

    // Apply search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (property) => property.title.toLowerCase().includes(query) || property.location.toLowerCase().includes(query),
      )
    }

    // Apply filters
    if (filters.location) {
      filtered = filtered.filter((property) => property.location.includes(filters.location))
    }

    if (filters.propertyType) {
      filtered = filtered.filter((property) => property.category === filters.propertyType)
    }

    if (filters.purpose) {
      filtered = filtered.filter((property) => property.type === filters.purpose)
    }

    if (filters.bedrooms) {
      filtered = filtered.filter((property) => property.bedrooms.toString() === filters.bedrooms)
    }

    if (filters.forWho) {
      switch (filters.forWho) {
        case "students":
          filtered = filtered.filter((property) => property.forStudents)
          break
        case "families":
          filtered = filtered.filter((property) => property.forFamilies)
          break
        case "couples":
          filtered = filtered.filter((property) => property.forCouples)
          break
        case "business":
          filtered = filtered.filter((property) => property.forBusiness)
          break
      }
    }

    // Apply price range
    filtered = filtered.filter((property) => {
      const price = Number.parseInt(property.price.replace(/[^\d]/g, ""))
      return price >= priceRange[0] && price <= priceRange[1]
    })

    setFilteredProperties(filtered)
  }

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 hero-gradient z-10" />
        <div
          className="relative h-[40vh] bg-cover bg-center"
          style={{ backgroundImage: "url('/placeholder.svg?height=800&width=1920')" }}
        >
          <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white text-glow mb-4">
              Our Properties
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Browse our extensive collection of properties in Indore for all your needs
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 container -mt-20 relative z-30">
        <div className="bg-card/80 backdrop-blur-md border border-primary/20 rounded-lg p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Find Your Perfect Property</h2>
            <Button variant="ghost" size="sm" onClick={toggleAdvancedSearch} className="flex items-center gap-1">
              <SlidersHorizontal className="h-4 w-4" />
              {isAdvancedSearch ? "Simple Search" : "Advanced Search"}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="lg:col-span-2">
              <label htmlFor="search" className="text-sm font-medium mb-1 block">
                Search
              </label>
              <div className="relative">
                <Input
                  id="search"
                  placeholder="Search by property name or location"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            <div>
              <label htmlFor="property-type" className="text-sm font-medium mb-1 block">
                Property Type
              </label>
              <Select onValueChange={(value) => handleFilterChange("propertyType", value)}>
                <SelectTrigger id="property-type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="guesthouse">Guest House</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="purpose" className="text-sm font-medium mb-1 block">
                Purpose
              </label>
              <Select onValueChange={(value) => handleFilterChange("purpose", value)}>
                <SelectTrigger id="purpose">
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rental">For Rent</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="guesthouse">Guest House</SelectItem>
                  <SelectItem value="lease">For Lease</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {isAdvancedSearch && (
            <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <label htmlFor="location" className="text-sm font-medium mb-1 block">
                  Location
                </label>
                <Select onValueChange={(value) => handleFilterChange("location", value)}>
                  <SelectTrigger id="location">
                    <SelectValue placeholder="Select area" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Vijay Nagar">Vijay Nagar</SelectItem>
                    <SelectItem value="LIG">LIG Colony</SelectItem>
                    <SelectItem value="Bhawarkuan">Bhawarkuan</SelectItem>
                    <SelectItem value="Palasia">Palasia</SelectItem>
                    <SelectItem value="Simrol">Simrol</SelectItem>
                    <SelectItem value="Saket Nagar">Saket Nagar</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="bedrooms" className="text-sm font-medium mb-1 block">
                  Bedrooms
                </label>
                <Select onValueChange={(value) => handleFilterChange("bedrooms", value)}>
                  <SelectTrigger id="bedrooms">
                    <SelectValue placeholder="Any" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="for-who" className="text-sm font-medium mb-1 block">
                  Suitable For
                </label>
                <Select onValueChange={(value) => handleFilterChange("forWho", value)}>
                  <SelectTrigger id="for-who">
                    <SelectValue placeholder="Anyone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="students">Students</SelectItem>
                    <SelectItem value="families">Families</SelectItem>
                    <SelectItem value="couples">Couples</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-1 block">
                  Price Range (₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()})
                </label>
                <div className="pt-4 px-2">
                  <Slider
                    defaultValue={[5000, 50000]}
                    max={100000}
                    min={1000}
                    step={1000}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <Button onClick={applyFilters}>Apply Filters</Button>
          </div>
        </div>
      </section>

      {/* Properties List */}
      <section className="py-16 container">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">
            {filteredProperties.length} {filteredProperties.length === 1 ? "Property" : "Properties"} Found
          </h2>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No properties found</h3>
            <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" disabled>
              1
            </Button>
            <Button variant="ghost" size="icon">
              2
            </Button>
            <Button variant="ghost" size="icon">
              3
            </Button>
            <Button variant="ghost" size="icon">
              4
            </Button>
          </div>
        </div>
      </section>
    </main>
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
            {/* <div className="flex items-center">
              <SquareFeet className="h-4 w-4 mr-1 text-muted-foreground" />
              <span>{property.area}</span>
            </div> */}
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
