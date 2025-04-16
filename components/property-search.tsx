"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Search, SlidersHorizontal } from "lucide-react"

export default function PropertySearch() {
  const [isAdvancedSearch, setIsAdvancedSearch] = useState(false)
  const [priceRange, setPriceRange] = useState([5000, 50000])

  const handlePriceChange = (value) => {
    setPriceRange(value)
  }

  const toggleAdvancedSearch = () => {
    setIsAdvancedSearch(!isAdvancedSearch)
  }

  return (
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
          <div>
            <label htmlFor="location" className="text-sm font-medium mb-1 block">
              Location
            </label>
            <Select>
              <SelectTrigger id="location">
                <SelectValue placeholder="Select area" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="vijay-nagar">Vijay Nagar</SelectItem>
                <SelectItem value="lig">LIG Colony</SelectItem>
                <SelectItem value="bhawarkuan">Bhawarkuan</SelectItem>
                <SelectItem value="palasia">Palasia</SelectItem>
                <SelectItem value="rajendra-nagar">Rajendra Nagar</SelectItem>
                <SelectItem value="sudama-nagar">Sudama Nagar</SelectItem>
                <SelectItem value="all">All Indore</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="property-type" className="text-sm font-medium mb-1 block">
              Property Type
            </label>
            <Select>
              <SelectTrigger id="property-type">
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="guesthouse">Guest House</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="all">All Types</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="purpose" className="text-sm font-medium mb-1 block">
              Purpose
            </label>
            <Select>
              <SelectTrigger id="purpose">
                <SelectValue placeholder="Select purpose" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rent">For Rent</SelectItem>
                <SelectItem value="buy">For Buy</SelectItem>
                <SelectItem value="lease">For Lease</SelectItem>
                <SelectItem value="all">All</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block opacity-0 md:block hidden">Search</label>
            <Button className="w-full">
              <Search className="h-4 w-4 mr-2" />
              Find Properties
            </Button>
          </div>
        </div>

        {isAdvancedSearch && (
          <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="bedrooms" className="text-sm font-medium mb-1 block">
                Bedrooms
              </label>
              <Select>
                <SelectTrigger id="bedrooms">
                  <SelectValue placeholder="Any" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="any">Any</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label htmlFor="for-who" className="text-sm font-medium mb-1 block">
                Suitable For
              </label>
              <Select>
                <SelectTrigger id="for-who">
                  <SelectValue placeholder="Anyone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="students">Students</SelectItem>
                  <SelectItem value="families">Families</SelectItem>
                  <SelectItem value="couples">Couples</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="anyone">Anyone</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="lg:col-span-2">
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
      </div>
    </section>
  )
}

