import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardProject = ({ project }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <div className="relative w-full h-48">
        <Image
          src={project.images[0]}
          alt={project.title}
          width={160} 
          height={160}
          className="rounded-t-lg"
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-blue-400 mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, index) => ( // Affiche les 4 premières technologies
            <span
              key={index}
              className="bg-gray-700 text-gray-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`}>
          <p className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
            Voir le projet
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CardProject;