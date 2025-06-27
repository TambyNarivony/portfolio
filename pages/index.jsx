import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { skills } from '../data/skills';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <>
      <Head>
        <title>Tamby Narivony - Développeur Web & Mobile</title>
        <meta name="description" content="Portfolio de Tamby Narivony, développeur web et mobile basé à Antananarivo, Madagascar." />
      </Head>

      <section className="text-center py-5">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="position-relative mx-auto mb-4 rounded-circle overflow-hidden border border-primary" style={{ width: '160px', height: '160px' }}>
            <Image
              src="/images/profil.jpg" 
              alt="Tamby Narivony - Photo de profil"
              width={160}
              height={160} 
              className="rounded-circle object-cover"
              priority
            />
          </div>
          <h1 className="display-4 fw-bold text-white mb-3">
            Bonjour, je suis <span className="text-primary">Tamby Narivony</span>
          </h1>
          <p className=" mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Développeur <span className="fw-semibold text-primary">Web & Mobile</span> passionné par la création d'expériences numériques innovantes et performantes, basé à <span className="fw-semibold text-primary">Antananarivo, Madagascar</span>.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects" className="btn btn-primary btn-lg px-4 py-2 shadow">
                Voir mes Projets
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="btn btn-secondary btn-lg px-4 py-2 shadow">
                Me Contacter
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section className="py-5 bg-dark-custom rounded shadow my-5">
        <h2 className="display-4 fw-bold text-center text-white mb-5">
          Mes Compétences Clés
        </h2>
        <motion.div
          className="row g-4 justify-content-center"
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
              className="col-6 col-sm-4 col-md-3 col-lg-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <div className="d-flex flex-column align-items-center p-3 bg-secondary bg-opacity-25 rounded hover-bg-opacity-50 transition-all">
                <skill.icon size={40} className="text-primary mb-2" />
                <p className="small fw-semibold text-white text-center">{skill.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Home;