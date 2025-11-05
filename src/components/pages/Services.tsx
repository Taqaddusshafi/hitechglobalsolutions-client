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
} from 'lucide-react';

interface Service {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  price?: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  duration?: string;
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
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We develop a detailed project roadmap with clear milestones, timelines, deliverables, and success metrics.',
      duration: '1-2 weeks',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Our designers create beautiful, user-friendly interfaces that align with your brand and engage users.',
      duration: '2-4 weeks',
    },
    {
      number: '04',
      title: 'Development',
      description: 'We build your product using modern technologies and industry best practices for quality and performance.',
      duration: '4-12 weeks',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Thorough quality assurance and testing to ensure everything works perfectly across all devices and browsers.',
      duration: '1-2 weeks',
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support to ensure continued success and growth.',
      duration: 'Ongoing',
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

      <div className="bg-white pt-20">
        {/* Hero Section with CTA */}
        <section className="min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-20 bg-gradient-to-br from-white to-[#f8f9fa]">
          <div className="max-w-5xl mx-auto text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#0063cd]/10 rounded-full mb-8">
                <span className="text-[#0063cd] font-medium">Complete Solutions</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-tight mb-8 font-bold">
                Services that <span className="text-[#0063cd]">drive growth</span>
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
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-4 bg-white rounded-xl border border-border">
                  <benefit.icon className="w-6 h-6 text-[#0063cd] mx-auto mb-2" />
                  <div className="font-bold text-lg text-[#0063cd]">{benefit.stat}</div>
                  <div className="text-xs text-muted-foreground">{benefit.title}</div>
                </div>
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
                <button className="px-8 py-4 bg-[#0063cd] text-white rounded-full hover:bg-[#0063cd]/90 transition-all inline-flex items-center gap-2 group font-medium shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="px-8 py-4 bg-white border-2 border-[#0063cd] text-[#0063cd] rounded-full hover:bg-[#0063cd]/5 transition-all inline-flex items-center gap-2 group font-medium w-full sm:w-auto justify-center">
                  View Our Work
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Grid with Pricing */}
        <section className="py-32 px-4 sm:px-6 bg-secondary/30" aria-label="Our Services">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl mb-6 font-bold">Our Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                End-to-end solutions designed to solve your business challenges
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="p-8 bg-white rounded-2xl border border-border hover:border-[#0063cd] hover:shadow-xl transition-all group h-full flex flex-col"
                >
                  <div className="w-14 h-14 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0063cd]/20 transition-colors">
                    <service.icon className="w-7 h-7 text-[#0063cd]" aria-hidden="true" />
                  </div>
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
                    <button className="w-full px-4 py-2 bg-[#0063cd] text-white rounded-lg hover:bg-[#0063cd]/90 transition-all text-sm font-medium group/btn flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl mb-6 font-bold">Why choose us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Partnership with results, not just delivery
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
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
                  className="p-8 bg-white rounded-2xl border border-border hover:shadow-lg transition-all"
                >
                  <item.icon className="w-10 h-10 text-[#0063cd] mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-32 px-4 sm:px-6 bg-secondary/30" aria-label="Technologies and Tools">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl mb-6 font-bold">Modern Tech Stack</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
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
                  className="px-6 py-3 bg-white border border-border rounded-full hover:border-[#0063cd] hover:bg-[#0063cd]/5 transition-all font-medium shadow-sm hover:shadow-md"
                  role="listitem"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Process with Timeline */}
        <section className="py-32 px-4 sm:px-6" aria-label="Our Development Process">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl md:text-7xl mb-6 font-bold">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven 6-step methodology that delivers results and ensures project success
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
                  className="p-8 bg-white rounded-2xl border border-border hover:border-[#0063cd] hover:shadow-lg transition-all relative"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0063cd] text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                  <h3 className="text-2xl mb-3 font-bold pt-4">{step.title}</h3>
                  {step.duration && (
                    <div className="text-sm text-[#0063cd] font-semibold mb-3 flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  )}
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl mb-6 font-bold">Common Questions</h2>
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
                  className="group p-6 bg-white rounded-2xl border border-border cursor-pointer hover:border-[#0063cd] transition-all"
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
        <section className="py-32 px-4 sm:px-6 bg-gradient-to-br from-[#0063cd] to-[#003fa3]">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white text-center"
            >
              <h2 className="text-4xl md:text-6xl mb-6 font-bold">
                Ready to get started?
              </h2>
              <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's discuss your project and explore how our services can help you achieve your business goals with cutting-edge solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <button className="px-8 py-4 bg-white text-[#0063cd] rounded-full hover:bg-white/90 transition-all inline-flex items-center gap-2 group font-bold shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="mailto:hello@hitechglobals.com">
                  <button className="px-8 py-4 bg-white/10 border-2 border-white text-white rounded-full hover:bg-white/20 transition-all inline-flex items-center gap-2 group font-bold w-full sm:w-auto justify-center">
                    Email Us
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </a>
              </div>
              <p className="text-sm opacity-75 mt-6">
                💬 Average response time: Under 2 hours | 📱 Free discovery call included
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
