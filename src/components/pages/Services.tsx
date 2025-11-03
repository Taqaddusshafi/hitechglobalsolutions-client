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
      description: 'Beautiful, intuitive interfaces that users love',
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
      description: 'Modern, fast, and scalable web applications',
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
      description: 'Native and cross-platform mobile solutions',
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
      description: 'Complete online store setup and customization',
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
      description: 'Stunning websites that convert visitors to customers',
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
      description: 'Create a memorable brand that stands out',
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
      description: 'We start by understanding your business, goals, and target audience to create a solid foundation.',
    },
    {
      number: '02',
      title: 'Planning',
      description: 'We develop a detailed project roadmap with clear milestones, timelines, and deliverables.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'Our designers create beautiful, user-friendly interfaces that align with your brand.',
    },
    {
      number: '04',
      title: 'Development',
      description: 'We build your product using modern technologies and best practices for quality and performance.',
    },
    {
      number: '05',
      title: 'Testing',
      description: 'Thorough quality assurance to ensure everything works perfectly across all devices.',
    },
    {
      number: '06',
      title: 'Launch & Support',
      description: 'We deploy your project and provide ongoing support to ensure continued success.',
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
              <span className="text-[#0063cd]">What We Offer</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8">
              Our <span className="text-[#0063cd]">services</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Comprehensive design and development services to bring your vision to life
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="p-8 bg-white rounded-2xl border border-border hover:border-[#0063cd] hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0063cd]/20 transition-colors">
                  <service.icon className="w-7 h-7 text-[#0063cd]" />
                </div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#0063cd] flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl mb-6">Technologies we use</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Modern tech stack for building exceptional products
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="px-6 py-3 bg-secondary/50 rounded-full border border-border hover:border-[#0063cd] hover:bg-[#0063cd]/5 transition-all"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl mb-6">Our process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-border"
              >
                <div className="text-5xl text-[#0063cd] mb-4">{step.number}</div>
                <h3 className="text-2xl mb-4">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0063cd] text-white rounded-3xl p-12 md:p-16 text-center"
          >
            <h2 className="text-4xl md:text-6xl mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can help you achieve your goals
            </p>
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-[#0063cd] rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 group">
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
