import { SEO } from '../SEO';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export function Founder() {
  return (
    <>
      <SEO 
        title="Meet the Founder | Irtiqa Marketing"
        description="Learn more about Faqeha Fatima, Founder & Creative Director of Irtiqa Marketing, her vision, background and message."
        canonical="/founder"
        keywords="faqeha fatima, founder, creative director, irtiqa marketing founder, branding vision"
      />

      <div className="bg-background pt-24 pb-16 overflow-hidden text-foreground">
        
        {/* Founder Intro Section */}
        <section className="py-20 px-4 sm:px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Profile Image/Placeholder Card */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-5 relative group"
              >
                <div className="aspect-[4/5] bg-gradient-to-br from-[#1c1c1c] to-[#0B0B0B] rounded-3xl border border-[#C9A14A]/30 overflow-hidden flex flex-col justify-end p-8 relative">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-[#C9A14A]/10 rounded-full blur-2xl -z-10" />
                  
                  {/* Subtle profile design lines */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  
                  <div className="relative z-10 text-white">
                    <span className="text-[#C9A14A] text-xs font-semibold uppercase tracking-widest block mb-1">
                      Creative Director
                    </span>
                    <h2 className="text-3xl font-heading mb-1 text-white">Faqeha Fatima</h2>
                    <p className="text-white/60 text-xs font-body uppercase tracking-wider">Founder, Irtiqa Marketing</p>
                  </div>
                </div>
              </motion.div>

              {/* Story Column */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-7 space-y-6"
              >
                <span className="text-[#C9A14A] text-xs uppercase tracking-[0.3em] font-semibold block">
                  Meet Our Founder
                </span>
                <h1 className="text-4xl sm:text-5xl font-heading leading-tight">
                  Faqeha Fatima
                </h1>
                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground font-body">
                  Founder & Creative Director
                </p>
                <div className="luxury-divider" style={{ margin: '1rem 0' }} />
                
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-body">
                  With a strong background in creative design, branding, and digital marketing, Faqeha Fatima founded Irtiqa Marketing with one vision:
                </p>
                
                <blockquote className="border-l-4 border-[#C9A14A] pl-6 py-2 my-6">
                  <p className="text-lg sm:text-xl font-heading tracking-wide italic text-foreground">
                    "Every business deserves world-class branding and marketing regardless of its size."
                  </p>
                </blockquote>

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-body">
                  Today, Irtiqa Marketing partners with businesses across multiple industries to create memorable brands and measurable growth.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Founder Message Section */}
        <section className="py-20 px-4 sm:px-6 bg-[#0B0B0B] text-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(#C9A14A_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <Quote className="w-12 h-12 text-[#C9A14A] mx-auto mb-8 opacity-60" />
            <span className="text-[#C9A14A] text-xs uppercase tracking-[0.25em] font-semibold block mb-4">
              Founder’s Message
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading mb-8 leading-relaxed italic text-white/90">
              “We don’t believe in creating ordinary brands. We create experiences that inspire trust, build authority, and generate results.”
            </h2>
            <div className="luxury-divider" />
          </div>
        </section>

      </div>
    </>
  );
}
