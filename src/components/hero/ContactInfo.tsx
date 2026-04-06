import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useContent } from '../../contexts/ContentContext';

const flagMap: Record<string, string> = {
  france: `${import.meta.env.BASE_URL}svg/france-svgrepo-com.svg`,
  benin: `${import.meta.env.BASE_URL}svg/benin-svgrepo-com.svg`,
  chine: `${import.meta.env.BASE_URL}svg/china-svgrepo-com.svg`,
  maroc: `${import.meta.env.BASE_URL}svg/morocco-svgrepo-com.svg`,
};

interface ContactItemProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
}

function ContactItem({ icon, text, href }: ContactItemProps) {
  const Component = href ? 'a' : 'div';
  return (
    <Component
      href={href}
      className={`flex items-center gap-2 px-4 py-1 ${href ? 'hover:scale-105' : ''} transition-transform duration-200`}
    >
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
        {text}
      </span>
    </Component>
  );
}

const normalizeCountryName = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().toLowerCase();
};

function LocationFlags() {
  const { content } = useContent();
  const { location } = content.hero;

  const countries = location.split(',').map(normalizeCountryName);

  return (
    <div className="flex items-center gap-3 px-4 py-1">
      <span className="text-blue-600 dark:text-blue-400">
        <MapPin className="w-5 h-5" />
      </span>
      <div className="flex items-center gap-2">
        {countries.map((country, index) => (
          <React.Fragment key={country}>
            {flagMap[country] && (
              <img
                src={flagMap[country]}
                alt={country}
                className="w-6 h-4 object-cover rounded-sm"
              />
            )}
            {!flagMap[country] && (
              <span className="text-gray-600 dark:text-gray-300 capitalize text-sm">{country}</span>
            )}
            {index < countries.length - 1 && (
              <span className="text-gray-400">•</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export function ContactInfo() {
  const { content } = useContent();
  const { phone, email } = content.hero;

  return (
    <div className="flex flex-col items-center gap-0">
      <ContactItem
        icon={<Phone className="w-5 h-5" />}
        text={phone}
        href={`tel:${phone.replace(/\s/g, '')}`}
      />
      <ContactItem
        icon={<Mail className="w-5 h-5" />}
        text={email}
        href={`mailto:${email}`}
      />
      <LocationFlags />
    </div>
  );
}
