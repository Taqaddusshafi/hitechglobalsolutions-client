import { SEO } from '../SEO';
import { motion } from 'framer-motion';
import { Sparkles, Palette, Camera, Video, Monitor, Search, BarChart3, Bot, Layout } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const serviceCategories = [
    {
      icon: Sparkles,
      title: 'Branding',
      items: ['Logo Design', 'Brand Identity', 'Packaging', 'Brand Guidelines', 'Corporate Identity'],
      description: 'Crafting premium, luxury visual frameworks that establish immediate market authority and trust.',
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      items: ['Social Media Creatives', 'Brochures', 'Catalogues', 'Flyers', 'Business Profiles', 'Print Design'],
      description: 'Stunning marketing collateral designed to communicate your brand story with sophistication and elegance.',
    },
    {
      icon: Layout,
      title: 'Social Media Marketing',
      items: ['Instagram Management', 'Facebook Marketing', 'LinkedIn Marketing', 'Content Planning', 'Strategy', 'Growth'],
      description: 'End-to-end community building, organic engagement, and profile management to capture organic reach.',
    },
    {
      icon: Video,
      title: 'Video Production',
      items: ['Reels', 'Commercial Ads', 'Corporate Films', 'Motion Graphics', 'Video Editing'],
      description: 'High-impact cinematic videos and bite-sized content engineered to command attention on social feeds.',
    },
    {
      icon: Camera,
      title: 'Photography',
      items: ['Product', 'Fashion', 'Corporate', 'Food', 'Lifestyle', 'Events'],
      description: 'Ultra-premium product and brand photography capturing every fine details under professional direction.',
    },
    {
      icon: Monitor,
      title: 'Website Development',
      items: ['Business Websites', 'Landing Pages', 'E-commerce', 'Portfolio Websites', 'Custom Development'],
      description: 'Sophisticated web experiences crafted using modern web engines, offering speed and aesthetics.',
    },
    {
      icon: Search,
      title: 'SEO',
      items: ['On-Page SEO', 'Technical SEO', 'Local SEO', 'Content Optimization'],
      description: 'Optimizing digital assets to secure top rankings on search engines for relevant keywords.',
    },
    {
      icon: BarChart3,
      title: 'Performance Marketing',
      items: ['Google Ads', 'Meta Ads', 'Lead Generation', 'Remarketing'],
      description: 'High-ROI campaigns designed to deliver sales pipelines, lead capturing, and clear ROI tracking.',
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      items: ['AI Automation', 'AI Content Creation', 'AI Chatbots', 'AI Marketing Workflow'],
      description: 'Integrating modern intelligence frameworks, custom agents, and automated content setups into marketing.',
    },
  ];

  return (
    <>
      <SEO 
        title="Our Creative Services | Irtiqa Marketing"
        description="Explore Irtiqa Marketing's creative offerings, from branding, graphic design, social media marketing to AI solutions, SEO, and video production."
        canonical="/services"
        keywords="branding, graphic design, social media, video production, photography, web development, SEO, performance marketing, AI solutions"
      />

      <div className="bg-background pt-24 pb-16 overflow-hidden text-foreground">
        
        {/* Services Header */}
        <section className="py-20 px-4 sm:px-6 text-center relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="text-[#C9A14A] text-xs uppercase tracking-[0.3em] font-semibold block mb-4">
                Our Services
              </span>
              <h1 className="text-4xl sm:text-6xl font-heading mb-6 tracking-wide leading-tight">
                What We Do
              </h1>
              <div className="luxury-divider" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
                From strategy to execution, we help businesses build unforgettable brands and measurable growth.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className="p-8 bg-card rounded-2xl border border-border hover:border-[#C9A14A]/40 transition-all hover:shadow-lg flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-[#C9A14A]/10 rounded-xl flex items-center justify-center text-[#C9A14A]">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl font-heading tracking-wide text-foreground">{service.title}</h2>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed font-body mb-6">
                        {service.description}
                      </p>
                      <ul className="space-y-2 border-t border-border/50 pt-4 mb-6">
                        {service.items.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm font-semibold tracking-wide text-foreground/80 font-body">
                            <span className="w-1.5 h-1.5 bg-[#C9A14A] rounded-full" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center bg-[#0B0B0B] text-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-heading mb-6 tracking-wide">
              Ready to take your business to the next level?
            </h2>
            <Link to="/contact">
              <button className="px-8 py-4 bg-[#C9A14A] text-[#0B0B0B] font-semibold text-sm tracking-widest uppercase rounded-full hover:bg-[#b8913f] hover:text-white transition-all">
                Book Free Consultation
              </button>
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
