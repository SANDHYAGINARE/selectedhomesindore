import {
  Building2,
  Award,
  Users,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 hero-gradient z-10" />
        <div
          className="relative h-[50vh] bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=800&width=1920')",
          }}
        >
          <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-white text-glow mb-4">
              About Us
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Learn more about Selected Homes Indore and our mission to provide
              exceptional real estate services
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary mb-4">
              Our Story
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Trusted Real Estate Services in Indore Since 2021
            </h2>
            <p className="text-muted-foreground mb-6">
              Selected Homes Indore was founded with a simple mission: to help
              people find their perfect property in Indore without the hassle
              and confusion that often comes with real estate transactions.
            </p>
            <p className="text-muted-foreground mb-6">
              What started as a small operation has grown into one of Indore's
              most trusted real estate agencies, specializing in rental
              properties, guest houses, commercial spaces, and property sales.
              Our deep understanding of the local market and commitment to
              personalized service has helped thousands of clients find their
              ideal properties.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary">5+</span>
                <span className="text-muted-foreground">
                  Years of Experience
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary">10,000+</span>
                <span className="text-muted-foreground">Happy Clients</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary">75+</span>
                <span className="text-muted-foreground">Properties Listed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-bold text-primary">10+</span>
                <span className="text-muted-foreground">Expert Agents</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Selected Homes Indore Office"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-lg border border-primary/20 shadow-lg max-w-xs">
              <div className="flex items-center gap-3 mb-3">
                <Building2 className="h-6 w-6 text-primary" />
                <h3 className="font-bold text-lg">Our Office</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Visit our modern office in LIG Colony, Indore to discuss your
                property needs with our expert team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <div className="inline-flex px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary mb-4">
              Our Values
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              What Sets Us Apart
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Our core values guide everything we do and help us deliver
              exceptional service to our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card/50 p-6 rounded-lg border border-primary/20">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every interaction, transaction, and
                relationship. Our commitment to quality service has earned us
                the trust of our clients.
              </p>
            </div>

            <div className="bg-card/50 p-6 rounded-lg border border-primary/20">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Client-Focused</h3>
              <p className="text-muted-foreground">
                We put our clients' needs first, taking the time to understand
                their requirements and preferences to find the perfect property
                match.
              </p>
            </div>

            <div className="bg-card/50 p-6 rounded-lg border border-primary/20">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Efficiency</h3>
              <p className="text-muted-foreground">
                We value your time and work efficiently to streamline the
                property search, rental, and purchase processes, saving you time
                and hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-16 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-flex px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary mb-4">
              Founder's Message
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              A Word From Our Founder
            </h2>
            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground mb-6">
              "When I started Selected Homes Indore in 2021, my vision was to
              create a real estate agency that truly understands the diverse
              needs of Indore's residents and visitors. Whether you're a student
              looking for accommodation near your university, a family searching
              for your dream home, a couple starting your journey together, or a
              business owner seeking the perfect commercial space, we're here to
              make your property search seamless and successful."
            </blockquote>
            <div className="flex items-center">
              <div className="mr-4">
                <Image
                  src="/placeholder.svg?height=100&width=100"
                  alt="Ankit Gour"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div>
                <h4 className="font-bold">Ankit Gour</h4>
                <p className="text-sm text-primary">Founder & CEO</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Founder of Selected Homes Indore"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <div className="inline-flex px-4 py-1 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary mb-4">
              Get In Touch
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-2">
              Contact Information
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Have questions or want to discuss your property needs? Reach out
              to us through any of these channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/50 p-6 rounded-lg border border-primary/20 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-muted-foreground">
                O/1, LIG Colony, Indore, Madhya Pradesh 452010
              </p>
            </div>

            <div className="bg-card/50 p-6 rounded-lg border border-primary/20 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-muted-foreground">+91 82360 32162</p>
              <p className="text-muted-foreground">
                Monday - Saturday: 10:00 AM - 8:00 PM
              </p>
            </div>

            <div className="bg-card/50 p-6 rounded-lg border border-primary/20 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-muted-foreground">
                selectedhomes55@gmail.com
              </p>
              <p className="text-muted-foreground">
                We typically respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
