import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CogIcon, 
  GlobeIcon, 
  TruckIcon, 
  ComputerDesktopIcon,
  BadgeCheckIcon,
  ClipboardCheckIcon
} from '@heroicons/react/outline';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    {
      name: "Mécanique Générale",
      level: 75,
      icon: CogIcon,
      color: "from-blue-500 to-primary-500"
    },
    {
      name: "Diagnostic Auto",
      level: 60,
      icon: ComputerDesktopIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Moteurs",
      level: 70,
      icon: CogIcon,
      color: "from-purple-500 to-indigo-500"
    },
    {
      name: "Systèmes de Freinage",
      level: 65,
      icon: BadgeCheckIcon,
      color: "from-red-500 to-rose-500"
    },
    {
      name: "Pneumatiques",
      level: 80,
      icon: TruckIcon,
      color: "from-orange-500 to-yellow-500"
    },
    {
      name: "Contrôle Qualité",
      level: 85,
      icon: ClipboardDocumentCheckIcon,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const softSkills = [
    "Travail en équipe",
    "Résolution de problèmes",
    "Attention aux détails",
    "Communication client",
    "Gestion du temps",
    "Apprentissage continu"
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
    <section id="skills" className="py-20 bg-white">
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
              Mes <span className="gradient-text">Compétences</span>
            </h2>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En constante évolution grâce à ma formation d'apprenti mécanicien
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Compétences Techniques</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="bg-gray-50 p-6 rounded-xl card-hover"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-primary-100 rounded-lg mr-4">
                        <skill.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                    </div>
                    
                    <div className="skill-bar">
                      <motion.div
                        className={`skill-progress bg-gradient-to-r ${skill.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1.5, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills & Certifications */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Soft Skills */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Qualités Personnelles</h3>
                <div className="grid grid-cols-2 gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-primary-50 to-blue-50 p-4 rounded-lg text-center"
                    >
                      <span className="text-sm font-medium text-gray-700">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Formation */}
              <div className="bg-gradient-to-br from-mechanic-800 to-primary-900 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Formation Actuelle</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary-400 rounded-full mr-4"></div>
                    <div>
                      <p className="font-medium">Apprentissage Mécanicien Auto</p>
                      <p className="text-sm text-gray-300">En cours - 1ère année</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                    <div>
                      <p className="font-medium">Secteur 27-28</p>
                      <p className="text-sm text-gray-300">Formation pratique en entreprise</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning Goals */}
              <div className="bg-white border-2 border-primary-100 p-6 rounded-xl">
                <h4 className="font-bold text-gray-800 mb-4">Objectifs d'apprentissage</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Maîtrise des diagnostics électroniques
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Spécialisation moteurs hybrides
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    Certification constructeur
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;