"use client"

import Link from "next/link"
import { Code, Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/i18n-context"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { lang, t, toggleLanguage } = useLanguage()

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)
  const closeMenu = () => setIsMobileMenuOpen(false)

  const navLinks = [
    { href: "#products", label: t.header.products },
    { href: "#focus", label: t.header.focus },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    closeMenu()
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="relative mx-auto flex h-16 sm:h-20 max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <a 
          href="/" 
          className="group flex items-center gap-2.5 rounded-xl px-2 py-1.5 -ml-2 transition-all hover:bg-white/10 active:scale-95 z-50"
          onClick={(e) => {
            e.preventDefault()
            closeMenu()
            
            import("sonner").then(({ toast }) => {
              toast.success(t.header.toast, {
                position: "top-center",
                duration: 2000,
                style: { padding: "8px 24px", minHeight: "36px", fontSize: "14px", borderRadius: "100px", width: "max-content", margin: "0 auto", left: 0, right: 0 }
              })
            })

            if (window.location.hash) {
              window.history.pushState("", document.title, window.location.pathname + window.location.search)
            }
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
        >
          <span className="text-base font-bold tracking-tight text-foreground sm:text-2xl uppercase tracking-widest">
            Azorb
          </span>
        </a>
        
        {/* Desktop Navigation (Centered) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12 text-base sm:text-lg font-medium text-muted-foreground">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="hover:text-foreground transition-colors font-bold tracking-wide"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center z-50">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 rounded-full border border-border/50 bg-surface/50 px-3 py-1.5 text-xs font-bold text-muted-foreground transition-all hover:bg-surface hover:text-foreground active:scale-95"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" />
            <span className={lang === 'ja' ? 'text-foreground' : ''}>JA</span>
            <span className="opacity-30">/</span>
            <span className={lang === 'en' ? 'text-foreground' : ''}>EN</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-4 z-50">
          {/* Mobile Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 rounded-full border border-border/50 bg-surface/50 px-2.5 py-1 text-[10px] font-bold text-muted-foreground transition-all active:scale-95"
          >
            <Globe className="h-3 w-3" />
            <span className={lang === 'ja' ? 'text-foreground' : ''}>JA</span>
            <span className="opacity-30">/</span>
            <span className={lang === 'en' ? 'text-foreground' : ''}>EN</span>
          </button>

          <button 
            className="flex items-center justify-center p-2 -mr-2 text-foreground transition-transform active:scale-95"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-14 z-40 bg-background/95 backdrop-blur-sm md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col items-center gap-6 p-8 text-sm font-semibold">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="w-full text-center py-3 border-b border-border/50 text-foreground hover:text-brand transition-colors"
                  onClick={(e) => handleNavClick(e, link.href)}
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