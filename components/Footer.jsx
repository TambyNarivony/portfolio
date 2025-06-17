import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
        <p className="text-lg mb-4">Connectez-vous avec moi :</p>
        <div className="flex space-x-6 mb-4">
          <a
            href="https://github.com/votre_nom_github" // Remplacez par votre profil GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/votre_nom_linkedin" // Remplacez par votre profil LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:votre.email@example.com" // Remplacez par votre email
            className="text-gray-300 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={30} />
          </a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Votre Nom. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;