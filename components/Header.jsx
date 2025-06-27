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
    <header className="bg-dark-custom text-white shadow-sm">
      <div className="container d-flex justify-content-between align-items-center py-3">
        <Link href="/" className="text-decoration-none">
          <span className="h4 fw-bold m-0 hover-text-primary">
            Tamby Narivony
          </span>
        </Link>
        <nav>
          <ul className="d-flex gap-4 list-unstyled m-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link href={link.path} className="text-decoration-none">
                  <span className={`hover-text-primary ${router.pathname === link.path ? 'text-primary fw-semibold' : ''}`}>
                    {link.name}
                  </span>
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