import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';
import {
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiShadcnui,
  SiFramer,
  SiSocketdotio,
  SiStripe,
  SiAppwrite,
} from 'react-icons/si';

// Define reusable tech stack icons & colors
const techStacks = {
  react: { icon: SiReact, name: "React", color: '#00cfff' },
  node: { icon: SiNodedotjs, name: "Node.js", color: '#228b22' },
  firebase: { icon: SiFirebase, name: "Firebase", color: '#fbbf00' },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: '#06b6d4' },
  typescript: { icon: SiTypescript, name: "TypeScript", color: '#1f6feb' },
  next: { icon: SiNextdotjs, name: "Next.js", color: '#' },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: '#10b981' },
  prisma: { icon: SiPrisma, name: "Prisma", color: '#186997' },
  shadcn: { icon: SiShadcnui, name: "ShadCN", color: '#6366f1' },
  framer: { icon: SiFramer, name: "Framer Motion", color: '#2563eb' },
  socket: { icon: SiSocketdotio, name: "Socket.io", color: '#' },
  stripe: { icon: SiStripe, name: "Stripe", color: '#5b4df1' },
  appwrite: { icon: SiAppwrite, name: "Appwrite", color: '#ff3d00' },
};

// Define projects data
const projects = [
  {
    title: 'DIM',
    description: 'Nous avons développé une boutique en ligne complète pour DIM, une marque emblématique de lingerie française qui souhaitait optimiser son expérience de vente en ligne. Notre approche a combiné un design élégant et moderne reflétant l\'identité premium de la marque avec une expérience utilisateur soigneusement optimisée pour maximiser les conversions.',
    image: '/assets/DIM.png',
    link: 'https://www.dim.com/',
    github: '',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.stripe,
    ],
  },
  {
    title: 'By G2S Immobilier',
    description: 'By G2S Immobilier, une agence immobilière basée à Bondy Paris, souhaitait développer une présence en ligne reflétant son expertise et permettant de présenter son portefeuille de biens. Notre équipe a conçu un site web élégant et fonctionnel mettant en valeur les propriétés disponibles et facilitant le contact avec les clients potentiels.',
    image: '/assets/Immobilier.png',
    link: 'https://www.byg2simmobilier.fr/',
    github: '',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.firebase,
    ],
  },
  {
    title: 'Maxi Meubles',
    description: 'Maxi Meubles souhaitait lancer une boutique en ligne pour commercialiser leur gamme de mobilier design à prix abordable. Notre équipe a conçu une plateforme e-commerce complète, mettant en valeur leur catalogue de produits et optimisant l\'expérience d\'achat pour maximiser les conversions.',
    image: '/assets/Maxi_Meubles.png',
    link: 'https://www.maxi-meubles.fr/',
    github: '',
    techStack: [
      techStacks.react,
      techStacks.tailwind,
      techStacks.typescript,
      techStacks.stripe,
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Projets Fiabilitech</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
              specialButton={{
                text: "Voir Fiablitech",
                url: "https://www.fiablitech-projet.com",
                isExternal: true
              }}
            />
          ))}
        </div>

        {/* Section Fiablitech Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Découvrez Fiablitech</h3>
            <p className="text-lg mb-6 opacity-90">
              Agence de développement web, mobile et e-commerce spécialisée dans les solutions digitales innovantes
            </p>
            <a
              href="https://www.fiablitech-projet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              En savoir plus sur Fiablitech
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
