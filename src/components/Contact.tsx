'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@dyomalabs.com',
      href: 'mailto:hello@dyomalabs.com',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-32 lg:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Let&apos;s <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Talk</span>
          </h2>
          <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Ready to start your AI transformation? Get in touch with our experts today.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-10"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-white/80 font-medium mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-white/80 font-medium mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-white/80 font-medium mb-3">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 font-medium mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-indigo-500 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-5 rounded-xl font-semibold text-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Get in touch</h3>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                We&apos;d love to hear about your project and discuss how we can help
                bring your AI vision to life. Reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-6 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">{info.title}</div>
                    <div className="text-white/60">{info.content}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 rounded-2xl p-6"
            >
              <h4 className="text-white font-semibold mb-3">Office Hours</h4>
              <div className="space-y-2 text-sm text-white/70">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM PST</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Contact;
