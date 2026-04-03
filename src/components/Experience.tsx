import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Assistant ingénieur BTP",
    company: "E.S.T.B Ingénierie",
    period: "2025-2026",
    description: `Lecture et analyse de plans techniques
    Participation aux études de faisabilité de projets
    Réalisation de métrés (quantification des matériaux)
    Aide à l'élaboration de devis et estimations de coûts
    Suivi de l'avancement des projets / chantiers
    Participation aux réunions de coordination
    Vérification du respect des normes et contraintes techniques
    Collecte d'informations techniques sur projets
    Communication avec les différents intervenants`,
    skills: ["Plans techniques", "Métrés", "Devis", "Suivi de chantier", "Normes BTP"],
    logo: "/images/estb-ingenierie-cabinet-etude-rouen-logo-hd.png",
  },
  {
    title: "Assistant commercial immobilier",
    company: "By G2S Immobilier",
    period: "2024-2025",
    description: `Prospection et qualification de clients (achat / location)
    Réalisation de visites avec objectif de vente
    Participation active aux négociations et prise de mandats
    Suivi des leads et relances commerciales
    Accompagnement des clients jusqu'à la conclusion`,
    skills: ["Vente", "Négociation", "Relation client", "Prospection", "Location"],
    logo: "/images/byg2simmobilier.png",
  },
  {
    title: "Stage - Carrefour Express (8 semaines)",
    company: "Carrefour Express",
    period: "2023-2024",
    description: `Accueil et conseil client, techniques de vente et fidélisation
    Gestion des réclamations, animations commerciales
    Réception et contrôle des livraisons, mise en rayon
    Suivi des stocks et inventaires, indicateurs (CA, marges)
    Encaissement, gestion des paiements, ouverture/fermeture de caisse
    Respect des normes d'hygiène et sécurité alimentaire`,
    skills: ["Vente", "Relation Client", "Gestion Magasin", "Caisse", "Hygiène"],
    logo: "/images/carrefour-logo-1.svg",
  },
  {
    title: "Stage - U Express (8 semaines)",
    company: "U Express",
    period: "2023",
    description: `Réception et vérification des commandes
    Étiquetage et mise en rayon des produits
    Suivi des factures et gestion comptable
    Assistance et conseil auprès de la clientèle`,
    skills: ["Gestion des stocks", "Comptabilité", "Service Client", "Organisation"],
    logo: "/images/coursesu.png",
  },
  {
    title: "Projet stratégique – Rigoni di Asiago (Bachelor, RDC)",
    company: "Rigoni di Asiago",
    period: "Bachelor RDC",
    description: `Étude de marché approfondie et identification des freins à l'achat (prix, formats, goûts)
    Définition d'une problématique claire sur la croissance de l'entreprise
    Proposition d'une nouvelle offre commerciale : mini-packs de confitures multigoûts
    Estimation de l'impact sur le chiffre d'affaires et recommandations`,
    skills: ["Business development", "Analyse de marché", "Stratégie commerciale", "Proposition de valeur"],
    logo: "/images/rigoni-di-asiago.svg",
    isProject: true,
    downloadUrl: "/documents/proposition-commerciale-rigoni.pdf",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-8">
        <SectionTitle>Expérience Professionnelle</SectionTitle>
        <div className="relative border-l-2 border-blue-600 dark:border-blue-500 max-w-5xl mx-auto space-y-10">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
