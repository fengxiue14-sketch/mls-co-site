import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function RealisationsPage() {
  const projets = [
    {
      title: "ADIM Optique",
      category: "Site Web E-commerce",
      description: "Plateforme de vente en ligne pour opticien. Catalogue de lunettes, gestion de commandes, paiement en ligne.",
      tech: ["Next.js", "Tailwind", "Supabase"],
      status: "Livré",
    },
    {
      title: "SaaS Gestion de Stock",
      category: "Application SaaS",
      description: "Solution cloud pour la gestion d'inventaire multi-entrepôts avec tableaux de bord et alertes automatiques.",
      tech: ["Next.js", "PostgreSQL", "Docker"],
      status: "Livré",
    },
    {
      title: "Portfolio MLS Co",
      category: "Site Vitrine",
      description: "Site officiel de notre agence. Présentation de nos services, réalisations et équipe.",
      tech: ["Next.js", "Tailwind", "TypeScript"],
      status: "En ligne",
    },
    {
      title: "LogiStock",
      category: "Application Web",
      description: "Système de gestion de stock avec notifications SMS pour PME locales.",
      tech: ["Flask", "SQLite", "Python"],
      status: "Livré",
    },
    {
      title: "Annuaire Santé",
      category: "Application Web",
      description: "Annuaire médical avec système USSD simulé pour zones à faible connectivité.",
      tech: ["Flask", "Bootstrap", "SMS"],
      status: "Livré",
    },
    {
      title: "Dashboard Livraisons",
      category: "Tableau de Bord",
      description: "Suivi en temps réel des livraisons de camions avec alertes et statistiques.",
      tech: ["Next.js", "Chart.js", "Supabase"],
      status: "Livré",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-mls-navy to-mls-marine text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Réalisations</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Découvrez les projets que nous avons livrés
          </p>
        </div>
      </section>

      {/* Filtres (statique pour l'instant) */}
      <section className="py-8 border-b border-mls-navy/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {["Tous", "Site Web", "SaaS", "Application Web", "Dashboard"].map((filter) => (
              <button
                key={filter}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === "Tous"
                    ? "bg-mls-navy text-white"
                    : "bg-mls-gray-light text-mls-navy/70 hover:bg-mls-navy/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((projet, i) => (
              <div
                key={i}
                className="group bg-white border border-mls-navy/5 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Placeholder visuel */}
                <div className="h-48 bg-gradient-to-br from-mls-navy to-mls-marine flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-4 left-4 w-20 h-20 bg-mls-gold rounded-full filter blur-2xl"></div>
                    <div className="absolute bottom-4 right-4 w-32 h-32 bg-mls-gold rounded-full filter blur-2xl"></div>
                  </div>
                  <div className="relative text-mls-gold font-mono text-sm opacity-80">
                    {`<${projet.title.split(' ')[0]} />`}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-mls-gold uppercase tracking-wide">
                      {projet.category}
                    </span>
                    <span
                      className={`text-xs px-2 py-1 rounded-full ${
                        projet.status === "En ligne"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {projet.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-mls-navy mb-2">
                    {projet.title}
                  </h3>
                  <p className="text-sm text-mls-navy/60 mb-4">
                    {projet.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {projet.tech.map((t, j) => (
                      <span
                        key={j}
                        className="text-xs px-2 py-1 bg-mls-gray-light text-mls-navy/70 rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button className="inline-flex items-center gap-2 text-sm font-semibold text-mls-gold hover:text-mls-gold-dark transition">
                    Voir le projet
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-mls-navy mb-4">
            Votre projet sera le prochain
          </h2>
          <p className="text-lg text-mls-navy/60 mb-8">
            Parlons de votre idée et construisons-la ensemble.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 bg-mls-gold hover:bg-mls-gold-dark text-mls-navy font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Démarrer mon projet
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}