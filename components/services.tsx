import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Home, Key, Search, Users, Wallet, Briefcase, FileCheck } from "lucide-react"

export default function Services() {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl">
            We provide comprehensive real estate services in Indore to meet all your property needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Rental Properties</CardTitle>
              <CardDescription>
                Find the perfect rental property for your needs, whether you're a student, couple, or family
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wide range of apartments and houses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Flexible lease terms available</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Verified properties with detailed information</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Guest Houses</CardTitle>
              <CardDescription>
                Fully furnished guest houses perfect for short to medium-term stays in Indore
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Fully furnished with all amenities</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ideal for students and working professionals</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Convenient locations near institutions</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Key className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Lease Properties</CardTitle>
              <CardDescription>Long-term lease options for residential and commercial properties</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Commercial spaces for businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Long-term residential leases</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Customizable lease agreements</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Commercial Spaces</CardTitle>
              <CardDescription>Premium commercial properties for businesses of all sizes</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Office spaces in prime locations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Retail shops and showrooms</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Warehouses and industrial spaces</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Property Search</CardTitle>
              <CardDescription>Personalized property search to match your specific requirements</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Customized search based on your needs</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Virtual tours and detailed property information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Neighborhood insights and amenities</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Wallet className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Buy & Sell</CardTitle>
              <CardDescription>Professional assistance for buying and selling properties in Indore</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Market analysis and property valuation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Negotiation and paperwork assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Legal guidance throughout the process</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Property Management</CardTitle>
              <CardDescription>Complete property management services for landlords and property owners</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Tenant screening and selection</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Rent collection and maintenance coordination</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Regular property inspections and reports</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors">
            <CardHeader className="pb-2">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Legal Services</CardTitle>
              <CardDescription>Expert legal assistance for all your real estate transactions</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Document verification and preparation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Title clearance and property registration</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Legal consultation for property matters</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

