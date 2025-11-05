import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Zap, FileText, Star, Users, TrendingUp, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filters = ['All', 'Web', 'Mobile', 'Design', 'E-commerce'];

  const projects = [
    {
      title: 'Modern SaaS Platform',
      category: 'Web',
      description: 'Clean dashboard for project management with real-time collaboration features',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      color: '0063cd',
      results: '45% increase in user engagement',
      client: 'Tech Startup',
      link: '#',
      featured: true,
    },
    {
      title: 'E-commerce Store',
      category: 'E-commerce',
      description: 'Custom Shopify store with unique features and optimized checkout flow',
      tags: ['Shopify', 'Liquid', 'JavaScript'],
      color: '1a1a1a',
      results: '3x ROI in first 6 months',
      client: 'Fashion Brand',
      link: '#',
      featured: true,
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile',
      description: 'Cross-platform fitness and wellness app with health tracking integration',
      tags: ['React Native', 'Firebase', 'Redux'],
      color: '0063cd',
      results: '50K+ active users',
      client: 'Health Tech',
      link: '#',
      featured: false,
    },
    {
      title: 'Brand Identity',
      category: 'Design',
      description: 'Complete visual identity for tech startup including logo and guidelines',
      tags: ['Figma', 'Illustrator', 'Branding'],
      color: '444444',
      results: 'Brand recognition +60%',
      client: 'Startup Inc',
      link: '#',
      featured: false,
    },
    {
      title: 'Portfolio Website',
      category: 'Web',
      description: 'Personal portfolio for creative professional with animation and interactivity',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      color: '0063cd',
      results: '200% traffic increase',
      client: 'Creative Professional',
      link: '#',
      featured: false,
    },
    {
      title: 'Restaurant App',
      category: 'Mobile',
      description: 'Food ordering and delivery application with real-time tracking',
      tags: ['Flutter', 'Firebase', 'Google Maps'],
      color: '1a1a1a',
      results: '10K daily orders',
      client: 'Restaurant Chain',
      link: '#',
      featured: true,
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: TrendingUp, label: 'Projects Delivered', value: '120+' },
    { icon: Star, label: 'Avg Rating', value: '4.9/5' },
  ];

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
        {/* Hero Section with Stats */}
        <section className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-20">
          <div className="max-w-5xl mx-auto text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-[#0063cd]/10 rounded-full mb-8">
                <span className="text-[#0063cd] font-medium">Proven Track Record</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-8xl tracking-tight mb-8">
                Our <span className="text-[#0063cd]">portfolio</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
            >
              Recent projects showcasing our expertise in web design, mobile development, and e-commerce solutions built with modern technologies
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 max-w-2xl mx-auto"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 bg-secondary/30 rounded-2xl">
                  <stat.icon className="w-6 h-6 text-[#0063cd] mx-auto mb-2" />
                  <div className="text-2xl sm:text-3xl font-bold">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA - Above the fold */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contact">
                <button className="px-8 py-4 bg-[#0063cd] text-white rounded-full hover:bg-[#0063cd]/90 transition-colors inline-flex items-center gap-2 group font-medium shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-white border-2 border-[#0063cd] text-[#0063cd] rounded-full hover:bg-[#0063cd]/5 transition-colors inline-flex items-center gap-2 group font-medium w-full sm:w-auto justify-center">
                  Schedule Consultation
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </motion.div>
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

        {/* Featured Projects Banner */}
        {activeFilter === 'All' && (
          <section className="px-4 sm:px-6 pb-8">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-r from-[#0063cd]/10 to-[#0063cd]/5 border border-[#0063cd]/20 rounded-2xl p-6 text-center"
              >
                <Star className="w-5 h-5 text-[#0063cd] inline-block mb-2" />
                <p className="text-muted-foreground">
                  Scroll to see our <span className="font-bold text-foreground">featured success stories</span> with proven results
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* Projects Grid - Enhanced */}
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
                  <ProjectCard 
                    key={project.title} 
                    project={project} 
                    index={index}
                    onHover={() => setSelectedProject(project.title)}
                  />
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
                  className="p-6 bg-white rounded-2xl border border-border hover:border-[#0063cd] transition-all hover:shadow-lg"
                >
                  <div className="w-10 h-10 bg-[#0063cd] rounded-lg mb-4 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl mb-2 font-bold">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-32 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-7xl mb-6">Why clients choose us</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Expert Team',
                  description: 'Full-stack developers with 10+ years of combined experience in web and mobile development',
                },
                {
                  title: 'Proven Results',
                  description: 'Our projects have generated $5M+ in revenue for our clients with average ROI of 3.5x',
                },
                {
                  title: '24/7 Support',
                  description: 'Dedicated support team available round the clock to ensure your project runs smoothly',
                },
                {
                  title: 'Agile Methodology',
                  description: 'We use agile practices to deliver updates regularly and adapt to your changing needs',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-white rounded-2xl border border-border"
                >
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA - Primary conversion point */}
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
                Ready to build something<br />
                amazing together?
              </h2>
              <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom solution that drives real business results. Our team is ready to bring your vision to life.
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

// Enhanced Project Card Component
function ProjectCard({ project, index, onHover }: { project: any; index: number; onHover: () => void }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer h-full"
      onMouseEnter={onHover}
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-secondary shadow-lg hover:shadow-2xl transition-all">
        <div 
          className="w-full h-full flex items-center justify-center text-white p-8 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundColor: `#${project.color}` }}
          role="img"
          aria-label={`${project.title} project preview`}
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h3>
            <p className="opacity-80 text-sm sm:text-base mb-4">{project.category}</p>
            {project.featured && (
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold">
                ⭐ Featured
              </div>
            )}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0063cd]">{project.category}</span>
          {project.featured && <Star className="w-4 h-4 text-[#0063cd]" />}
        </div>
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
        
        {/* Results Badge */}
        {project.results && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-3 bg-[#0063cd]/10 border border-[#0063cd]/20 rounded-lg"
          >
            <p className="text-sm font-semibold text-[#0063cd]">✅ {project.results}</p>
          </motion.div>
        )}

        {/* Client Name */}
        {project.client && (
          <p className="text-xs text-muted-foreground italic">Client: {project.client}</p>
        )}

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

        {/* CTA at project level */}
        <Link to="/contact" className="w-full mt-4">
          <button className="w-full px-4 py-2 bg-[#0063cd] text-white rounded-lg hover:bg-[#0063cd]/90 transition-all text-sm font-medium group/btn flex items-center justify-center gap-2">
            Discuss Similar Project
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </Link>
      </div>
    </motion.article>
  );
}
