import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarIcon, 
  LocationMarkerIcon, 
  CogIcon,
  AcademicCapIcon,
  StarIcon
} from '@heroicons/react/outline';

const Experience = () => {
  const timeline = [
    {
      year: "2024 - Présent",
      title: "Apprenti Mécanicien Automobile",
      company: "Secteur 27-28",
      location: "Formation en alternance",
      description: "Formation pratique en mécanique automobile avec apprentissage des techniques modernes de diagnostic et de réparation.",
      skills: ["Diagnostic", "Réparation moteur", "Système de freinage", "Contrôle qualité"],
      icon: WrenchScrewdriverIcon,
      color: "bg-primary-500"
    },
    {
      year: "2023 - 2024",
      title: "Découverte Professionnelle",
      company: "Orientation Mécanique",
      location: "Explorations diverses",
      description: "Période d'orientation et de découverte du monde professionnel automobile à travers stages et visites d'entreprises.",
      skills: ["Découverte métiers", "Stages d'observation", "Orientation"],
      icon: AcademicCapIcon,
      color: "bg-blue-500"
    },
    {
      year: "2008 - 2023",
      title: "Formation Scolaire",
      company: "Parcours Éducatif",
      location: "Études générales",
      description: "Formation générale avec développement des bases mathématiques et techniques nécessaires à l'apprentissage en mécanique.",
      skills: ["Mathématiques", "Sciences", "Technologie", "Bases techniques"],
      icon: StarIcon,
      color: "bg-green-500"
    }
  ];

  const achievements = [
    {
      title: "1 Année d'Expérience",
      description: "En formation apprentissage",
      icon: "🎯"
    },
    {
      title: "Motivation 100%",
      description: "Passion pour l'automobile",
      icon: "⚡"
    },
    {
      title: "Apprentissage Continu",
      description: "Toujours en évolution",
      icon: "📚"
    },
    {
      title: "Objectif Expertise",
      description: "Devenir expert technique",
      icon: "🔧"
    }
  ];

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
    <section id="experience" className="py-20 bg-gray-50">
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
              Mon <span className="gradient-text">Parcours</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une progression constante vers l'expertise en mécanique automobile
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${item.color} rounded-full flex items-center justify-center z-10`}>
                    <item.icon className="w-4 h-4 text-white" />
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    } md:w-96 bg-white rounded-xl shadow-lg p-6 card-hover`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <MapPinIcon className="w-4 h-4 mr-2" />
                      <span className="text-sm">{item.company} • {item.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    
                    {/* Skills tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-md"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <motion.div variants={itemVariants} className="mt-20">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-10">
              Mes Réalisations
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-md text-center card-hover"
                >
                  <div className="text-3xl mb-3">{achievement.icon}</div>
                  <h4 className="font-bold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;