import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Code, Palette, Sparkles, Zap, Shield, Rocket, Users } from 'lucide-react';
import { Testimonials } from '../Testimonials';

export function Home() {
  const services = [
    {
      icon: Palette,
      title: 'Design',
      description: 'Beautiful, functional design that captures your brand essence',
      gradient: 'from-pink-500/20 to-purple-500/20',
    },
    {
      icon: Code,
      title: 'Development',
      description: 'Custom web and mobile solutions built with modern tech',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Globe,
      title: 'Digital Strategy',
      description: 'Strategic guidance to maximize your digital impact',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Forward-thinking solutions that set you apart',
      gradient: 'from-amber-500/20 to-orange-500/20',
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Remote-first team',
      description: 'Expert designers & developers from around the world',
    },
    {
      icon: Shield,
      title: 'Transparent communication',
      description: 'Clear updates throughout your entire project',
    },
    {
      icon: Zap,
      title: 'Modern tech stack',
      description: 'Ensuring scalability & peak performance',
    },
    {
      icon: Rocket,
      title: 'Dedicated to success',
      description: 'From concept to launch and beyond',
    },
  ];

  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '24/7', label: 'Support Available' },
    { value: '100%', label: 'Remote Team' },
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

      <div className="bg-white overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Orbs */}
            <motion.div
              className="absolute top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[#0063cd]/10 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/5 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Geometric Shapes */}
            <motion.div
              className="absolute top-32 right-[20%] w-4 h-4 sm:w-6 sm:h-6 bg-[#0063cd]/30 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/3 left-[15%] w-3 h-3 sm:w-4 sm:h-4 bg-purple-500/40 rotate-45"
              animate={{
                y: [0, 15, 0],
                rotate: [45, 90, 45],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-[10%] w-5 h-5 sm:w-8 sm:h-8 border-2 border-[#0063cd]/20 rounded-full"
              animate={{
                y: [0, -25, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-2/3 left-[25%] w-2 h-8 sm:w-3 sm:h-12 bg-gradient-to-b from-[#0063cd]/20 to-transparent rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="max-w-8xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-gradient-to-r from-[#0063cd]/10 to-purple-500/10 rounded-full mb-6 sm:mb-8 border border-[#0063cd]/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  className="w-2 h-2 bg-[#0063cd] rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[#0063cd] text-sm sm:text-base font-medium">Design & Development Studio</span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight mb-6 sm:mb-8">
                We build
                <span className="relative">
                  <span className="text-[#0063cd]"> digital products</span>
                  <motion.span
                    className="absolute -bottom-1 left-1 right-0 h-3 sm:h-4 bg-[#0063cd]/10 -z-10 rounded-sm"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </span>
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
                <motion.button
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#0063cd] to-[#0052a8] text-white rounded-full hover:shadow-xl hover:shadow-[#0063cd]/25 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#0052a8] to-[#0063cd]"
                    initial={{ x: "100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </Link>
              <Link to="/portfolio" className="w-auto">
                <motion.button
                  className="w-full px-6 sm:px-8 py-3 sm:py-4 border border-border rounded-full hover:border-[#0063cd] hover:text-[#0063cd] transition-all text-sm sm:text-base backdrop-blur-sm bg-white/50"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 sm:mt-20"
            >
              <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies worldwide</p>
              <div className="flex flex-wrap justify-center gap-8 sm:gap-12 opacity-40">
                {['TechCorp', 'InnovateCo', 'StartupX', 'DigitalFlow'].map((company, i) => (
                  <motion.div
                    key={company}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    className="text-lg sm:text-xl font-medium text-muted-foreground"
                  >
                    {company}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 bg-gradient-to-r from-[#0063cd] to-[#0052a8]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center text-white"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30 relative" aria-label="Our Services">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#0063cd]/5 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <motion.span
                className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                Our Expertise
              </motion.span>
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
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className={`relative p-6 sm:p-8 bg-white rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-2xl hover:shadow-[#0063cd]/10 transition-all group overflow-hidden`}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#0063cd] transition-all duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="w-7 h-7 sm:w-8 sm:h-8 text-[#0063cd] group-hover:text-white transition-colors" aria-hidden="true" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 font-semibold">{service.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{service.description}</p>

                    <motion.div
                      className="mt-4 flex items-center gap-2 text-[#0063cd] opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <span className="text-sm font-medium">Learn more</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
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
                className="inline-flex items-center gap-2 text-[#0063cd] hover:gap-3 transition-all group text-lg font-medium"
              >
                Explore all services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden" aria-label="Why Choose HiTech Globals">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(#0063cd 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  Why Us
                </motion.span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">
                  Why work with <span className="text-[#0063cd]">us</span>?
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground mb-8 sm:mb-10">
                  We're a dedicated team of designers and developers passionate about creating digital products that make a real impact on your business and users.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  {whyChooseUs.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="p-4 sm:p-5 bg-secondary/50 rounded-xl border border-border/50 hover:border-[#0063cd]/30 hover:shadow-lg transition-all group"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-[#0063cd]/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0063cd] transition-colors">
                          <item.icon className="w-5 h-5 text-[#0063cd] group-hover:text-white transition-colors" aria-hidden="true" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Main Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-[#0063cd] to-[#0052a8] rounded-3xl p-8 sm:p-10 lg:p-12 text-white overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Decorative Circles */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative z-10 h-full flex flex-col justify-between min-h-[300px] sm:min-h-[350px]">
                    <div>
                      <motion.div
                        className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        100%
                      </motion.div>
                      <div className="text-xl sm:text-2xl font-semibold mb-2">Remote Team</div>
                      <p className="text-white/80 text-sm sm:text-base">
                        Work with talented professionals from anywhere in the world, delivering excellence across time zones
                      </p>
                    </div>

                    <div className="pt-8 border-t border-white/20 mt-8">
                      <motion.div
                        className="text-4xl sm:text-5xl font-bold mb-2"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        24/7
                      </motion.div>
                      <div className="text-lg sm:text-xl font-semibold mb-1">Communication</div>
                      <p className="text-white/80 text-xs sm:text-sm">
                        Always connected and responsive to your needs
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge */}
                <motion.div
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white rounded-2xl shadow-xl p-4 sm:p-5 border border-border"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  animate={{ y: [0, -5, 0] }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">Available Now</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30 relative" aria-label="Our Process">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <motion.span
                className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                Our Process
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">How we work</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                A streamlined process from concept to launch ensuring project success
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line - Desktop */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0063cd]/30 to-transparent -translate-y-1/2 z-0" />

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 relative z-10">
                {[
                  {
                    number: '01',
                    title: 'Discovery & Strategy',
                    description: 'We understand your goals, audience, and requirements to create a clear roadmap for success',
                    icon: '🎯',
                  },
                  {
                    number: '02',
                    title: 'Design & Development',
                    description: 'Our expert team brings your vision to life with beautiful design and clean, scalable code',
                    icon: '⚡',
                  },
                  {
                    number: '03',
                    title: 'Launch & Support',
                    description: 'We deploy your project and provide ongoing support to ensure long-term success',
                    icon: '🚀',
                  },
                ].map((step, index) => (
                  <motion.article
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    whileHover={{ y: -5 }}
                    className="relative p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-border/50"
                  >
                    {/* Step Number Badge */}
                    <motion.div
                      className="absolute -top-4 left-6 sm:left-8 bg-[#0063cd] text-white text-lg sm:text-xl font-bold px-4 py-2 rounded-lg shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.div>

                    <div className="mt-4">
                      <div className="text-3xl sm:text-4xl mb-4">{step.icon}</div>
                      <h3 className="text-xl sm:text-2xl mb-3 sm:mb-4 font-semibold">{step.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground">{step.description}</p>
                    </div>

                    {/* Progress Indicator */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-[#0063cd]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(index + 1) * 33.33}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Phase {index + 1}/3</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0063cd]/5 via-transparent to-purple-500/5" />

          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#0063cd] via-[#0052a8] to-[#003d7a] text-white rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 md:p-16 text-center overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full" />
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rotate-45" />
              </div>

              {/* Gradient Orb */}
              <motion.div
                className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm"
                >
                  <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />
                </motion.div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 font-semibold">
                  Ready to bring your
                  <br />
                  <span className="text-white/90">idea to life?</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-8 sm:mb-10 max-w-2xl mx-auto">
                  Let's discuss your project and create something amazing together that drives real results
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Link to="/contact">
                    <motion.button
                      className="px-8 sm:px-10 py-4 sm:py-5 bg-white text-[#0063cd] rounded-full hover:bg-white/95 transition-all inline-flex items-center gap-2 group text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get in Touch
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <Link to="/portfolio" className="text-white/80 hover:text-white transition-colors text-sm sm:text-base">
                    Or view our portfolio →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
