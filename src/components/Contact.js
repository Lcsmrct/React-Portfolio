import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MailIcon, 
  LocationMarkerIcon, 
  ClockIcon,
  UserIcon,
  ChatAlt2Icon
} from '@heroicons/react/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: MailIcon,
      title: "Email",
      details: "lucas@lcsmrct.fr",
      link: "mailto:lucas@lcsmrct.fr",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: LocationMarkerIcon,
      title: "Localisation",
      details: "Secteur 27-28",
      link: "#",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: ClockIcon,
      title: "Disponibilité",
      details: "Lun - Ven, 8h - 18h",
      link: "#",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, we'll create a mailto link
    const subject = encodeURIComponent(formData.subject || 'Contact depuis le portfolio');
    const body = encodeURIComponent(`
Nom: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `);
    
    window.location.href = `mailto:lucas@lcsmrct.fr?subject=${subject}&body=${body}`;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display text-gray-800 mb-4">
              Me <span className="gradient-text">Contacter</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              N'hésitez pas à me contacter pour toute question ou opportunité
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <ChatAlt2Icon className="w-6 h-6 text-primary-500 mr-3" />
                  <h3 className="text-2xl font-bold text-gray-800">Envoyez-moi un message</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nom *
                      </label>
                      <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Votre message..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-600 transition-colors shadow-lg"
                  >
                    Envoyer le Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white rounded-xl shadow-md p-6 flex items-center card-hover"
                  >
                    <div className={`p-3 rounded-lg ${info.color} mr-4`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                      {info.link.startsWith('mailto:') ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-primary-500 transition-colors"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.details}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-primary-600 to-blue-700 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Parlons de votre projet !</h3>
                <p className="text-primary-100 mb-6 leading-relaxed">
                  En tant qu'apprenti mécanicien motivé et passionné, je suis toujours 
                  prêt à échanger sur les projets automobiles et les opportunités d'apprentissage.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-primary-100">
                    <span className="w-2 h-2 bg-primary-300 rounded-full mr-3"></span>
                    Réponse rapide garantie
                  </div>
                  <div className="flex items-center text-primary-100">
                    <span className="w-2 h-2 bg-primary-300 rounded-full mr-3"></span>
                    Disponible pour échanges
                  </div>
                  <div className="flex items-center text-primary-100">
                    <span className="w-2 h-2 bg-primary-300 rounded-full mr-3"></span>
                    Ouvert aux opportunités
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;