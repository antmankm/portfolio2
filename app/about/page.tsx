import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* Section À propos */}
      <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8 m-4">
        {/* Section de gauche - Texte */}
        <div className="w-full md:w-1/2 p-4 md:p-6 text-left">
          <h1 className="text-4xl font-bold mb-6 text-white">
            À propos de moi
          </h1>
          <p className="text-xl text-white">
            Mon objectif est de créer des expériences utilisateurs que ce soit pour un site web, une application mobile ou une plateforme complexe, je me donne à fournir des résultats de haute qualité.
          </p>
        </div>

        {/* Section de droite - Image */}
        <div className="rounded-md w-full md:w-1/2 flex justify-center p-4 md:p-8 m-4">
          <Image
            src="/portrait.png" 
            alt="Photo de profil"
            width={800}
            height={800}
            className="rounded-lg shadow-2xl border-none object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
      </div>

      {/* Section Statistiques */}
      <div className="bg-gray-900 py-12 px-4 text-white">
        <h2 className="text-3xl font-bold text-center mb-8 animate-fade-in">
          Mes Statistiques
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Statistique 1 : Projets réalisés */}
          <div className="text-center bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="text-4xl font-bold mb-2 flex items-center justify-center">
              <span>5+</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-2 text-blue-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <p className="text-xl">Projets réalisés</p>
            <p className="text-sm text-gray-400 mt-2">Front-end, Back-end, Full Stack</p>
          </div>

          {/* Statistique 2 : Années d'expérience */}
          <div className="text-center bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="text-4xl font-bold mb-2 flex items-center justify-center">
              <span>3+</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-2 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <p className="text-xl">Années d'expérience</p>
            <p className="text-sm text-gray-400 mt-2">Depuis 2021</p>
          </div>

          {/* Statistique 3 : Clients satisfaits */}
          <div className="text-center bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="text-4xl font-bold mb-2 flex items-center justify-center">
              <span>10+</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-2 text-yellow-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <p className="text-xl">Clients satisfaits</p>
            <p className="text-sm text-gray-400 mt-2">Taux de satisfaction : 95%</p>
          </div>

          {/* Statistique 4 : Technologies maîtrisées */}
          <div className="text-center bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in">
            <div className="text-4xl font-bold mb-2 flex items-center justify-center">
              <span>15+</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 ml-2 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
            </div>
            <p className="text-xl">Technologies maîtrisées</p>
            <p className="text-sm text-gray-400 mt-2">React, Next.js, Node.js, etc.</p>
          </div>
        </div>
      </div>
    </div>
  );
}