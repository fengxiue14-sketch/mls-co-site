import Link from "next/link";
import {
  ExternalLink,
  ArrowRight,
  ShoppingBag,
  Boxes,
  Globe,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function RealisationsPage() {
  const projets = [
    {
      title: "Portfolio MLS Co",
      category: "Site Vitrine",
      status: "En ligne",
      statusColor: "green",
      description:
        "Site officiel de notre agence. Présentation de nos services, de notre équipe et de nos réalisations. Construit avec Next.js et Supabase.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
      icon: Globe,
      url: "https://mls-co-site.vercel.app",
      urlLabel: "Voir le site",
    },
    {
      title: "SaaS Gestion de Stock",
      category: "Application SaaS",
      status: "Livré",
      statusColor: "green",
      description:
        "Solution cloud complète pour la gestion d'inventaire multi-entrepôts. Tableaux de bord temps réel, alertes automatiques et exports de rapports.",
      tech: ["Next.js", "PostgreSQL", "Supabase", "Docker"],
      icon: Boxes,
      url: null,
      urlLabel: "Démo sur demande",
    },
    {
      title: "ADIM Optique",
      category: "Site E-commerce",
      status: "En négociation",
      statusColor: "gold",
      description:
        "Plateforme de vente en ligne pour opticien. Catalogue de lunettes, gestion de commandes, paiement en ligne et interface d'administration.",
      tech: ["Next.js", "Tailwind", "Supabase", "Paiement mobile"],
      icon: ShoppingBag,
      url: null,
      urlLabel: "Bientôt disponible",
    },
  ];

  const stats = [
    { value: "3", label: "Projets actifs" },
    { value: "2", label: "Livrés" },
    { value: "1", label: "En cours" },
    { value: "100%", label: "Clients satisfaits" },
  ];

  const getStatusBadge = (status: string, color: string) => {
    const colors: Record<string, string> = {
      green: "bg-green-100 text-green-700 border-green-200",
      gold: "bg-mls-gold/10 text-mls-gold-dark border-mls-gold/30",
      blue: "bg-blue-100 text-blue-700 border-blue-200",
    };

    const icons: Record<string, typeof CheckCircle2> = {
      "En ligne": CheckCircle2,
      Livré: CheckCircle2,
      "En négociation": Clock,
    };

    const Icon = icons[status] || Clock;

    return (
      <span
        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border ${colors[color]}`}
      >
        <Icon size={12} />
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen">
      {/* ==================== HEADER ==================== */}
      <section className="bg-gradient-to-b from-mls-navy to-mls-marine text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos Réalisations
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Découvrez les projets que nous avons construits ou qui sont en cours
          </p>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-12 border-b border-mls-navy/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-mls-gold mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-mls-navy/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GRILLE DE PROJETS ==================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projets.map((projet, i) => {
              const Icon = projet.icon;
              return (
                <div
                  key={i}
                  className="group bg-white border border-mls-navy/5 rounded-2xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  {/* Bandeau visuel */}
                  <div className="relative h-48 bg-gradient-to-br from-mls-navy to-mls-marine flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-4 left-4 w-20 h-20 bg-mls-gold rounded-full filter blur-2xl"></div>
                      <div className="absolute bottom-4 right-4 w-32 h-32 bg-mls-gold rounded-full filter blur-2xl"></div>
                    </div>
                    <Icon
                      size={64}
                      className="relative text-mls-gold opacity-80 group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <span className="text-[10px] font-semibold text-mls-gold uppercase tracking-wider">
                        {projet.category}
                      </span>
                      {getStatusBadge(projet.status, projet.statusColor)}
                    </div>

                    <h3 className="text-xl font-bold text-mls-navy mb-2">
                      {projet.title}
                    </h3>
                    <p className="text-sm text-mls-navy/60 mb-4 flex-grow">
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

                    {projet.url ? (
                      <a
                        href={projet.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-mls-gold hover:text-mls-gold-dark transition mt-auto"
                      >
                        {projet.urlLabel}
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-sm font-medium text-mls-navy/40 mt-auto">
                        {projet.urlLabel}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== SECTION "À VENIR" ==================== */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-mls-navy mb-4">
            D&apos;autres projets arrivent
          </h2>
          <p className="text-lg text-mls-navy/60 mb-8 max-w-2xl mx-auto">
            Notre portfolio s&apos;agrandit chaque mois. De nouveaux projets sont
            en préparation, notamment dans le domaine du mobile et de l&apos;IA.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              "Application Mobile Flutter",
              "Outil d'Analyse de Données",
              "Solution de Cybersécurité",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-4 border border-mls-navy/5"
              >
                <div className="text-sm font-medium text-mls-navy/60">
                  🚧 {item}
                </div>
                <div className="text-xs text-mls-navy/40 mt-1">
                  En préparation
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="py-20 bg-gradient-to-r from-mls-navy to-mls-marine text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Votre projet sera le prochain
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Parlons de votre idée et construisons-la ensemble.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 bg-mls-gold hover:bg-mls-gold-dark text-mls-navy font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Démarrer mon projet
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-mls-gold hover:text-mls-gold text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}