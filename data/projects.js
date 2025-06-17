export const projects = [
  {
    id: 1,
    title: "Application de Gestion de Stock",
    slug: "gestion-stock",
    description: "Une application web complète pour la gestion des stocks, des ventes et des rapports.",
    longDescription: `Ce projet est une application web robuste développée pour optimiser la gestion des stocks, des commandes clients et fournisseurs, ainsi que la génération de rapports financiers et d'inventaire. L'objectif était de remplacer un système manuel par une solution numérique centralisée et facile à utiliser, améliorant ainsi l'efficacité opérationnelle et la précision des données.

    **Fonctionnalités clés :**
    - Gestion des produits (ajout, modification, suppression, suivi du stock).
    - Gestion des fournisseurs et des commandes d'approvisionnement.
    - Gestion des clients et des bons de commande/factures.
    - Tableaux de bord interactifs pour visualiser les métriques clés.
    - Rapports exportables (PDF, Excel) sur les ventes, les stocks et les profits.
    - Système d'authentification et de gestion des rôles (administrateur, gérant, vendeur).

    **Défis et solutions :**
    Le principal défi était l'intégration de multiples modules (stock, vente, achat) avec une base de données cohérente et performante. Nous avons utilisé Mongoose pour modéliser les données de manière structurée et optimisé les requêtes pour assurer une réactivité élevée, même avec de grands volumes de données. La gestion des transactions atomiques pour les mises à jour de stock a été cruciale pour maintenir l'intégrité des données.`,
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    images: [
      "/images/projects/projet1.jpg",
      "/images/projects/projet1.jpg",
      "/images/projects/projet1.jpg",
    ],
    githubLink: "https://github.com/votre_nom/gestion-stock-app", // Remplacez par votre lien réel
    liveLink: "https://gestion-stock-demo.vercel.app", // Remplacez par votre lien réel
    location: "Projet Freelance pour un client basé à Antananarivo, Madagascar",
    type: "Web Application",
    date: "Mars 2024"
  },
  {
    id: 2,
    title: "Application Mobile de Livraison à Domicile",
    slug: "app-livraison-mobile",
    description: "Une application mobile cross-platform pour la commande et le suivi de livraisons de repas.",
    longDescription: `Cette application mobile vise à connecter les utilisateurs aux restaurants locaux et aux services de livraison. Elle offre une expérience utilisateur fluide pour la commande de repas, le suivi en temps réel des livreurs et un système de paiement intégré. Le projet a été conçu pour le marché malgache, en tenant compte des spécificités locales (options de paiement, cartographie).

    **Fonctionnalités clés :**
    - Navigation par catégorie de restaurants et de plats.
    - Panier d'achats et processus de commande intuitif.
    - Suivi GPS en temps réel du livreur sur une carte.
    - Notifications push pour les mises à jour de commande.
    - Système de paiement sécurisé (y compris options mobiles locales comme MVola/Orange Money).
    - Évaluations et commentaires pour les restaurants et les livreurs.
    - Profil utilisateur et historique des commandes.

    **Défis et solutions :**
    L'un des défis majeurs fut l'intégration de l'API de géolocalisation pour le suivi en temps réel et l'optimisation des performances pour les appareils mobiles. Nous avons utilisé Firebase Firestore pour la base de données en temps réel et des fonctions Cloud Functions pour la logique serveur, garantissant une mise à jour rapide des états de commande et de livraison. L'intégration des systèmes de paiement mobile locaux a nécessité des recherches et des développements spécifiques pour assurer la conformité et la sécurité.`,
    technologies: ["React Native", "Expo", "JavaScript", "Firebase (Firestore, Auth, Cloud Functions)", "Redux Toolkit", "React Navigation"],
    images: [
      "/images/projects/projet2.jpg",
      "/images/projects/projet2.jpg",
      "/images/projects/projet2.jpg",
    ],
    githubLink: "https://github.com/votre_nom/delivery-app-mobile", // Remplacez par votre lien réel
    liveLink: "Disponible sur Google Play Store et Apple App Store (liens à venir)",
    location: "Projet personnel, conçu spécifiquement pour le marché d'Antananarivo, Madagascar",
    type: "Mobile Application",
    date: "Janvier 2024"
  },
  {
    id: 3,
    title: "Plateforme E-learning Interactive",
    slug: "e-learning-platform",
    description: "Une plateforme web pour l'apprentissage en ligne avec des cours interactifs et un suivi des progrès.",
    longDescription: `Cette plateforme e-learning a été conçue pour offrir une expérience d'apprentissage dynamique et personnalisée. Elle permet aux instructeurs de créer et de gérer des cours, et aux étudiants de suivre des leçons, de passer des quiz et de suivre leurs progrès. L'accent a été mis sur l'interactivité et la facilité d'utilisation.

    **Fonctionnalités clés :**
    - Création et gestion de cours avec différents types de contenu (vidéos, textes, quiz).
    - Profils étudiants avec suivi des progrès et certifications.
    - Système de commentaires et de forums pour l'interaction.
    - Tableau de bord instructeur pour la gestion des inscrits et des statistiques.
    - Intégration de paiement pour les cours premium.

    **Défis et solutions :**
    La gestion de contenu riche et l'intégration d'un lecteur vidéo sécurisé étaient des aspects cruciaux. Nous avons utilisé Next.js pour le rendu côté serveur afin d'améliorer le SEO des pages de cours et la performance initiale. L'API pour les quiz et le suivi des progrès a été développée avec Node.js, et une base de données PostgreSQL a été choisie pour sa robustesse dans la gestion des relations complexes entre utilisateurs, cours et leçons.`,
    technologies: ["Next.js", "React", "Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Stripe API"],
    images: [
      "/images/projects/projet3.jpg",
      "/images/projects/projet3.jpg",
      "/images/projects/projet3.jpg",
    ],
    githubLink: "https://github.com/votre_nom/e-learning-platform", // Remplacez par votre lien réel
    liveLink: "https://e-learning-demo.vercel.app", // Remplacez par votre lien réel
    location: "Projet Universitaire - Université d'Antananarivo, Département Informatique",
    type: "Web Application",
    date: "Novembre 2023"
  }
  // Ajoutez d'autres projets ici
];