import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Bachelor en Responsable du Développement Commercial',
    institution: 'ISPN Rouen',
    period: '2025 - 2026',
    score: 'En cours (Bac +5, RNCP 37849)',
    description: 'Diplôme formant aux stratégies commerciales avancées et au management commercial opérationnel, avec une approche pratique et projetée sur le terrain.',
    skills: [
      'Élaboration et pilotage de stratégies commerciales',
      'Définition et mise en œuvre d\'un plan d\'action commercial',
      'Conception et présentation d\'offres adaptées aux besoins clients',
      'Négociation, suivi et fidélisation de la relation client',
      'Analyse de marché et identification des opportunités de croissance',
      'Business development et création de nouvelles offres commerciales'
    ],
    logo: '/images/ispn-logo-jaune.jpg'
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
    ],
    logo: '/images/ILTSup-Rouen.png'
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
    ],
    logo: '/images/ILTSup-Rouen.png'
  },
];

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Formation</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {education.map((edu) => (
            <EducationCard key={edu.degree} {...edu} />
          ))}
        </div>
      </div>
    </section>
  );
}
