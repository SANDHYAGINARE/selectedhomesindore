"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

function page() {
  const [isMapLoaded, setIsMapLoaded] = useState(true)
  return (
    <div>
      <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center justify-center mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-2">Our Location</h2>
          <p className="text-muted-foreground max-w-2xl">Visit our office in Indore to discuss your property needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-lg overflow-hidden h-[400px] bg-muted relative">
            {isMapLoaded ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2881834576226!2d75.86820007500277!3d22.71957327951841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b7c2b30b9%3A0xb8f55c394d1e6c2e!2sSector%20D%2C%20Scheme%20No%2071%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1712407651619!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setIsMapLoaded(true)}
                onError={() => setIsMapLoaded(false)}
              ></iframe>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p>Map loading failed. Please try again later.</p>
                </div>
              </div>
            )}
          </div>

          <div className="bg-card/50 rounded-lg p-6 border border-primary/20">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Address</h4>
                  <p className="text-muted-foreground">O/1, Sector D, LIG Colony, Indore, Madhya Pradesh 452001</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-muted-foreground">info@selectedhomesindore.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Saturday: 9:00 AM - 7:00 PM
                    <br />
                    Sunday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h4 className="font-medium mb-2">Nearby Landmarks</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 2 km from Indore Railway Station</li>
                <li>• 1.5 km from Rajwada Palace</li>
                <li>• 3 km from Holkar Stadium</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default page
