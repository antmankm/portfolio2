import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mon Portfolio",
  description: "Mon portfolio personnel", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
      <nav className="flex justify-between items-center p-2 bg-gray-800 text-white">
      <div className="text-lg font-bold">
        <Link href="/" className="text-1xl">Mon Portfolio</Link>
      </div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/about" className="hover:text-blue-600 font-bold">About</Link>
        </li>
        <li>
          <Link href="/projets" className="hover:text-blue-600 font-bold">Projets</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-600 font-bold">Contact</Link>
        </li>
      </ul>
    </nav>
        {children}
        <footer className="bg-gray-850 text-white text-center p-4 mt-8 border-t border-gray-700">
          <p className="text-lg">&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="https://github.com/antmankm" className="hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110">GitHub</Link>
            <Link href="https://linkedin.com/in/abou-ndiaye-thiam-9a2012247" className="hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110">LinkedIn</Link>
            <Link href="https://x.com/ant_mvn2k" className="hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110">Twitter</Link>
          </div>
          <div className="mt-4">
            <p>Contactez-moi: <a href="mailto:abouthiam842@gmail.com" className="hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110">abouthiam842@gmail.com</a></p>
          </div>
        </footer>
      </body>
    </html>
  );
}
