import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Head>
        <title>À Propos - Tamby Narivony</title>
        <meta name="description" content="En savoir plus sur Tamby Narivony, développeur web et mobile." />
      </Head>

      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="display-4 fw-bold text-center text-white mb-4">
          À Propos de Moi
        </h1>

        <div className="bg-dark-custom p-4 rounded shadow mx-auto" style={{ maxWidth: '900px' }}>
          <p className="lead  mb-4">
            Je suis un développeur passionné dans la conception et le développement d'applications web et mobiles. Mon parcours a débuté par une formation en informatique à l'<span className="fw-semibold text-primary">Institut Supérieur Polytechnique de Madagascar</span>, où j'ai acquis des bases solides en algorithmique et structures de données.
          </p>
          <p className="lead  mb-4">
            Mon expertise se concentre sur l'écosystème <span className="fw-semibold text-primary">JavaScript</span>, particulièrement avec <span className="fw-semibold text-primary">Next.js</span>, <span className="fw-semibold text-primary">React et Angular</span> pour le développement frontend. Pour le mobile, j'utilise <span className="fw-semibold text-primary">Flutter</span>.
          </p>
          <p className="lead mb-4">
            J'aime relever les défis techniques, apprendre de nouvelles technologies et collaborer avec des équipes pour construire des produits qui ont un impact réel.
          </p>
          <p className="lead mb-4">
            En dehors du code, j'aime faire des exercices physiques et aussi de festoyer.
          </p>

          <div className="d-flex justify-content-center mt-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/CV2.pdf"
                download
                className="btn btn-primary btn-lg px-4 py-2 shadow"
              >
                Télécharger mon CV
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default About;