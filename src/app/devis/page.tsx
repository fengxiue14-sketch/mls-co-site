"use client";

import { useState } from "react";
import {
  Check,
  Send,
  Star,
  MessageCircle,
  ArrowRight,
  ClipboardList,
  PhoneCall,
  FileText,
  Rocket,
  CheckCircle2,
} from "lucide-react";

export default function DevisPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    offre: "",
    budget: "",
    delai: "",
    description: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const offres = [
    {
      nom: "Essentiel",
      prix: "150 000 FCFA",
      description: "Idéal pour une première présence en ligne",
      features: [
        "Site vitrine 5 pages",
        "Design responsive",
        "Formulaire de contact",
        "Optimisation SEO de base",
        "Hébergement 1 an inclus",
      ],
      populaire: false,
    },
    {
      nom: "Pro",
      prix: "300 000 FCFA",
      description: "Pour les entreprises qui veulent se démarquer",
      features: [
        "Site vitrine 10 pages",
        "Design personnalisé",
        "Blog intégré",
        "Optimisation SEO avancée",
        "Hébergement 1 an inclus",
        "Formation à l'administration",
      ],
      populaire: true,
    },
    {
      nom: "Premium",
      prix: "600 000 FCFA",
      description: "Solution complète avec fonctionnalités avancées",
      features: [
        "Site web illimité",
        "Design premium sur mesure",
        "E-commerce ou SaaS",
        "Base de données intégrée",
        "API et intégrations",
        "Hébergement 1 an inclus",
        "Support prioritaire 6 mois",
      ],
      populaire: false,
    },
  ];

  const process = [
    {
      icon: ClipboardList,
      step: "01",
      title: "Vous remplissez le formulaire",
      description: "Décrivez votre projet en détail avec le budget et le délai.",
    },
    {
      icon: PhoneCall,
      step: "02",
      title: "Nous vous contactons sous 24h",
      description: "Appel ou WhatsApp pour clarifier les points essentiels.",
    },
    {
      icon: FileText,
      step: "03",
      title: "Vous recevez un devis détaillé",
      description: "Prix, délai, livrables — tout est transparent.",
    },
    {
      icon: Rocket,
      step: "04",
      title: "Démarrage du projet",
      description: "Après validation, nous commençons immédiatement.",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          sujet: "Demande de devis",
          message: `Offre : ${formData.offre}\nBudget : ${formData.budget}\nDélai : ${formData.delai}\n\nDescription :\n${formData.description}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(
          "Demande envoyée ! Nous vous contacterons avec un devis sous 24h."
        );
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          entreprise: "",
          offre: "",
          budget: "",
          delai: "",
          description: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Une erreur est survenue. Réessayez.");
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Impossible d'envoyer la demande. Vérifiez votre connexion."
      );
    }
  };

  return (
    <div className="min-h-screen">
      {/* ==================== HEADER ==================== */}
      <section className="bg-gradient-to-b from-mls-navy to-mls-marine text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-mls-blue-light/10 border border-mls-blue-light/30 rounded-full px-4 py-2 mb-6">
            <Star size={16} className="text-mls-blue-light fill-mls-blue-light" />
            <span className="text-sm text-mls-blue-light font-medium">
              Devis 100% gratuit et sans engagement
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Demander un devis gratuit
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Réponse garantie sous 24h. Sans engagement.
          </p>
        </div>
      </section>

      {/* ==================== OFFRES ==================== */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-mls-navy text-center mb-4">
            Nos offres packagées
          </h2>
          <p className="text-lg text-mls-navy/60 text-center mb-12 max-w-2xl mx-auto">
            Choisissez l&apos;offre la plus adaptée, ou demandez du sur-mesure
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {offres.map((offre, i) => (
              <div
                key={i}
                className={`relative bg-white rounded-2xl p-8 ${
                  offre.populaire
                    ? "border-2 border-mls-blue-light shadow-2xl md:-translate-y-4"
                    : "border border-mls-navy/5 hover:shadow-xl"
                } transition-all duration-300`}
              >
                {offre.populaire && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-mls-blue-light text-mls-navy text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star size={12} className="fill-mls-navy" />
                    POPULAIRE
                  </div>
                )}

                <h3 className="text-2xl font-bold text-mls-navy mb-2">
                  {offre.nom}
                </h3>
                <p className="text-sm text-mls-navy/60 mb-6">
                  {offre.description}
                </p>
                <div className="text-3xl font-bold text-mls-blue-light mb-6">
                  {offre.prix}
                </div>

                <ul className="space-y-3 mb-8">
                  {offre.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check
                        size={16}
                        className="text-mls-blue-light flex-shrink-0 mt-0.5"
                      />
                      <span className="text-mls-navy/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    setFormData({ ...formData, offre: offre.nom });
                    document
                      .getElementById("devis-form")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    offre.populaire
                      ? "bg-mls-blue-light hover:bg-mls-blue-dark text-mls-navy"
                      : "bg-mls-navy hover:bg-mls-marine text-white"
                  }`}
                >
                  Choisir {offre.nom}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FORMULAIRE ==================== */}
      <section id="devis-form" className="py-20 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-mls-navy text-center mb-4">
            Décrivez votre projet
          </h2>
          <p className="text-lg text-mls-navy/60 text-center mb-12">
            Plus vous êtes précis, plus notre devis sera adapté.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-mls-navy mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-blue-light transition"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-mls-navy mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-blue-light transition"
                  placeholder="votre@email.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-mls-navy mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-blue-light transition"
                  placeholder="+226 XX XX XX XX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-mls-navy mb-2">
                  Entreprise
                </label>
                <input
                  type="text"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-blue-light transition"
                  placeholder="Nom de votre entreprise"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className="block text-sm font-medium text-mls-navy mb-2">
                  Offre souhaitée *
                </label>
                <select
                  name="offre"
                  value={formData.offre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-blue-light transition bg-white"
                >
                  <option value="">Choisir</option>
                  <option value="Essentiel">Essentiel</option>
                  <option value="Pro">Pro</option>
                  <option value="Premium">Premium</option>
                  <option value="Sur mesure">Sur mesure</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-mls-navy mb-2">
                  Budget estimé
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-blue-light transition bg-white"
                >
                  <option value="">Choisir</option>
                  <option value="< 150k">Moins de 150 000 FCFA</option>
                  <option value="150k-300k">
                    150 000 - 300 000 FCFA
                  </option>
                  <option value="300k-600k">
                    300 000 - 600 000 FCFA
                  </option>
                  <option value="> 600k">Plus de 600 000 FCFA</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-mls-navy mb-2">
                  Délai
                </label>
                <select
                  name="delai"
                  value={formData.delai}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-blue-light transition bg-white"
                >
                  <option value="">Choisir</option>
                  <option value="Urgent (< 1 mois)">
                    Urgent (moins d&apos;1 mois)
                  </option>
                  <option value="Normal (1-3 mois)">Normal (1-3 mois)</option>
                  <option value="Flexible (> 3 mois)">
                    Flexible (plus de 3 mois)
                  </option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-mls-navy mb-2">
                Description du projet *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-blue-light transition resize-none"
                placeholder="Décrivez votre projet : objectifs, fonctionnalités souhaitées, inspiration..."
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-mls-blue-light hover:bg-mls-blue-dark disabled:opacity-50 disabled:cursor-not-allowed text-mls-navy font-semibold px-6 py-4 rounded-lg transition-all duration-200 hover:scale-105"
              >
                {status === "loading"
                  ? "Envoi en cours..."
                  : "Envoyer ma demande"}
                <Send size={18} />
              </button>
              <a
                href="https://wa.me/22657022479"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-4 rounded-lg transition-all duration-200 hover:scale-105"
              >
                <MessageCircle size={18} />
                WhatsApp direct
              </a>
            </div>

            {statusMessage && (
              <div
                className={`p-4 rounded-lg text-sm flex items-start gap-2 ${
                  status === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {status === "success" && (
                  <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5" />
                )}
                <span>{statusMessage}</span>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mls-navy mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-lg text-mls-navy/60 max-w-2xl mx-auto">
              De votre demande à la livraison, en 4 étapes simples
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

          <div className="text-center mt-12">
            <p className="text-mls-navy/60 mb-4">
              Besoin d&apos;en discuter directement ?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/22657022479"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                <MessageCircle size={18} />
                WhatsApp : +226 57 02 24 79
              </a>
              <a
                href="tel:+22658587638"
                className="inline-flex items-center justify-center gap-2 border border-mls-navy/10 hover:border-mls-blue-light text-mls-navy font-semibold px-6 py-3 rounded-lg transition-all"
              >
                <PhoneCall size={18} />
                Appeler : +226 58 58 76 38
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}