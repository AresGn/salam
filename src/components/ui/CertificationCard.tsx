import { Award, ExternalLink } from 'lucide-react';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  link: string;
  image: string;
  description?: string;
  skills?: string[];
}

export function CertificationCard({ title, issuer, date, link, image, description, skills }: CertificationCardProps) {
  console.log(`Rendering ${title} with ${skills?.length || 0} skills:`, skills); // Debug log

  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl transition-transform duration-300 overflow-hidden group h-full">
      {/* Background Image */}
      <img
        src={image}
        alt={`${title} certification`}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-blue-600 dark:bg-blue-700 rounded-lg">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
            <p className="text-sm text-blue-600 dark:text-blue-400">{issuer}</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{date}</p>

        {description && (
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {description}
          </p>
        )}

        {/* TOUTES LES COMPÉTENCES AFFICHÉES - AUCUNE LIMITATION */}
        {skills && skills.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Compétences ({skills.length}) :
            </h4>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={`skill-${index}-${skill}`}
                  className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full border border-blue-200 dark:border-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            </p>
          </div>
        )}

        {link !== "#" && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
          >
            <span>Vérifier</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
