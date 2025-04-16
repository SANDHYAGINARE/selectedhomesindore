"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Student at IIT Indore",
    content:
      "Selected Homes helped me find the perfect apartment near my campus. The process was smooth and they understood my budget constraints as a student.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Working Professional",
    content:
      "I was looking for a guest house for my short-term project in Indore. Selected Homes provided me with multiple options and helped me choose the best one for my needs.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
  {
    id: 3,
    name: "Amit and Neha Joshi",
    role: "Couple",
    content:
      "As a newly married couple, we wanted a comfortable home in a good locality. Selected Homes understood our requirements perfectly and found us our dream home.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 4,
    name: "Suresh Agarwal",
    role: "Business Owner",
    content:
      "I needed a commercial space for my new venture. The team at Selected Homes was professional and helped me find the perfect location with good visibility.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
  },
  {
    id: 5,
    name: "Meera Singh",
    role: "Family of Four",
    content:
      "Moving to Indore with my family was stressful, but Selected Homes made the house hunting process easy. They found us a spacious home in a family-friendly neighborhood.",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])

  useEffect(() => {
    function updateVisibleTestimonials() {
      const width = window.innerWidth
      let count = 1

      if (width >= 1024) {
        count = 3
      } else if (width >= 768) {
        count = 2
      }

      const indices = []
      for (let i = 0; i < count; i++) {
        indices.push((currentIndex + i) % testimonials.length)
      }

      setVisibleTestimonials(indices.map((index) => testimonials[index]))
    }

    updateVisibleTestimonials()
    window.addEventListener("resize", updateVisibleTestimonials)

    return () => window.removeEventListener("resize", updateVisibleTestimonials)
  }, [currentIndex])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-16 container">
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight mb-2">What Our Clients Say</h2>
        <p className="text-muted-foreground max-w-2xl">
          Hear from our satisfied clients about their experience with Selected Homes
        </p>
      </div>

      <div className="relative">
        <div className="flex overflow-hidden gap-6">
          {visibleTestimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex-1 min-w-0 bg-card/50 border-primary/20">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/40" />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                    />
                  ))}
                </div>
                <p className="mb-4">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8 gap-2">
          <button
            onClick={handlePrev}
            className="p-2 rounded-full border hover:bg-accent"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-2 rounded-full border hover:bg-accent"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

