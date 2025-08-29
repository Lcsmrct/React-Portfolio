import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon } from '@heroicons/react/solid';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-mechanic-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold font-display">
              Lucas <span className="gradient-text">Maricourt</span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Apprenti mécanicien automobile passionné, en formation continue 
              pour devenir un expert technique dans le domaine automobile.
            </p>
            <div className="flex items-center text-gray-400">
              <span className="mr-2">📍</span>
              <span>Secteur 27-28</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <span className="mr-3">📧</span>
                <a 
                  href="mailto:lucas@lcsmrct.fr"
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  lucas@lcsmrct.fr
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <span className="mr-3">🕒</span>
                <span>Lun - Ven, 8h - 18h</span>
              </div>
            </div>

            {/* Call to Action */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#contact')}
              className="mt-4 px-6 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-300"
            >
              Me Contacter
            </motion.button>
          </motion.div>
        </div>

        {/* Separator */}
        <div className="border-t border-gray-800"></div>

        {/* Bottom Section */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center text-gray-400"
          >
            <span>&copy; {currentYear} Lucas Maricourt. Fait avec</span>
            <HeartIcon className="w-4 h-4 text-red-500 mx-2" />
            <span>et beaucoup de passion automobile.</span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -2 }}
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-primary-400 transition-colors duration-300"
          >
            <span className="mr-2">Retour en haut</span>
            <span>↑</span>
          </motion.button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-primary-500"></div>
    </footer>
  );
};

export default Footer;