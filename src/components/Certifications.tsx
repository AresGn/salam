import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";

const certifications = [
  {
    title: "Certification PIX",
    issuer: "Plateforme nationale",
    date: "2022",
    link: "#",
    image: "https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Certification+PIX",
    description: "Certification des compétences numériques selon le référentiel européen DIGCOMP.",
    skills: [
      "Maîtrise des outils numériques",
      "Communication et collaboration",
      "Création de contenu digital",
      "Protection des données",
      "Résolution de problèmes techniques"
    ]
  },
  {
    title: "Certification Techniques Commerciales",
    issuer: "Centre de Formation Professionnelle",
    date: "2023",
    link: "#",
    image: "https://via.placeholder.com/400x300/10B981/FFFFFF?text=Techniques+Commerciales",
    description: "Certification professionnelle sur les techniques de vente et négociation commerciale.",
    skills: [
      "Techniques de vente",
      "Négociation commerciale",
      "Gestion de la relation client",
      "Prospection commerciale"
    ]
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certifications</SectionTitle>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <CertificationCard key={cert.title} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
