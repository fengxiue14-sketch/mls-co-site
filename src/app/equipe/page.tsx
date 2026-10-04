import Link from "next/link";
import {
  User,
  Code2,
  Server,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  CheckCircle2,
  Target,
  Users,
  Rocket,
  Heart,
} from "lucide-react";

export default function EquipePage() {
  const team = [
    {
      name: "Chérif",
      role: "Chef de Projet & Relation Client",
      description:
        "Coordinateur technique, garant de la qualité et de la livraison dans les délais. Point de contact principal pour nos clients.",
      specialties: ["Gestion de projet", "Relation client", "Stratégie"],
      icon: User,
      color: "from-mls-gold to-mls-gold-dark",
    },
    {
      name: "Oscar",
      role: "Développeur Frontend",
      description:
        "Spécialiste des interfaces modernes, React, Next.js et expérience utilisateur. Transforme vos idées en designs élégants.",
      specialties: ["React / Next.js", "UI/UX Design", "Tailwind CSS"],
      icon: Code2,
      color: "from-blue-500 to-blue-700",
    },
    {
      name: "Levis",
      role: "Développeur Backend & Cybersécurité",
      description:
        "Expert des API, bases de données, sécurité et infrastructure cloud. Assure la robustesse et la sécurité de vos systèmes.",
      specialties: ["Node.js / Python", "Sécurité", "DevOps"],
      icon: Server,
      color: "from-green-500 to-green-700",
    },
  ];

  const valeurs = [
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "Nous explorons en permanence les nouvelles technologies pour vous offrir les meilleures solutions.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Nous concevons des solutions rapides, optimisées et évolutives qui suivent votre croissance.",
    },
    {
      icon: Shield,
      title: "Sécurité",
      description:
        "La protection de vos données et de vos systèmes est au cœur de chacune de nos décisions.",
    },
    {
      icon: CheckCircle2,
      title: "Engagement",
      description:
        "Nous tenons nos promesses. Délais respectés, qualité livrée, support continu.",
    },
  ];

  const stats = [
    { icon: Target, value: "2026", label: "Année de création" },
    { icon: Users, value: "3", label: "Membres passionnés" },
    { icon: Rocket, value: "10+", label: "Projets livrés" },
    { icon: Heart, value: "100%", label: "Clients satisfaits" },
  ];

  return (
    <div className="min-h-screen">
      {/* ==================== HEADER ==================== */}
      <section className="bg-gradient-to-b from-mls-navy to-mls-marine text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Équipe</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Trois passionnés au service de votre transformation digitale
          </p>
        </div>
      </section>

      {/* ==================== STATS ==================== */}
      <section className="py-12 border-b border-mls-navy/10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-mls-gold/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={24} className="text-mls-gold" />
                </div>
                <div className="text-3xl font-bold text-mls-navy mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-mls-navy/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== MEMBRES ==================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white border border-mls-navy/5 rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div
                  className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                >
                  <member.icon size={40} className="text-white" />
                </div>

                <h2 className="text-2xl font-bold text-mls-navy mb-2">
                  {member.name}
                </h2>
                <div className="text-sm font-semibold text-mls-gold uppercase tracking-wide mb-4">
                  {member.role}
                </div>
                <p className="text-mls-navy/60 text-sm mb-6">
                  {member.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2">
                  {member.specialties.map((spec, j) => (
                    <span
                      key={j}
                      className="text-xs px-3 py-1 bg-mls-gray-light text-mls-navy/70 rounded-full"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== NOTRE HISTOIRE ==================== */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-mls-navy mb-6">
            Notre Histoire
          </h2>
          <p className="text-lg text-mls-navy/70 mb-4">
            MLS Co est née en 2026 à Ouagadougou, de la rencontre de trois
            passionnés d'informatique : <strong>Chérif</strong>,{" "}
            <strong>Oscar</strong> et <strong>Levis</strong>.
          </p>
          <p className="text-lg text-mls-navy/70 mb-4">
            Notre ambition : rendre la technologie accessible aux entreprises
            burkinabè et africaines, avec des solutions modernes, sécurisées et
            adaptées aux réalités locales.
          </p>
          <p className="text-lg text-mls-navy/70">
            De la création de sites web à la cybersécurité en passant par
            l'intelligence artificielle, nous accompagnons nos clients dans leur
            transformation digitale, étape par étape.
          </p>
        </div>
      </section>

      {/* ==================== VALEURS ==================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
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
                className="bg-gradient-to-br from-mls-navy to-mls-marine text-white rounded-2xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-mls-gold/20 flex items-center justify-center mb-4">
                  <valeur.icon size={26} className="text-mls-gold" />
                </div>
                <h3 className="text-lg font-bold mb-2">{valeur.title}</h3>
                <p className="text-sm text-white/70">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== REJOINDRE ==================== */}
      <section className="py-20 bg-gradient-to-r from-mls-navy to-mls-marine text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Envie de rejoindre l&apos;aventure ?
          </h2>
          <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Nous sommes toujours à la recherche de talents passionnés. Que tu
            sois développeur, designer ou marketeur, envoie-nous ta candidature.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-mls-gold hover:bg-mls-gold-dark text-mls-navy font-semibold px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105"
            >
              Nous contacter
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-mls-gold hover:text-mls-gold text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}