import Link from "next/link";
import { User, Code, Server, ArrowRight } from "lucide-react";

export default function EquipePage() {
  const team = [
    {
      name: "Chérif",
      role: "Chef de projet",
      description: "Coordinateur technique, garant de la qualité et de la livraison dans les délais.",
      icon: User,
    },
    {
      name: "Oscar",
      role: "Développeur Frontend",
      description: "Spécialiste des interfaces modernes, React, Next.js et expérience utilisateur.",
      icon: Code,
    },
    {
      name: "Levis",
      role: "Développeur Backend",
      description: "Expert des API, bases de données, sécurité et infrastructure cloud.",
      icon: Server,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-mls-navy to-mls-marine text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Équipe</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Trois passionnés au service de votre transformation digitale
          </p>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white border border-mls-navy/5 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-mls-gold to-mls-gold-dark flex items-center justify-center mx-auto mb-6">
                  <member.icon size={36} className="text-mls-navy" />
                </div>
                <h2 className="text-2xl font-bold text-mls-navy mb-2">
                  {member.name}
                </h2>
                <div className="text-sm font-semibold text-mls-gold uppercase tracking-wide mb-4">
                  {member.role}
                </div>
                <p className="text-mls-navy/60">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-mls-navy mb-4">
            Nos Valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-6">
              <div className="text-2xl font-bold text-mls-gold mb-2">Excellence</div>
              <p className="text-sm text-mls-navy/60">La qualité avant tout</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="text-2xl font-bold text-mls-gold mb-2">Transparence</div>
              <p className="text-sm text-mls-navy/60">Communication honnête et claire</p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <div className="text-2xl font-bold text-mls-gold mb-2">Innovation</div>
              <p className="text-sm text-mls-navy/60">Toujours à la pointe</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-mls-navy mb-4">
            Envie de travailler avec nous ?
          </h2>
          <p className="text-lg text-mls-navy/60 mb-8">
            Discutons de votre projet autour d&apos;un café.
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