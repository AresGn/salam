import { SectionTitle } from './ui/SectionTitle';
import { ProjectCard } from './ui/ProjectCard';
import { useContent } from '../contexts/ContentContext';
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
  SiPython,
  SiPostgresql,
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
  python: { icon: SiPython, name: "Python", color: '#3776ab' },
  postgresql: { icon: SiPostgresql, name: "PostgreSQL", color: '#336791' },
  "notifications api": { icon: SiSocketdotio, name: "Notifications API", color: '#ff6b35' },
  "machine learning": { icon: SiPython, name: "Machine Learning", color: '#ff6b35' },
  "seo": { icon: SiNextdotjs, name: "SEO", color: '#4285f4' },
};

// Helper function to map technology names to tech stack objects
const getTechStack = (techNames: string[]) => {
  return techNames.map(techName => {
    const normalizedName = techName.toLowerCase().trim();
    return (techStacks as any)[normalizedName] || {
      icon: SiReact,
      name: techName,
      color: '#6b7280'
    };
  });
};

export function Projects() {
  const { content } = useContent();
  const { title, projects: projectsData, fiablitechDescription } = content.projects;

  // Transform projects data to match ProjectCard format
  const formattedProjects = projectsData.map(project => ({
    title: project.title,
    description: project.description,
    image: `/assets/${project.id === 'immo-artisans' ? 'immo-artisans' : project.id === 'stageconnect' ? 'stageconnect' : 'fiablitech_projet'}.png`,
    link: project.link,
    github: '',
    techStack: getTechStack(project.technologies),
    specialButton: {
      text: "Visiter le site",
      url: project.link,
      isExternal: true
    }
  }));

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>{title}</SectionTitle>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {formattedProjects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

        {/* Section Fiablitech Call-to-Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Découvrez Fiablitech</h3>
            <p className="text-lg mb-6 opacity-90">
              {fiablitechDescription}
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
