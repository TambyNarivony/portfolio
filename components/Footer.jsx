import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-custom text-white py-4 mt-auto">
      <div className="container text-center">
        <p className="lead mb-3">Connectez-vous avec moi :</p>
        <div className="d-flex justify-content-center gap-4 mb-3">
          <a
            href="https://github.com/TambyNarivony"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover-text-primary"
            aria-label="GitHub Profile"
          >
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/tamby-narivony-304675371"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover-text-primary"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="mailto:tambynarivony19@gmail.com" 
            className=" hover-text-primary"
            aria-label="Email"
          >
            <FaEnvelope size={25} />
          </a>
        </div>
        <p className="small">
          &copy; {new Date().getFullYear()} Tamby Narivony. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;