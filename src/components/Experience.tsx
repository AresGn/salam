import React from "react";
import { SectionTitle } from "./ui/SectionTitle";
import { ExperienceCard } from "./ui/ExperienceCard";

const experiences = [
  {
    title: "Stage alterné Immobilier",
    company: "Agence immobilière « Agence de la gare »",
    period: "2024-2025",
    description: `Accueil et orientation des clients : premier point de contact à l'entrée de l'agence.
    Organisation de visites guidées : accompagnement des clients lors des visites de biens.
    Estimation de biens immobiliers : participation à l'évaluation de la valeur des propriétés.
    Gestion administrative : suivi et mise à jour des dossiers clients.
    Communication digitale : gestion des réseaux sociaux de l'agence.
    Prospection commerciale : recherche de nouveaux clients et prise de mandats.
    Valorisation des biens : mise en valeur des annonces en vitrine.`,
    skills: ["Relation Client", "Gestion Administrative", "Communication Digitale", "Prospection", "Estimation Immobilière"],
  },
  {
    title: "Stage de 8 semaines",
    company: "Carrefour express",
    period: "2023-2024",
    description: `Compétences en vente et relation client: Accueil et conseil client, Techniques de vente (argumentation, fidélisation), Gestion des réclamations, Mise en place d'animations commerciales.
    Compétences en gestion de magasin: Réception et contrôle des livraisons, Mise en rayon (facing, rotation des produits), Gestion des stocks et des inventaires, Suivi des indicateurs de performance (chiffre d'affaires, marges).
    Compétences en caisse: Encaissement et rendu monnaie, Gestion des moyens de paiement, Ouverture et fermeture de caisse, Application des procédures de sécurité.
    Compétences en hygiène et sécurité: Respect des normes d'hygiène (surtout pour les produits frais), Respect des consignes de sécurité alimentaire, Prévention des pertes et vols.
    Compétences en travail d'équipe et autonomie: Collaboration avec les collègues et la hiérarchie, Capacité d'adaptation à différents postes, Prise d'initiative et autonomie progressive.
    Compétences en gestion administrative (selon le poste): Suivi des commandes fournisseurs, Gestion des documents commerciaux, Participation à l'organisation des plannings.`,
    skills: ["Vente", "Relation Client", "Gestion Magasin", "Caisse", "Hygiène & Sécurité", "Travail d'équipe"],
  },
  {
    title: "Stage de 8 semaines",
    company: "U Express",
    period: "2023",
    description: `Réception des commandes et vérification.
    Comptabilité et suivi des factures.
    Étiquetage des prix et mise en rayon.
    Assistance à la clientèle et conseil.`,
    skills: ["Gestion des stocks", "Comptabilité", "Service Client", "Organisation"],
  },
  {
    title: "Stage au CDI (bibliothèque)",
    company: "Institut Les TOURELLES",
    period: "2022",
    description: `Classement et rangement des documents sur l'orientation.
    Accueil d'un fournisseur et gestion de la relation.
    Choix de livres pour le CDI, traitement et suivi de la commande.
    Réception, classement et mise à disposition des magazines.
    Tableau comparatif de caisson de bureau pour le CDI.`,
    skills: ["Gestion documentaire", "Relation fournisseur", "Organisation", "Analyse comparative"],
  },
  {
    title: "Stage",
    company: "Pharmacie d'Argenteuil Joliot curie",
    period: "2020",
    description: `Accueil des clients et gestion des demandes.
    Réception des commandes et vérification des produits.
    Classement et mise en disposition des produits en rayon.`,
    skills: ["Accueil client", "Gestion des stocks", "Organisation"],
  },
  {
    title: "Stage",
    company: "Bibliothèque de Oissel",
    period: "Janvier 2017",
    description: `Accueil des clients et orientation.
    Classement et rangement des documents.`,
    skills: ["Accueil client", "Organisation", "Gestion documentaire"],
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
