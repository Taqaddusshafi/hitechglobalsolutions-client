import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Zap, FileText, Star, Users, TrendingUp, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  title: string;
  category: 'Web' | 'Mobile' | 'Design' | 'E-commerce';
  description: string;
  tags: string[];
  color: string;
  results?: string;
  client?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters: string[] = ['All', 'Web', 'Mobile', 'Design', 'E-commerce'];

  const projects: Project[] = [
    {
      title: 'Modern SaaS Platform',
      category: 'Web',
      description: 'Clean dashboard for project management with real-time collaboration features',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      color: '0063cd',
      results: '45% increase in user engagement',
      client: 'Tech Startup',
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
      featured: true,
    },
  ];

  const stats: Stat[] = [
    { icon: Users, label: 'Happy Clients', value: '50+' },
    { icon: TrendingUp, label: 'Projects Delivered', value: '120+' },
    { icon: Star, label: 'Avg Rating', value: '4.9/5' },
  ];

  const filteredProjects: Project[] =
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

      <div className="bg-background pt-20 overflow-hidden">
        {/* Hero Section with Stats */}
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
                <Star className="w-4 h-4 text-[#0063cd]" />
                <span className="text-[#0063cd] font-medium">Proven Track Record</span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-tight mb-8 font-bold">
                Our <span className="relative">
                  <span className="text-[#0063cd]">portfolio</span>
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
              Recent projects showcasing our expertise in web design, mobile development, and e-commerce solutions built with modern technologies
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-4 sm:p-6 bg-card rounded-2xl border border-border shadow-sm hover:shadow-lg hover:border-[#0063cd]/30 transition-all group"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0063cd]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0063cd] transition-colors">
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0063cd] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#0063cd]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
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
              <Link to="/contact">
                <motion.button
                  className="px-8 py-4 bg-card border-2 border-[#0063cd] text-[#0063cd] rounded-full hover:bg-[#0063cd]/5 transition-all inline-flex items-center gap-2 group font-medium w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Consultation
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
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
              className="flex flex-wrap justify-center gap-3 sm:gap-4"
            >
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full transition-all font-medium ${activeFilter === filter
                    ? 'bg-gradient-to-r from-[#0063cd] to-[#0052a8] text-white shadow-lg shadow-[#0063cd]/25'
                    : 'bg-card border border-border hover:border-[#0063cd]/50 text-foreground hover:shadow-md'
                    }`}
                  aria-pressed={activeFilter === filter}
                >
                  {filter}
                </motion.button>
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
                className="bg-gradient-to-r from-[#0063cd]/10 via-purple-500/5 to-[#0063cd]/10 border border-[#0063cd]/20 rounded-2xl p-6 text-center"
              >
                <Sparkles className="w-5 h-5 text-[#0063cd] inline-block mb-2" />
                <p className="text-muted-foreground">
                  Scroll to see our <span className="font-bold text-foreground">featured success stories</span> with proven results
                </p>
              </motion.div>
            </div>
          </section>
        )}

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 pb-16 sm:pb-24 lg:pb-32" aria-label="Portfolio Projects">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard key={project.title} project={project} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* What We Deliver */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30 relative" aria-label="What You Get">
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
                Included With Every Project
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">What you get</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                Every project includes quality standards and best practices to ensure long-term success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Code,
                  title: 'Clean Code',
                  description: 'Well-structured, maintainable code following industry best practices and standards',
                  gradient: 'from-blue-500/20 to-cyan-500/20',
                },
                {
                  icon: Smartphone,
                  title: 'Responsive Design',
                  description: 'Beautiful design that looks perfect on all devices and screen sizes',
                  gradient: 'from-purple-500/20 to-pink-500/20',
                },
                {
                  icon: Zap,
                  title: 'Performance',
                  description: 'Fast loading times and smooth interactions optimized for user experience',
                  gradient: 'from-amber-500/20 to-orange-500/20',
                },
                {
                  icon: FileText,
                  title: 'Documentation',
                  description: 'Clear documentation and guides for easy maintenance and future updates',
                  gradient: 'from-green-500/20 to-emerald-500/20',
                },
              ].map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="relative p-6 bg-card rounded-2xl border border-border hover:border-[#0063cd]/50 transition-all hover:shadow-xl group overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <motion.div
                      className="w-12 h-12 bg-[#0063cd] rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </motion.div>
                    <h3 className="text-xl mb-2 font-bold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">Why clients choose us</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
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
                  whileHover={{ y: -5 }}
                  className="p-6 sm:p-8 bg-card rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-xl transition-all"
                >
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">{item.description}</p>
                </motion.div>
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
                  Ready to build something<br />amazing together?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Let's discuss your project requirements and create a custom solution that drives real business results. Our team is ready to bring your vision to life.
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

// Project Card Component
function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group cursor-pointer h-full"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-secondary shadow-lg hover:shadow-2xl transition-all">
        <motion.div
          className="w-full h-full flex items-center justify-center text-white p-8 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundColor: `#${project.color}` }}
          role="img"
          aria-label={`${project.title} project preview`}
        >
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">{project.title}</h3>
            <p className="opacity-80 text-sm sm:text-base mb-4">{project.category}</p>
            {project.featured && (
              <motion.div
                className="inline-flex items-center gap-1 px-3 py-1 bg-white/20 rounded-full text-xs font-semibold backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
              >
                <Star className="w-3 h-3" /> Featured
              </motion.div>
            )}
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0063cd]">{project.category}</span>
          {project.featured && <Star className="w-4 h-4 text-[#0063cd]" />}
        </div>
        <h3 className="text-2xl font-bold group-hover:text-[#0063cd] transition-colors">{project.title}</h3>
        <p className="text-muted-foreground leading-relaxed">{project.description}</p>

        {/* Results Badge */}
        {project.results && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="p-3 bg-gradient-to-r from-[#0063cd]/10 to-purple-500/10 border border-[#0063cd]/20 rounded-xl"
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
              className="text-xs px-3 py-1.5 bg-secondary hover:bg-[#0063cd]/10 rounded-full font-medium text-foreground transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <Link to="/contact" className="w-full mt-4 block">
          <motion.button
            className="w-full px-4 py-3 bg-[#0063cd] text-white rounded-xl hover:bg-[#0052a8] transition-all text-sm font-medium group/btn flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Discuss Similar Project
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </Link>
      </div>
    </motion.article>
  );
}
