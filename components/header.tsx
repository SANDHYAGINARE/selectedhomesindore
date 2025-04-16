"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Home, Building2, Users, Phone, Menu, X, MapPin, Building } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">SELECTED HOMES</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1">
            <Home className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <Link
            href="/properties"
            className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
          >
            <Building2 className="h-4 w-4" />
            <span>Properties</span>
          </Link>
          <Link
            href="/commercial"
            className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
          >
            <Building className="h-4 w-4" />
            <span>Commercial</span>
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
          >
            <Users className="h-4 w-4" />
            <span>About Us</span>
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
          >
            <Phone className="h-4 w-4" />
            <span>Contact</span>
          </Link>
          <ModeToggle />
          <Button size="sm">
            <Phone className="mr-2 h-4 w-4" /> Call Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link
              href="/properties"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Building2 className="h-5 w-5" />
              <span>Properties</span>
            </Link>
            <Link
              href="/commercial"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Building className="h-5 w-5" />
              <span>Commercial</span>
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Users className="h-5 w-5" />
              <span>About Us</span>
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-2 p-2 rounded-md hover:bg-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </Link>
            <div className="pt-2">
              <Button className="w-full">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </div>
            <div className="pt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>O/1, Sector D, LIG Colony, Indore, MP 452001</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

