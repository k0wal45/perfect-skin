"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MapPin, CalendarDays, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKSY_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Strona Główna", href: "/" },
  { label: "O nas", href: "/o-nas" },
  { label: "Oferta", href: "/oferta" },
  { label: "Kontakt", href: "/kontakt" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-[0_1px_8px_rgba(61,53,46,0.06)]">
      {/* Top bar */}
      <div className="bg-surface-container-low text-neutral-600 px-5 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-9 text-[11px] font-medium tracking-wide font-sans">
          <div className="flex items-center gap-7">
            <span className="inline-flex items-center gap-1">
              <Phone className="h-3.5 w-3.5 text-neutral-500" />
              <span className="tracking-wider">+48 500 033 031</span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5 text-neutral-500" />
              <span>Chorzów, ul. Gałeczki 30</span>
            </span>
          </div>
          <span className="hidden md:inline text-neutral-500">
            Pn - Pt: 9:00 - 20:00 | Sob: 9:00 - 15:00
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-surface-bright/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 lg:px-12 h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span className="font-serif text-[22px] text-neutral-900 tracking-tight">
              Perfect Skin
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-surface-container-low/70 shadow-[0_1px_4px_rgba(61,53,46,0.04)]">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Button
                  key={link.href}
                  asChild
                  variant={isActive ? "secondary" : "ghost"}
                  size="sm"
                >
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                </Button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Button asChild size="md" className="hidden sm:inline-flex shadow-[0_6px_20px_rgba(0,0,0,0.12)]">
              <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer">
                <CalendarDays className="h-4 w-4" />
                Zarezerwuj wizytę
              </a>
            </Button>
            
            {/* Mobile menu toggle */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-neutral-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-surface-bright border-t border-surface-container shadow-lg flex flex-col p-5 gap-2">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Button
                key={link.href}
                asChild
                variant={isActive ? "secondary" : "ghost"}
                className="w-full justify-start text-left text-lg py-6"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </Button>
            );
          })}
          <Button asChild size="lg" className="w-full mt-4 sm:hidden">
            <a href={BOOKSY_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsMobileMenuOpen(false)}>
              <CalendarDays className="h-4 w-4 mr-2" />
              Zarezerwuj wizytę
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
