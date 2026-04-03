import React, { useState } from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { useContent } from "../contexts/ContentContext";
import {
  FaHeadset,
  FaChartLine,
  FaUserTie,
  FaTools,
  FaCode,
  FaPaintBrush
} from "react-icons/fa";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { content } = useContent();
  const { commercialSkills, technicalSkills, softSkills, categories } = content.skills;

  // Mapper les compétences avec les icônes appropriées
  const getIcon = (skillName: string) => {
    if (skillName.includes('Stratégie') || skillName.includes('Management')) return FaUserTie;
    if (skillName.includes('Négociation')) return FaHeadset;
    if (skillName.includes('Développement') || skillName.includes('Web')) return FaCode;
    if (skillName.includes('Design')) return FaPaintBrush;
    if (skillName.includes('Gestion')) return FaChartLine;
    return FaTools;
  };

  // Combiner toutes les compétences avec les icônes et catégories
  const allSkills = [
    ...commercialSkills.map(skill => ({
      ...skill,
      icon: getIcon(skill.name),
      category: 'commercial',
      color: 'from-blue-500 to-indigo-600'
    })),
    ...technicalSkills.map(skill => ({
      ...skill,
      icon: getIcon(skill.name),
      category: 'technical',
      color: 'from-green-500 to-emerald-600'
    }))
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
          {categories.map((category: string) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category === 'Toutes' ? 'all' : category === 'Commerciales' ? 'commercial' : 'technical')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                (category === 'Toutes' && activeCategory === 'all') ||
                (category === 'Commerciales' && activeCategory === 'commercial') ||
                (category === 'Techniques' && activeCategory === 'technical')
                  ? category === 'Commerciales' ? 'bg-blue-600 text-white shadow-lg transform scale-105' : 
                    category === 'Techniques' ? 'bg-green-600 text-white shadow-lg transform scale-105' :
                    'bg-gray-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category}
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