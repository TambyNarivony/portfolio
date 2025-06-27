import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../data/projects';
import { FaGithub, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectDetail = ({ project }) => {
  if (!project) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <p className="text-danger fs-5">Projet introuvable.</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} - Tamby Narivony</title>
        <meta name="description" content={project.description} />
      </Head>

      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="container">
          <div className="bg-dark-custom p-4 rounded shadow mx-auto" style={{ maxWidth: '1000px' }}>
            <Link href="/projects" className="text-decoration-none d-flex align-items-center mb-4">
              <span className="text-primary">&larr;</span>
              <span className="ms-2">Retour aux projets</span>
            </Link>

            <h1 className="h2 fw-bold text-primary mb-4 text-center">
              {project.title}
            </h1>

            <div className="row g-4 mb-4">
              <motion.div
                className="col-md-6"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="position-relative rounded overflow-hidden shadow" style={{ height: '350px' }}>
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
              <div className="col-md-6">
                <div className="row g-3">
                  {project.images.slice(1).map((img, index) => (
                    <motion.div
                      key={index}
                      className="col-12 col-sm-6"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="position-relative rounded overflow-hidden shadow-sm" style={{ height: '160px' }}>
                        <Image
                          src={img}
                          alt={`${project.title} capture ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap gap-2 mb-4 justify-content-center">
              <span className="badge bg-secondary bg-opacity-25 text-white d-flex align-items-center">
                <FaMapMarkerAlt className="me-2 text-primary" /> {project.location}
              </span>
              <span className="badge bg-secondary bg-opacity-25 text-white d-flex align-items-center">
                <FaCalendarAlt className="me-2 text-primary" /> {project.date}
              </span>
              <span className="badge bg-secondary bg-opacity-25 text-white">
                <span className="text-primary fw-semibold me-1">Type:</span> {project.type}
              </span>
            </div>

            <div className="mb-4">
              <p className="" style={{ whiteSpace: 'pre-wrap' }}>
                {project.longDescription}
              </p>
            </div>

            <div className="mb-4">
              <h2 className="h4 fw-bold text-white mb-3">Technologies Utilisées</h2>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="badge bg-primary text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light d-flex align-items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="me-2" /> Code Source
                </motion.a>
              )}
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary d-flex align-items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="me-2" /> Voir le Projet
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      project,
    },
  };
}

export default ProjectDetail;