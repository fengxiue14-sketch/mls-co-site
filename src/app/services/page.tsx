import Link from "next/link";
import { Code2, Cloud, Shield, Zap, ArrowRight, Check } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Code2,
      title: "Création de Sites Web",
      description: "Sites vitrines, e-commerce, blogs, applications web modernes et performantes.",
      features: [
        "Design responsive (mobile, tablette, desktop)",
        "Optimisation SEO et performance",
        "Interface d'administration",
        "Hébergement et domaine",
      ],
      price: "à partir de 150 000 FCFA",
    },
    {
      icon: Cloud,
      title: "Solutions SaaS",
      description: "Plateformes cloud sur mesure pour digitaliser vos processus métiers.",
      features: [
        "Gestion de stock et inventaire",
        "CRM et suivi client",
        "Tableaux de bord et reporting",
        "API et intégrations",
      ],
      price: "à partir de 300 000 FCFA",
    },
    {
      icon: Shield,
      title: "Conseil Digital",
      description: "Stratégie digitale, audit, transformation numérique de votre entreprise.",
      features: [
        "Audit de présence digitale",
        "Stratégie de contenu",
        "Formation des équipes",
        "Accompagnement continu",
      ],
      price: "sur devis",
    },
    {
      icon: Zap,
      title: "Maintenance & Support",
      description: "Support technique, mises à jour, sécurité et optimisation continue.",
      features: [
        "Surveillance 24/7",
        "Mises à jour de sécurité",
        "Sauvegardes automatiques",
        "Support par WhatsApp et email",
      ],
      price: "à partir de 25 000 FCFA/mois",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-mls-navy to-mls-marine text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nos Services</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Des solutions digitales complètes pour propulser votre activité
          </p>
        </div>
      </section>

      {/* Services détaillés */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, i) => (
            <div
              key={i}
              className="grid md:grid-cols-2 gap-8 items-center bg-white border border-mls-navy/5 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="w-14 h-14 rounded-xl bg-mls-gold/10 flex items-center justify-center mb-4">
                  <service.icon size={28} className="text-mls-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-mls-navy mb-4">
                  {service.title}
                </h2>
                <p className="text-mls-navy/60 mb-6">{service.description}</p>
                <div className="text-lg font-semibold text-mls-gold mb-6">
                  {service.price}
                </div>
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 bg-mls-navy hover:bg-mls-marine text-white font-semibold px-6 py-3 rounded-lg transition-all"
                >
                  Demander un devis
                  <ArrowRight size={18} />
                </Link>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <ul className="space-y-3">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check size={20} className="text-mls-gold flex-shrink-0 mt-0.5" />
                      <span className="text-mls-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-mls-navy mb-4">
            Besoin d&apos;un service personnalisé ?
          </h2>
          <p className="text-lg text-mls-navy/60 mb-8">
            Contactez-nous pour discuter de votre projet.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-mls-gold hover:bg-mls-gold-dark text-mls-navy font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Nous contacter
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}