import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ContactForm } from './ui/ContactForm';
import { Linkedin, Mail, Phone, MessageSquare } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export function Contact() {
  const { content } = useContent();
  const { title, subtitle, description, email, phone, linkedin } = content.contact;

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800/60">
      <div className="container mx-auto px-6">
        <SectionTitle>{title || "Contactez-moi"}</SectionTitle>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column: Contact Info */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 text-sm font-medium mb-4">
                <MessageSquare className="w-4 h-4" />
                <span>Opportunités & Projets</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                {subtitle || "Discutons de vos projets"}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-800">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/70 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</span>
                  <span className="text-sm sm:text-base font-medium">{email}</span>
                </div>
              </a>

              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/70 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Téléphone</span>
                  <span className="text-sm sm:text-base font-medium">{phone}</span>
                </div>
              </a>

              <a
                href={`https://${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-800/70 hover:bg-blue-50 dark:hover:bg-blue-950/40 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">LinkedIn</span>
                  <span className="text-sm sm:text-base font-medium">{linkedin}</span>
                </div>
              </a>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
