import React, { useState } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import {
  FaHeadset,
  FaShoppingCart,
  FaChartLine,
  FaUserTie,
  FaLaptop,
  FaTools,
  FaCode,
  FaPaintBrush
} from "react-icons/fa";

// Toutes les compétences détaillées
const allSkills = [
  // Compétences commerciales
  {
    name: "Communication client",
    level: 90,
    description: "Capacité à communiquer efficacement avec les clients et comprendre leurs besoins",
    icon: FaHeadset,
    category: 'commercial',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: "Vente omnicanal",
    level: 75,
    description: "Maîtrise des techniques de vente à travers différents canaux (physique, digital)",
    icon: FaShoppingCart,
    category: 'commercial',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: "Études commerciales",
    level: 70,
    description: "Analyse et exploitation des études de marché et comportements clients",
    icon: FaChartLine,
    category: 'commercial',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    name: "Relation client",
    level: 85,
    description: "Développement et maintien de relations durables avec la clientèle",
    icon: FaUserTie,
    category: 'commercial',
    color: 'from-blue-500 to-indigo-600'
  },

  // Compétences techniques
  {
    name: "Outils bureautiques",
    level: 85,
    description: "Maîtrise des logiciels de bureautique (Word, Excel, PowerPoint)",
    icon: FaLaptop,
    category: 'technical',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: "Technologies de l'information",
    level: 70,
    description: "Utilisation des outils numériques et plateformes de gestion commerciale",
    icon: FaTools,
    category: 'technical',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: "Veille informationnelle",
    level: 75,
    description: "Suivi des tendances et évolutions du secteur commercial",
    icon: FaChartLine,
    category: 'technical',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: "Développement Web & Mobile",
    level: 85,
    description: "Création d'applications et sites web responsive avec des technologies modernes",
    icon: FaCode,
    category: 'technical',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: "Design UI/UX",
    level: 80,
    description: "Conception d'interfaces utilisateur intuitives et esthétiques",
    icon: FaPaintBrush,
    category: 'technical',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: "Cybersécurité",
    level: 65,
    description: "Formation en cours - Sécurisation des environnements digitaux et protection des données",
    icon: FaTools,
    category: 'technical',
    color: 'from-green-500 to-emerald-600'
  },


];

// Soft skills selon initial-data.json
const softSkills = [
  "Excellent sens relationnel",
  "Esprit d'équipe",
  "Adaptabilité",
  "Leadership",
  "Communication",
  "Gestion du stress",
  "Créativité",
  "Sens de l'organisation"
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toutes', color: 'bg-gray-600' },
    { id: 'commercial', name: 'Commerciales', color: 'bg-blue-600' },
    { id: 'technical', name: 'Techniques', color: 'bg-green-600' }
  ];

  const filteredSkills = activeCategory === 'all'
    ? allSkills
    : allSkills.filter(skill => skill.category === activeCategory);

  const SkillCard = ({ skill }: { skill: any }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-center gap-4 mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} bg-opacity-10`}>
          <skill.icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{skill.name}</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{skill.description}</p>
        </div>
      </div>

      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-3 rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${skill.color} group-hover:animate-pulse`}
          style={{ width: `${skill.level}%` }}
        />
      </div>

      <div className="mt-3 text-right">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.level}%
        </span>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle>Compétences</SectionTitle>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille des compétences */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="max-w-6xl mx-auto mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Qualités Personnelles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill) => (
              <div
                key={skill}
                className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-4 text-center border border-blue-200 dark:border-blue-800 hover:shadow-md hover:scale-105 transition-all duration-300"
              >
                <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}