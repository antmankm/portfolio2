import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { headers } from "next/headers";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 text-center md:text-left">
      {/* Section de gauche - Texte */}
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Bonjour, Je suis ANT</h1>
        <p className="text-xl md:text-2xl font-semibold mb-2">
          Développeur Web Full Stack | Création d'expériences numériques sur mesure
        </p>
        <p className="text-lg md:text-xl">
          Passionné par le développement web, je conçois et réalise des applications performantes, modernes et intuitives.
          <br />
          Du front-end élégant à un back-end robuste, je maîtrise les technologies nécessaires pour donner vie à vos idées.
        </p>
      </div>

      {/* Section de droite - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src="/ANTMAN.jpg"  // Remplacez par le chemin de votre image
          alt="Photo de ANT"
          width={300}
          height={300}
          className="rounded-full shadow-lg w-[60%] md:w-[300px]"
        />
      </div>
    </div>
  );
}
