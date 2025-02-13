import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

// Exemple de données de projets avec des images
const projects = [
  {
    id: 1,
    title: "SOUTIEN PALESTINE",
    description: "Création d’un site de Don pour une organisation caritative fictive qui aide les communautés défavorisées.",
    link: " https://charity-hub-five.vercel.app/",
    image: "/SP.jpg", // Chemin de l'image du projet 1
  },
  {
    id: 2,
    title: "Portfolio Interactif",
    description: "Développement d'un portfolio interactif utilisant Html Tailwind CSS et animations JS.",
    link: "https://antmankm.github.io/mon-site-web/",
    image: "/capture2.jpg", // Chemin de l'image du projet 2
  },
  {
    id: 3,
    title: "MOVIE APP ROUTER",
    description: "Développement d'une application react permettant de regarder les bandes annonces des films à traver des Routes intégrer dans React.",
    link: "https://github.com/antmankm/MOVIE-APP-ROUTER.git",
    image: "/movie.png", // Chemin de l'image du projet 3
  },
  {
    id: 4,
    title: "Portfolio 2",
    description: "Deuxieme portfolio développer avec une seule page et des animations.",
    link: " https://portfolio-opal-eight-43.vercel.app",
    image: "/ME.png", // Chemin de l'image du projet 4
  },
  {
    id: 5,
    title: "CHARISEN",
    description: "Création d’un site de Don pour une organisation caritative fictive qui aide les communautés défavorisées.",
    link: "https://charity-hub-gamma.vercel.app/",
    image: "/DON.png", // Chemin de l'image du projet 5
  },
  {
    id: 6,
    title: "Application de gestion ",
    description: " Développement en cour d'une application de gestion de prise de rendez-vous pour une salon de coiffure.",
    link: "#",
    image: "/soon.jpg", // Chemin de l'image du projet 6
  },
];

const ProjetsPage = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-gray-900">
            <CardHeader>
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  className="rounded-t-lg object-cover"
                />
              </div>
              <CardTitle className="text-white mt-4">{project.title}</CardTitle>
              <CardDescription className="text-white">{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Vous pouvez ajouter plus de contenu ici, comme des technologies utilisées ou des statistiques */}
            </CardContent>
            <CardFooter>
              <Link
                href={project.link}
                className="text-blue-500 hover:text-blue-700 font-medium"
              >
                Voir plus
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProjetsPage;