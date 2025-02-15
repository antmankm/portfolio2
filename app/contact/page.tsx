"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    const res = await fetch("https://formspree.io/f/mqaeyevy", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      setSuccessMessage("✅ Message envoyé avec succès !");
      setFormData({ name: "", email: "", message: "" }); // Réinitialiser le formulaire
    } else {
      setErrorMessage("❌ Une erreur s'est produite, veuillez réessayer.");
    }
  };

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
                  Vous avez un projet en tête ou une question ? N&apos;hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités et collaborations.
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
                {/* Messages de succès ou d'erreur */}
                {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Champ Nom */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Entrez votre nom et prénom"
                      className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                      required
                    />
                  </div>

                  {/* Champ Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Votre email"
                      className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                      required
                    />
                  </div>

                  {/* Champ Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Votre message"
                      className="mt-1 block w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                      required
                    />
                  </div>

                  {/* Bouton d'envoi */}
                  <div>
                    <button
                      type="submit"
                      className="w-full text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-700 px-4 py-2  text-lg font-semibold rounded-full"
                      disabled={loading}
                    >
                      {loading ? "Envoi en cours..." : "Envoyer"}
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
