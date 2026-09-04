"use client"

import Link from "next/link"
import { Code, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  const navLinks = [
    { href: "#products", label: "Products" },
    { href: "#focus", label: "Focus Areas" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-14 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="/" 
          className="group flex items-center gap-2.5 rounded-xl px-2 py-1.5 -ml-2 transition-all hover:bg-white/10 active:scale-95 z-50"
          onClick={closeMenu}
        >
          <span className="text-sm font-bold tracking-tight text-foreground sm:text-base uppercase tracking-widest">
            Azorb
          </span>
        </a>
        
        {/* Desktop Navigation (Centered) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-sm font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-foreground transition-colors font-bold tracking-wide">
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center">
            {/* Removed active contact button, keeping it clean for product-led studio */}
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden flex items-center justify-center p-2 -mr-2 text-foreground z-50 transition-transform active:scale-95"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-14 z-40 bg-background/95 backdrop-blur-sm md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col items-center gap-6 p-8 text-sm font-semibold">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="w-full text-center py-3 border-b border-border/50 text-foreground hover:text-brand transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}