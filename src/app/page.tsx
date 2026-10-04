import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cloud,
  Shield,
  Zap,
  CheckCircle2,
  Star,
  Database,
  BarChart3,
  GraduationCap,
  Server,
  Lock,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Code2,
      title: "Sites Web",
      description: "Sites vitrines, e-commerce, applications web modernes et performantes",
    },
    {
      icon: Cloud,
      title: "Applications & SaaS",
      description: "Plateformes cloud sur mesure : gestion, CRM, ERP, outils métiers",
    },
    {
      icon: Database,
      title: "Bases de Données",
      description: "Conception, administration et optimisation de vos données",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Analyse de données, tableaux de bord, aide à la décision",
    },
    {
      icon: Lock,
      title: "Cybersécurité",
      description: "Tests d'intrusion, audit de sécurité, protection de vos systèmes",
    },
    {
      icon: Server,
      title: "Administration Systèmes",
      description: "Windows Server, Linux, virtualisation, infrastructure",
    },
  ];

  const valeurs = [
    {
      icon: Sparkles,
      title: "Innovation",
      description: "Toujours à la pointe des technologies",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Des solutions rapides et efficaces",
    },
    {
      icon: Shield,
      title: "Sécurité",
      description: "Vos données protégées en priorité",
    },
    {
      icon: CheckCircle2,
      title: "Engagement",
      description: "Nous tenons nos promesses",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ============================================================ */}
      {/* SECTION 1 — HERO */}
      {/* ============================================================ */}
      <section className="relative bg-gradient-to-b from-mls-navy to-mls-marine text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-mls-gold rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-mls-gold rounded-full filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-mls-gold/10 border border-mls-gold/30 rounded-full px-4 py-2 mb-6">
                <Zap size={16} className="text-mls-gold" />
                <span className="text-sm text-mls-gold font-medium">
                  Agence digitale nouvelle génération
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Des solutions digitales pour un monde qui{" "}
                <span className="bg-gradient-to-r from-mls-gold to-mls-gold-dark bg-clip-text text-transparent">
                  évolue
                </span>
              </h1>

              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-xl">
                Sites web performants, applications SaaS, cybersécurité, conseil digital.
                Nous construisons vos outils numériques pour propulser votre business.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/devis"
                  className="inline-flex items-center justify-center gap-2 bg-mls-gold hover:bg-mls-gold-dark text-mls-navy font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Demander un devis gratuit
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-mls-gold hover:text-mls-gold text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
                >
                  Voir nos services
                </Link>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-mls-gold" />
                  Devis en 24h
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-mls-gold" />
                  Sans engagement
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-mls-gold" />
                  Support local
                </span>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-mls-marine/50 backdrop-blur-sm border border-mls-gold/20 rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <pre className="text-xs text-mls-gold font-mono overflow-hidden">
{`const mls = {
  services: [
    "sites-web",
    "saas",
    "cybersecurite",
    "conseil",
    "maintenance"
  ],
  valeurs: [
    "innovation",
    "performance",
    "securite",
    "engagement"
  ],
  passion: "code",
  qualite: 100
};

// Votre succès commence ici
mls.build(your_ideas);`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — SERVICES (6 cartes) */}
      {/* ============================================================ */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mls-navy mb-4">
              Nos Services
            </h2>
            <p className="text-lg text-mls-navy/60 max-w-2xl mx-auto">
              Des solutions complètes pour votre présence digitale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white border border-mls-navy/5 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-mls-gold/10 flex items-center justify-center mb-4 group-hover:bg-mls-gold transition-colors duration-300">
                  <service.icon
                    size={24}
                    className="text-mls-gold group-hover:text-mls-navy transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-mls-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-mls-navy/60">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-mls-gold hover:text-mls-gold-dark font-semibold transition"
            >
              Voir les 11 services en détail
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — VALEURS MLS CO */}
      {/* ============================================================ */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mls-navy mb-4">
              Nos Valeurs
            </h2>
            <p className="text-lg text-mls-navy/60 max-w-2xl mx-auto">
              Ce qui nous guide dans chaque projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valeurs.map((valeur, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-mls-navy to-mls-marine text-white rounded-2xl p-6 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-mls-gold/20 flex items-center justify-center mx-auto mb-4">
                  <valeur.icon size={26} className="text-mls-gold" />
                </div>
                <h3 className="text-lg font-bold mb-2">{valeur.title}</h3>
                <p className="text-sm text-white/70">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — POURQUOI NOUS */}
      {/* ============================================================ */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-mls-navy mb-6">
                Pourquoi choisir{" "}
                <span className="text-mls-gold">MLS Co</span> ?
              </h2>
              <p className="text-lg text-mls-navy/60 mb-8">
                Nous combinons expertise technique, créativité et rigueur pour livrer
                des solutions qui dépassent vos attentes.
              </p>

              <ul className="space-y-4">
                {[
                  "Livraison rapide et dans les délais",
                  "Code propre, documenté et maintenable",
                  "Support réactif après livraison",
                  "Tarifs transparents et adaptés",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-mls-gold flex-shrink-0 mt-1"
                    />
                    <span className="text-mls-navy/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { number: "10+", label: "Projets livrés" },
                { number: "100%", label: "Clients satisfaits" },
                { number: "24/7", label: "Support technique" },
                { number: "5★", label: "Qualité garantie" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-mls-navy to-mls-marine text-white rounded-2xl p-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-mls-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — CTA FINAL */}
      {/* ============================================================ */}
      <section className="py-20 bg-gradient-to-r from-mls-navy to-mls-marine text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={24} className="text-mls-gold fill-mls-gold" />
            ))}
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre activité ?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet. Devis gratuit en moins de 24h.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 bg-mls-gold hover:bg-mls-gold-dark text-mls-navy font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Démarrer mon projet
              <ArrowRight size={20} />
            </Link>
            <a
              href="https://wa.me/22657022479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-mls-gold hover:text-mls-gold text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              WhatsApp direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}