'use client';

import { motion } from 'framer-motion';
import { Target, Users, Lightbulb, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Target },
    { number: '25+', label: 'Happy Clients', icon: Users },
    { number: '100+', label: 'AI Models Deployed', icon: Lightbulb },
    { number: '5+', label: 'Years Experience', icon: Award },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay at the forefront of AI and technology trends to deliver cutting-edge solutions.',
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand and exceed your expectations.',
    },
    {
      title: 'Quality Driven',
      description: 'We maintain the highest standards in code quality, security, and performance.',
    },
    {
      title: 'Scalable Solutions',
      description: 'Our solutions are built to grow with your business and adapt to changing needs.',
    },
  ];

  return (
    <section id="about" className="py-32 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center mb-32">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Dyoma Labs</span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              We are a team of passionate engineers and AI specialists dedicated to building
              intelligent solutions that solve real-world problems.
            </p>
            <p className="text-white/60 mb-10 leading-relaxed">
              Founded with the vision of making AI accessible and practical for businesses of all sizes,
              Dyoma Labs combines deep technical expertise with a human-centered approach to innovation.
              We believe that the best AI solutions are those that seamlessly integrate into existing
              workflows while opening new possibilities for growth.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
            >
              Learn More About Us
            </motion.button>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-8 about-grid"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-3">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Values</span>
          </h3>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-indigo-500/30 transition-all duration-300"
            >
              <h4 className="text-xl font-semibold text-white mb-4">{value.title}</h4>
              <p className="text-white/60 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Team CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-24 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 rounded-3xl p-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Meet Our Expert Team
          </h3>
          <p className="text-lg text-white/70 mb-10 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of AI researchers, software engineers, and domain experts
            brings decades of combined experience to every project.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/20 text-white px-10 py-4 rounded-full font-medium hover:bg-white/5 transition-all duration-300"
          >
            View Team Profiles
          </motion.button>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default About;
