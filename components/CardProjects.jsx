import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CardProject = ({ project }) => {
  return (
    <div className="bg-dark-custom rounded shadow overflow-hidden transition-all hover-shadow-lg">
      <div className="position-relative" style={{ height: '200px' }}>
        <Image
          src={project.images[0]}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h3 className="h4 fw-bold text-primary mb-2">
          {project.title}
        </h3>
        <p className=" small mb-3" style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {project.description}
        </p>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {project.technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="badge bg-secondary bg-opacity-25 text-white small"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="btn btn-primary btn-sm">
          Voir le projet
        </Link>
      </div>
    </div>
  );
};

export default CardProject;