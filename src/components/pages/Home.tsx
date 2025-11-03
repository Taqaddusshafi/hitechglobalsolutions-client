import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Code, Palette, Sparkles, Check } from 'lucide-react';

export function Home() {
  const services = [
    {
      icon: Palette,
      title: 'Design',
      description: 'Beautiful, functional design that captures your brand essence',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Custom web and mobile solutions built with modern tech',
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Strategic guidance to maximize your digital impact',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Forward-thinking solutions that set you apart',
    },
  ];

  const whyChooseUs = [
    'Remote-first team of expert designers & developers',
    'Transparent communication throughout your project',
    'Modern tech stack ensuring scalability & performance',
    'Dedicated to your success from concept to launch',
  ];

  return (
    <>
      <Helmet>
        <title>HiTech Globals - Web Development & Digital Design Studio | Enterprise Solutions</title>
        <meta name="description" content="HiTech Globals is a remote-first web design and development studio creating exceptional digital products for ambitious brands worldwide. Expert design, custom development, and digital strategy services." />
        <meta name="keywords" content="web development, digital design, custom web solutions, digital strategy, design studio, development services, enterprise software" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HiTech Globals - Web Development & Digital Design Studio" />
        <meta property="og:description" content="Remote-first studio crafting exceptional digital experiences for ambitious brands. Design, development, and digital strategy services." />
        <meta property="og:url" content="https://hitechglobals.com" />
        <meta property="og:site_name" content="HiTech Globals" />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HiTech Globals - Web Development & Digital Design" />
        <meta name="twitter:description" content="Expert web design and development services for ambitious brands worldwide" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://hitechglobals.com" />
        
        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HiTech Globals",
            "url": "https://hitechglobals.com",
            "description": "Remote-first web design and development studio creating digital products for ambitious brands worldwide",
            "logo": "https://hitechglobals.com/logo.png",
            "sameAs": [
              "https://twitter.com/hitechglobals",
              "https://linkedin.com/company/hitechglobals",
              "https://github.com/hitechglobals"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "url": "https://hitechglobals.com/contact"
            },
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "Global"
            },
            "knowsAbout": ["Web Design", "Web Development", "Digital Strategy", "Mobile App Development", "UI/UX Design"]
          })}
        </script>
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20">
          <div className="max-w-8xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 sm:px-4 py-2 bg-[#0063cd]/10 rounded-full mb-6 sm:mb-8">
                <span className="text-[#0063cd] text-sm sm:text-base">Design & Development Studio</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight mb-6 sm:mb-8">
                We build
                <span className="text-[#0063cd]"> digital products</span>
                <br />
                that matter
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 sm:mb-12 px-4"
            >
              A remote-first studio crafting exceptional digital experiences for ambitious brands worldwide. Expert web design, custom development, and strategic digital solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col lg:flex-row gap-3 sm:gap-4 justify-center items-center"
            >
              <Link to="/contact" className="w-auto">
                <button className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#0063cd] text-white rounded-full hover:bg-[#0063cd]/90 transition-colors flex items-center justify-center gap-2 group text-sm sm:text-base">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/portfolio" className="w-auto">
                <button className="w-full px-6 sm:px-8 py-3 sm:py-4 border border-border rounded-full hover:border-foreground transition-colors text-sm sm:text-base">
                  View Our Work
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30" aria-label="Our Services">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">What we do</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                Full-spectrum design and development services tailored to your business needs
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 sm:p-8 bg-white rounded-2xl border border-border hover:border-[#0063cd] hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#0063cd]/20 transition-colors">
                    <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#0063cd]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">{service.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[#0063cd] hover:gap-3 transition-all group"
              >
                Explore all services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6" aria-label="Why Choose HiTech Globals">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">
                  Why work with <span className="text-[#0063cd]">us</span>?
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
                  We're a dedicated team of designers and developers passionate about creating digital products that make a real impact on your business and users.
                </p>
                <ul className="space-y-4" role="list">
                  {whyChooseUs.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-[#0063cd]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#0063cd]" aria-hidden="true" />
                      </div>
                      <p className="text-base sm:text-lg">{item}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square bg-gradient-to-br from-[#0063cd]/20 to-transparent rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#0063cd]/20">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="text-5xl sm:text-6xl lg:text-7xl text-[#0063cd] mb-3 sm:mb-4">100%</div>
                      <div className="text-xl sm:text-2xl mb-2">Remote Team</div>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        Work with talented professionals from anywhere in the world
                      </p>
                    </div>
                    <div className="pt-6 sm:pt-8 border-t border-border/50">
                      <div className="text-3xl sm:text-4xl text-[#0063cd] mb-2">24/7</div>
                      <div className="text-base sm:text-lg mb-1">Communication</div>
                      <p className="text-muted-foreground text-xs sm:text-sm">
                        Always connected and responsive to your needs
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30" aria-label="Our Process">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">How we work</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                A streamlined process from concept to launch ensuring project success
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {[
                {
                  number: '01',
                  title: 'Discovery & Strategy',
                  description: 'We understand your goals, audience, and requirements to create a clear roadmap for success',
                },
                {
                  number: '02',
                  title: 'Design & Development',
                  description: 'Our expert team brings your vision to life with beautiful design and clean, scalable code',
                },
                {
                  number: '03',
                  title: 'Launch & Support',
                  description: 'We deploy your project and provide ongoing support to ensure long-term success',
                },
              ].map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 sm:p-8 bg-white rounded-2xl"
                >
                  <div className="text-4xl sm:text-5xl text-[#0063cd] mb-3 sm:mb-4" aria-label={`Step ${step.number}`}>{step.number}</div>
                  <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0063cd] text-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 text-center"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6">
                Ready to bring your
                <br />
                idea to life?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Let's discuss your project and create something amazing together that drives real results
              </p>
              <Link to="/contact">
                <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#0063cd] rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 group text-sm sm:text-base">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
