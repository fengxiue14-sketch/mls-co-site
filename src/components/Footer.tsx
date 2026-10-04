import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-mls-navy text-white/80 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-mls-gold to-mls-gold-dark bg-clip-text text-transparent mb-4">
              MLS Co
            </h3>
            <p className="text-sm mb-4 max-w-md">
              Agence digitale specialisee dans la creation de sites web, solutions SaaS
              et conseil digital. Transformez votre activite avec des solutions sur mesure.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-mls-gold transition" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-mls-gold transition" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-mls-gold transition">Accueil</Link></li>
              <li><Link href="/services" className="hover:text-mls-gold transition">Services</Link></li>
              <li><Link href="/realisations" className="hover:text-mls-gold transition">Realisations</Link></li>
              <li><Link href="/equipe" className="hover:text-mls-gold transition">Equipe</Link></li>
              <li><Link href="/devis" className="hover:text-mls-gold transition">Devis</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-mls-gold" />
                <a href="mailto:contact@mlsco.com" className="hover:text-mls-gold transition">
                  contact@mlsco.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-mls-gold" />
                <a href="tel:+22600000000" className="hover:text-mls-gold transition">
                  +226 XX XX XX XX
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-mls-gold" />
                <span>Ouagadougou, Burkina Faso</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-mls-marine/30 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} MLS Co. Tous droits reserves.</p>
        </div>
      </div>
    </footer>
  );
}
