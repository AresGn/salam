import React from 'react';
import { Link } from './Link';
import { SocialLinks } from './hero/SocialLinks';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <Link
      href={href}
      className="block text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm hover:translate-x-1 transform py-1"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const { content } = useContent();
  const { name, description, email, phone, location, copyright, madeWith } = content.footer;
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#projects', label: 'Projets' },
    { href: '#experience', label: 'Parcours' },
    { href: '#contact', label: 'Contact' },
  ];



  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Colonne 1: Profil */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              {name}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              {description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{email}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{phone}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-sm">{location}</span>
              </div>
            </div>
          </div>

          {/* Colonne 2: Navigation Rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Navigation</h4>
            <nav className="space-y-3">
              {quickLinks.map(({ href, label }) => (
                <div key={href}>
                  <FooterLink href={href}>{label}</FooterLink>
                </div>
              ))}
            </nav>
          </div>

          {/* Colonne 3: Fiabilitech */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-400">Fiabilitech</h4>
            <p className="text-gray-300 text-sm mb-4">
              Agence de développement web et mobile spécialisée dans les solutions e-commerce.
            </p>
            <div className="space-y-2 mb-4">
              <div className="text-sm text-gray-400">• Sites e-commerce</div>
              <div className="text-sm text-gray-400">• Applications mobiles</div>
              <div className="text-sm text-gray-400">• Solutions sur mesure</div>
            </div>
            <a
              href="https://www.fiablitech-projet.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Découvrir Fiablitech
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

        {/* Séparateur */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} {name}. {copyright}
              </p>
              <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-start gap-1">
                Fait avec <Heart className="w-3 h-3 text-red-400" /> {madeWith}
              </p>
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              <SocialLinks />
            </div>
          </div>
        </div>


      </div>
    </footer>
  );
}
