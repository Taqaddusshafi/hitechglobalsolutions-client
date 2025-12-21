import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, Check, Loader2, Sparkles } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface NewsletterProps {
    variant?: 'inline' | 'card' | 'footer';
}

export function Newsletter({ variant = 'card' }: NewsletterProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!email || !email.includes('@')) {
            setStatus('error');
            setMessage('Please enter a valid email address');
            return;
        }

        setStatus('loading');

        try {
            if (supabase) {
                const { error } = await supabase
                    .from('newsletter_subscribers')
                    .insert([{ email, subscribed_at: new Date().toISOString() }]);

                if (error) {
                    if (error.code === '23505') {
                        setStatus('success');
                        setMessage("You're already subscribed!");
                    } else {
                        throw error;
                    }
                } else {
                    setStatus('success');
                    setMessage('Thanks for subscribing! 🎉');
                }
            } else {
                // Fallback when Supabase is not configured
                setStatus('success');
                setMessage('Thanks for subscribing! 🎉');
            }
            setEmail('');
        } catch (error) {
            console.error('Newsletter subscription error:', error);
            setStatus('error');
            setMessage('Something went wrong. Please try again.');
        }

        // Reset after 5 seconds
        setTimeout(() => {
            setStatus('idle');
            setMessage('');
        }, 5000);
    }

    if (variant === 'footer') {
        return (
            <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex gap-2">
                    <div className="relative flex-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            disabled={status === 'loading' || status === 'success'}
                            className="w-full pl-10 pr-4 py-2.5 bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0063cd] text-sm disabled:opacity-50"
                        />
                    </div>
                    <motion.button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-4 py-2.5 bg-[#0063cd] text-white rounded-lg hover:bg-[#0052a8] transition-colors disabled:opacity-50 flex items-center gap-1"
                    >
                        {status === 'loading' ? (
                            <Loader2 className="w-4 h-4 animate-spin" />
                        ) : status === 'success' ? (
                            <Check className="w-4 h-4" />
                        ) : (
                            <ArrowRight className="w-4 h-4" />
                        )}
                    </motion.button>
                </div>
                {message && (
                    <p className={`text-sm ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                        {message}
                    </p>
                )}
            </form>
        );
    }

    if (variant === 'inline') {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-[#0063cd]/10 to-[#0052a8]/10 border border-[#0063cd]/20 rounded-xl p-6"
            >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                        <h3 className="font-semibold text-foreground flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-[#0063cd]" />
                            Get our latest articles
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                            Join 500+ developers getting weekly insights
                        </p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex gap-2">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            disabled={status === 'loading' || status === 'success'}
                            className="px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0063cd] text-sm disabled:opacity-50 w-48"
                        />
                        <motion.button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="px-4 py-2 bg-[#0063cd] text-white rounded-lg hover:bg-[#0052a8] transition-colors disabled:opacity-50 text-sm font-medium"
                        >
                            {status === 'loading' ? 'Subscribing...' : status === 'success' ? 'Subscribed!' : 'Subscribe'}
                        </motion.button>
                    </form>
                </div>
                {message && (
                    <p className={`text-sm mt-2 ${status === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                        {message}
                    </p>
                )}
            </motion.div>
        );
    }

    // Default card variant
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0063cd] to-[#0052a8] rounded-2xl p-8 text-white text-center"
        >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="opacity-90 mb-6">
                Get the latest insights on web development, design, and tech delivered to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        disabled={status === 'loading' || status === 'success'}
                        className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-xl placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 disabled:opacity-50"
                    />
                    <motion.button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 bg-white text-[#0063cd] rounded-xl font-semibold hover:bg-white/95 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Subscribing...
                            </>
                        ) : status === 'success' ? (
                            <>
                                <Check className="w-4 h-4" />
                                Subscribed!
                            </>
                        ) : (
                            <>
                                Subscribe
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </motion.button>
                </div>
                {message && (
                    <p className={`text-sm mt-3 ${status === 'error' ? 'text-red-300' : 'text-green-300'}`}>
                        {message}
                    </p>
                )}
            </form>
            <p className="text-xs opacity-60 mt-4">
                No spam, unsubscribe anytime.
            </p>
        </motion.div>
    );
}
