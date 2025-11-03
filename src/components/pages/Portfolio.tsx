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
      description: 'Clean dashboard for project management',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      color: '0063cd',
    },
    {
      title: 'E-commerce Store',
      category: 'E-commerce',
      description: 'Custom Shopify store with unique features',
      tags: ['Shopify', 'Liquid', 'JavaScript'],
      color: '1a1a1a',
    },
    {
      title: 'Fitness Tracking App',
      category: 'Mobile',
      description: 'Cross-platform fitness and wellness app',
      tags: ['React Native', 'Firebase', 'Redux'],
      color: '0063cd',
    },
    {
      title: 'Brand Identity',
      category: 'Design',
      description: 'Complete visual identity for tech startup',
      tags: ['Figma', 'Illustrator', 'Branding'],
      color: '444444',
    },
    {
      title: 'Portfolio Website',
      category: 'Web',
      description: 'Personal portfolio for creative professional',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      color: '0063cd',
    },
    {
      title: 'Restaurant App',
      category: 'Mobile',
      description: 'Food ordering and delivery application',
      tags: ['Flutter', 'Firebase', 'Google Maps'],
      color: '1a1a1a',
    },
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

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
              <span className="text-[#0063cd]">Portfolio</span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl tracking-tight mb-8">
              Our <span className="text-[#0063cd]">work</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
          >
            Recent projects showcasing our design and development expertise
          </motion.p>
        </div>
      </section>

      {/* Filter */}
      <section className="px-6 pb-16">
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
                className={`px-6 py-3 rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-[#0063cd] text-white'
                    : 'bg-secondary/50 hover:bg-secondary'
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-32">
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
      <section className="py-32 px-6 bg-secondary/30">
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
              Every project includes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: 'Clean Code',
                description: 'Well-structured, maintainable code following best practices',
              },
              {
                icon: Smartphone,
                title: 'Responsive Design',
                description: 'Looks perfect on all devices and screen sizes',
              },
              {
                icon: Zap,
                title: 'Performance',
                description: 'Fast loading times and smooth interactions',
              },
              {
                icon: FileText,
                title: 'Documentation',
                description: 'Clear documentation for easy maintenance',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 bg-white rounded-2xl"
              >
                <div className="w-10 h-10 bg-[#0063cd] rounded-lg mb-4 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
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
              Let's create your
              <br />
              next project
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Ready to bring your idea to life? Let's talk about your project
            </p>
            <Link to="/contact">
              <button className="px-8 py-4 bg-white text-[#0063cd] rounded-full hover:bg-white/90 transition-colors inline-flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Project Card Component
function ProjectCard({ project, index }: { project: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 bg-secondary">
        <div 
          className="w-full h-full flex items-center justify-center text-white p-8 transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundColor: `#${project.color}` }}
        >
          <div className="text-center">
            <h3 className="text-3xl mb-2">{project.title}</h3>
            <p className="opacity-80">{project.category}</p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#0063cd]">{project.category}</span>
        </div>
        <h3 className="text-2xl">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 bg-secondary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
