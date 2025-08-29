import React from 'react';
import { motion } from 'framer-motion';
import { WrenchScrewdriverIcon, AcademicCapIcon, TrophyIcon } from '@heroicons/react/24/outline';

const About = () => {
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

  const stats = [
    {
      icon: WrenchScrewdriverIcon,
      number: "1+",
      label: "Année d'expérience",
      color: "text-primary-500"
    },
    {
      icon: AcademicCapIcon,
      number: "16",
      label: "Ans",
      color: "text-blue-500"
    },
    {
      icon: TrophyIcon,
      number: "100%",
      label: "Motivation",
      color: "text-green-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
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
              À Propos de <span className="gradient-text">Moi</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez mon parcours, ma passion pour l'automobile et ma vision de l'avenir
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-full h-64 bg-gradient-to-br from-mechanic-100 to-mechanic-200 rounded-xl flex items-center justify-center">
                    <WrenchScrewdriverIcon className="w-24 h-24 text-primary-500" />
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center"
              >
                <span className="text-2xl">🔧</span>
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"
              >
                <span className="text-xl">⚙️</span>
              </motion.div>
            </motion.div>

            {/* Content Side */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">
                  Passionné d'Automobile
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  À 16 ans, j'ai déjà choisi ma voie : devenir mécanicien automobile. 
                  Depuis 1 an, je me forme avec détermination dans ce domaine qui me passionne. 
                  Chaque jour, j'apprends de nouvelles techniques et je développe ma précision.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Mon objectif est de maîtriser tous les aspects de la mécanique moderne, 
                  des moteurs classiques aux nouvelles technologies électriques et hybrides.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center p-4 bg-white rounded-xl shadow-md"
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                    <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Skills highlight */}
              <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-3">Mes valeurs :</h4>
                <div className="flex flex-wrap gap-2">
                  {['Précision', 'Apprentissage', 'Innovation', 'Qualité'].map((value) => (
                    <span
                      key={value}
                      className="px-3 py-1 bg-white text-primary-600 rounded-full text-sm font-medium shadow-sm"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;