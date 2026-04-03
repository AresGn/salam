import React from 'react';
import { FileText, Mail } from 'lucide-react';
import { Link } from '../Link';

export function ActionButtons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button
        onClick={() => alert('CV en cours de mise à jour')}
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base bg-gray-400 text-white cursor-not-allowed"
      >
        <FileText className="w-5 h-5" />
        <span>Voir mon CV</span>
      </button>
      <Link
        href="#contact"
        className="flex items-center gap-2 px-3 py-2 rounded-md text-sm sm:text-base text-blue-600 dark:text-blue-400 border-2 border-blue-600 transition-transform duration-300 transform hover:scale-105"
      >
        <Mail className="w-5 h-5" />
        <span>Me contacter</span>
      </Link>
    </div>
  );
}
