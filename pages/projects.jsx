import Head from 'next/head';
import { projects } from '../data/projects';
import CardProject from '../components/CardProjects';
import { motion } from 'framer-motion';

const Projects = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Mes Projets - Votre Nom</title>
        <meta name="description" content="Découvrez mes projets de développement web et mobile, incluant des applications Next.js, React Native, Node.js." />
      </Head>

      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Mes Réalisations
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
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
  // En production, vous pourriez charger ces données depuis une API ou une base de données
  // Ici, nous les chargeons directement depuis le fichier de données
  return {
    props: {
      projects,
    },
  };
}

export default Projects;