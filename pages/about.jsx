import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <>
      <Head>
        <title>À Propos - Votre Nom</title>
        <meta name="description" content="En savoir plus sur Votre Nom, développeur web et mobile." />
      </Head>

      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          À Propos de Moi
        </h1>

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Je suis un développeur passionné avec une solide expérience dans la conception et le développement d'applications web et mobiles. Mon parcours a débuté par une formation en informatique à l'<span className="font-semibold text-blue-300">Université d'Antananarivo</span>, où j'ai acquis des bases solides en algorithmique, structures de données et génie logiciel. Depuis, je me suis spécialisé dans les technologies modernes du web et du mobile.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            Mon expertise se concentre sur l'écosystème <span className="font-semibold text-blue-300">JavaScript</span>, avec une maîtrise particulière de <span className="font-semibold text-blue-300">Next.js</span> et <span className="font-semibold text-blue-300">React</span> pour le développement frontend réactif et performant. Pour le mobile, j'utilise <span className="font-semibold text-blue-300">React Native</span> pour construire des applications cross-platform. Côté backend, je travaille avec <span className="font-semibold text-blue-300">Node.js (Express, NestJS)</span>, et j'ai de l'expérience avec des bases de données comme <span className="font-semibold text-blue-300">MongoDB</span> et <span className="font-semibold text-blue-300">PostgreSQL</span>.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            J'aime relever les défis techniques, apprendre de nouvelles technologies et collaborer avec des équipes pour construire des produits qui ont un impact réel. Je suis constamment à la recherche de moyens d'optimiser les performances, d'améliorer l'expérience utilisateur et d'écrire du code propre et maintenable.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            En dehors du code, j'aime lire sur les nouvelles technologies, faire de la randonnée dans les paysages magnifiques de Madagascar et contribuer à des projets open source.
          </p>

          <div className="flex justify-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href="/Votre_CV.pdf" // Assurez-vous d'avoir ce fichier dans public/
                download
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg"
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