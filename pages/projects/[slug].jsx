import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '../../data/projects';
import { FaGithub, FaExternalLinkAlt, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectDetail = ({ project }) => {
  if (!project) {
    return <p className="text-center text-xl text-red-500 py-12">Projet introuvable.</p>;
  }

  return (
    <>
      <Head>
        <title>{project.title} - Votre Nom Portfolio</title>
        <meta name="description" content={project.description} />
      </Head>

      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
          <Link href="/projects">
            <p className="text-blue-400 hover:underline mb-6 inline-flex items-center">
              &larr; Retour aux projets
            </p>
          </Link>

          <h1 className="text-4xl font-bold text-blue-400 mb-6 text-center">
            {project.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <motion.div
              className="relative w-full h-80 rounded-lg overflow-hidden shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={project.images[0]}
                alt={project.title}
                width={160} 
                height={160}
                priority
              />
            </motion.div>
            <div className="space-y-4">
              {project.images.slice(1).map((img, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-36 rounded-lg overflow-hidden shadow-sm"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={img}
                    alt={`${project.title} capture ${index + 2}`}
                    width={160}
                    height={160}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6 justify-center">
            <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
              <FaMapMarkerAlt className="mr-2 text-blue-400" /> {project.location}
            </span>
            <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
              <FaCalendarAlt className="mr-2 text-blue-400" /> {project.date}
            </span>
            <span className="flex items-center bg-gray-700 px-3 py-1 rounded-full">
              <span className="text-blue-400 font-semibold mr-2">Type:</span> {project.type}
            </span>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 whitespace-pre-wrap">
            {project.longDescription}
          </p>

          <h2 className="text-2xl font-bold text-white mb-4">Technologies Utilisées</h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGithub className="mr-3" size={24} /> Voir le Code
              </motion.a>
            )}
            {project.liveLink && (
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition-colors duration-300 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaExternalLinkAlt className="mr-3" size={20} /> Voir en Live
              </motion.a>
            )}
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

  return { paths, fallback: false }; // fallback: false signifie que les pages non trouvées renvoient une 404
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      notFound: true, // Renvoie une page 404 si le projet n'est pas trouvé
    };
  }

  return {
    props: {
      project,
    },
  };
}

export default ProjectDetail;