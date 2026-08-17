import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ContentData {
  // Hero Section
  hero: {
    name: string;
    subtitle: string;
    description: string;
    roles: string[];
    email: string;
    phone: string;
    location: string;
  };

  // About Section
  about: {
    intro: string;
    pitch: string[];
    cards: Array<{
      id: string;
      title: string;
      icon: string;
      color: string;
      points: string[];
    }>;
    description1?: string;
    description2?: string;
    callToAction?: string;
    sections?: {
      whoIAm?: string[];
      whatIDo?: string[];
      myGoals?: string[];
      myPhilosophy?: string[];
    };
  };
  
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    description: string;
    email: string;
    phone: string;
    linkedin: string;
    successMessage: string;
    errorMessage: string;
  };
  
  // Projects Section
  projects: {
    title: string;
    fiablitechDescription: string;
    projects: Array<{
      id: string;
      title: string;
      description: string;
      link: string;
      technologies: string[];
    }>;
  };
  
  // Skills Section
  skills: {
    title: string;
    categories: string[];
    commercialSkills: Array<{
      name: string;
      level: number;
      description: string;
    }>;
    technicalSkills: Array<{
      name: string;
      level: number;
      description: string;
    }>;
    softSkills: string[];
  };
  
  // Experience Section
  experience: {
    title: string;
    experiences: Array<{
      id: string;
      title: string;
      company: string;
      period: string;
      description: string[];
    }>;
  };
  
  // Education Section
  education: {
    title: string;
    educations: Array<{
      id: string;
      degree: string;
      institution: string;
      period: string;
      status: string;
      description: string;
      skills: string[];
    }>;
  };
  
  // Languages Section
  languages: {
    title: string;
    note: string;
    languages: Array<{
      name: string;
      level: string;
      percentage: number;
    }>;
  };
  
  // Footer Section
  footer: {
    name: string;
    description: string;
    email: string;
    phone: string;
    location: string;
    copyright: string;
    madeWith: string;
  };
}

const defaultContent: ContentData = {
  hero: {
    name: "SAIBOU ABDOU SALAM",
    subtitle: "Business Developer Tech | Fondateur Fiablitech | Responsable du Développement Commercial (RDC)",
    description: "Business Developer Tech et fondateur de Fiablitech. Diplômé Responsable du Développement Commercial (RDC – validé 2026). J'apporte une vision commerciale orientée résultats, combinée à une équipe technique capable de concevoir et livrer des solutions digitales. Ouvert aux opportunités au Luxembourg (présentiel / hybride / frontalier).",
    roles: [
      "Business Developer Tech | Fondateur Fiablitech | Responsable du Développement Commercial (RDC)"
    ],
    email: "salamsaibou2002@gmail.com",
    phone: "+33 06 51 10 43 34",
    location: "France, Benin, Chine, Maroc"
  },
  
  about: {
    intro: "À propos",
    pitch: [
      "Business Developer Tech et fondateur de Fiablitech.",
      "Diplômé Responsable du Développement Commercial (RDC – validé 2026).",
      "J'apporte une vision commerciale orientée résultats, combinée à une équipe technique capable de concevoir et livrer des solutions digitales.",
      "Ouvert aux opportunités au Luxembourg (présentiel / hybride / frontalier)."
    ],
    cards: [
      {
        id: "profil",
        title: "Mon profil",
        icon: "user",
        color: "bg-blue-600",
        points: [
          "Je ne suis pas un simple commercial.",
          "Je suis orienté résultats mesurables, avec une forte culture des indicateurs de performance (KPI).",
          "Mon objectif : générer du chiffre d'affaires, apporter des clients, signer des contrats et faire croître l'entreprise."
        ]
      },
      {
        id: "force",
        title: "Ma force",
        icon: "users",
        color: "bg-purple-600",
        points: [
          "J'ai un style de management participatif.",
          "Les défis, le stress et les environnements challengers me stimulent.",
          "Curieux et motivé, m'avoir dans une entreprise, c'est gagner un profil capable d'apporter rapidement les compétences et les stratégies de croissance nécessaires."
        ]
      },
      {
        id: "terrain",
        title: "Mon terrain",
        icon: "target",
        color: "bg-emerald-600",
        points: [
          "Transformation digitale et développement commercial des secteurs traditionnels (immobilier, BTP, PME).",
          "Je pilote une équipe technique capable de concevoir et livrer des solutions digitales concrètes."
        ]
      }
    ],
    description1: "Business Developer Tech et fondateur de Fiablitech.",
    description2: "Diplômé Responsable du Développement Commercial (RDC – validé 2026).",
    callToAction: "Ouvert aux opportunités au Luxembourg (présentiel / hybride / frontalier).",
    sections: {
      whoIAm: [
        "Je ne suis pas un simple commercial.",
        "Je suis orienté résultats mesurables, avec une forte culture des indicateurs de performance (KPI).",
        "Mon objectif : générer du chiffre d'affaires, apporter des clients, signer des contrats et faire croître l'entreprise."
      ],
      whatIDo: [
        "J'ai un style de management participatif.",
        "Les défis, le stress et les environnements challengers me stimulent.",
        "Curieux et motivé, m'avoir dans une entreprise, c'est gagner un profil capable d'apporter rapidement les compétences et les stratégies de croissance nécessaires."
      ],
      myGoals: [
        "Transformation digitale et développement commercial des secteurs traditionnels (immobilier, BTP, PME).",
        "Je pilote une équipe technique capable de concevoir et livrer des solutions digitales concrètes."
      ],
      myPhilosophy: []
    }
  },
  
  contact: {
    title: "Contactez-moi",
    subtitle: "Discutons de vos projets",
    description: "Je suis à votre disposition pour échanger sur vos opportunités de collaboration, vos projets de développement commercial ou vos besoins en transformation digitale.",
    email: "salamsaibou2002@gmail.com",
    phone: "+33 06 51 10 43 34",
    linkedin: "linkedin.com/in/saibou-abdou-salam",
    successMessage: "Message envoyé ! Merci pour votre message. Je vous répondrai dans les plus brefs délais.",
    errorMessage: "Une erreur s'est produite. Veuillez réessayer plus tard."
  },
  
  projects: {
    title: "Projets Fiabilitech",
    fiablitechDescription: "Agence de développement web, mobile et e-commerce spécialisée dans les solutions digitales innovantes",
    projects: [
      {
        id: "immo-artisans",
        title: "Immo & Artisans",
        description: "Nous avons développé la plateforme Immo & Artisans, une solution B2B innovante qui révolutionne la mise en relation entre agences immobilières et artisans qualifiés à Rouen. Notre approche combine une interface intuitive avec un système de notifications 24/7, un réseau de plus de 800 artisans certifiés RGE et un taux de satisfaction de 98%, optimisant ainsi les projets de rénovation et maintenance locative pour une intervention rapide et fiable.",
        link: "https://www.immo-artisans.com/",
        technologies: ["React", "Node.js", "MongoDB", "Notifications API"]
      },
      {
        id: "stageconnect",
        title: "StageConnect",
        description: "Nous avons créé StageConnect, une plateforme numérique complète de gestion de stages académiques connectant étudiants, entreprises et universités en Afrique. Elle intègre un cycle de vie structuré du stage – de la recherche géolocalisée à l'évaluation anti-fraude –, des tableaux de bord dédiés, un matching intelligent et une traçabilité sécurisée, propulsant plus de 2 000 étudiants actifs vers des opportunités certifiées.",
        link: "https://www.stageconnect.app/",
        technologies: ["React", "Python", "PostgreSQL", "Machine Learning"]
      },
      {
        id: "fiablitech-projet",
        title: "Fiablitech Projet",
        description: "Nous avons réalisé le site Fiablitech Projet, une vitrine dynamique présentant nos solutions digitales complètes en e-commerce, marketing digital et nouvelles technologies adaptées à tous les niveaux. Cette plateforme met en valeur notre expertise en accompagnant les entreprises dans leur transformation numérique avec des solutions sur mesure et innovantes.",
        link: "https://www.fiablitech-projet.com/",
        technologies: ["React", "Tailwind CSS", "TypeScript", "SEO"]
      }
    ]
  },
  
  skills: {
    title: "Compétences",
    categories: ["Toutes", "Commerciales", "Techniques"],
    commercialSkills: [
      {
        name: "Manager une équipe commerciale",
        level: 85,
        description: "Manager et animer une équipe commerciale pour atteindre les objectifs fixés et développer le potentiel de chacun"
      },
      {
        name: "Développement plan d'actions commerciales",
        level: 90,
        description: "Piloter le développement opérationnel du plan d'actions commerciales et définir les objectifs de croissance"
      },
      {
        name: "Développer la stratégie de croissance de l'entreprise",
        level: 80,
        description: "Élaborer et mettre en œuvre des stratégies de croissance pour développer l'entreprise et optimiser sa performance"
      },
      {
        name: "Négociation commerciale",
        level: 75,
        description: "Maîtriser les techniques de négociation pour conclure des ventes et construire des relations client durables"
      }
    ],
    technicalSkills: [
      {
        name: "Développement Web & Mobile",
        level: 85,
        description: "Création d'applications et sites web responsive avec des technologies modernes et performantes"
      },
      {
        name: "Design UI/UX",
        level: 80,
        description: "Conception d'interfaces utilisateur intuitives et esthétiques offrant une expérience utilisateur exceptionnelle"
      },
      {
        name: "Design Graphique",
        level: 75,
        description: "Création de visuels, identités visuelles et supports de communication percutants et modernes"
      },
      {
        name: "IA & Automatisations",
        level: 70,
        description: "Développement de solutions d'intelligence artificielle et d'automatisation pour optimiser les processus métier et améliorer l'efficacité opérationnelle"
      }
    ],
    softSkills: [
      "Excellent sens relationnel",
      "Esprit d'équipe",
      "Adaptabilité",
      "Leadership",
      "Communication",
      "Gestion du stress",
      "Créativité",
      "Sens de l'organisation"
    ]
  },
  
  experience: {
    title: "Expérience Professionnelle",
    experiences: [
      {
        id: "fiablitech",
        title: "Fondateur & Responsable Commercial",
        company: "Fiablitech",
        period: "2024 – Aujourd’hui (2 ans)",
        description: [
          "Création et pilotage commercial de Fiablitech, agence digitale spécialisée dans la conception d’outils numériques sur mesure.",
          "Gestion complète du cycle commercial : prospection, qualification, négociation, closing et fidélisation des clients.",
          "Réalisation d’études de marché stratégiques (analyse macro et micro-environnement, SWOT, PESTEL) afin d’identifier les besoins réels des entreprises.",
          "Conception et commercialisation de solutions digitales innovantes destinées à automatiser les tâches répétitives et optimiser les processus métier.",
          "Pilotage de l’équipe technique pour le développement des outils proposés aux clients.",
          "Mise en place de contrats de maintenance et suivi de la relation client après signature."
        ]
      },
      {
        id: "estb-btp",
        title: "Assistant ingénieur BTP",
        company: "E.S.T.B Ingénierie",
        period: "2025-2026",
        description: [
          "Lecture et analyse de plans techniques",
          "Participation aux études de faisabilité de projets",
          "Réalisation de métrés (quantification des matériaux)",
          "Aide à l'élaboration de devis et estimations de coûts",
          "Suivi de l'avancement des projets / chantiers"
        ]
      }
    ]
  },
  
  education: {
    title: "Formation",
    educations: [
      {
        id: "licence-rdc",
        degree: "Licence Responsable du Développement Commercial",
        institution: "ISPN Rouen",
        period: "2025 - 2026",
        status: "En cours",
        description: "Diplôme de niveau Bac+3 (Niveau 6, RNCP 37849) formant aux stratégies commerciales et au management commercial opérationnel.",
        skills: [
          "Élaboration et pilotage de stratégies commerciales",
          "Définition et mise en œuvre d'un plan d'action commercial",
          "Conception et présentation d'offres adaptées",
          "Négociation et suivi de la relation client",
          "Management et animation de projets commerciaux"
        ]
      },
      {
        id: "bts-mco",
        degree: "BTS Management Commercial Opérationnel",
        institution: "Institut Les TOURELLES",
        period: "2023 - 2025",
        status: "Obtenu",
        description: "Formation en gestion d'unité commerciale, management d'équipe, gestion de la relation client, et animation et dynamisation de l'offre commerciale.",
        skills: [
          "Développement de la relation client",
          "Animation et dynamisation de l'offre commerciale",
          "Management opérationnel de l'équipe commerciale",
          "Gestion opérationnelle",
          "Communication commerciale"
        ]
      }
    ]
  },
  
  languages: {
    title: "Langues",
    note: "Ouvert aux opportunités internationales",
    languages: [
      {
        name: "Français",
        level: "Natif",
        percentage: 100
      },
      {
        name: "Anglais",
        level: "Intermédiaire",
        percentage: 70
      }
    ]
  },
  
  footer: {
    name: "SAIBOU ABDOU SALAM",
    description: "Business Developer Tech et Fondateur de Fiablitech. Diplômé Responsable du Développement Commercial (RDC). Passionné par l'entrepreneuriat et les solutions digitales innovantes.",
    email: "salamsaibou2002@gmail.com",
    phone: "+33 06 51 10 43 34",
    location: "France, Benin, Chine, Maroc",
    copyright: "Tous droits réservés.",
    madeWith: "par Fiablitech"
  }
};

interface ContentContextType {
  content: ContentData;
  updateContent: (section: keyof ContentData, data: any) => void;
  resetContent: () => void;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<ContentData>(() => {
    const saved = localStorage.getItem('portfolio-content-v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...defaultContent,
          ...parsed,
          hero: {
            ...defaultContent.hero,
            ...(parsed.hero || {}),
            subtitle: parsed.hero?.subtitle || defaultContent.hero.subtitle
          },
          contact: {
            ...defaultContent.contact,
            ...(parsed.contact || {}),
            description: (parsed.contact?.description && !parsed.contact.description.includes('alternance') && !parsed.contact.description.includes('Supply Chain'))
              ? parsed.contact.description
              : defaultContent.contact.description,
            subtitle: parsed.contact?.subtitle || defaultContent.contact.subtitle,
          },
          footer: {
            ...defaultContent.footer,
            ...(parsed.footer || {}),
            description: (parsed.footer?.description && !parsed.footer.description.includes('Supply Chain'))
              ? parsed.footer.description
              : defaultContent.footer.description,
            madeWith: defaultContent.footer.madeWith
          }
        };
      } catch {
        return defaultContent;
      }
    }
    return defaultContent;
  });

  useEffect(() => {
    localStorage.setItem('portfolio-content-v2', JSON.stringify(content));
  }, [content]);

  const updateContent = (section: keyof ContentData, data: any) => {
    setContent(prev => ({
      ...prev,
      [section]: { ...prev[section], ...data }
    }));
  };

  const resetContent = () => {
    setContent(defaultContent);
    localStorage.removeItem('portfolio-content-v2');
  };

  return (
    <ContentContext.Provider value={{ content, updateContent, resetContent }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
