'use client';

import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: 'AI-Powered Automation',
      description: 'Leverage cutting-edge AI to automate complex business processes and reduce manual overhead.',
      benefits: [
        'Reduce operational costs by up to 60%',
        'Increase processing speed by 10x',
        'Minimize human error',
        '24/7 automated operations'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Intelligent Analytics',
      description: 'Transform raw data into actionable insights with our advanced analytics and machine learning models.',
      benefits: [
        'Real-time data processing',
        'Predictive analytics',
        'Custom dashboard creation',
        'Advanced reporting tools'
      ],
      image: '/api/placeholder/600/400'
    },
    {
      title: 'Custom AI Solutions',
      description: 'Tailored AI applications designed specifically for your industry and business requirements.',
      benefits: [
        'Industry-specific models',
        'Scalable architecture',
        'Seamless integration',
        'Ongoing support & optimization'
      ],
      image: '/api/placeholder/600/400'
    }
  ];

  return (
    <section className="py-32 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Why Choose <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Dyoma Labs</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            We deliver measurable results through innovative AI solutions
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-40">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-xl mb-10 leading-relaxed">
                  {feature.description}
                </p>
                
                <div className="space-y-6 mb-12">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: benefitIndex * 0.1 }}
                      className="flex items-center space-x-4"
                    >
                      <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                      <span className="text-white/80 text-lg">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 font-medium text-lg group"
                >
                  <span>Explore This Solution</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </div>

              {/* Image/Visual */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}
              >
                <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-600/20 rounded-3xl border border-white/10 overflow-hidden">
                  {/* Placeholder for actual image/3D element */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">AI</span>
                      </div>
                      <p className="text-white/60">Interactive Demo Coming Soon</p>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl opacity-80"
                />
                <motion.div
                  animate={{
                    y: [0, 10, 0],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: 1
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl opacity-60"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] pointer-events-none" />
    </section>
  );
};

export default Features;
