"use client";
import Image from "next/image";
import Link from "next/link";

import DownloadCV from "@/components/ui/button";
import About from "./about/page";
import { motion } from "framer-motion";
import ProjetsPage from "./projets/page";
import ContactPage from "./contact/page";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-10 py-12 text-center">
      {/* Section de présentation */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row items-center justify-center w-full mb-12"
      >
        {/* Section de gauche - Texte */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 text-left">
          <h1 className="text-xl md:text-3xl font-bold mb-4 text-white">
            Hello,<br /> je suis <span className="text-blue-500 text-4xl font-extralight">ANT</span>
          </h1>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-500 text-4xl md:text-6xl font-semibold mb-2 lg:text-6xl">
            <TypeAnimation
              sequence={[
                "Développeur Web",
                1000,
                "Front-End",
                1000,
                "Back-End",
                1000,
                "Full Stack 🚀",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </p>

          <p className="text-lg md:text-xl text-white lg:text-2xl">
            Du front-end élégant à un back-end robuste, <br /> je suis là pour donner vie à vos idées.
          </p>

          {/* Bouton de téléchargement du CV */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-8"
          >
            <DownloadCV />
          </motion.div>

          {/* Icônes des réseaux sociaux */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-start space-x-6 mt-6"
          >
            <Link
              href="https://github.com/antmankm"
              className="text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaGithub className="w-8 h-8" />
            </Link>
            <Link
              href="https://linkedin.com/in/abou-ndiaye-thiam-9a2012247"
              className="text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaLinkedin className="w-8 h-8" />
            </Link>
            <Link
              href="https://x.com/ant_mvn2k"
              className="text-white hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110"
            >
              <FaTwitter className="w-8 h-8" />
            </Link>
          </motion.div>
        </div>

        {/* Section de droite - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden shadow-lg border-4 border-blue-400">
            <Image
              src="/ANTMANKM.jpg" 
              alt="Photo de ANT"
              width={300} 
              height={300} 
              className="w-full h-full object-cover" 
              priority 
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Section About */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateX: -30 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="w-full bg-gray-900 px-4 md:px-10 py-12"
      >
        <About />
      </motion.div>

      {/* Section Projets */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="w-full bg-gray-900 px-4 md:px-10 py-12"
      >
        <ProjetsPage />
      </motion.div>

      {/* Section Contact */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotateZ: -5 }}
        whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="w-full bg-gray-900 px-4 md:px-10 py-12"
      >
        <ContactPage />
      </motion.div>
    </div>
  );
}