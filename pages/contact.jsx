import Head from 'next/head';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const formspreeUrl = `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`;

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        console.error('Erreur lors de l\'envoi:', await response.json());
      }
    } catch (error) {
      setStatus('error');
      console.error('Erreur réseau ou autre:', error);
    }
  };

  return (
    <>
      <Head>
        <title>Contactez-moi - Tamby Narivony</title>
        <meta name="description" content="Contactez Tamby Narivony pour vos projets de développement web et mobile." />
      </Head>

      <motion.section
        className="py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="display-4 fw-bold text-center text-white mb-4">
          Contactez-moi
        </h1>

        <div className="bg-dark-custom p-4 rounded shadow mx-auto" style={{ maxWidth: '800px' }}>
          <p className=" text-center mb-4">
            N'hésitez pas à me contacter pour discuter de vos projets, collaborations ou toute autre question.
          </p>

          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-12">
              <label htmlFor="name" className="form-label text-white">Nom Complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control bg-secondary text-white"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="email" className="form-label text-white">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control bg-secondary text-white"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="subject" className="form-label text-white">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control bg-secondary text-white"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label text-white">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="form-control bg-secondary text-white"
                required
              ></textarea>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <motion.button
                type="submit"
                className="btn btn-primary btn-lg px-4 py-2 shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Envoi...' : 'Envoyer le Message'}
              </motion.button>
            </div>
            {status === 'success' && (
              <div className="alert alert-success mt-3 text-center">
                Message envoyé avec succès ! Je vous répondrai bientôt.
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-danger mt-3 text-center">
                Une erreur est survenue lors de l'envoi du message.
              </div>
            )}
          </form>

          <div className="mt-5 text-center">
            <h2 className="h3 fw-bold text-white mb-3">Autres Moyens de Contact</h2>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <a
                href="mailto:votre.email@example.com"
                className="d-flex align-items-center text-decoration-none hover-text-primary"
              >
                <FaEnvelope className="me-2" size={20} /> votre.email@example.com
              </a>
              <a
                href="https://linkedin.com/in/votre_nom_linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center text-decoration-none hover-text-primary"
              >
                <FaLinkedin className="me-2" size={20} /> LinkedIn
              </a>
              <a
                href="https://github.com/votre_nom_github"
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center text-decoration-none hover-text-primary"
              >
                <FaGithub className="me-2" size={20} /> GitHub
              </a>
              <a
                href="tel:+2613XXXXXXXX"
                className="d-flex align-items-center text-decoration-none hover-text-primary"
              >
                <FaPhone className="me-2" size={20} /> +261 3X XX XXX XX
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;