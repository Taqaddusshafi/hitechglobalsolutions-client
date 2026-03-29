import { SEO } from '../SEO';
import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Tag, Clock } from 'lucide-react';
import { getBlogBySlug, type Blog } from '../../lib/supabase';
import { ReadingProgress } from '../ReadingProgress';
import { RelatedPosts } from '../RelatedPosts';
import { TableOfContents, calculateReadTime } from '../TableOfContents';
import { ShareButtons } from '../ShareButtons';

export function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlog() {
            if (!slug) return;
            const data = await getBlogBySlug(slug);
            if (!data) {
                navigate('/404');
                return;
            }
            setBlog(data);
            setLoading(false);
        }
        fetchBlog();
    }, [slug, navigate]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="bg-background pt-20 min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-20">
                    <div className="animate-pulse">
                        <div className="h-4 bg-secondary rounded w-24 mb-8" />
                        <div className="h-12 bg-secondary rounded w-3/4 mb-4" />
                        <div className="h-6 bg-secondary rounded w-1/2 mb-8" />
                        <div className="aspect-video bg-secondary rounded-2xl mb-8" />
                        <div className="space-y-4">
                            <div className="h-4 bg-secondary rounded w-full" />
                            <div className="h-4 bg-secondary rounded w-full" />
                            <div className="h-4 bg-secondary rounded w-3/4" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!blog) {
        return null;
    }

    return (
        <>
            <SEO 
                title={blog.title}
                description={blog.excerpt}
                canonical={`/blog/${blog.slug}`}
                ogType="article"
                ogImage={blog.cover_image || undefined}
                keywords={blog.tags.join(', ')}
            />
            {/* Structured Data (JSON-LD) - Explicitly adding metadata that's not in the SEO component */}
            <Helmet>
                <meta property="article:author" content={blog.author} />
                <meta property="article:published_time" content={blog.created_at} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": blog.title,
                        "description": blog.excerpt,
                        "author": {
                            "@type": "Organization",
                            "name": blog.author
                        },
                        "datePublished": blog.created_at,
                        "dateModified": blog.updated_at,
                        "publisher": {
                            "@type": "Organization",
                            "name": "HiTech Globals",
                            "url": "https://hitechglobals.com"
                        }
                    })}
                </script>
            </Helmet>


            <ReadingProgress />
            <div className="bg-background pt-20 min-h-screen">
                <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
                    {/* Back Button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center gap-2 text-muted-foreground hover:text-[#0063cd] transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Link>
                    </motion.div>

                    {/* Header */}
                    <motion.header
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <span className="px-4 py-2 bg-[#0063cd]/10 text-[#0063cd] rounded-full text-sm font-medium">
                                {blog.category}
                            </span>
                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Clock className="w-4 h-4" />
                                {calculateReadTime(blog.content)} min read
                            </span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground leading-tight">
                            {blog.title}
                        </h1>

                        <p className="text-xl text-muted-foreground mb-6">
                            {blog.excerpt}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-6 border-b border-border">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 bg-[#0063cd] rounded-full flex items-center justify-center text-white font-bold">
                                    {blog.author.charAt(0)}
                                </div>
                                <div>
                                    <div className="font-medium text-foreground">{blog.author}</div>
                                    <div className="text-xs">{formatDate(blog.created_at)}</div>
                                </div>
                            </div>

                            {/* Share Buttons */}
                            <div className="ml-auto">
                                <ShareButtons title={blog.title} />
                            </div>
                        </div>
                    </motion.header>

                    {/* Cover Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="aspect-video bg-gradient-to-br from-[#0063cd] to-[#0052a8] rounded-2xl mb-10 flex items-center justify-center overflow-hidden"
                    >
                        {blog.cover_image ? (
                            <img src={blog.cover_image} alt={blog.title} className="w-full h-full object-cover" />
                        ) : (
                            <span className="text-white/50 text-6xl font-bold">{blog.title.charAt(0)}</span>
                        )}
                    </motion.div>

                    {/* Table of Contents */}
                    <TableOfContents content={blog.content} />

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="prose prose-lg dark:prose-invert max-w-none"
                    >
                        {blog.content.split('\n\n').map((paragraph, index) => {
                            if (paragraph.startsWith('## ')) {
                                return (
                                    <h2 key={index} className="text-2xl font-bold mt-10 mb-4 text-foreground">
                                        {paragraph.replace('## ', '')}
                                    </h2>
                                );
                            }
                            return (
                                <p key={index} className="text-muted-foreground leading-relaxed mb-6">
                                    {paragraph}
                                </p>
                            );
                        })}
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-10 pt-8 border-t border-border"
                    >
                        <div className="flex items-center gap-3 flex-wrap">
                            <Tag className="w-5 h-5 text-muted-foreground" />
                            {blog.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-secondary hover:bg-[#0063cd]/10 rounded-full text-sm font-medium text-foreground transition-colors"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-16 p-8 bg-gradient-to-br from-[#0063cd] to-[#0052a8] rounded-2xl text-white text-center"
                    >
                        <h3 className="text-2xl font-bold mb-4">Need help with your project?</h3>
                        <p className="opacity-90 mb-6">
                            Let's discuss how we can help bring your ideas to life
                        </p>
                        <Link to="/contact">
                            <motion.button
                                className="px-8 py-4 bg-white text-[#0063cd] rounded-full hover:bg-white/95 transition-all inline-flex items-center gap-2 group font-bold shadow-xl"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get in Touch
                                <ArrowLeft className="w-4 h-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </motion.div>

                    {/* Related Posts */}
                    <RelatedPosts
                        currentSlug={blog.slug}
                        currentCategory={blog.category}
                        currentTags={blog.tags}
                    />
                </article>
            </div>
        </>
    );
}
