import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Licence Responsable du Développement Commercial',
    institution: 'ISPN Rouen',
    period: '2025 - 2026',
    score: 'En cours',
    description: 'Diplôme de niveau Bac+3 (Niveau 6, RNCP 37849) formant aux stratégies commerciales et au management commercial opérationnel.',
    skills: [
      'Élaboration et pilotage de stratégies commerciales',
      'Définition et mise en œuvre d\'un plan d\'action commercial',
      'Conception et présentation d\'offres adaptées',
      'Négociation et suivi de la relation client',
      'Management et animation de projets commerciaux'
    ]
  },
  {
    degree: 'BTS Management Commercial Opérationnel',
    institution: 'Institut Les TOURELLES',
    period: '2023 - 2025',
    score: 'Obtenu',
    description: 'Formation en gestion d\'unité commerciale, management d\'équipe, gestion de la relation client, et animation et dynamisation de l\'offre commerciale.',
    skills: [
      'Développement de la relation client',
      'Animation et dynamisation de l\'offre commerciale',
      'Management opérationnel de l\'équipe commerciale',
      'Gestion opérationnelle',
      'Communication commerciale'
    ]
  },
  {
    degree: 'Bac Professionnel Gestion Administrative',
    institution: 'Institut Les TOURELLES',
    period: '2019 - 2022',
    score: 'Obtenu',
    description: 'Baccalauréat Sciences et Technologies du Management et de la Gestion, spécialité Ressources Humaines et Communication.',
    skills: [
      'Économie et droit',
      'Management des organisations',
      'Sciences de gestion',
      'Communication',
      'Gestion des ressources humaines'
    ]
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Formation</SectionTitle>
        <div className="max-w-5xl mx-auto space-y-10">
          {education.map((edu, index) => (
            <EducationCard key={edu.degree} {...edu} isLast={index === education.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
