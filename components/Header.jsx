import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header = () => {
  const router = useRouter();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl font-bold cursor-pointer hover:text-blue-400 transition-colors">
            Votre Nom
          </p>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <p className={`text-lg hover:text-blue-400 transition-colors ${router.pathname === link.path ? 'text-blue-400 font-semibold' : ''}`}>
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;