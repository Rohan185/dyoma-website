'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'CTO, TechFlow Inc.',
      content: 'Dyoma Labs transformed our data processing pipeline with their AI solutions. We saw a 300% improvement in efficiency within the first month.',
      rating: 5,
      company: 'TechFlow Inc.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CEO, InnovateCorp',
      content: 'The automation solutions provided by Dyoma Labs have revolutionized our operations. Their team is incredibly knowledgeable and responsive.',
      rating: 5,
      company: 'InnovateCorp'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Operations, DataDriven',
      content: 'Working with Dyoma Labs was a game-changer. Their AI models helped us identify patterns we never knew existed in our data.',
      rating: 5,
      company: 'DataDriven'
    },
    {
      name: 'David Park',
      role: 'Founder, StartupX',
      content: 'From concept to deployment, Dyoma Labs delivered beyond our expectations. Their expertise in AI and engineering is unmatched.',
      rating: 5,
      company: 'StartupX'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-32 lg:py-40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            What Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it - hear from the businesses we&apos;ve helped transform
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 testimonials-grid"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(99, 102, 241, 0.15)"
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10 hover:border-indigo-500/30 transition-all duration-300 relative testimonial-card"
            >
              {/* Quote Icon */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Quote className="w-8 h-8 text-white" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-8 mt-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-white/80 text-lg leading-relaxed mb-8">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-r from-indigo-500/20 to-purple-600/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-white/60">{testimonial.role}</div>
                  <div className="text-indigo-400">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 rounded-3xl p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how we can help you achieve similar results with our AI and engineering expertise.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Start Your Project Today
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
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/3 right-1/3 w-96 h-96 bg-gradient-to-r from-indigo-500/5 to-purple-600/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-600/5 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Testimonials;
