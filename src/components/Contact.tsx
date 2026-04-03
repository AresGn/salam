import React from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { ContactForm } from './ui/ContactForm';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { useContent } from '../contexts/ContentContext';

export function Contact() {
  const { content } = useContent();
  const { title, subtitle, description, email, phone, linkedin } = content.contact;

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle>{title}</SectionTitle>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">{subtitle}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {description}
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Mail className="w-6 h-6" />
                <span>{email}</span>
              </a>
              <a
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Phone className="w-6 h-6" />
                <span>{phone}</span>
              </a>
              <a
                href={`https://${linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Linkedin className="w-6 h-6" />
                <span>{linkedin}</span>
              </a>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
