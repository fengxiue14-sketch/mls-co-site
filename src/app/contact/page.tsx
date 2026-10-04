"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
        setStatusMessage("Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.");
        setFormData({ nom: "", email: "", telephone: "", sujet: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Une erreur est survenue. Réessayez.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Impossible d'envoyer le message. Vérifiez votre connexion.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-mls-navy to-mls-marine text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Une question ? Un projet ? Écrivez-nous, nous répondons sous 24h.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Coordonnées */}
            <div>
              <h2 className="text-2xl font-bold text-mls-navy mb-6">
                Nos coordonnées
              </h2>
              <p className="text-mls-navy/60 mb-8">
                Vous pouvez nous joindre par email, téléphone ou WhatsApp.
                Nous sommes disponibles du lundi au samedi.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mls-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-mls-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-mls-navy">Email</div>
                    <a
                      href="mailto:contact@mlsco.com"
                      className="text-mls-navy/60 hover:text-mls-gold transition"
                    >
                      contact@mlsco.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mls-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-mls-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-mls-navy">Téléphone</div>
                    <a
                      href="tel:+22600000000"
                      className="text-mls-navy/60 hover:text-mls-gold transition"
                    >
                      +226 XX XX XX XX
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mls-gold/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={22} className="text-mls-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-mls-navy">WhatsApp</div>
                    <a
                      href="https://wa.me/22600000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-mls-navy/60 hover:text-mls-gold transition"
                    >
                      Discuter sur WhatsApp
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-mls-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-mls-gold" />
                  </div>
                  <div>
                    <div className="font-semibold text-mls-navy">Localisation</div>
                    <span className="text-mls-navy/60">
                      Ouagadougou, Burkina Faso
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Formulaire */}
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
                    <option value="SaaS">Solution SaaS</option>
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
                    className={`p-4 rounded-lg text-sm ${
                      status === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}