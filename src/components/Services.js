import React from 'react';
import { motion } from 'framer-motion';
import { 
  CogIcon,
  ComputerDesktopIcon,
  TruckIcon,
  GlobeIcon,
  ShieldCheckIcon,
  ClipboardCheckIcon
} from '@heroicons/react/outline';

const Services = () => {
  const services = [
    {
      icon: CogIcon,
      title: "Mécanique Générale",
      description: "Entretien courant, révisions et réparations sur tous types de véhicules avec précision et attention aux détails.",
      features: ["Vidanges", "Changement filtres", "Courroies", "Bougies"],
      color: "from-blue-500 to-primary-600",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: ComputerDesktopIcon,
      title: "Diagnostic Électronique",
      description: "Utilisation d'outils de diagnostic modernes pour identifier rapidement les pannes et optimiser les performances.",
      features: ["Scanner OBD", "Analyse capteurs", "Diagnostic moteur", "Codes erreur"],
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: GlobeIcon,
      title: "Réparation Moteur",
      description: "Intervention sur les moteurs essence et diesel, de la maintenance préventive aux réparations complexes.",
      features: ["Distribution", "Culasse", "Joints", "Pistons"],
      color: "from-purple-500 to-indigo-600",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: ShieldCheckIcon,
      title: "Système de Freinage",
      description: "Maintenance et réparation complète des systèmes de freinage pour assurer votre sécurité sur la route.",
      features: ["Plaquettes", "Disques", "Liquide frein", "ABS"],
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: TruckIcon,
      title: "Pneumatiques",
      description: "Montage, équilibrage et réparation de pneumatiques avec expertise pour optimiser tenue de route et longévité.",
      features: ["Montage", "Équilibrage", "Géométrie", "Réparation"],
      color: "from-orange-500 to-yellow-600",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    },
    {
      icon: ClipboardDocumentCheckIcon,
      title: "Contrôle Qualité",
      description: "Vérifications minutieuses et tests de performance pour garantir la qualité et la sécurité de chaque intervention.",
      features: ["Tests performance", "Contrôle sécurité", "Vérifications", "Validation"],
      color: "from-teal-500 to-cyan-600",
      bgColor: "bg-teal-50",
      iconColor: "text-teal-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section id="services" className="py-20 bg-white">
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
              Mes <span className="gradient-text">Compétences</span> en Formation
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les domaines dans lesquels je développe mon expertise d'apprenti mécanicien
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Card Header */}
                <div className={`${service.bgColor} p-6 relative overflow-hidden`}>
                  <div className="relative z-10">
                    <service.icon className={`w-12 h-12 ${service.iconColor} mb-4`} />
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/20 rounded-full -translate-y-10 translate-x-10"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">En apprentissage</span>
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${service.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: '70%' }}
                          transition={{ delay: index * 0.1, duration: 1.5 }}
                          viewport={{ once: true }}
                        />
                      </div>
                      <span className="text-gray-500">70%</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center bg-gradient-to-r from-mechanic-800 to-primary-900 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Prêt à Apprendre et Progresser</h3>
            <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
              En tant qu'apprenti motivé, je m'engage à fournir un service de qualité 
              tout en développant continuellement mes compétences techniques.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
            >
              Me Contacter
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;