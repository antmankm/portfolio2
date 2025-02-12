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
        
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
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
        <footer className="bg-gray-850 text-white text-center p-4 mt-8">
          <p>&copy; {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.</p>
        </footer>
      </body>
    </html>
  );
}
