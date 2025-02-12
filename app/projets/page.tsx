import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

// Exemple de données de projets avec des images
const projects = [
  {
    id: 1,
    title: "Projet 1",
    description: "Description du projet 1. Ce projet est un exemple de ce que je peux réaliser.",
    link: "/projets/1",
    image: "/project1.jpg", // Chemin de l'image du projet 1
  },
  {
    id: 2,
    title: "Projet 2",
    description: "Description du projet 2. Ce projet montre mes compétences en développement web.",
    link: "/projets/2",
    image: "/project2.jpg", // Chemin de l'image du projet 2
  },
  {
    id: 3,
    title: "Projet 3",
    description: "Description du projet 3. Un autre exemple de mon travail.",
    link: "/projets/3",
    image: "/project3.jpg", // Chemin de l'image du projet 3
  },
  {
    id: 4,
    title: "Projet 4",
    description: "Description du projet 4. Un projet innovant utilisant les dernières technologies.",
    link: "/projets/4",
    image: "/project4.jpg", // Chemin de l'image du projet 4
  },
  {
    id: 5,
    title: "Projet 5",
    description: "Description du projet 5. Un projet démontrant mes compétences en design.",
    link: "/projets/5",
    image: "/project5.jpg", // Chemin de l'image du projet 5
  },
  {
    id: 6,
    title: "Projet 6",
    description: "Description du projet 6. Un projet complexe avec des fonctionnalités avancées.",
    link: "/projets/6",
    image: "/project6.jpg", // Chemin de l'image du projet 6
  },
];

const ProjetsPage = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Mes Projets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300 bg-gray-900 border-gray-300">
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