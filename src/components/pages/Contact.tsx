import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, Clock, Calendar, ArrowRight, MessageCircle, Sparkles, Phone } from 'lucide-react';
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

  const faqs = [
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
    {
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time-and-materials engagements, and retainer arrangements. We\'ll discuss options that work best for your budget.',
    },
    {
      question: 'How do we stay in communication?',
      answer: 'We use modern communication tools like Slack, Zoom, and email for seamless collaboration. You\'ll have regular updates and access to project management tools to track progress.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact HiTech Globals - Get in Touch | Web Design & Development Services</title>
        <meta name="description" content="Contact HiTech Globals to discuss your project. Schedule a free 30-minute consultation. We respond within 24 hours. Email: hello@hitechglobals.com" />
        <meta name="keywords" content="contact us, web development services, design consultation, project discussion, schedule meeting, get in touch" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact HiTech Globals - Get in Touch" />
        <meta property="og:description" content="Schedule a free consultation with HiTech Globals. Discuss your project and see how we can help bring your vision to life." />
        <meta property="og:url" content="https://hitechglobals.com/contact" />
        <meta property="og:site_name" content="HiTech Globals" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact HiTech Globals - Schedule Your Free Consultation" />
        <meta name="twitter:description" content="Get in touch with our team. We respond within 24 hours and offer flexible engagement models." />

        {/* Canonical */}
        <link rel="canonical" href="https://hitechglobals.com/contact" />

        {/* Structured Data (JSON-LD) - ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://hitechglobals.com/contact",
            "name": "HiTech Globals Contact Page",
            "description": "Get in touch with HiTech Globals for web design and development services",
            "mainEntity": {
              "@type": "Organization",
              "name": "HiTech Globals",
              "url": "https://hitechglobals.com",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "email": "hello@hitechglobals.com",
                "areaServed": "Global",
                "availableLanguage": ["en"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Global"
              }
            }
          })}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="bg-white pt-20 overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-20 relative">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              className="absolute top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[#0063cd]/10 rounded-full blur-3xl"
              animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
              animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating shapes */}
            <motion.div
              className="absolute top-32 right-[20%] w-4 h-4 bg-[#0063cd]/30 rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 left-[15%] w-3 h-3 bg-purple-500/40 rotate-45"
              animate={{ y: [0, 15, 0], rotate: [45, 90, 45] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/3 right-[10%] w-5 h-5 border-2 border-[#0063cd]/20 rounded-full"
              animate={{ y: [0, -25, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-gradient-to-r from-[#0063cd]/10 to-purple-500/10 rounded-full mb-6 sm:mb-8 border border-[#0063cd]/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="w-4 h-4 text-[#0063cd]" />
                <span className="text-[#0063cd] font-medium">Get in Touch</span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8 font-bold">
                Let's <span className="relative">
                  <span className="text-[#0063cd]">talk</span>
                  <motion.span
                    className="absolute -bottom-1 left-0 right-0 h-3 sm:h-4 bg-[#0063cd]/10 -z-10 rounded-sm"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              Have a project in mind? We'd love to hear about it and discuss how we can help bring your vision to life with expert web design and development services
            </motion.p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30 relative" aria-label="Contact Information and Booking">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#0063cd]/5 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col gap-12">
              {/* Calendly Booking */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl p-6 sm:p-8 md:p-12 border border-border shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <motion.div
                    className="w-12 h-12 bg-[#0063cd]/10 rounded-xl flex items-center justify-center"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <Calendar className="w-6 h-6 text-[#0063cd]" aria-hidden="true" />
                  </motion.div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Schedule a free consultation</h2>
                  </div>
                </div>
                <p className="text-muted-foreground mb-8 ml-0 sm:ml-15">
                  Book a free 30-minute consultation with our team to discuss your project requirements and see how we can help
                </p>

                <div className="calendly-container rounded-2xl overflow-hidden border border-border" style={{ minHeight: '700px' }}>
                  <InlineWidget
                    url="https://calendly.com/mdshaaz712"
                    styles={{
                      height: '700px',
                      width: '100%',
                    }}
                  />
                </div>
              </motion.article>

              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, index) => (
                  <motion.article
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-lg transition-all group"
                  >
                    <motion.div
                      className="w-12 h-12 bg-[#0063cd]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0063cd] transition-colors"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      <method.icon className="w-6 h-6 text-[#0063cd] group-hover:text-white transition-colors" aria-hidden="true" />
                    </motion.div>
                    <h3 className="text-lg font-bold mb-1">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                    {method.link ? (
                      <a
                        href={method.link}
                        className="text-[#0063cd] hover:underline font-medium"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <div className="font-medium text-[#0063cd]">{method.value}</div>
                    )}
                  </motion.article>
                ))}

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-gradient-to-br from-[#0063cd] to-[#0052a8] text-white rounded-2xl p-6 sm:p-8 overflow-hidden"
                >
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4">Quick Response Time</h3>
                    <p className="opacity-90 mb-6">
                      We're a remote-first team, which means we're always connected. Expect a response within 24 hours, often much sooner.
                    </p>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5" aria-hidden="true" />
                      <span className="font-medium">Available 24/7</span>
                    </div>
                  </div>
                </motion.article>
              </div>

              {/* Direct Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="grid md:grid-cols-2 gap-6"
              >
                <a href="mailto:hello@hitechglobals.com" className="block">
                  <motion.div
                    className="p-6 bg-white rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-lg transition-all flex items-center gap-4 group"
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-14 h-14 bg-[#0063cd]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0063cd] transition-colors">
                      <Mail className="w-7 h-7 text-[#0063cd] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Email us at</div>
                      <div className="text-lg font-bold text-[#0063cd]">hello@hitechglobals.com</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#0063cd] ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                </a>

                <a href="tel:+918639433317" className="block">
                  <motion.div
                    className="p-6 bg-white rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-lg transition-all flex items-center gap-4 group"
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-14 h-14 bg-[#0063cd]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0063cd] transition-colors">
                      <Phone className="w-7 h-7 text-[#0063cd] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Call us at</div>
                      <div className="text-lg font-bold text-[#0063cd]">+91 863 943 3317</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[#0063cd] ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative" aria-label="Frequently Asked Questions">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(#0063cd 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <motion.span
                className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                FAQ
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">Common questions</h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Quick answers to questions you may have about our services and process
              </p>
            </motion.div>

            <div className="space-y-4 sm:space-y-6">
              {faqs.map((faq, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="p-6 sm:p-8 bg-white rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-lg transition-all"
                >
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-foreground">{faq.question}</h3>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0063cd]/5 via-transparent to-purple-500/5" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#0063cd] via-[#0052a8] to-[#003d7a] text-white rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 md:p-16 overflow-hidden"
            >
              {/* Decorative */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full" />
              </div>

              <motion.div
                className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm"
                >
                  <Sparkles className="w-8 h-8 sm:w-10 sm:h-10" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
                  Ready to get started?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Schedule your free consultation today and let's discuss how we can bring your digital vision to life
                </p>
                <a href="https://calendly.com/mdshaaz712" target="_blank" rel="noopener noreferrer">
                  <motion.button
                    className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#0063cd] rounded-full hover:bg-white/95 transition-all inline-flex items-center gap-2 group font-bold shadow-xl hover:shadow-2xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
