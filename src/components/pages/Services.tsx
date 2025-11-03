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
} from 'lucide-react';

export function Services() {
  const services = [
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
      ],
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
      ],
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
      ],
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
      ],
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
      ],
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
      ],
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

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, target audience, and project requirements to create a solid foundation.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We develop a detailed project roadmap with clear milestones, timelines, deliverables, and success metrics.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Our designers create beautiful, user-friendly interfaces that align with your brand and engage users.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'We build your product using modern technologies and industry best practices for quality and performance.',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Thorough quality assurance and testing to ensure everything works perfectly across all devices and browsers.',
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support to ensure continued success and growth.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services - HiTech Globals | Web Design & Mobile Development</title>
        <meta name="description" content="Explore HiTech Globals services: UI/UX design, web development, mobile apps, e-commerce solutions, web design, and brand identity. We use React, Next.js, Flutter, and more." />
        <meta name="keywords" content="web design services, web development, mobile app development, e-commerce solutions, UI/UX design, brand identity, React development, Flutter development" />
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
            "priceRange": "Varies by project"
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

      <div className="bg-white pt-20">
        {/* Hero Section */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#0063cd]/10 rounded-full mb-8">
                <span className="text-[#0063cd] font-medium">What We Offer</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8">
                Our <span className="text-[#0063cd]">services</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              Comprehensive design and development services to bring your vision to life with modern technologies and expert craftsmanship
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-32 px-4 sm:px-6 bg-secondary/30" aria-label="Our Services">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="p-8 bg-white rounded-2xl border border-border hover:border-[#0063cd] hover:shadow-lg transition-all group"
                >
                  <div className="w-14 h-14 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0063cd]/20 transition-colors">
                    <service.icon className="w-7 h-7 text-[#0063cd]" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl mb-4 font-bold">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2" role="list">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0063cd] flex-shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-32 px-4 sm:px-6" aria-label="Technologies and Tools">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl mb-6 font-bold">Technologies we use</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Modern tech stack for building exceptional products that scale and perform
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
                  className="px-6 py-3 bg-secondary/50 rounded-full border border-border hover:border-[#0063cd] hover:bg-[#0063cd]/5 transition-all font-medium"
                  role="listitem"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process */}
        <section className="py-32 px-4 sm:px-6 bg-secondary/30" aria-label="Our Development Process">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl mb-6 font-bold">Our process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven methodology that delivers results and ensures project success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.article
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-white rounded-2xl border border-border hover:border-[#0063cd] transition-colors"
                >
                  <div className="text-5xl text-[#0063cd] mb-4 font-bold" aria-label={`Step ${step.number}`}>{step.number}</div>
                  <h3 className="text-2xl mb-4 font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0063cd] text-white rounded-3xl p-12 md:p-16 text-center"
            >
              <h2 className="text-4xl md:text-6xl mb-6 font-bold">
                Ready to get started?
              </h2>
              <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project requirements and explore how we can help you achieve your business goals with our comprehensive services
              </p>
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-[#0063cd] rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 group font-medium">
                  Start Your Project
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
