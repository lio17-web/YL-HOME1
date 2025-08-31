"use client";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  const [showMessage, setShowMessage] = useState(false);

  // Affiche un message toutes les 15s
  useEffect(() => {
    const interval = setInterval(() => {
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 4000); // message reste 4s
    }, 15000);
    return () => clearInterval(interval);
  }, []);


  // Produits YL Home (8 articles)
const produits = [
  { id: 1, nom: "Table basse moderne", prix: "12,000 DA", img: "/produit1.png" },
  { id: 2, nom: "Bureau moderne", prix: "14,000 DA", img: "/produit2.png" },
  { id: 3, nom: "Table basse rectangulaire", prix: "17,000 DA", img: "/produit3.png" },
  { id: 4, nom: "Table basse carré", prix: "12,000 DA", img: "/produit4.png" },
  { id: 5, nom: "Table ronde petit modèle", prix: "10,000 DA", img: "/produit5.png" },
  { id: 6, nom: "Table gigogne", prix: "20,000 DA", img: "/produit6.png" },
  { id: 7, nom: "Meuble chaussure", prix: "15,000 DA", img: "/produit7.png" },
  { id: 8, nom: "Table basse grand modèle", prix: "15,000 DA", img: "/produit8.png" },
];


  return (
    <main className="min-h-screen flex flex-col justify-between bg-gradient-to-b from-white to-gray-100">
      {/* Navbar */}
      <header className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo + Nom */}
          <div className="flex items-center gap-2">
            <img src= "/logo.png" alt="YL HOME Logo" className="w-10 h-10 rounded-full border" />
            <span className="text-2xl font-bold">YL <span className="text-gray-500">HOME</span></span>
          </div>

          {/* Liens */}
          <nav className="flex gap-6 text-gray-700 font-medium">
            <a href="#accueil" className="hover:text-gray-900">Accueil</a>
            <a href="#produits" className="hover:text-gray-900">Produits</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="accueil" className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Bienvenue chez <span className="text-gray-500">YL HOME</span></h1>
        <p className="mt-4 text-lg text-gray-600">Mobilier & décoration modernes pour un intérieur élégant</p>
      </section>

      {/* Produits */}
      <section id="produits" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Nos Produits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {produits.map((p) => (
            <div key={p.id} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img src={p.img} alt={p.nom} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{p.nom}</h3>
                <p className="text-gray-600">{p.prix}</p>
                <a
                  href={`https://wa.me/213664794077?text=Je%20veux%20commander%20: ${encodeURIComponent(p.nom)}`}
                  target="_blank"
                  className="mt-3 inline-block w-full text-center bg-green-500 text-white rounded-lg py-2 hover:bg-green-600 transition"
                >
                  Commander
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Contactez-nous</h2>
        <p className="mt-2 text-gray-600">Disponible sur WhatsApp pour vos commandes et devis.</p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-8">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} YL HOME - Tous droits réservés</p>
          <div className="flex gap-6 text-xl">
            <a href="https://www.instagram.com/yl.home" target="_blank" className="hover:text-pink-400"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@yl.home13" target="_blank" className="hover:text-gray-300"><FaTiktok /></a>
            <a href="https://wa.me/213664794077" target="_blank" className="hover:text-green-400"><FaWhatsapp /></a>
          </div>
        </div>
      </footer>

      {/* Bouton WhatsApp flottant */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/213664794077?text=Salam%20je%20veux%20passer%20une%20commande"
          target="_blank"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <FaWhatsapp className="text-2xl" />
          {showMessage && <span className="animate-bounce">Cliquez pour commander</span>}
        </a>
      </div>
    </main>
  );
}
