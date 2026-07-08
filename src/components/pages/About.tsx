import { SEO } from '../SEO';
import { motion } from 'framer-motion';
import { Star, Shield, Award, Sparkles, Target, Zap, Rocket, Eye, TrendingUp, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  const values = [
    { title: 'Innovation', desc: 'Pushing creative boundaries to deliver next-generation marketing and design standards.' },
    { title: 'Creativity', desc: 'Crafting unforgettable stories and custom visual assets that resonate deeply with audiences.' },
    { title: 'Transparency', desc: 'Honest communication, transparent workflows, and zero hidden costs at every phase.' },
    { title: 'Commitment', desc: 'Dedicated partnership, working alongside you to scale your business and audience.' },
    { title: 'Excellence', desc: 'Premium luxury aesthetics and meticulous attention to detail in every deliverable.' },
    { title: 'Growth', desc: 'Data-driven, performance-oriented execution built to generate real, measurable business results.' },
  ];

  return (
    <>
      <SEO 
        title="Who We Are | About Irtiqa Marketing"
        description="Irtiqa Marketing is a modern creative marketing agency combining design, technology, and data-driven strategies to deliver impactful branding."
        canonical="/about"
        keywords="about irtiqa marketing, marketing agency india, branding, values, mission, vision, creative director"
      />

      <div className="bg-background pt-24 pb-16 overflow-hidden text-foreground">
        
        {/* About Hero Section */}
        <section className="py-20 px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <span className="text-[#C9A14A] text-xs uppercase tracking-[0.3em] font-semibold block mb-4">
                About Us
              </span>
              <h1 className="text-4xl sm:text-6xl font-heading mb-8 leading-tight">
                Who We Are
              </h1>
              <div className="luxury-divider" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 leading-relaxed font-body"
            >
              Irtiqa Marketing is a modern creative marketing agency dedicated to helping businesses establish a powerful identity, attract the right audience, and achieve sustainable growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg text-muted-foreground/80 max-w-3xl mx-auto mb-10 leading-relaxed font-body"
            >
              We combine creativity, technology, and data-driven strategies to deliver impactful marketing solutions that drive real business results.
            </motion.p>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-16 px-4 sm:px-6 bg-secondary/10 border-y border-border/50">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-card rounded-2xl border border-border/60 hover:border-[#C9A14A]/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#C9A14A]/10 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-6 h-6 text-[#C9A14A]" />
                  </div>
                  <h2 className="text-2xl font-heading mb-4 tracking-wide text-foreground">Our Mission</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                    To empower businesses with innovative branding and marketing strategies that create long-term value.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 bg-card rounded-2xl border border-border/60 hover:border-[#C9A14A]/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-[#C9A14A]/10 rounded-xl flex items-center justify-center mb-6">
                    <Eye className="w-6 h-6 text-[#C9A14A]" />
                  </div>
                  <h2 className="text-2xl font-heading mb-4 tracking-wide text-foreground">Our Vision</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                    To become one of India’s most trusted creative and digital marketing agencies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 sm:py-28 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-[#C9A14A] text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
                Foundations
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading tracking-wide">Our Values</h2>
              <div className="luxury-divider" />
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="p-8 bg-card rounded-2xl border border-border hover:border-[#C9A14A]/30 transition-all hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold text-[#C9A14A] px-2.5 py-1 bg-[#C9A14A]/10 rounded-md">
                      0{idx + 1}
                    </span>
                    <h3 className="text-xl font-heading tracking-wide text-foreground">{value.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-body">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Meet Founder */}
        <section className="py-12 text-center bg-[#0B0B0B] text-white">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-xl sm:text-2xl font-heading mb-4 text-[#C9A14A] tracking-wider">Meet the Visionary Behind Irtiqa</h2>
            <Link to="/founder" className="text-sm font-semibold tracking-widest uppercase hover:text-[#C9A14A] transition-colors border-b border-[#C9A14A] pb-1">
              Meet Faqeha Fatima &rarr;
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
