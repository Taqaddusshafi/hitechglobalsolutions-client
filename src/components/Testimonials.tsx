import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { getFeaturedTestimonials, type Testimonial } from '../lib/supabase';

export function Testimonials() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchTestimonials() {
            const data = await getFeaturedTestimonials();
            setTestimonials(data);
            setLoading(false);
        }
        fetchTestimonials();
    }, []);

    useEffect(() => {
        if (testimonials.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    if (loading) {
        return (
            <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30 dark:bg-secondary/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="h-8 bg-secondary rounded w-32 mx-auto mb-4 animate-pulse" />
                        <div className="h-12 bg-secondary rounded w-64 mx-auto animate-pulse" />
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-card rounded-3xl p-8 sm:p-12 animate-pulse border border-border">
                            <div className="h-6 bg-secondary rounded w-full mb-4" />
                            <div className="h-6 bg-secondary rounded w-3/4 mb-8" />
                            <div className="flex items-center gap-4">
                                <div className="w-16 h-16 bg-secondary rounded-full" />
                                <div>
                                    <div className="h-4 bg-secondary rounded w-32 mb-2" />
                                    <div className="h-3 bg-secondary rounded w-24" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (testimonials.length === 0) return null;

    return (
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-secondary/30 dark:bg-secondary/10 relative overflow-hidden" aria-label="Client Testimonials">
            {/* Background decorations */}
            <motion.div
                className="absolute top-20 -left-20 w-72 h-72 bg-[#0063cd]/5 dark:bg-[#0063cd]/10 rounded-full blur-3xl"
                animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 -right-20 w-72 h-72 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl"
                animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.span
                        className="inline-block text-[#0063cd] text-sm sm:text-base font-medium mb-4 px-4 py-2 bg-[#0063cd]/10 dark:bg-[#0063cd]/20 rounded-full"
                        whileHover={{ scale: 1.05 }}
                    >
                        Client Love
                    </motion.span>
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 font-bold text-foreground">
                        What our clients say
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Don't just take our word for it - hear from some of our satisfied clients
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Navigation Arrows */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-20">
                        <motion.button
                            onClick={prevTestimonial}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:border-[#0063cd] hover:text-[#0063cd] transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </motion.button>
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-20">
                        <motion.button
                            onClick={nextTestimonial}
                            className="w-10 h-10 sm:w-12 sm:h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:border-[#0063cd] hover:text-[#0063cd] transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>

                    {/* Testimonial Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="relative bg-card rounded-3xl p-8 sm:p-12 border border-border shadow-xl"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-8 opacity-10">
                                <Quote className="w-20 h-20 text-[#0063cd]" />
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-5 h-5 ${i < testimonials[currentIndex].rating
                                                ? 'text-yellow-400 fill-yellow-400'
                                                : 'text-gray-300'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Content */}
                            <blockquote className="text-lg sm:text-xl md:text-2xl text-foreground mb-8 leading-relaxed relative z-10">
                                "{testimonials[currentIndex].content}"
                            </blockquote>

                            {/* Author */}
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#0063cd] to-[#0052a8] rounded-full flex items-center justify-center text-white text-xl font-bold">
                                    {testimonials[currentIndex].avatar ? (
                                        <img
                                            src={testimonials[currentIndex].avatar}
                                            alt={testimonials[currentIndex].name}
                                            className="w-full h-full rounded-full object-cover"
                                        />
                                    ) : (
                                        testimonials[currentIndex].name.charAt(0)
                                    )}
                                </div>
                                <div>
                                    <div className="font-bold text-lg text-foreground">
                                        {testimonials[currentIndex].name}
                                    </div>
                                    <div className="text-muted-foreground">
                                        {testimonials[currentIndex].role}
                                        {testimonials[currentIndex].company && (
                                            <span> at {testimonials[currentIndex].company}</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-[#0063cd] w-8'
                                        : 'bg-border hover:bg-[#0063cd]/50'
                                    }`}
                                whileHover={{ scale: 1.2 }}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
