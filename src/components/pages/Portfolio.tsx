import { SEO } from '../SEO';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  description: string;
  tags: string[];
  client: string;
  results: string;
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filters = [
    'All',
    'Logo Designs',
    'Brand Identity',
    'Packaging',
    'Instagram Feeds',
    'Reels',
    'Website Designs',
    'Photography',
    'Product Shoots',
    'Video Production',
    'Advertising Campaigns'
  ];

  const projects: Project[] = [
    {
      title: 'Monarch Cosmetics Packaging',
      category: 'Packaging',
      description: 'Luxury outer carton and container design utilizing gold foil prints and structured textures.',
      tags: ['Luxury Packaging', 'Foil Stamping', 'Graphic Design'],
      client: 'Monarch Brands',
      results: '120% increase in shelf-space retail inquiries'
    },
    {
      title: 'Aura Aesthetics Brand Identity',
      category: 'Brand Identity',
      description: 'Sophisticated minimalist visual brand framework, style guidelines, and logo design.',
      tags: ['Branding', 'Typography', 'Logo Design'],
      client: 'Aura Skin Clinic',
      results: 'Established clear market position & premium pricing'
    },
    {
      title: 'Apex Healthcare Website Design',
      category: 'Website Designs',
      description: 'Custom React site with high speed, clean accessibility layout, and interactive scheduler.',
      tags: ['React', 'Next.js', 'Responsive UI'],
      client: 'Apex Health Group',
      results: '40% boost in online consultation bookings'
    },
    {
      title: 'Luxura Hotels Reel Series',
      category: 'Reels',
      description: 'A cinematic sequence of Instagram Reels detailing room services and location aesthetics.',
      tags: ['Cinematography', 'Social Media', 'Reels'],
      client: 'Luxura Luxury Hotels',
      results: '3.4 Million combined organic views'
    },
    {
      title: 'Gourmet Kitchen Food Shoot',
      category: 'Product Shoots',
      description: 'High-contrast studio food and lifestyle photography showcasing premium menus.',
      tags: ['Food Photography', 'Studio Lighting', 'Art Direction'],
      client: 'Gourmet Bistro Group',
      results: 'Featured in elite local culinary guides'
    },
    {
      title: 'Vanguard Realty Advertising Campaign',
      category: 'Advertising Campaigns',
      description: 'Targeted Lead generation and brand awareness campaigns on Meta and Google Ads.',
      tags: ['Meta Ads', 'Google PPC', 'Copywriting'],
      client: 'Vanguard Properties',
      results: '240 Qualified luxury property leads'
    },
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      <SEO 
        title="Creative Showcase | Irtiqa Marketing Portfolio"
        description="Explore the creative portfolio of Irtiqa Marketing, showcasing logo designs, packaging, website designs, photography, reels, and ad campaigns."
        canonical="/portfolio"
        keywords="portfolio, logo designs, packaging, website designs, photography, product shoots, video production, ad campaigns"
      />

      <div className="bg-background pt-24 pb-16 overflow-hidden text-foreground">
        
        {/* Portfolio Header */}
        <section className="py-20 px-4 sm:px-6 text-center relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="text-[#C9A14A] text-xs uppercase tracking-[0.3em] font-semibold block mb-4">
                Creative Showcase
              </span>
              <h1 className="text-4xl sm:text-6xl font-heading mb-6 tracking-wide leading-tight">
                Our Portfolio
              </h1>
              <div className="luxury-divider" />
            </motion.div>
          </div>
        </section>

        {/* Filter Navigation */}
        <section className="py-8 px-4 overflow-x-auto border-y border-border/40 scrollbar-none">
          <div className="max-w-7xl mx-auto flex flex-wrap md:justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-[#C9A14A] text-white'
                    : 'bg-card border border-border text-muted-foreground hover:border-[#C9A14A] hover:text-foreground'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {filter}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    key={project.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="p-8 bg-card rounded-2xl border border-border hover:border-[#C9A14A]/40 transition-all hover:shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-xs font-semibold text-[#C9A14A] uppercase tracking-widest block mb-3 font-body">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-heading tracking-wide text-foreground mb-4">{project.title}</h3>
                      <p className="text-sm text-muted-foreground font-body leading-relaxed mb-6">
                        {project.description}
                      </p>
                      
                      <div className="border-t border-border/50 pt-4 space-y-2 mb-6">
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-muted-foreground font-body">Client</span>
                          <span className="text-foreground font-semibold font-body">{project.client}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-muted-foreground font-body">Result</span>
                          <span className="text-[#C9A14A] font-semibold font-body">{project.results}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground bg-secondary/50 px-2.5 py-1 rounded-md font-body">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
