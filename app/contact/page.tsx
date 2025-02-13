import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Section de gauche - Image et description */}
          <div className="flex flex-col justify-center">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-bold">Contactez-moi</CardTitle>
                <CardDescription className="text-gray-400 mt-2">
                  Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités et collaborations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative h-64 w-full">
                  <Image
                    src="/ctc.jpg" 
                    alt="Contactez-moi"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
              <CardFooter className="text-gray-400 text-sm">
                <p>Je vous répondrai dans les plus brefs délais.</p>
              </CardFooter>
            </Card>
          </div>

          {/* Section de droite - Formulaire */}
          <div className="flex flex-col justify-center">
            <Card className="bg-gray-900 border-gray-500">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-bold">Formulaire de contact</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  {/* Champ Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white"> </label>
                      
                   
                     <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Entrez votre nom et prénom"
                      className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Champ Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white"></label>
                      
                    
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Votre email"
                      className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Champ Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300"> </label>
                    
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Votre message"
                      className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  {/* Bouton d'envoi */}
                  <div>
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-gray-300 text-black font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Envoyer
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
