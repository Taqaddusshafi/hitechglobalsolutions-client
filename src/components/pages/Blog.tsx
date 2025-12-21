import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Sparkles, Clock } from 'lucide-react';
import { getBlogs, type Blog } from '../../lib/supabase';

export function Blog() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState('All');

    useEffect(() => {
        async function fetchBlogs() {
            const data = await getBlogs();
            setBlogs(data);
            setLoading(false);
        }
        fetchBlogs();
    }, []);

    const categories = ['All', ...new Set(blogs.map(blog => blog.category))];
    const filteredBlogs = activeFilter === 'All'
        ? blogs
        : blogs.filter(blog => blog.category === activeFilter);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <>
            <Helmet>
                <title>Blog - HiTech Globals | Web Development Insights & Tips</title>
                <meta name="description" content="Read the latest insights, tutorials, and best practices on web development, design, and digital strategy from HiTech Globals." />
                <meta name="keywords" content="web development blog, design insights, tech tutorials, development tips, digital strategy" />
                <meta name="robots" content="index, follow" />

                <meta property="og:type" content="website" />
                <meta property="og:title" content="Blog - HiTech Globals" />
                <meta property="og:description" content="Latest insights and tutorials on web development and design" />
                <meta property="og:url" content="https://hitechglobals.com/blog" />

                <link rel="canonical" href="https://hitechglobals.com/blog" />
            </Helmet>

            <div className="bg-background pt-20 overflow-hidden min-h-screen">
                {/* Hero Section */}
                <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-20 relative">
                    {/* Animated Background */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            className="absolute top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-[#0063cd]/10 dark:bg-[#0063cd]/20 rounded-full blur-3xl"
                            animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl"
                            animate={{ x: [0, -50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
                            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 bg-gradient-to-r from-[#0063cd]/10 to-purple-500/10 dark:from-[#0063cd]/20 dark:to-purple-500/20 rounded-full mb-6 sm:mb-8 border border-[#0063cd]/20 backdrop-blur-sm"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Sparkles className="w-4 h-4 text-[#0063cd]" />
                                <span className="text-[#0063cd] font-medium">Insights & Tutorials</span>
                            </motion.div>

                            <h1 className="text-4xl sm:text-6xl md:text-7xl tracking-tight mb-8 font-bold text-foreground">
                                Our <span className="relative">
                                    <span className="text-[#0063cd]">Blog</span>
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
                            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                        >
                            Insights, tutorials, and best practices on web development, design, and digital strategy
                        </motion.p>
                    </div>
                </section>

                {/* Filter */}
                <section className="px-4 sm:px-6 pb-8">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-wrap justify-center gap-3 sm:gap-4"
                        >
                            {categories.map((category, index) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveFilter(category)}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 rounded-full transition-all font-medium ${activeFilter === category
                                        ? 'bg-gradient-to-r from-[#0063cd] to-[#0052a8] text-white shadow-lg shadow-[#0063cd]/25'
                                        : 'bg-card border border-border hover:border-[#0063cd]/50 text-foreground hover:shadow-md'
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="px-4 sm:px-6 pb-16 sm:pb-24 lg:pb-32">
                    <div className="max-w-7xl mx-auto">
                        {loading ? (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="bg-card rounded-2xl p-6 animate-pulse border border-border">
                                        <div className="h-48 bg-secondary rounded-xl mb-4" />
                                        <div className="h-4 bg-secondary rounded w-1/3 mb-3" />
                                        <div className="h-6 bg-secondary rounded w-3/4 mb-2" />
                                        <div className="h-4 bg-secondary rounded w-full mb-2" />
                                        <div className="h-4 bg-secondary rounded w-2/3" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.3 }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                            >
                                {filteredBlogs.map((blog, index) => (
                                    <motion.article
                                        key={blog.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{ y: -8 }}
                                        className="group"
                                    >
                                        <Link to={`/blog/${blog.slug}`}>
                                            <div className="bg-card rounded-2xl border border-border hover:border-[#0063cd]/50 hover:shadow-2xl transition-all overflow-hidden h-full flex flex-col">
                                                {/* Cover Image Placeholder */}
                                                <div className="aspect-video bg-gradient-to-br from-[#0063cd] to-[#0052a8] flex items-center justify-center relative overflow-hidden">
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                                    <span className="text-white/80 text-4xl font-bold">{blog.title.charAt(0)}</span>
                                                </div>

                                                <div className="p-6 flex flex-col flex-grow">
                                                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                                        <span className="px-3 py-1 bg-[#0063cd]/10 text-[#0063cd] rounded-full text-xs font-medium">
                                                            {blog.category}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            5 min read
                                                        </span>
                                                    </div>

                                                    <h2 className="text-xl font-bold mb-3 group-hover:text-[#0063cd] transition-colors text-foreground">
                                                        {blog.title}
                                                    </h2>

                                                    <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-3">
                                                        {blog.excerpt}
                                                    </p>

                                                    <div className="flex items-center justify-between pt-4 border-t border-border">
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <User className="w-4 h-4" />
                                                            <span>{blog.author}</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>{formatDate(blog.created_at)}</span>
                                                        </div>
                                                    </div>

                                                    <motion.div
                                                        className="flex items-center gap-2 text-[#0063cd] font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                                                    >
                                                        Read more <ArrowRight className="w-4 h-4" />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </Link>
                                    </motion.article>
                                ))}
                            </motion.div>
                        )}

                        {!loading && filteredBlogs.length === 0 && (
                            <div className="text-center py-16">
                                <p className="text-muted-foreground text-lg">No blog posts found in this category.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 sm:py-24 px-4 sm:px-6 bg-secondary/30 dark:bg-secondary/10">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
                                Want to discuss a project?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Let's talk about how we can help bring your ideas to life
                            </p>
                            <Link to="/contact">
                                <motion.button
                                    className="px-8 py-4 bg-gradient-to-r from-[#0063cd] to-[#0052a8] text-white rounded-full hover:shadow-xl hover:shadow-[#0063cd]/25 transition-all inline-flex items-center gap-2 group font-medium"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Get in Touch
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                </section>
            </div>
        </>
    );
}
