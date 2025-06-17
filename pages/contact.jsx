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
  const [status, setStatus] = useState(''); // 'success', 'error', 'sending'

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
        setFormData({ name: '', email: '', subject: '', message: '' }); // Réinitialiser le formulaire
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
        <title>Contactez-moi - Votre Nom</title>
        <meta name="description" content="Contactez Votre Nom pour vos projets de développement web et mobile." />
      </Head>

      <motion.section
        className="py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-4xl font-bold text-center text-white mb-10">
          Contactez-moi
        </h1>

        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl mx-auto">
          <p className="text-lg text-gray-300 text-center mb-8">
            N'hésitez pas à me contacter pour discuter de vos projets, collaborations ou toute autre question. Je suis disponible pour de nouvelles opportunités à Antananarivo et à distance.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 text-sm font-bold mb-2">Nom Complet</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-300 text-sm font-bold mb-2">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 text-sm font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 border-gray-600 text-white"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <motion.button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300 text-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Envoi...' : 'Envoyer le Message'}
              </motion.button>
            </div>
            {status === 'success' && (
              <p className="text-center text-green-500 mt-4 text-lg">
                Message envoyé avec succès ! Je vous répondrai bientôt.
              </p>
            )}
            {status === 'error' && (
              <p className="text-center text-red-500 mt-4 text-lg">
                Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ou utiliser les liens ci-dessous.
              </p>
            )}
          </form>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Autres Moyens de Contact</h2>
            <div className="flex justify-center space-x-6 text-gray-300">
              <a
                href="mailto:votre.email@example.com" // Remplacez par votre email
                className="flex items-center hover:text-blue-400 transition-colors"
              >
                <FaEnvelope className="mr-2" size={24} /> votre.email@example.com
              </a>
              <a
                href="https://linkedin.com/in/votre_nom_linkedin" // Remplacez par votre LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="mr-2" size={24} /> LinkedIn
              </a>
              <a
                href="https://github.com/votre_nom_github" // Remplacez par votre GitHub
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-400 transition-colors"
              >
                <FaGithub className="mr-2" size={24} /> GitHub
              </a>
              {/* Optionnel: numéro de téléphone */}
              <a
                href="tel:+2613XXXXXXXX" // Remplacez par votre numéro (format international)
                className="flex items-center hover:text-blue-400 transition-colors"
              >
                <FaPhone className="mr-2" size={24} /> +261 3X XX XXX XX
              </a>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Contact;