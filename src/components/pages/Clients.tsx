import { SEO } from '../SEO';
import { motion } from 'framer-motion';

export function Clients() {
  const clientLogos = [
    { name: 'Vidyam Care', industry: 'Healthcare' },
    { name: 'Patna Biryani', industry: 'Restaurants' },
    { name: 'World Dream Studio', industry: 'Fashion & Creative Studio' },
    { name: 'Mindmanthan Software Solutions', industry: 'Technology & Software' },
    { name: 'Beauty Clinics', industry: 'Beauty & Salon' },
    { name: 'Educational Institutes', industry: 'Education' },
    { name: 'Restaurants', industry: 'Food & Dining' },
    { name: 'Fashion Brands', industry: 'Fashion & Apparel' },
  ];

  const numbers = [
    { value: '100+', label: 'Brands Served' },
    { value: '500+', label: 'Projects Delivered' },
    { value: '25+', label: 'Industries Served' },
    { value: '95%', label: 'Client Satisfaction' },
  ];

  return (
    <>
      <SEO 
        title="Our Clients | Trusted By"
        description="We are trusted by 100+ brands across 25+ industries. Check out our clients and partners."
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
                Trusted By
              </span>
              <h1 className="text-4xl sm:text-6xl font-heading mb-6 tracking-wide leading-tight">
                Our Clients
              </h1>
              <div className="luxury-divider" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body leading-relaxed">
                Empowering brands across India with premium branding and data-driven marketing solutions.
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
                  key={client.name + idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="p-8 bg-card rounded-2xl border border-border hover:border-[#C9A14A]/40 transition-all hover:shadow-sm text-center flex flex-col justify-center items-center h-44 group overflow-hidden"
                >
                  <div className="w-10 h-10 bg-[#C9A14A]/10 rounded-full flex items-center justify-center text-[#C9A14A] font-bold text-sm mb-3">
                    {client.name.charAt(0)}
                  </div>
                  <span className="text-lg font-heading font-semibold text-foreground mb-1">
                    {client.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold font-body">
                    {client.industry}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Numbers Section */}
        <section className="py-20 px-4 sm:px-6 bg-[#0B0B0B] text-white border-t border-white/5 relative overflow-hidden mt-12">
          <div className="absolute inset-0 bg-[radial-gradient(#C9A14A_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <span className="text-[#C9A14A] text-xs uppercase tracking-[0.25em] font-semibold block mb-2">
                Proven Impact
              </span>
              <h2 className="text-3xl font-heading tracking-wide text-white">Our Numbers Speaks</h2>
              <div className="luxury-divider mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {numbers.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#C9A14A] mb-2 font-heading">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-white/60 uppercase tracking-wider font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
