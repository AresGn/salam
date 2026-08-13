import { GraduationCap, FileText } from "lucide-react";

interface EducationCardProps {
  degree: string;
  institution: string;
  period: string;
  score: string;
  description?: string;
  skills?: string[];
  blocks?: { label: string; ects: string }[];
  note?: string;
  documents?: { label: string; href: string }[];
  logo?: string;
}

export function EducationCard({
  degree,
  institution,
  period,
  score,
  description,
  skills,
  blocks,
  note,
  documents,
  logo
}: EducationCardProps) {
  return (
    <div className="relative group pl-6 sm:pl-10">
      {/* Timeline Dot */}
      <div className="absolute left-[-16px] top-4 w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full border-4 border-white dark:border-gray-900"></div>

      {/* Card */}
      <div className="relative bg-gray-200 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl">
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4">
            {logo ? (
              <div className="p-2 bg-white dark:bg-gray-700 rounded-lg">
                <img src={logo} alt={institution} className="h-12 w-auto object-contain" />
              </div>
            ) : (
              <div className="p-3 sm:p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
            )}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{degree}</h3>
              <p className="text-base text-blue-600 dark:text-blue-400">{institution}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {period} • Statut: {score}
              </p>
            </div>
          </div>

          {/* Description */}
          {description && (
            <p className="mt-3 text-gray-700 dark:text-gray-300 text-base leading-relaxed">
              {description}
            </p>
          )}

          {/* Skills (Bullet Points) */}
          {skills && skills.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Compétences acquises :</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-blue-600 dark:text-blue-400 font-bold">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Blocs validés (avec ECTS) */}
          {blocks && blocks.length > 0 && (
            <div className="mt-4">
              <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Blocs validés :</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {blocks.map((block, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                    <span>
                      {block.label}
                      <span className="ml-1 text-sm font-medium text-blue-600 dark:text-blue-400">({block.ects})</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Note */}
          {note && (
            <p className="mt-4 text-sm italic text-gray-600 dark:text-gray-400">
              {note}
            </p>
          )}

          {/* Documents (PDF) */}
          {documents && documents.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>{doc.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
