import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const team = [
  {
    id: 1,
    name: "Ankit Gour",
    role: "Founder & CEO",
    bio: "With over 5 years of experience in Indore's real estate market, Rajesh leads our team with expertise and vision.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      phone: "+91 78699 96552",
      // email: "rajesh@selectedhomesindore.com",
    },
    social: {
      linkedin: "#",
      // facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Pooja Patil",
    role: "Co-founder & Head of Operations",
    bio: "Specializing in family homes and student accommodations, Pooja has helped hundreds of clients find their perfect home.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      phone: "+91 82360 32162",
      email: "priya@selectedhomesindore.com",
    },
    social: {
      linkedin: "#",
      // facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Mayur Patil",
    role: "Property Specialist",
    bio: "Mayur's expertise in real estate has made him the go-to advisor for properties in Indore.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      phone: "+91 98765 43212",
      email: "vikram@selectedhomesindore.com",
    },
    social: {
      linkedin: "#",
      // facebook: "#",
      instagram: "#",
    },
  },
  {
    id: 4,
    name: "Sandhya Ginare",
    role: "Legal Advisor",
    bio: "With a background in real estate law, Anita ensures all our transactions are legally sound and hassle-free.",
    image: "/placeholder.svg?height=400&width=400",
    contact: {
      phone: "+91 99813 24820 ",
      email: "sandhyaginare26@gmail.com",
    },
    social: {
      linkedin: "#",
      // facebook: "#",
      instagram: "#",
    },
  },
]

export default function TeamSection() {
  return (
    <section className="py-16 container">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">Meet Our Team</h2>
        <p className="text-muted-foreground max-w-2xl">
          Our experienced professionals are dedicated to helping you find the perfect property
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((member) => (
          <Card
            key={member.id}
            className="overflow-hidden group bg-card/50 border-primary/20 hover:border-primary/50 transition-colors"
          >
            <div className="relative h-64">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <div className="w-full">
                  <div className="flex justify-center space-x-3 mb-2">
                    <Link href={member.social.linkedin} className="text-white hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    {/* <Link href={member.social.facebook} className="text-white hover:text-primary">
                      <Facebook className="h-5 w-5" />
                    </Link> */}
                    <Link href={member.social.instagram} className="text-white hover:text-primary">
                      <Instagram className="h-5 w-5" />
                    </Link>
                  </div>
                  <div className="flex items-center justify-center text-sm text-white">
                    <Phone className="h-3 w-3 mr-1" />
                    <span>{member.contact.phone}</span>
                  </div>
                </div>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-primary text-sm mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

