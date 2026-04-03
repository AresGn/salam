import { User2, Code2, Lightbulb, ArrowRight } from "lucide-react";
import { GoGoal } from "react-icons/go";
import { SectionTitle } from "./ui/SectionTitle";
import { useContent } from "../contexts/ContentContext";

const aboutSections = [
  {
    icon: User2,
    title: "Qui je suis",
    description: [
      "Étudiant en Bachelor Supply Chain passionné par la gestion commerciale.",
      "Fondateur de Fiabilitech, agence de développement web et mobile.",
      "Jeune entrepreneur déterminé avec un excellent sens relationnel.",
    ],
    color: "bg-blue-600",
  },
  {
    icon: Code2,
    title: "Ce que je fais",
    description: [
      "Gestion commerciale et relation client dans l'immobilier.",
      "Développement de solutions digitales avec Fiabilitech.",
      "Optimisation des processus d'achat et de supply chain.",
    ],
    color: "bg-purple-600",
  },
  {
    icon: GoGoal,
    title: "Mes objectifs",
    description: [
      "Valider mon Bachelor Supply Chain avec excellence.",
      "Développer Fiabilitech et créer des solutions innovantes.",
      "Acquérir une expertise en gestion des achats et approvisionnement.",
    ],
    color: "bg-green-600",
  },
  {
    icon: Lightbulb,
    title: "Ma philosophie",
    description: [
      "L'innovation doit servir l'efficacité commerciale.",
      "L'excellence relationnelle est la clé du succès.",
      "L'apprentissage continu ouvre toutes les opportunités.",
    ],
    color: "bg-orange-600",
  },
];

const aboutFlashcards = [
  {
    title: "Immobilier & relation client",
    description:
      "J'ai débuté en agence immobilière où j'ai développé un sens aigu de l'écoute et de l'accompagnement de clients exigeants.",
  },
  {
    title: "FIABLITECH & innovation digitale",
    description:
      "J'ai fondé FIABLITECH pour créer des solutions digitales et IA qui simplifient et fiabilisent les processus métier.",
  },
  {
    title: "BTP & vision entrepreneuriale",
    description:
      "Mon expérience dans le BTP m'a appris la rigueur, l'adaptabilité et m'a permis de bâtir une vision à la croisée de l'immobilier, du digital et des travaux publics.",
  },
];

export function About() {
  const { content } = useContent();
  const { intro, description1, description2, callToAction, sections } = content.about;

  const aboutSectionsData = [
    {
      icon: User2,
      title: "Qui je suis",
      description: sections.whoIAm,
      color: "bg-blue-600",
    },
    {
      icon: Code2,
      title: "Ce que je fais",
      description: sections.whatIDo,
      color: "bg-purple-600",
    },
    {
      icon: GoGoal,
      title: "Mes objectifs",
      description: sections.myGoals,
      color: "bg-green-600",
    },
    {
      icon: Lightbulb,
      title: "Ma philosophie",
      description: sections.myPhilosophy,
      color: "bg-orange-600",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.06]" />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionTitle>{intro}</SectionTitle>

        {/* Introduction */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid gap-6 md:grid-cols-3">
            {aboutFlashcards.map((card) => (
              <div
                key={card.title}
                className="relative group transform hover:-translate-y-1 hover:-rotate-1 transition-all duration-300 h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-orange-500/10 rounded-2xl blur-sm group-hover:blur-md group-hover:opacity-80 opacity-60 -z-10" />
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/70 dark:border-gray-700/70 shadow-sm group-hover:shadow-xl px-5 py-6 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                      {aboutFlashcards.indexOf(card) + 1}
                    </span>
                    <ArrowRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-grow">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Parlons-en
            </a>
            <a
              href="https://www.codeur.com/-salamsuyuo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-orange-500 text-orange-600 dark:text-orange-400 font-semibold rounded-lg hover:bg-orange-50 dark:hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
              Profil Codeur.com
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* About Section Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {aboutSectionsData.map(({ icon: Icon, title, description, color }) => (
            <div key={title} className="relative group">
              {/* Background Effect */}
              <div className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`} />

              {/* Card Content */}
              <div className="relative bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4 space-x-4">
                  {/* Icon */}
                  <div className={`p-3 ${color} rounded-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
                </div>
                <ul className="text-sm sm:text-base list-disc pl-6 text-gray-600 dark:text-gray-300 space-y-1">
                  {description.map((point, index) => (
                    <li key={index}>{point}</li>
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
