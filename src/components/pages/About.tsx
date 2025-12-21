import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Heart, Users, Award, Zap, Target, Rocket, UserCheck, Eye, Handshake, Headphones, Globe, ArrowRight, ExternalLink, TrendingUp, Clock, Star, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Value {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

interface Differentiator {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

export function About() {
  const values: Value[] = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We genuinely love what we do and pour our hearts into every project',
      gradient: 'from-pink-500/20 to-rose-500/20',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work alongside you as true partners in your success',
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We never compromise on quality, delivering excellence every time',
      gradient: 'from-amber-500/20 to-orange-500/20',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'Fast, flexible, and always adapting to your needs',
      gradient: 'from-purple-500/20 to-violet-500/20',
    },
  ];

  const differentiators: Differentiator[] = [
    {
      icon: UserCheck,
      title: 'Personal Attention',
      description: 'As a focused team, every project gets our full dedication and expertise. You\'re not just another client number to us.',
    },
    {
      icon: Rocket,
      title: 'Modern Approach',
      description: 'We use the latest technologies and best practices to ensure your product is built for the future and scales with your business.',
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      description: 'Clear communication, honest timelines, and no surprises. You\'ll always know exactly where your project stands.',
    },
    {
      icon: Handshake,
      title: 'Flexible Partnership',
      description: 'Whether you need a full team or specific expertise, we adapt to your needs, timeline, and budget requirements.',
    },
    {
      icon: Award,
      title: 'Quality Focus',
      description: 'We take pride in our work. Every line of code and every pixel is crafted with care, attention to detail, and expertise.',
    },
    {
      icon: Headphones,
      title: 'Long-term Support',
      description: 'Our relationship doesn\'t end at launch. We\'re here to support, maintain, and grow your product over time.',
    },
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered', icon: TrendingUp },
    { value: '4.9/5', label: 'Client Rating', icon: Star },
    { value: '3+', label: 'Years Experience', icon: Clock },
  ];

  return (
    <>
      <Helmet>
        <title>About HiTech Globals - Remote Design & Development Studio</title>
        <meta name="description" content="Learn about HiTech Globals, a remote-first design and development studio building exceptional digital products for businesses worldwide. Meet our team and discover our values." />
        <meta name="keywords" content="about HiTech Globals, remote design studio, web development team, digital agency, design company, software development, trusted partner" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About HiTech Globals - Remote Design & Development Studio" />
        <meta property="og:description" content="A remote-first design and development studio building exceptional digital products for businesses worldwide" />
        <meta property="og:url" content="https://hitechglobals.com/about" />
        <meta property="og:site_name" content="HiTech Globals" />

        {/* Twitter Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About HiTech Globals - Remote Studio" />
        <meta name="twitter:description" content="Learn about our remote-first team of designers and developers" />

        {/* Canonical */}
        <link rel="canonical" href="https://hitechglobals.com/about" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "HiTech Globals",
            "url": "https://hitechglobals.com",
            "about": "Remote-first design and development studio building exceptional digital products",
            "description": "A lean, dedicated team of designers and developers from around the world creating solutions that matter",
            "foundingDate": "2023",
            "areaServed": "Global",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "50"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Business Development",
              "url": "https://hitechglobals.com/contact"
            },
            "sameAs": [
              "https://twitter.com/hitechglobals",
              "https://linkedin.com/company/hitech-globals"
            ]
          })}
        </script>
      </Helmet>

      <div className="bg-background pt-20 overflow-hidden">
        {/* Hero Section with Stats */}
        <section className="min-h-[70vh] sm:min-h-[85vh] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20 relative">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Orbs */}
            <motion.div
              className="absolute top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[#0063cd]/10 rounded-full blur-3xl"
              animate={{
                x: [0, 50, 0],
                y: [0, 30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl"
              animate={{
                x: [0, -50, 0],
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/2 left-1/3 w-48 h-48 sm:w-64 sm:h-64 bg-cyan-500/5 rounded-full blur-3xl"
              animate={{
                x: [0, 30, 0],
                y: [0, -40, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Floating Geometric Shapes */}
            <motion.div
              className="absolute top-32 right-[20%] w-4 h-4 sm:w-6 sm:h-6 bg-[#0063cd]/30 rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute top-1/3 left-[15%] w-3 h-3 sm:w-4 sm:h-4 bg-purple-500/40 rotate-45"
              animate={{
                y: [0, 15, 0],
                rotate: [45, 90, 45],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/3 right-[10%] w-5 h-5 sm:w-8 sm:h-8 border-2 border-[#0063cd]/20 rounded-full"
              animate={{
                y: [0, -25, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
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
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.span
                  className="w-2 h-2 bg-[#0063cd] rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[#0063cd] text-sm sm:text-base font-medium">Trusted Partner</span>
              </motion.div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6 sm:mb-8 font-bold">
                We're <span className="relative">
                  <span className="text-[#0063cd]">HiTech Globals</span>
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
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4 mb-12"
            >
              A remote-first design and technology studio building exceptional digital products for ambitious businesses worldwide
            </motion.p>

            {/* Quick Stats with animated counters */}
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
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#0063cd]/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-[#0063cd] transition-colors"
                  >
                    <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0063cd] group-hover:text-white transition-colors" />
                  </motion.div>
                  <div className="font-bold text-xl sm:text-3xl text-[#0063cd]">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Hero CTAs */}
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
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  className="px-8 py-4 bg-white border-2 border-[#0063cd] text-[#0063cd] rounded-full hover:bg-[#0063cd]/5 transition-all inline-flex items-center gap-2 group font-medium w-full sm:w-auto justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Our Work
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30 relative" aria-label="Our Story">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-[#0063cd]/5 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-500/5 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
              <motion.article
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.span
                  className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  Our Journey
                </motion.span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 font-bold">Our story</h2>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground">
                  <p>
                    HiTech Globals was founded on a simple belief: exceptional digital experiences shouldn't be limited by geography. As a remote-first studio, we bring together talented designers and developers from around the world to create solutions that truly matter for your business.
                  </p>
                  <p>
                    We're a lean, dedicated team that values quality over quantity. Every project gets our full attention, ensuring we deliver work we're proud of and results that exceed expectations.
                  </p>
                  <p>
                    With 50+ completed projects and 10+ years of combined experience, our team brings deep expertise from working with startups, scale-ups, and established brands. We understand what it takes to build digital products that succeed in competitive markets.
                  </p>
                </div>
              </motion.article>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-4 sm:space-y-6"
              >
                <motion.article
                  className="relative bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#0063cd]/20 hover:border-[#0063cd] transition-all hover:shadow-xl overflow-hidden group"
                  whileHover={{ y: -5 }}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0063cd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#0063cd] transition-colors"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      <Rocket className="w-7 h-7 text-[#0063cd] group-hover:text-white transition-colors" aria-hidden="true" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 font-bold">Our Mission</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      To empower businesses with beautifully designed, expertly crafted digital solutions that drive real, measurable results and competitive advantage.
                    </p>
                  </div>
                </motion.article>

                <motion.article
                  className="relative bg-gradient-to-br from-[#0063cd] to-[#0052a8] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-2xl transition-all overflow-hidden"
                  whileHover={{ y: -5 }}
                >
                  {/* Decorative circles */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="relative z-10">
                    <Target className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" aria-hidden="true" />
                    <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3 font-bold">Our Vision</h3>
                    <p className="text-sm sm:text-base opacity-90">
                      To be recognized as the trusted partner for businesses seeking to build exceptional digital products, regardless of geographic location or project complexity.
                    </p>
                  </div>
                </motion.article>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative" aria-label="Our Core Values">
          {/* Background Pattern */}
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
              className="text-center mb-12 sm:mb-16 lg:mb-20"
            >
              <motion.span
                className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                What Drives Us
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 font-bold">Our values</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
                The core principles that guide every decision and project we undertake
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <motion.article
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className={`relative p-8 bg-white rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-2xl transition-all group overflow-hidden`}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    <motion.div
                      className="w-14 h-14 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0063cd] transition-all duration-300"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                    >
                      <value.icon className="w-7 h-7 text-[#0063cd] group-hover:text-white transition-colors" aria-hidden="true" />
                    </motion.div>
                    <h3 className="text-2xl mb-4 font-bold">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Remote First */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30 relative overflow-hidden" aria-label="Why We're Remote-First">
          {/* Floating elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 border-2 border-[#0063cd]/10 rounded-full"
            animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 bg-[#0063cd]/5 rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <motion.div
                  className="relative aspect-square bg-gradient-to-br from-[#0063cd] to-[#0052a8] rounded-3xl p-8 sm:p-12 flex items-center justify-center text-white overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

                  <div className="text-center relative z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Globe className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 opacity-90" aria-hidden="true" />
                    </motion.div>
                    <motion.div
                      className="text-5xl sm:text-6xl lg:text-7xl mb-4 font-bold"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      100%
                    </motion.div>
                    <div className="text-2xl sm:text-3xl mb-4 font-bold">Remote Team</div>
                    <p className="text-base sm:text-lg opacity-90">
                      Working from anywhere, delivering excellence everywhere
                    </p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.article
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <motion.span
                  className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                  whileHover={{ scale: 1.05 }}
                >
                  Global Team
                </motion.span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 font-bold">Why remote?</h2>
                <div className="space-y-6 text-lg text-muted-foreground mb-8">
                  <p>
                    Being remote-first allows us to work with the best talent globally, without geographic limitations. This means you get access to top-tier designers and developers who are experts in their field and passionate about their work.
                  </p>
                  <p>
                    We leverage modern communication tools to stay connected, ensuring seamless collaboration regardless of time zones. You'll always know what's happening with your project through transparent updates and regular communication.
                  </p>
                  <p>
                    Our lean structure means lower overhead and better value for you, without compromising on quality or service. We can scale our team up or down based on your project needs.
                  </p>
                </div>
                <Link to="/contact">
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-[#0063cd] to-[#0052a8] text-white rounded-full hover:shadow-xl hover:shadow-[#0063cd]/25 transition-all inline-flex items-center gap-2 group font-medium"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Discuss Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </Link>
              </motion.article>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative" aria-label="What Sets Us Apart">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16 lg:mb-20"
            >
              <motion.span
                className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 rounded-full"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4 inline mr-2" />
                Our Difference
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">What sets us apart</h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                We're not just another design and development agency
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {differentiators.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 sm:p-8 bg-white rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-xl transition-all group"
                >
                  <motion.div
                    className="w-12 h-12 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0063cd] transition-colors"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                  >
                    <item.icon className="w-6 h-6 text-[#0063cd] group-hover:text-white transition-colors" aria-hidden="true" />
                  </motion.div>
                  <h3 className="text-xl mb-3 font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
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
                Proven Results
              </motion.span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-bold">Why clients trust us</h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  stat: '98%',
                  label: 'On-Time Delivery',
                  description: 'We respect timelines and deliver projects on schedule',
                  icon: Clock,
                },
                {
                  stat: '$5M+',
                  label: 'Client Revenue Generated',
                  description: 'Our solutions have helped clients achieve significant growth',
                  icon: TrendingUp,
                },
                {
                  stat: '3.5x',
                  label: 'Average ROI',
                  description: 'Clients see strong returns on their digital investments',
                  icon: Star,
                },
              ].map((item, index) => (
                <motion.article
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 sm:p-8 bg-white rounded-2xl border border-border text-center hover:shadow-xl hover:border-[#0063cd]/30 transition-all group"
                >
                  <motion.div
                    className="w-14 h-14 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:bg-[#0063cd] transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <item.icon className="w-7 h-7 text-[#0063cd] group-hover:text-white transition-colors" />
                  </motion.div>
                  <motion.div
                    className="text-4xl sm:text-5xl font-bold text-[#0063cd] mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {item.stat}
                  </motion.div>
                  <h3 className="text-xl font-bold mb-2">{item.label}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0063cd]/5 via-transparent to-purple-500/5" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#0063cd] via-[#0052a8] to-[#003d7a] text-white rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 md:p-16 overflow-hidden"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full" />
                <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full" />
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white rotate-45" />
              </div>

              {/* Gradient Orb */}
              <motion.div
                className="absolute -top-20 -right-20 w-60 h-60 bg-white/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm"
                >
                  <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />
                </motion.div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
                  Ready to work
                  <br />
                  <span className="text-white/90">with us?</span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                  Let's discuss how we can help bring your vision to life with our expertise and dedication to excellence
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <motion.button
                      className="px-8 py-4 bg-white text-[#0063cd] rounded-full hover:bg-white/95 transition-all inline-flex items-center gap-2 group font-bold shadow-xl hover:shadow-2xl w-full sm:w-auto justify-center"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Schedule Consultation
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
