import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DownloadCV from "@/components/ui/button";
import About from "./about/page"; // Importez le composant About
import { motion } from "framer-motion";
import ProjetsPage from "./projets/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-10 py-12 text-center">
      {/* Section de présentation */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full mb-12">
        {/* Section de gauche - Texte */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Salut, je suis <span className="text-blue-500">ANT</span>
          </h1>
          <p className="text-6xl md:text-6xl font-semibold mb-2 text-white lg:text-6xl">
            Développeur Web Full Stack 🚀
          </p>
          <p className="text-lg md:text-xl text-white lg:text-2xl">
            Du front-end élégant à un back-end robuste, <br />  je suis là pour donner vie à vos idées.
          </p>

          <div className="mt-4">
            <DownloadCV />
          </div>
        </div>

        {/* Section de droite - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/ANTMAN.jpg"
            alt="Photo de ANT"
            width={250}
            height={250}
            className="rounded-full shadow-lg w-[60%] md:w-[300px]"
          />
        </div>
      </div>

      {/* Section About */}
      <div className="w-full bg-gray-900  px-10 py-12"> {/* Ajoutez un padding en haut et en bas */}
        <About />
      </div>
      
      <div className="w-full bg-gray-900  px-10 py-12"> {/* Ajoutez un padding en haut et en bas */}
        <ProjetsPage />
      </div>

      {/* Section Contact */}
      <div className="w-full bg-gray-900  px-10 py-12"> {/* Ajoutez un padding en haut et en bas */}
        <ContactPage />
      </div>
    </div>
  );
}