import { User, Users, Target } from "lucide-react";
import { SectionTitle } from "./ui/SectionTitle";
import { useContent } from "../contexts/ContentContext";

export function About() {
  const { content } = useContent();
  const { intro } = content.about;

  const cardsData = [
    {
      id: "profil",
      icon: User,
      title: "Mon profil",
      accentColor: "bg-blue-600",
      gradient: "from-blue-600 to-indigo-600",
      glowColor: "bg-blue-500",
      borderHover: "hover:border-blue-500/60",
      points: [
        "Je ne suis pas un simple commercial.",
        "Je suis orienté résultats mesurables, avec une forte culture des indicateurs de performance (KPI).",
        "Mon objectif : générer du chiffre d'affaires, apporter des clients, signer des contrats et faire croître l'entreprise."
      ]
    },
    {
      id: "force",
      icon: Users,
      title: "Ma force",
      accentColor: "bg-purple-600",
      gradient: "from-purple-600 to-pink-600",
      glowColor: "bg-purple-500",
      borderHover: "hover:border-purple-500/60",
      points: [
        "J'ai un style de management participatif.",
        "Les défis, le stress et les environnements challengers me stimulent.",
        "Curieux et motivé, m'avoir dans une entreprise, c'est gagner un profil capable d'apporter rapidement les compétences et les stratégies de croissance nécessaires."
      ]
    },
    {
      id: "terrain",
      icon: Target,
      title: "Mon terrain",
      accentColor: "bg-emerald-600",
      gradient: "from-emerald-600 to-teal-600",
      glowColor: "bg-emerald-500",
      borderHover: "hover:border-emerald-500/60",
      points: [
        "Transformation digitale et développement commercial des secteurs traditionnels (immobilier, BTP, PME).",
        "Je pilote une équipe technique capable de concevoir et livrer des solutions digitales concrètes."
      ]
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle>{intro || "À propos"}</SectionTitle>

        {/* Intro encadrée, centrée et bien aérée */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative group p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-blue-200/80 dark:border-blue-800/60 bg-white/80 dark:bg-gray-900/80 shadow-xl backdrop-blur-md transition-all duration-300">
            {/* Subtle glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-2xl blur-lg pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 space-y-4 text-center">
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Business Developer Tech et fondateur de Fiablitech.
              </p>
              <p className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Diplômé Responsable du Développement Commercial (RDC – validé 2026).
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                J'apporte une vision commerciale orientée résultats, combinée à une équipe technique capable de concevoir et livrer des solutions digitales.
              </p>
              <div className="pt-2">
                <span className="inline-block px-5 py-2 rounded-full bg-blue-100/90 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm sm:text-base font-medium border border-blue-200 dark:border-blue-700/60 shadow-sm">
                  Ouvert aux opportunités au Luxembourg (présentiel / hybride / frontalier)
                </span>
              </div>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Parlons-en
            </a>
            <a
              href="https://www.codeur.com/-salamsuyuo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-gray-800 border-2 border-orange-500 text-orange-600 dark:text-orange-400 font-semibold rounded-xl hover:bg-orange-50 dark:hover:bg-gray-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
              <span>Profil Codeur.com</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* 3 Cartes modernes côte à côte de même taille */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
          {cardsData.map(({ id, icon: Icon, title, gradient, glowColor, borderHover, points }) => (
            <div key={id} className="relative group h-full flex flex-col">
              {/* Background Glow Effect */}
              <div
                className={`absolute inset-0 ${glowColor} rounded-2xl blur-xl opacity-15 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none`}
              />

              {/* Card Content */}
              <div className={`relative h-full flex flex-col bg-white dark:bg-gray-900 p-7 border border-gray-200 dark:border-gray-800 ${borderHover} rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-1.5`}>
                {/* Header with Icon & Title */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`p-3.5 bg-gradient-to-br ${gradient} rounded-xl text-white shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {title}
                  </h3>
                </div>

                {/* Card Points */}
                <ul className="space-y-4 flex-1 flex flex-col justify-start">
                  {points.map((point, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      <span className={`mt-2 w-2 h-2 rounded-full flex-shrink-0 bg-gradient-to-r ${gradient}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

