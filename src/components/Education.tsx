import { SectionTitle } from './ui/SectionTitle';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'Responsable du Développement Commercial (RDC)',
    institution: 'IMCP / ISPN Rouen',
    period: '2026',
    score: 'Certification RNCP niveau 6 – Validée (Admis)',
    description: 'Certification professionnelle RNCP niveau 6 – Validée en 2026. Total : 60 crédits ECTS – Décision du jury : Admis.',
    blocks: [
      { label: 'Piloter le développement opérationnel du plan d\'actions commerciales', ects: '19 ECTS' },
      { label: 'Développer la stratégie de croissance de l\'entreprise', ects: '23 ECTS' },
      { label: 'Manager une équipe commerciale', ects: '18 ECTS' }
    ],
    note: 'Toutes les compétences ont été validées lors du Grand Oral 2026.',
    documents: [
      { label: 'Grand Oral RDC (PDF)', href: '/documents/RDC_Grand_oral/Grand-oral-RDC.pdf' },
      { label: 'Relevé de compétences (PDF)', href: '/documents/RDC_Grand_oral/Releve-de-competences.pdf' }
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
