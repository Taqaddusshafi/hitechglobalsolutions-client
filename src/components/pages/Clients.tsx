import { SEO } from '../SEO';
import { motion } from 'framer-motion';

export function Clients() {
  const clientLogos = [
    { name: 'Aura Aesthetics', industry: 'Healthcare & Wellness' },
    { name: 'Luminary Fashion', industry: 'E-commerce & Retail' },
    { name: 'Apex Healthcare', industry: 'Corporate Healthcare' },
    { name: 'Elysian Hotels', industry: 'Travel & Hospitality' },
    { name: 'Vanguard Realty', industry: 'Real Estate' },
    { name: 'Nexa Startups', industry: 'Technology Startups' },
    { name: 'Gourmet Kitchen', industry: 'Restaurants & Dining' },
    { name: 'Modern Builders', industry: 'Construction' },
    { name: 'TechCorp Labs', industry: 'Manufacturing & Tech' },
    { name: 'Hope NGO', industry: 'Social Impact' },
    { name: 'Urban Salon', industry: 'Beauty & Lifestyle' },
    { name: 'Stellar Events', industry: 'Entertainment & Events' }
  ];

  return (
    <>
      <SEO 
        title="Our Clients | Trust & Partnerships"
        description="We are trusted by 100+ growing brands and enterprises across multiple industries in India. Partner with Irtiqa Marketing."
        canonical="/clients"
        keywords="clients, trusted brands, client logos, branding partners India"
      />

      <div className="bg-background pt-24 pb-16 overflow-hidden text-foreground">
        
        {/* Header */}
        <section className="py-20 px-4 sm:px-6 text-center relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="text-[#C9A14A] text-xs uppercase tracking-[0.3em] font-semibold block mb-4">
                Partnerships
              </span>
              <h1 className="text-4xl sm:text-6xl font-heading mb-6 tracking-wide leading-tight">
                Our Clients
              </h1>
              <div className="luxury-divider" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
                Trusted by Businesses Across India
              </p>
            </motion.div>
          </div>
        </section>

        {/* Clients Grid */}
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {clientLogos.map((client, idx) => (
                <motion.div
                  key={client.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-8 bg-card rounded-2xl border border-border hover:border-[#C9A14A]/40 transition-all hover:shadow-sm text-center flex flex-col justify-center items-center h-40"
                >
                  <span className="text-xl font-heading font-bold text-foreground mb-1">
                    {client.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-[#C9A14A] font-semibold font-body">
                    {client.industry}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
