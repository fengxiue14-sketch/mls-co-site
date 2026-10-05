import Link from "next/link";
import {
  Code2,
  Smartphone,
  Monitor,
  Database,
  BarChart3,
  Lock,
  Server,
  GraduationCap,
  Lightbulb,
  Wrench,
  Terminal,
  ArrowRight,
  Check,
  Search,
  PenTool,
  Rocket,
  Headphones,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    // ==================== DÉVELOPPEMENT ====================
    {
      icon: Code2,
      category: "Développement",
      title: "Création de Sites Web",
      description:
        "Sites vitrines, e-commerce, blogs, applications web modernes et performantes.",
      features: [
        "Design responsive (mobile, tablette, desktop)",
        "Optimisation SEO et performance",
        "Interface d'administration",
        "Hébergement et domaine",
      ],
    },
    {
      icon: Smartphone,
      category: "Développement",
      title: "Applications Mobiles",
      description:
        "Applications Android et iOS natives ou cross-platform (Flutter, React Native).",
      features: [
        "Développement cross-platform",
        "Interface utilisateur moderne",
        "Notifications push",
        "Publication sur les stores",
      ],
    },
    {
      icon: Monitor,
      category: "Développement",
      title: "Logiciels de Bureau",
      description:
        "Applications desktop Windows, macOS et Linux (Electron, Tauri, Qt).",
      features: [
        "Applications natives performantes",
        "Mode hors ligne",
        "Intégration système",
        "Installateurs professionnels",
      ],
    },

    // ==================== DATA & INTELLIGENCE ====================
    {
      icon: Database,
      category: "Data & Intelligence",
      title: "Bases de Données",
      description:
        "Conception, administration et optimisation de bases de données relationnelles et NoSQL.",
      features: [
        "Modélisation et conception",
        "Migration et optimisation",
        "Sauvegardes automatiques",
        "Sécurisation des données",
      ],
    },
    {
      icon: BarChart3,
      category: "Data & Intelligence",
      title: "Business Intelligence",
      description:
        "Analyse de données, tableaux de bord interactifs et aide à la décision.",
      features: [
        "Tableaux de bord personnalisés",
        "Rapports automatisés",
        "Visualisation de données",
        "KPIs et métriques métiers",
      ],
    },

    // ==================== SÉCURITÉ ====================
    {
      icon: Lock,
      category: "Sécurité",
      title: "Tests d'Intrusion (Pentest)",
      description:
        "Audit de sécurité offensif pour identifier vos vulnérabilités avant les attaquants.",
      features: [
        "Scan de vulnérabilités",
        "Rapport détaillé et priorisé",
        "Recommandations de correction",
        "Re-test après corrections",
      ],
    },

    // ==================== INFRASTRUCTURE ====================
    {
      icon: Server,
      category: "Infrastructure",
      title: "Administration Systèmes",
      description:
        "Gestion de serveurs Windows Server et Linux, virtualisation, cloud.",
      features: [
        "Installation et configuration",
        "Virtualisation (VMware, Hyper-V)",
        "Monitoring et supervision",
        "Maintenance préventive",
      ],
    },
    {
      icon: Terminal,
      category: "Infrastructure",
      title: "Virtualisation",
      description:
        "Mise en place d'environnements virtualisés pour optimiser vos infrastructures.",
      features: [
        "VMware, Hyper-V, Proxmox",
        "Consolidation de serveurs",
        "Snapshots et sauvegardes",
        "Isolation et tests",
      ],
    },

    // ==================== CONSEIL & FORMATION ====================
    {
      icon: GraduationCap,
      category: "Conseil & Formation",
      title: "Formation Informatique",
      description:
        "Formation et accompagnement de vos équipes aux outils numériques.",
      features: [
        "Formation sur mesure",
        "Sessions pratiques",
        "Support post-formation",
        "Documentation fournie",
      ],
    },
    {
      icon: Lightbulb,
      category: "Conseil & Formation",
      title: "Conseil en Transformation Digitale",
      description:
        "Stratégie digitale, audit et accompagnement dans votre transition numérique.",
      features: [
        "Audit de présence digitale",
        "Stratégie sur mesure",
        "Feuille de route claire",
        "Accompagnement continu",
      ],
    },

    // ==================== MAINTENANCE ====================
    {
      icon: Wrench,
      category: "Maintenance",
      title: "Maintenance & Support Technique",
      description:
        "Support technique, mises à jour, sécurité et optimisation continue.",
      features: [
        "Surveillance 24/7",
        "Mises à jour de sécurité",
        "Sauvegardes automatiques",
        "Support WhatsApp et email",
      ],
    },
  ];

  const categories = [
    { name: "Tous", value: "all" },
    { name: "Développement", value: "Développement" },
    { name: "Data & Intelligence", value: "Data & Intelligence" },
    { name: "Sécurité", value: "Sécurité" },
    { name: "Infrastructure", value: "Infrastructure" },
    { name: "Conseil & Formation", value: "Conseil & Formation" },
    { name: "Maintenance", value: "Maintenance" },
  ];

  const process = [
    {
      icon: Search,
      step: "01",
      title: "Découverte",
      description: "Nous écoutons vos besoins et analysons votre contexte.",
    },
    {
      icon: PenTool,
      step: "02",
      title: "Conception",
      description: "Nous concevons la solution adaptée à votre budget.",
    },
    {
      icon: Rocket,
      step: "03",
      title: "Développement",
      description: "Nous construisons, testons et livrons votre projet.",
    },
    {
      icon: Headphones,
      step: "04",
      title: "Support",
      description: "Nous vous accompagnons après la livraison.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ==================== HEADER ==================== */}
      <section className="bg-gradient-to-b from-mls-navy to-mls-marine text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            11 services pour propulser votre activité dans l'ère numérique
          </p>
        </div>
      </section>

      {/* ==================== CATÉGORIES (filtres visuels) ==================== */}
      <section className="py-8 border-b border-mls-navy/10 bg-white sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <span
                key={cat.value}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  cat.value === "all"
                    ? "bg-mls-navy text-white"
                    : "bg-mls-gray-light text-mls-navy/70"
                }`}
              >
                {cat.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== GRILLE DE SERVICES ==================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="group bg-white border border-mls-navy/5 rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-mls-blue-light/10 flex items-center justify-center group-hover:bg-mls-blue-light transition-colors duration-300">
                    <service.icon
                      size={26}
                      className="text-mls-blue-light group-hover:text-mls-navy transition-colors duration-300"
                    />
                  </div>
                  <span className="text-[10px] font-semibold text-mls-blue-light uppercase tracking-wider bg-mls-blue-light/10 px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-mls-navy mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-mls-navy/60 mb-4 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {service.features.slice(0, 3).map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs">
                      <Check
                        size={14}
                        className="text-mls-blue-light flex-shrink-0 mt-0.5"
                      />
                      <span className="text-mls-navy/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/devis"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-mls-blue-light hover:text-mls-blue-dark transition mt-auto"
                >
                  Demander un devis
                  <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== PROCESSUS ==================== */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mls-navy mb-4">
              Notre Processus
            </h2>
            <p className="text-lg text-mls-navy/60 max-w-2xl mx-auto">
              Une méthode claire en 4 étapes, du premier contact à la livraison
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((step, i) => (
              <div
                key={i}
                className="relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl font-bold text-mls-blue-light/10 absolute top-4 right-4">
                  {step.step}
                </div>
                <div className="w-12 h-12 rounded-xl bg-mls-blue-light/10 flex items-center justify-center mb-4">
                  <step.icon size={24} className="text-mls-blue-light" />
                </div>
                <h3 className="text-lg font-bold text-mls-navy mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-mls-navy/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA FINAL ==================== */}
      <section className="py-20 bg-gradient-to-r from-mls-navy to-mls-marine text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Besoin d&apos;un service personnalisé ?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet. Nous vous proposerons la solution adaptée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 bg-mls-blue-light hover:bg-mls-blue-dark text-mls-navy font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Demander un devis
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-mls-blue-light hover:text-mls-blue-light text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}