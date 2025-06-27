import Head from 'next/head';
import { projects } from '../data/projects';
import CardProject from '../components/CardProjects';
import { motion } from 'framer-motion';

const Projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Mes Projets - Tamby Narivony</title>
        <meta name="description" content="Découvrez mes projets de développement web et mobile." />
      </Head>

      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="display-4 fw-bold text-center text-white mb-5">
          Mes Réalisations
        </h1>

        <div className="row g-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CardProject project={project} />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      projects,
    },
  };
}

export default Projects;