import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Palette,
  Code,
  Smartphone,
  Globe,
  ShoppingCart,
  Zap,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  TrendingUp,
  Award,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  price?: string;
  gradient: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
  icon: string;
}

interface Benefit {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  stat: string;
  description: string;
}

export function Services() {
  const services: Service[] = [
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love and engage with',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design',
        'Design Systems',
        'Responsive Design',
        'Accessibility (WCAG)',
      ],
      price: 'From $2,000',
      gradient: 'from-pink-500/20 to-purple-500/20',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, fast, and scalable web applications built with cutting-edge technologies',
      features: [
        'Custom Web Apps',
        'React & Next.js',
        'Progressive Web Apps',
        'API Integration',
        'Performance Optimization',
        'SEO Optimization',
      ],
      price: 'From $5,000',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android',
      features: [
        'iOS & Android Apps',
        'React Native',
        'Flutter Development',
        'Mobile UI/UX',
        'App Store Deployment',
        'Push Notifications',
      ],
      price: 'From $8,000',
      gradient: 'from-green-500/20 to-emerald-500/20',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online store setup, customization, and optimization for conversions',
      features: [
        'Shopify Development',
        'Custom E-commerce',
        'Payment Integration',
        'Inventory Management',
        'Analytics Setup',
        'Conversion Optimization',
      ],
      price: 'From $4,000',
      gradient: 'from-amber-500/20 to-orange-500/20',
    },
    {
      icon: Globe,
      title: 'Web Design',
      description: 'Stunning websites designed to convert visitors into customers and drive growth',
      features: [
        'Landing Pages',
        'Corporate Websites',
        'Portfolio Sites',
        'Blog & Content Sites',
        'SEO Optimization',
        'Mobile Responsive',
      ],
      price: 'From $3,000',
      gradient: 'from-indigo-500/20 to-blue-500/20',
    },
    {
      icon: Zap,
      title: 'Brand Identity',
      description: 'Create a memorable and distinctive brand that stands out in your market',
      features: [
        'Logo Design',
        'Brand Strategy',
        'Visual Identity',
        'Style Guides',
        'Marketing Materials',
        'Brand Guidelines',
      ],
      price: 'From $1,500',
      gradient: 'from-violet-500/20 to-purple-500/20',
    },
  ];

  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'Flutter',
    'React Native',
    'Figma',
    'Firebase',
    'Shopify',
    'WordPress',
    'PostgreSQL',
  ];

  const process: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, target audience, and project requirements to create a solid foundation.',
      duration: '1-2 weeks',
      icon: '🎯',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We develop a detailed project roadmap with clear milestones, timelines, deliverables, and success metrics.',
      duration: '1-2 weeks',
      icon: '📋',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Our designers create beautiful, user-friendly interfaces that align with your brand and engage users.',
      duration: '2-4 weeks',
      icon: '🎨',
    },
    {
      number: '04',
      title: 'Development',
      description: 'We build your product using modern technologies and industry best practices for quality and performance.',
      duration: '4-12 weeks',
      icon: '⚡',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Thorough quality assurance and testing to ensure everything works perfectly across all devices and browsers.',
      duration: '1-2 weeks',
      icon: '🔍',
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support to ensure continued success and growth.',
      duration: 'Ongoing',
      icon: '🚀',
    },
  ];

  const benefits: Benefit[] = [
    {
      icon: TrendingUp,
      title: 'Proven Results',
      stat: '+45% Average Growth',
      description: 'Our clients see measurable improvements in engagement and conversions',
    },
    {
      icon: Users,
      title: 'Expert Team',
      stat: '50+ Projects',
      description: 'Experienced developers and designers with proven track records',
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      stat: '98% On Schedule',
      description: 'We respect your timeline and deliver projects on deadline',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      stat: '4.9/5 Rating',
      description: 'Rigorous testing and quality standards for every project',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - HiTech Globals | Web Design & Mobile Development</title>
        <meta name="description" content="Explore HiTech Globals services: UI/UX design, web development, mobile apps, e-commerce solutions, web design, and brand identity. We use React, Next.js, Flutter, and more." />
        <meta name="keywords" content="web design services, web development, mobile app development, e-commerce solutions, UI/UX design, brand identity, React development, Flutter development, custom web development" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Services - HiTech Globals | Design & Development" />
        <meta property="og:description" content="Professional web design, mobile development, e-commerce, and UI/UX design services for businesses worldwide" />
        <meta property="og:url" content="https://hitechglobals.com/services" />
        <meta property="og:site_name" content="HiTech Globals" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HiTech Globals - Web Design & Development Services" />
        <meta name="twitter:description" content="UI/UX design, web development, mobile apps, e-commerce, and brand identity services" />

        {/* Canonical */}
        <link rel="canonical" href="https://hitechglobals.com/services" />

        {/* Structured Data (JSON-LD) - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "HiTech Globals",
            "url": "https://hitechglobals.com/services",
            "description": "Full-spectrum design and development services including web design, web development, mobile apps, e-commerce, UI/UX design, and brand identity",
            "areaServed": "Global",
            "hasOfferingDescription": services.map((service) => ({
              "@type": "OfferingDescription",
              "name": service.title,
              "description": service.description
            })),
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "url": "https://hitechglobals.com/contact"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "50"
            }
          })}
        </script>

        {/* BreadcrumbList Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://hitechglobals.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://hitechglobals.com/services"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-background pt-20 overflow-hidden">
        {/* Hero Section with CTA */}
        <section className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-20 relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

            {/* Floating shapes */}
            <motion.div
              className="absolute top-32 right-[20%] w-4 h-4 sm:w-6 sm:h-6 bg-[#0063cd]/30 rounded-full"
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-1/3 left-[15%] w-3 h-3 sm:w-4 sm:h-4 bg-purple-500/40 rotate-45"
              animate={{ y: [0, 15, 0], rotate: [45, 90, 45] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="max-w-5xl mx-auto text-center w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-gradient-to-r from-[#0063cd]/10 to-purple-500/10 rounded-full mb-6 sm:mb-8 border border-[#0063cd]/20 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 text-[#0063cd]" />
                <span className="text-[#0063cd] font-medium">Complete Solutions</span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-tight mb-8 font-bold">
                Services that <span className="relative">
                  <span className="text-[#0063cd]">drive growth</span>
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
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              Comprehensive design and development services to bring your vision to life with modern technologies and expert craftsmanship
            </motion.p>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  className="p-4 bg-card rounded-xl border border-border shadow-sm hover:shadow-lg hover:border-[#0063cd]/30 transition-all group"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <benefit.icon className="w-6 h-6 text-[#0063cd] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="font-bold text-lg text-[#0063cd]">{benefit.stat}</div>
                  <div className="text-xs text-muted-foreground">{benefit.title}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Hero CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-[#0063cd] to-[#0052a8] text-white rounded-full hover:shadow-xl hover:shadow-[#0063cd]/25 transition-all inline-flex items-center gap-2 group font-medium w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  className="px-8 py-4 bg-white border-2 border-[#0063cd] text-[#0063cd] rounded-full hover:bg-[#0063cd]/5 transition-all inline-flex items-center gap-2 group font-medium w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Work
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Grid with Pricing */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30 relative" aria-label="Our Services">
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#0063cd]/5 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                What We Offer
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">Our Services</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                End-to-end solutions designed to solve your business challenges
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -8 }}
                  className="relative p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-2xl transition-all group h-full flex flex-col overflow-hidden"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 flex flex-col h-full">
                    <motion.div
                      className="w-14 h-14 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0063cd] transition-all duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      <service.icon className="w-7 h-7 text-[#0063cd] group-hover:text-white transition-colors" aria-hidden="true" />
                    </motion.div>
                    <h3 className="text-2xl mb-2 font-bold">{service.title}</h3>
                    {service.price && (
                      <div className="text-sm font-semibold text-[#0063cd] mb-3">{service.price}</div>
                    )}
                    <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">{service.description}</p>
                    <ul className="space-y-2 mb-6" role="list">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-[#0063cd] flex-shrink-0" aria-hidden="true" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="w-full mt-auto">
                      <motion.button
                        className="w-full px-4 py-3 bg-[#0063cd] text-white rounded-xl hover:bg-[#0052a8] transition-all text-sm font-medium group/btn flex items-center justify-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(#0063cd 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                Why Us
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">Why choose us</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Partnership with results, not just delivery
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  title: 'Transparent Communication',
                  description: 'Regular updates and open communication throughout your project. We keep you informed every step of the way.',
                  icon: Users,
                },
                {
                  title: 'Custom Solutions',
                  description: 'No cookie-cutter templates. Every solution is tailored to your specific needs and business goals.',
                  icon: Code,
                },
                {
                  title: 'Post-Launch Support',
                  description: 'Our support doesn\'t end at launch. We provide ongoing maintenance and optimization for continued success.',
                  icon: TrendingUp,
                },
                {
                  title: 'Agile Methodology',
                  description: 'Flexible approach that adapts to your changing requirements and market demands.',
                  icon: Zap,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-xl transition-all group"
                >
                  <motion.div
                    className="w-12 h-12 bg-[#0063cd]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#0063cd] transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <item.icon className="w-6 h-6 text-[#0063cd] group-hover:text-white transition-colors" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30" aria-label="Technologies and Tools">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                Tech Stack
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">Modern Tech Stack</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Latest technologies for building exceptional products that scale and perform
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
              role="list"
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="px-6 py-3 bg-card border border-border rounded-full hover:border-[#0063cd] hover:bg-[#0063cd]/5 hover:shadow-lg transition-all font-medium cursor-default"
                  role="listitem"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process with Timeline */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative" aria-label="Our Development Process">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 lg:mb-20"
            >
              <motion.span
                className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                How It Works
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">Our Process</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven 6-step methodology that delivers results and ensures project success
              </p>
            </motion.div>

            <div className="relative">
              {/* Connection Line - Desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0063cd]/30 to-transparent -translate-y-1/2 z-0" />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
                {process.map((step, index) => (
                  <motion.article
                    key={step.number}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="relative p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-xl transition-all"
                  >
                    {/* Step Number Badge */}
                    <motion.div
                      className="absolute -top-4 left-6 sm:left-8 bg-gradient-to-r from-[#0063cd] to-[#0052a8] text-white text-lg sm:text-xl font-bold px-4 py-2 rounded-lg shadow-lg"
                      whileHover={{ scale: 1.1 }}
                    >
                      {step.number}
                    </motion.div>

                    <div className="mt-4">
                      <div className="text-3xl sm:text-4xl mb-4">{step.icon}</div>
                      <h3 className="text-xl sm:text-2xl mb-3 font-bold">{step.title}</h3>
                      {step.duration && (
                        <div className="text-sm text-[#0063cd] font-semibold mb-3 flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </div>
                      )}
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-6 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-[#0063cd] to-[#0052a8]"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(index + 1) * 16.67}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">Phase {index + 1}/6</span>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.span
                className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                FAQ
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">Common Questions</h2>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  q: 'How long does a typical project take?',
                  a: 'Project timelines vary based on scope and complexity. Most projects take 4-16 weeks. We provide detailed timelines during the planning phase.',
                },
                {
                  q: 'Do you offer post-launch support?',
                  a: 'Yes! We provide ongoing support, maintenance, and optimization packages tailored to your needs.',
                },
                {
                  q: 'Can I update my project after launch?',
                  a: 'Absolutely. We build scalable solutions and offer flexible maintenance packages for updates and enhancements.',
                },
                {
                  q: 'What if my requirements change during development?',
                  a: 'Our agile approach is designed to adapt to changes. We discuss any modifications and provide updated timelines and costs.',
                },
              ].map((item, index) => (
                <motion.details
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group p-6 bg-card rounded-2xl border border-border cursor-pointer hover:border-[#0063cd]/50 hover:shadow-lg transition-all"
                >
                  <summary className="flex items-center justify-between font-bold text-lg list-none">
                    {item.q}
                    <ArrowRight className="w-5 h-5 text-[#0063cd] group-open:rotate-90 transition-transform" />
                  </summary>
                  <p className="text-muted-foreground mt-4 leading-relaxed">{item.a}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
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
                <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Let's discuss your project and explore how our services can help you achieve your business goals with cutting-edge solutions
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <motion.button
                      className="px-8 py-4 bg-white text-[#0063cd] rounded-full hover:bg-white/95 transition-all inline-flex items-center gap-2 group font-bold shadow-xl hover:shadow-2xl w-full sm:w-auto justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                  <a href="mailto:hello@hitechglobals.com">
                    <motion.button
                      className="px-8 py-4 bg-white/10 border-2 border-white text-white rounded-full hover:bg-white/20 transition-all inline-flex items-center gap-2 group font-bold w-full sm:w-auto justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Email Us
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </a>
                </div>
                <p className="text-sm opacity-75 mt-6">
                  💬 Average response time: Under 2 hours | 📱 Free discovery call included
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
