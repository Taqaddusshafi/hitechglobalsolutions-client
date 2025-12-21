import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, MessageSquare, Plus, TrendingUp, Eye } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export function AdminDashboard() {
    const [stats, setStats] = useState({
        blogs: 0,
        testimonials: 0,
        publishedBlogs: 0,
        featuredTestimonials: 0,
    });

    useEffect(() => {
        async function fetchStats() {
            if (!supabase) return;

            const [blogsRes, testimonialsRes] = await Promise.all([
                supabase.from('blogs').select('id, published'),
                supabase.from('testimonials').select('id, featured'),
            ]);

            setStats({
                blogs: blogsRes.data?.length || 0,
                testimonials: testimonialsRes.data?.length || 0,
                publishedBlogs: blogsRes.data?.filter(b => b.published).length || 0,
                featuredTestimonials: testimonialsRes.data?.filter(t => t.featured).length || 0,
            });
        }
        fetchStats();
    }, []);

    const statCards = [
        { label: 'Total Blogs', value: stats.blogs, icon: FileText, color: 'from-blue-500 to-cyan-500' },
        { label: 'Published', value: stats.publishedBlogs, icon: Eye, color: 'from-green-500 to-emerald-500' },
        { label: 'Testimonials', value: stats.testimonials, icon: MessageSquare, color: 'from-purple-500 to-pink-500' },
        { label: 'Featured', value: stats.featuredTestimonials, icon: TrendingUp, color: 'from-amber-500 to-orange-500' },
    ];

    return (
        <div className="space-y-8">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
                <p className="text-muted-foreground mt-1">Welcome to your admin panel</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {statCards.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
                    >
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                            <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="bg-card border border-border rounded-2xl p-6"
                >
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <FileText className="w-5 h-5 text-[#0063cd]" />
                        Blog Management
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Create, edit, and manage your blog posts
                    </p>
                    <div className="flex gap-3">
                        <Link
                            to="/admin/blogs/new"
                            className="px-4 py-2 bg-[#0063cd] text-white rounded-xl hover:bg-[#0052a8] transition-colors flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            New Post
                        </Link>
                        <Link
                            to="/admin/blogs"
                            className="px-4 py-2 border border-border rounded-xl hover:bg-secondary transition-colors"
                        >
                            View All
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="bg-card border border-border rounded-2xl p-6"
                >
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-[#0063cd]" />
                        Testimonial Management
                    </h2>
                    <p className="text-muted-foreground mb-6">
                        Add and manage client testimonials
                    </p>
                    <div className="flex gap-3">
                        <Link
                            to="/admin/testimonials/new"
                            className="px-4 py-2 bg-[#0063cd] text-white rounded-xl hover:bg-[#0052a8] transition-colors flex items-center gap-2"
                        >
                            <Plus className="w-4 h-4" />
                            New Testimonial
                        </Link>
                        <Link
                            to="/admin/testimonials"
                            className="px-4 py-2 border border-border rounded-xl hover:bg-secondary transition-colors"
                        >
                            View All
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
