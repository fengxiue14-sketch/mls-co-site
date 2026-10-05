"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/realisations", label: "Réalisations" },
    { href: "/equipe", label: "Équipe" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-mls-navy/95 backdrop-blur-md border-b border-mls-marine/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo + baseline */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.jpg"
              alt="MLS Co"
              className="h-14 w-auto rounded transition-transform duration-200 group-hover:scale-105"
            />
            <span className="hidden md:flex flex-col text-[10px] leading-tight text-mls-blue-light/80 font-medium tracking-wider uppercase">
              <span>Innover</span>
              <span>Développer</span>
              <span>Performer</span>
            </span>
          </Link>

          {/* Menu desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-mls-blue-light transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/devis"
              className="bg-mls-blue-light hover:bg-mls-blue-dark text-mls-navy font-semibold px-5 py-2 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Bouton mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-mls-navy border-t border-mls-marine/30">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-white/80 hover:text-mls-blue-light transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/devis"
              className="block bg-mls-blue-light text-mls-navy font-semibold px-5 py-2 rounded-lg text-center"
              onClick={() => setIsOpen(false)}
            >
              Devis gratuit
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}