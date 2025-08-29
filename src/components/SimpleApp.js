import React from 'react';
import '../index.css';

const SimpleApp = () => {
  const scrollToSection = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-800">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lucas</span> Maricourt
            </h1>
            <div className="hidden md:flex space-x-8">
              {['Accueil', 'À propos', 'Compétences', 'Expérience', 'Services', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(`#${['home', 'about', 'skills', 'experience', 'services', 'contact'][index]}`)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-400/30 rounded-full blur-lg animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl font-medium text-blue-200 mb-4 animate-fade-in">
            Bonjour, je suis
          </h2>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
            Lucas <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Maricourt</span>
          </h1>
          <div className="mb-8">
            <p className="text-xl sm:text-2xl text-gray-300 mb-4">
              Apprenti Mécanicien Automobile
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Passionné par l'automobile depuis toujours, je développe mes compétences 
              techniques et ma précision pour devenir un mécanicien expert.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              Me Contacter
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              En Savoir Plus
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              À Propos de <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Moi</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez mon parcours, ma passion pour l'automobile et ma vision de l'avenir
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                  <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                    <span className="text-6xl">🔧</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
            </div>

            <div className="space-y-6">
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

              <div className="grid grid-cols-3 gap-4 pt-8">
                {[
                  { icon: '🔧', number: '1+', label: "Année d'expérience" },
                  { icon: '🎂', number: '16', label: 'Ans' },
                  { icon: '💪', number: '100%', label: 'Motivation' }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-gray-800">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-3">Mes valeurs :</h4>
                <div className="flex flex-wrap gap-2">
                  {['Précision', 'Apprentissage', 'Innovation', 'Qualité'].map((value) => (
                    <span
                      key={value}
                      className="px-3 py-1 bg-white text-blue-600 rounded-full text-sm font-medium shadow-sm"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Compétences</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              En constante évolution grâce à ma formation d'apprenti mécanicien
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Compétences Techniques</h3>
              <div className="space-y-6">
                {[
                  { name: 'Mécanique Générale', level: 75, icon: '🔧' },
                  { name: 'Diagnostic Auto', level: 60, icon: '💻' },
                  { name: 'Moteurs', level: 70, icon: '⚙️' },
                  { name: 'Systèmes de Freinage', level: 65, icon: '🛑' },
                  { name: 'Pneumatiques', level: 80, icon: '🚗' },
                  { name: 'Contrôle Qualité', level: 85, icon: '✅' }
                ].map((skill, index) => (
                  <div key={skill.name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center mb-3">
                      <div className="text-2xl mr-4">{skill.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{skill.name}</h4>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Qualités Personnelles</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Travail en équipe',
                    'Résolution de problèmes', 
                    'Attention aux détails',
                    'Communication client',
                    'Gestion du temps',
                    'Apprentissage continu'
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow"
                    >
                      <span className="text-sm font-medium text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-blue-900 p-8 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-4">Formation Actuelle</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mr-4"></div>
                    <div>
                      <p className="font-medium">Apprentissage Mécanicien Auto</p>
                      <p className="text-sm text-gray-300">En cours - 1ère année</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-purple-400 rounded-full mr-4"></div>
                    <div>
                      <p className="font-medium">Secteur 27-28</p>
                      <p className="text-sm text-gray-300">Formation pratique en entreprise</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mon <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Parcours</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une progression constante vers l'expertise en mécanique automobile
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            <div className="space-y-12">
              {[
                {
                  year: "2024 - Présent",
                  title: "Apprenti Mécanicien Automobile",
                  company: "Secteur 27-28",
                  location: "Formation en alternance",
                  description: "Formation pratique en mécanique automobile avec apprentissage des techniques modernes de diagnostic et de réparation.",
                  skills: ["Diagnostic", "Réparation moteur", "Système de freinage", "Contrôle qualité"],
                  icon: "🔧",
                  color: "bg-blue-500"
                },
                {
                  year: "2023 - 2024",
                  title: "Découverte Professionnelle",
                  company: "Orientation Mécanique",
                  location: "Explorations diverses",
                  description: "Période d'orientation et de découverte du monde professionnel automobile à travers stages et visites d'entreprises.",
                  skills: ["Découverte métiers", "Stages d'observation", "Orientation"],
                  icon: "🎓",
                  color: "bg-purple-500"
                }
              ].map((item, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 ${item.color} rounded-full flex items-center justify-center z-10`}>
                    <span className="text-white text-sm">{item.icon}</span>
                  </div>

                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-96 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow`}>
                    <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2 mt-3">{item.title}</h3>
                    <div className="flex items-center text-gray-600 mb-3">
                      <span className="mr-2">📍</span>
                      <span className="text-sm">{item.company} • {item.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
                    
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Mes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Compétences</span> en Formation
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les domaines dans lesquels je développe mon expertise d'apprenti mécanicien
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🔧',
                title: 'Mécanique Générale',
                description: 'Entretien courant, révisions et réparations sur tous types de véhicules avec précision et attention aux détails.',
                features: ['Vidanges', 'Changement filtres', 'Courroies', 'Bougies']
              },
              {
                icon: '💻',
                title: 'Diagnostic Électronique',
                description: 'Utilisation d\'outils de diagnostic modernes pour identifier rapidement les pannes et optimiser les performances.',
                features: ['Scanner OBD', 'Analyse capteurs', 'Diagnostic moteur', 'Codes erreur']
              },
              {
                icon: '⚙️',
                title: 'Réparation Moteur',
                description: 'Intervention sur les moteurs essence et diesel, de la maintenance préventive aux réparations complexes.',
                features: ['Distribution', 'Culasse', 'Joints', 'Pistons']
              },
              {
                icon: '🛑',
                title: 'Système de Freinage',
                description: 'Maintenance et réparation complète des systèmes de freinage pour assurer votre sécurité sur la route.',
                features: ['Plaquettes', 'Disques', 'Liquide frein', 'ABS']
              },
              {
                icon: '🚗',
                title: 'Pneumatiques',
                description: 'Montage, équilibrage et réparation de pneumatiques avec expertise pour optimiser tenue de route et longévité.',
                features: ['Montage', 'Équilibrage', 'Géométrie', 'Réparation']
              },
              {
                icon: '✅',
                title: 'Contrôle Qualité',
                description: 'Vérifications minutieuses et tests de performance pour garantir la qualité et la sécurité de chaque intervention.',
                features: ['Tests performance', 'Contrôle sécurité', 'Vérifications', 'Validation']
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 text-center">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">En apprentissage</span>
                    <div className="flex items-center">
                      <div className="w-16 h-2 bg-gray-200 rounded-full mr-2">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <span className="text-gray-500">70%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Me <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Contacter</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              N'hésitez pas à me contacter pour toute question ou opportunité
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">💬</span>
                <h3 className="text-2xl font-bold text-gray-800">Envoyez-moi un message</h3>
              </div>

              <div className="space-y-6">
                {[
                  { icon: '📧', title: 'Email', details: 'lucas@lcsmrct.fr', href: 'mailto:lucas@lcsmrct.fr' },
                  { icon: '📍', title: 'Localisation', details: 'Secteur 27-28' },
                  { icon: '🕒', title: 'Disponibilité', details: 'Lun - Ven, 8h - 18h' }
                ].map((info, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-xl hover:shadow-md transition-shadow">
                    <div className="text-2xl mr-4">{info.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-gray-600 hover:text-blue-500 transition-colors">
                          {info.details}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.details}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Parlons de votre projet !</h3>
              <p className="text-blue-100 mb-6 leading-relaxed">
                En tant qu'apprenti mécanicien motivé et passionné, je suis toujours 
                prêt à échanger sur les projets automobiles et les opportunités d'apprentissage.
              </p>
              
              <div className="space-y-3 mb-8">
                {[
                  'Réponse rapide garantie',
                  'Disponible pour échanges',
                  'Ouvert aux opportunités'
                ].map((point, index) => (
                  <div key={index} className="flex items-center text-blue-100">
                    <span className="w-2 h-2 bg-blue-300 rounded-full mr-3"></span>
                    {point}
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.location.href = 'mailto:lucas@lcsmrct.fr'}
                className="w-full bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Envoyer un Email
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">
                Lucas <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Maricourt</span>
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Apprenti mécanicien automobile passionné, en formation continue 
                pour devenir un expert technique dans le domaine automobile.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Navigation</h4>
              <div className="space-y-2">
                {['Accueil', 'À propos', 'Compétences', 'Contact'].map((link) => (
                  <button
                    key={link}
                    onClick={() => scrollToSection(`#${['home', 'about', 'skills', 'contact'][['Accueil', 'À propos', 'Compétences', 'Contact'].indexOf(link)]}`)}
                    className="block text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center text-gray-400">
                  <span className="mr-3">📧</span>
                  <a href="mailto:lucas@lcsmrct.fr" className="hover:text-blue-400 transition-colors">
                    lucas@lcsmrct.fr
                  </a>
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="mr-3">📍</span>
                  <span>Secteur 27-28</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-gray-400 mb-4 md:mb-0">
              <span>&copy; 2024 Lucas Maricourt. Fait avec</span>
              <span className="text-red-500 mx-2">❤️</span>
              <span>et beaucoup de passion automobile.</span>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              Retour en haut ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SimpleApp;