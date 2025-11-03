import { motion } from 'framer-motion';
import { Mail, Clock, Calendar } from 'lucide-react';
import { InlineWidget } from 'react-calendly';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@hitechglobals.com',
      link: 'mailto:hello@hitechglobals.com',
      description: 'Send us an email anytime',
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: 'Within 24 hours',
      link: null,
      description: 'We\'ll get back to you quickly',
    },
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-[#0063cd]/10 rounded-full mb-8">
              <span className="text-[#0063cd]">Get in Touch</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8">
              Let's <span className="text-[#0063cd]">talk</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Have a project in mind? We'd love to hear about it and discuss how we can help bring your vision to life
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-12">
            {/* Calendly Booking */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 md:p-12 border border-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-[#0063cd]/10 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-[#0063cd]" />
                </div>
                <h2 className="text-3xl md:text-4xl">Schedule a meeting</h2>
              </div>
              <p className="text-muted-foreground mb-8">
                Book a free 30-minute consultation to discuss your project
              </p>

              <div className="calendly-container" style={{ minHeight: '700px' }}>
                <InlineWidget
                  url="https://calendly.com/mdshaaz712"
                  styles={{
                    height: '700px',
                    width: '100%',
                  }}
                />
              </div>
            </motion.div>

            {/* Contact Info Cards in Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-border hover:border-[#0063cd] transition-colors"
                >
                  <div className="w-12 h-12 bg-[#0063cd]/10 rounded-xl flex items-center justify-center mb-4">
                    <method.icon className="w-6 h-6 text-[#0063cd]" />
                  </div>
                  <h3 className="text-lg mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  {method.link ? (
                    <a
                      href={method.link}
                      className="text-[#0063cd] hover:underline"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <div className="font-medium">{method.value}</div>
                  )}
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="bg-[#0063cd] text-white rounded-2xl p-8"
              >
                <h3 className="text-2xl mb-4">Quick Response</h3>
                <p className="opacity-90 mb-6">
                  We're a remote-first team, which means we're always connected. Expect a response within 24 hours, often much sooner.
                </p>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>Available 24/7</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl mb-6">Common questions</h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to questions you may have
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on scope, but most projects take 4-12 weeks from start to launch. We\'ll provide a detailed timeline during our initial consultation.',
              },
              {
                question: 'Do you work with startups?',
                answer: 'Absolutely! We love working with startups and understand the unique challenges you face. We offer flexible engagement models to fit your budget and timeline.',
              },
              {
                question: 'What technologies do you use?',
                answer: 'We specialize in modern web technologies like React, Next.js, and Tailwind CSS for web, and React Native and Flutter for mobile. We choose the best tools for your specific needs.',
              },
              {
                question: 'Do you provide ongoing support?',
                answer: 'Yes! We offer maintenance and support packages to keep your product running smoothly and help it grow over time.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-8 bg-secondary/30 rounded-2xl"
              >
                <h3 className="text-xl mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
