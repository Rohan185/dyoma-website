'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, BarChart3, Code, Cpu, Database, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Generative AI Solutions',
      description: 'Custom AI models and applications that generate content, automate creative processes, and enhance decision-making capabilities.',
      features: ['Custom LLM Integration', 'Content Generation', 'AI Chatbots', 'Intelligent Automation']
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline your business processes with intelligent automation solutions that reduce manual work and increase efficiency.',
      features: ['Process Automation', 'RPA Solutions', 'API Integration', 'Workflow Optimization']
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics, reporting, and predictive modeling.',
      features: ['Data Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Real-time Reporting']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Full-stack development services for web applications, mobile apps, and enterprise software solutions.',
      features: ['Web Applications', 'Mobile Apps', 'Enterprise Software', 'API Development']
    },
    {
      icon: Cpu,
      title: 'AI Infrastructure',
      description: 'Scalable AI infrastructure and MLOps solutions to deploy, monitor, and maintain your AI systems.',
      features: ['MLOps Setup', 'Model Deployment', 'Infrastructure Scaling', 'Performance Monitoring']
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Build robust data pipelines, warehouses, and processing systems to power your AI and analytics initiatives.',
      features: ['Data Pipelines', 'ETL Processes', 'Data Warehousing', 'Real-time Processing']
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-32 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-32"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Our <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            We deliver cutting-edge AI and engineering solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(99, 102, 241, 0.15)"
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 group p-12"
            >
              <div className="mb-12">
                <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-9 h-9 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-6">{service.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg">{service.description}</p>
              </div>

              <div className="space-y-6 mb-12">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    className="flex items-center text-white/60 py-2"
                  >
                    <div className="w-3 h-3 bg-indigo-400 rounded-full mr-6" />
                    {feature}
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{ x: 5 }}
                className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center space-x-2 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI and engineering expertise can accelerate your growth and innovation.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(99, 102, 241, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </section>
  );
};

export default Services;
