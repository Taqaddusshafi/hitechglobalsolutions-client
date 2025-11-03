import { motion } from 'framer-motion';
import { Heart, Users, Award, Zap, Target, Rocket, UserCheck, Eye, Handshake, Headphones, Globe } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We genuinely love what we do and pour our hearts into every project',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work alongside you as true partners in your success',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We never compromise on quality, delivering excellence every time',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'Fast, flexible, and always adapting to your needs',
    },
  ];

  // const team = [
  //   {
  //     icon: Code,
  //     title: 'Developers',
  //     description: 'Expert engineers crafting robust, scalable solutions',
  //   },
  //   {
  //     icon: Palette,
  //     title: 'Designers',
  //     description: 'Creative minds designing beautiful, intuitive experiences',
  //   },
  //   {
  //     icon: Target,
  //     title: 'Strategists',
  //     description: 'Strategic thinkers ensuring your project achieves its goals',
  //   },
  // ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 sm:px-4 py-2 bg-[#0063cd]/10 rounded-full mb-6 sm:mb-8">
              <span className="text-[#0063cd] text-sm sm:text-base">About Us</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-tight mb-6 sm:mb-8">
              We're <span className="text-[#0063cd]">hitech</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto px-4"
          >
            A remote-first design and technology studio building exceptional digital products for businesses worldwide
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8">Our story</h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground">
                <p>
                  HiTech Global Solutions was founded on a simple belief: exceptional digital experiences shouldn't be limited by geography. As a remote-first studio, we bring together talented designers and developers from around the world to create solutions that truly matter.
                </p>
                <p>
                  We're a lean, dedicated team that values quality over quantity. Every project gets our full attention, ensuring we deliver work we're proud of and results that exceed expectations.
                </p>
                <p>
                  While we're a young company, our team brings years of combined experience from working with startups, scale-ups, and established brands. We understand what it takes to build products that succeed.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 sm:space-y-6"
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-[#0063cd]/20">
                <Rocket className="w-10 h-10 sm:w-12 sm:h-12 text-[#0063cd] mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3">Our Mission</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  To empower businesses with beautifully designed, expertly crafted digital solutions that drive real results.
                </p>
              </div>

              <div className="bg-[#0063cd] text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                <Target className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4" />
                <h3 className="text-xl sm:text-2xl mb-2 sm:mb-3">Our Vision</h3>
                <p className="text-sm sm:text-base opacity-90">
                  To be recognized as a trusted partner for businesses looking to build exceptional digital products, regardless of location.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6">Our values</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-secondary/30 rounded-2xl border border-border hover:border-[#0063cd] transition-colors"
              >
                <div className="w-14 h-14 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-[#0063cd]" />
                </div>
                <h3 className="text-2xl mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Remote First */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-square bg-gradient-to-br from-[#0063cd] to-[#0063cd]/60 rounded-3xl p-12 flex items-center justify-center text-white">
                <div className="text-center">
                  <Globe className="w-20 h-20 mx-auto mb-6 opacity-90" />
                  <div className="text-6xl mb-4">100%</div>
                  <div className="text-3xl mb-4">Remote</div>
                  <p className="text-lg opacity-90">
                    Working from anywhere, delivering everywhere
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl md:text-6xl mb-8">Why remote?</h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Being remote-first allows us to work with the best talent globally, without geographic limitations. This means you get access to top-tier designers and developers who are experts in their field.
                </p>
                <p>
                  We leverage modern communication tools to stay connected, ensuring seamless collaboration regardless of time zones. You'll always know what's happening with your project.
                </p>
                <p>
                  Our lean structure means lower overhead and better value for you, without compromising on quality or service.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl mb-6">What sets us apart</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're not just another agency
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: 'Personal Attention',
                description: 'As a focused team, every project gets our full dedication and expertise. You\'re not just another client number.',
              },
              {
                icon: Rocket,
                title: 'Modern Approach',
                description: 'We use the latest technologies and best practices to ensure your product is built for the future.',
              },
              {
                icon: Eye,
                title: 'Transparent Process',
                description: 'Clear communication, honest timelines, and no surprises. You\'ll always know exactly where your project stands.',
              },
              {
                icon: Handshake,
                title: 'Flexible Partnership',
                description: 'Whether you need a full team or specific expertise, we adapt to your needs and budget.',
              },
              {
                icon: Award,
                title: 'Quality Focus',
                description: 'We take pride in our work. Every line of code and every pixel is crafted with care and attention to detail.',
              },
              {
                icon: Headphones,
                title: 'Long-term Support',
                description: 'Our relationship doesn\'t end at launch. We\'re here to support and grow your product over time.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-secondary/30 rounded-2xl"
              >
                <div className="w-12 h-12 bg-[#0063cd]/10 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-[#0063cd]" />
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl mb-8">
              Let's work
              <br />
              <span className="text-[#0063cd]">together</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Ready to start your project? We'd love to hear from you
            </p>
            <a href="/contact">
              <button className="px-8 py-4 bg-[#0063cd] text-white rounded-full hover:bg-[#0063cd]/90 transition-colors">
                Get in Touch
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
