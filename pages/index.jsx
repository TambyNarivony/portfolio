import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Head>
        <title>Votre Nom - Développeur Web & Mobile</title>
        <meta name="description" content="Portfolio de Votre Nom, développeur web et mobile basé à Antananarivo, Madagascar. Expert en Next.js, React, React Native, Node.js." />
      </Head>

      <section className="text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
            <Image
              src="/images/profil.jpg" 
              alt="Votre Nom - Photo de profil"
              width={160}
              height={160} 
              className="rounded-full object-cover"
              priority
            />
          </div>
          <h1 className="text-5xl font-extrabold text-white mb-4">
            Bonjour, je suis <span className="text-blue-400">Votre Nom</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Développeur <span className="font-semibold text-blue-300">Web & Mobile</span> passionné par la création d'expériences numériques innovantes et performantes, basé à <span className="font-semibold text-blue-300">Antananarivo, Madagascar</span>.
          </p>
          <div className="flex justify-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects">
                <p className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg">
                  Voir mes Projets
                </p>
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact">
                <p className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 shadow-lg">
                  Me Contacter
                </p>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 bg-gray-800 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Mes Compétences Clés
        </h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 transition-colors duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <skill.icon size={40} className="text-blue-400 mb-2" />
              <p className="text-sm font-semibold text-gray-200 text-center">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Home;