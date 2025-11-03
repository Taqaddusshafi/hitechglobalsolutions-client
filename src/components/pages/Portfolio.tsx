import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Mobile', 'Design', 'E-commerce'];

  const projects = [
    {
      title: 'Modern SaaS Platform',
      category: 'Web',
      description: 'Clean dashboard for project management with real-time collaboration features',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      color: '0063cd',
    },
    {
      title: 'E-commerce Store',
      category: 'E-commerce',
      description: 'Custom Shopify store with unique features and optimized checkout flow',
      tags: ['Shopify', 'Liquid', 'JavaScript'],
      color: '1a1a1a',
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile',
      description: 'Cross-platform fitness and wellness app with health tracking integration',
      tags: ['React Native', 'Firebase', 'Redux'],
      color: '0063cd',
    },
    {
      title: 'Brand Identity',
      category: 'Design',
      description: 'Complete visual identity for tech startup including logo and guidelines',
      tags: ['Figma', 'Illustrator', 'Branding'],
      color: '444444',
    },
    {
      title: 'Portfolio Website',
      category: 'Web',
      description: 'Personal portfolio for creative professional with animation and interactivity',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      color: '0063cd',
    },
    {
      title: 'Restaurant App',
      category: 'Mobile',
      description: 'Food ordering and delivery application with real-time tracking',
      tags: ['Flutter', 'Firebase', 'Google Maps'],
      color: '1a1a1a',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Portfolio - HiTech Globals | Web & Mobile App Projects</title>
        <meta name="description" content="View HiTech Globals portfolio of web design, mobile app development, and e-commerce projects. See our expertise in React, Next.js, React Native, Flutter, and more." />
        <meta name="keywords" content="web design portfolio, mobile app projects, e-commerce development, React projects, Next.js portfolio, design portfolio, development work" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Portfolio - HiTech Globals | Web & Mobile Projects" />
        <meta property="og:description" content="Explore our portfolio of successful web design, mobile app, and e-commerce projects built with modern technologies" />
        <meta property="og:url" content="https://hitechglobals.com/portfolio" />
        <meta property="og:site_name" content="HiTech Globals" />
        
        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HiTech Globals - Web & Mobile Portfolio" />
        <meta name="twitter:description" content="View our work showcasing expertise in web design, development, and mobile app creation" />
        
        {/* Canonical */}
        <link rel="canonical" href="https://hitechglobals.com/portfolio" />
        
        {/* Structured Data (JSON-LD) - CreativeWork/Portfolio */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "url": "https://hitechglobals.com/portfolio",
            "name": "HiTech Globals Portfolio",
            "description": "Portfolio showcasing web design, mobile app development, and e-commerce projects",
            "publisher": {
              "@type": "Organization",
              "name": "HiTech Globals",
              "url": "https://hitechglobals.com"
            },
            "hasPart": projects.map((project) => ({
              "@type": "CreativeWork",
              "name": project.title,
              "description": project.description,
              "category": project.category,
              "keywords": project.tags.join(", ")
            }))
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
                <span className="text-[#0063cd]">Our Work</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8">
                Our <span className="text-[#0063cd]">portfolio</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
            >
              Recent projects showcasing our expertise in web design, mobile development, and e-commerce solutions built with modern technologies
            </motion.p>
          </div>
        </section>

        {/* Filter */}
        <section className="px-4 sm:px-6 pb-16" aria-label="Project Filter">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full transition-all font-medium ${
                    activeFilter === filter
                      ? 'bg-[#0063cd] text-white shadow-lg'
                      : 'bg-secondary/50 hover:bg-secondary text-foreground'
                  }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 pb-32" aria-label="Portfolio Projects">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-32 px-4 sm:px-6 bg-secondary/30" aria-label="What You Get">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl mb-6">What you get</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Every project includes quality standards and best practices to ensure long-term success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Code,
                  title: 'Clean Code',
                  description: 'Well-structured, maintainable code following industry best practices and standards',
                },
                {
                  icon: Smartphone,
                  title: 'Responsive Design',
                  description: 'Beautiful design that looks perfect on all devices and screen sizes',
                },
                {
                  icon: Zap,
                  title: 'Performance',
                  description: 'Fast loading times and smooth interactions optimized for user experience',
                },
                {
                  icon: FileText,
                  title: 'Documentation',
                  description: 'Clear documentation and guides for easy maintenance and future updates',
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-white rounded-2xl border border-border hover:border-[#0063cd] transition-colors"
                >
                  <div className="w-10 h-10 bg-[#0063cd] rounded-lg mb-4 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
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
              <h2 className="text-4xl md:text-6xl mb-6">
                Let's create your
                <br />
                next project
              </h2>
              <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Ready to build something amazing? Let's discuss your project and bring your vision to life
              </p>
              <Link to="/contact">
                <button className="px-8 py-4 bg-white text-[#0063cd] rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 group font-medium">
                  Get Started
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

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-secondary shadow-lg hover:shadow-xl transition-shadow">
        <div 
          className="w-full h-full flex items-center justify-center text-white p-8 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundColor: `#${project.color}` }}
          role="img"
          aria-label={`${project.title} project preview`}
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h3>
            <p className="opacity-80 text-sm sm:text-base">{project.category}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold text-[#0063cd]">{project.category}</span>
        </div>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-secondary rounded-full font-medium text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
