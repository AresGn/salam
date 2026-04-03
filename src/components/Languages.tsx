import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { Globe } from 'lucide-react';

const languages = [
  {
    name: "Français",
    level: "Natif",
    code: "fr",
    flag: "🇫🇷",
    color: "text-blue-600",
    bgColor: "bg-blue-100 dark:bg-blue-900",
    percentage: 100
  },
  {
    name: "Anglais",
    level: "Intermédiaire",
    code: "en",
    flag: "🇬🇧",
    color: "text-red-600",
    bgColor: "bg-red-100 dark:bg-red-900",
    percentage: 70
  }
];

interface LanguageCardProps {
  name: string;
  level: string;
  flag: string;
  percentage: number;
}

function LanguageCard({ name, level, flag, percentage }: LanguageCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-3xl">{flag}</div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{level}</p>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      
      <div className="mt-2 text-right">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {percentage}%
        </span>
      </div>
    </div>
  );
}

export function Languages() {
  return (
    <section id="languages" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Langues</SectionTitle>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {languages.map((language) => (
              <LanguageCard key={language.code} {...language} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium">
                Ouvert aux opportunités internationales
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
