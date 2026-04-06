import React, { createContext, useContext, useState, useEffect } from 'react';

export interface ContentData {
  // Hero Section
  hero: {
    name: string;
    roles: string[];
    email: string;
    phone: string;
    location: string;
  };
  
  // About Section
  about: {
    intro: string;
    description1: string;
    description2: string;
    callToAction: string;
    sections: {
      whoIAm: string[];
      whatIDo: string[];
      myGoals: string[];
      myPhilosophy: string[];
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
    roles: [
      "Expert en stratégie commerciale",
      "Spécialiste en immobilier",
      "Entrepreneur en innovation digitale",
      "Leader polyvalent",
      "Consultant en travaux publics"
    ],
    email: "salamsaibou2002@gmail.com",
    phone: "+33 06 51 10 43 34",
    location: "France, Benin, Chine, Maroc"
  },
  
  about: {
    intro: "À propos",
    description1: "J'ai commencé ma carrière dans une agence immobilière, un environnement stimulant où j'ai rapidement compris l'importance de la relation client et de l'écoute. J'y ai appris à accompagner des clients exigeants dans la recherche de biens d'exception, à la vente, à la location ou en gestion, tout en développant une réelle passion pour le contact humain et la satisfaction client.",
    description2: "En parallèle, j'ai fondé FIABLITECH, une entreprise digitale née de ma conviction que la technologie et l'intelligence artificielle sont indispensables à la performance des entreprises modernes. Entouré d'une équipe d'ingénieurs passionnés, j'y ai mis en place des solutions innovantes pour simplifier, fiabiliser et digitaliser les processus métier.",
    callToAction: "Mon parcours m'a ensuite mené vers le BTP et les travaux publics, un secteur riche en défis qui m'a permis d'acquérir une expérience solide sur le terrain, de développer ma capacité d'adaptation et mon sens de la rigueur. Aujourd'hui, je me définis comme un entrepreneur passionné et engagé, à la croisée de l'immobilier, du digital et du BTP, animé par l'envie de bâtir des projets solides et pertinents, où l'humain et l'innovation se rencontrent.",
    sections: {
      whoIAm: [
        "Je suis un professionnel passionné, à la croisée de l'immobilier, du digital et du BTP.",
        "Mon parcours m'a permis d'évoluer dans des environnements variés, de la relation client en agence immobilière à la création de FIABLITECH, une entreprise digitale tournée vers l'innovation et la performance."
      ],
      whatIDo: [
        "Aujourd'hui, je m'investis pleinement dans le secteur du BTP, un univers riche en défis humains et techniques.",
        "J'interviens sur des projets où la coordination, la rigueur et l'organisation jouent un rôle central.",
        "Je me spécialise progressivement dans la gestion des achats, la logistique et le suivi de projets."
      ],
      myGoals: [
        "Continuer à évoluer dans le BTP et à en maîtriser chaque facette.",
        "Approfondir mes compétences techniques et managériales sur le terrain.",
        "Vivre des expériences motivantes et formatrices, guidées par ma soif d'apprendre et mon envie de progresser."
      ],
      myPhilosophy: [
        "Le sérieux, la curiosité et la passion guident chacune de mes décisions.",
        "Je crois que la réussite se construit sur la volonté d'apprendre, la collaboration et la recherche de qualité.",
        "Mon but : avancer avec détermination et bâtir des projets solides, utiles et porteurs de sens."
      ]
    }
  },
  
  contact: {
    title: "Contactez-moi",
    subtitle: "Restons en contact",
    description: "Je suis toujours ouvert aux discussions sur de nouveaux projets, des idées créatives, ou des opportunités d'alternance en Supply Chain.",
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
        id: "alternance-immobilier",
        title: "Stage alterné Immobilier",
        company: "Agence immobilière « Agence de la gare »",
        period: "2024-2025",
        description: [
          "Accueil et orientation des clients : premier point de contact à l'entrée de l'agence",
          "Organisation de visites guidées : accompagnement des clients lors des visites de biens",
          "Estimation de biens immobiliers : participation à l'évaluation de la valeur des propriétés",
          "Gestion administrative : suivi et mise à jour des dossiers clients",
          "Communication digitale : gestion des réseaux sociaux de l'agence",
          "Prospection commerciale : recherche de nouveaux clients et prise de mandats",
          "Valorisation des biens : mise en valeur des annonces en vitrine"
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
    description: "Étudiant en Bachelor Supply Chain et Fondateur de Fiablitech. Passionné par l'entrepreneuriat et la transformation digitale.",
    email: "salamsaibou2002@gmail.com",
    phone: "+33 06 51 10 43 34",
    location: "France, Benin, Chine, Maroc",
    copyright: "Tous droits réservés.",
    madeWith: "pour ma recherche d'alternance"
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
    return saved ? JSON.parse(saved) : defaultContent;
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
