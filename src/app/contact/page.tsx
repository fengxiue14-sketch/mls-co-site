"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(
          "Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais."
        );
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          sujet: "",
          message: "",
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Une erreur est survenue. Réessayez.");
      }
    } catch {
      setStatus("error");
      setStatusMessage(
        "Impossible d'envoyer le message. Vérifiez votre connexion."
      );
    }
  };

  const contacts = [
    {
      icon: MessageCircle,
      title: "WhatsApp (principal)",
      value: "+226 57 02 24 79",
      href: "https://wa.me/22657022479",
      highlight: true,
    },
    {
      icon: Phone,
      title: "Téléphone 2",
      value: "+226 58 58 76 38",
      href: "tel:+22658587638",
      highlight: false,
    },
    {
      icon: Phone,
      title: "Téléphone 3",
      value: "+226 01 75 50 40",
      href: "tel:+22601755040",
      highlight: false,
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@mlsco.com",
      href: "mailto:contact@mlsco.com",
      highlight: false,
    },
    {
      icon: MapPin,
      title: "Localisation",
      value: "Ouagadougou, Burkina Faso",
      href: null,
      highlight: false,
    },
  ];

  const faqs = [
    {
      question: "Quels sont vos délais de livraison ?",
      answer:
        "Cela dépend du projet. Un site vitrine simple : 1 à 2 semaines. Un site e-commerce : 3 à 4 semaines. Une application SaaS : 2 à 3 mois. Nous vous donnons un délai précis dans le devis.",
    },
    {
      question: "Travaillez-vous à distance ?",
      answer:
        "Oui, nous travaillons avec des clients partout dans le monde. Nous utilisons WhatsApp, visio-conférence et email pour le suivi des projets. Pour les clients de Ouagadougou, nous pouvons aussi nous rencontrer en personne.",
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer:
        "Oui. Généralement 50% à la commande et 50% à la livraison. Pour les gros projets, nous pouvons échelonner en 3 ou 4 versements.",
    },
    {
      question: "Que se passe-t-il après la livraison ?",
      answer:
        "Nous offrons une garantie sur le code livré. Nous proposons également des contrats de maintenance mensuels (à partir de 25 000 FCFA/mois) pour les mises à jour, la sécurité et le support.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* ==================== HEADER ==================== */}
      <section className="bg-gradient-to-b from-mls-navy to-mls-marine text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Une question ? Un projet ? Écrivez-nous, nous répondons sous 24h.
          </p>
        </div>
      </section>

      {/* ==================== CONTACT + FORMULAIRE ==================== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* ===== Coordonnées ===== */}
            <div>
              <h2 className="text-2xl font-bold text-mls-navy mb-6">
                Nos coordonnées
              </h2>
              <p className="text-mls-navy/60 mb-8">
                Vous pouvez nous joindre par WhatsApp, téléphone, email ou en
                personne. Nous sommes disponibles du lundi au samedi.
              </p>

              <div className="space-y-4 mb-8">
                {contacts.map((contact, i) => {
                  const Icon = contact.icon;
                  const content = (
                    <div
                      className={`flex items-start gap-4 p-4 rounded-xl border transition-all ${
                        contact.highlight
                          ? "bg-mls-gold/5 border-mls-gold/30 hover:bg-mls-gold/10"
                          : "bg-white border-mls-navy/5 hover:border-mls-gold/30"
                      }`}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          contact.highlight
                            ? "bg-mls-gold text-mls-navy"
                            : "bg-mls-gold/10 text-mls-gold"
                        }`}
                      >
                        <Icon size={22} />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-mls-navy text-sm">
                          {contact.title}
                        </div>
                        <div className="text-mls-navy/70 text-sm mt-1">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  );

                  return contact.href ? (
                    <a
                      key={i}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  );
                })}
              </div>

              {/* Horaires */}
              <div className="bg-mls-navy text-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={22} className="text-mls-gold" />
                  <h3 className="font-bold">Horaires</h3>
                </div>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span className="text-mls-gold font-medium">
                      08h - 18h
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Samedi</span>
                    <span className="text-mls-gold font-medium">
                      09h - 14h
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dimanche</span>
                    <span className="text-white/40">Fermé</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ===== Formulaire ===== */}
            <div>
              <h2 className="text-2xl font-bold text-mls-navy mb-6">
                Envoyez-nous un message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
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
                    className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-gold transition"
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
                    className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-gold transition"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-mls-navy mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-gold transition"
                    placeholder="+226 XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-mls-navy mb-2">
                    Sujet *
                  </label>
                  <select
                    name="sujet"
                    value={formData.sujet}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-gold transition bg-white"
                  >
                    <option value="">Choisir un sujet</option>
                    <option value="Site web">Création de site web</option>
                    <option value="Application mobile">Application mobile</option>
                    <option value="SaaS">Solution SaaS</option>
                    <option value="Cybersécurité">Cybersécurité / Pentest</option>
                    <option value="Conseil">Conseil digital</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-mls-navy mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-mls-navy/10 rounded-lg focus:outline-none focus:border-mls-gold transition resize-none"
                    placeholder="Décrivez votre projet..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 bg-mls-gold hover:bg-mls-gold-dark disabled:opacity-50 disabled:cursor-not-allowed text-mls-navy font-semibold px-6 py-4 rounded-lg transition-all duration-200 hover:scale-105"
                >
                  {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                  <Send size={18} />
                </button>

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
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-20 bg-mls-gray-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-mls-navy mb-4">
              Questions Fréquentes
            </h2>
            <p className="text-lg text-mls-navy/60">
              Les réponses aux questions que vous vous posez peut-être
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-mls-navy/5 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-mls-gray-light/50 transition"
                >
                  <span className="font-semibold text-mls-navy pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-mls-gold flex-shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-mls-navy/70 text-sm">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}