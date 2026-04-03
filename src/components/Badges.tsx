import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import {
  Activity,
  BookOpen,
  Plane,
  Laptop,
  ChefHat,
  Music,
  Palette,
  Briefcase
} from "lucide-react";

const interests = [
  {
    id: "sport",
    name: "Sport",
    icon: Activity,
    color: "text-green-500",
    description: "Activités sportives et bien-être"
  },
  {
    id: "lecture",
    name: "Lecture",
    icon: BookOpen,
    color: "text-blue-500",
    description: "Développement personnel et professionnel"
  },
  {
    id: "voyages",
    name: "Voyages",
    icon: Plane,
    color: "text-sky-500",
    description: "Découverte de nouvelles cultures"
  },
  {
    id: "tech",
    name: "Nouvelles technologies",
    icon: Laptop,
    color: "text-purple-500",
    description: "Innovation et digital"
  },
  {
    id: "cuisine",
    name: "Cuisine",
    icon: ChefHat,
    color: "text-orange-500",
    description: "Art culinaire et gastronomie"
  },
  {
    id: "musique",
    name: "Musique",
    icon: Music,
    color: "text-pink-500",
    description: "Écoute et découverte musicale"
  },
  {
    id: "design",
    name: "Design",
    icon: Palette,
    color: "text-indigo-500",
    description: "Créativité et esthétique"
  },
  {
    id: "entrepreneuriat",
    name: "Entrepreneuriat",
    icon: Briefcase,
    color: "text-amber-500",
    description: "Innovation et création d'entreprise"
  },
];


export function Badges() {
  return (
    <section id="badges" className="py-20">
      <div className="container mx-auto max-w-6xl px-8">
        <SectionTitle>Centres d'intérêt</SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {interests.map((interest) => (
            <div
              key={interest.id}
              className="relative group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300" />

              {/* Interest Icon */}
              <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
                <interest.icon className={`w-10 h-10 ${interest.color}`} />
              </div>

              {/* Interest Name */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-2">
                {interest.name}
              </h3>

              {/* Interest Description */}
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
