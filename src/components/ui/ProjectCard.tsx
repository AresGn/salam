import React from 'react';
import { SiGithub } from "react-icons/si";
import { FaGlobe } from "react-icons/fa";
import { IconType } from 'react-icons';

interface TechStackItem {
  icon: IconType;
  name: string;
  color?: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  github?: string;
  techStack: TechStackItem[];
  specialButton?: {
    text: string;
    url: string;
    isExternal?: boolean;
  };
}

export function ProjectCard({ title, description, image, link, github, techStack, specialButton }: ProjectCardProps) {
  return (
    <div className="group relative">
      <div className="relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 rounded-2xl shadow-lg overflow-hidden transition duration-300 hover:shadow-blue-500/10">

        {/* Image */}
        <div className="relative overflow-hidden p-4 pb-0">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={image}
              alt={`Screenshot of ${title}`}
              className="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </a>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title + Icons */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h3>
            <div className="flex gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <SiGithub className="w-6 h-6" />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  <FaGlobe className="w-6 h-6" />
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">
            {description}
          </p>

          {/* Tech Stack Icons with Tooltip */}
          <div className="flex flex-wrap gap-3 mt-4">
            {techStack.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="relative">
                  <div className="peer p-2 rounded-lg bg-gray-200 dark:bg-gray-800">
                    <Icon className="w-6 h-6" color={item.color} />
                  </div>
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-700 text-white text-xs rounded px-2 py-1
                        opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Special Button */}
          {specialButton && (
            <div className="mt-6">
              <a
                href={specialButton.url}
                target={specialButton.isExternal ? "_blank" : "_self"}
                rel={specialButton.isExternal ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {specialButton.text}
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

