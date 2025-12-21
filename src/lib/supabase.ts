import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials not found. Using mock data.');
}

export const supabase = supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Types
export interface Blog {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    cover_image: string | null;
    author: string;
    category: string;
    tags: string[];
    published: boolean;
    created_at: string;
    updated_at: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string | null;
    rating: number;
    featured: boolean;
    created_at: string;
}

// Mock data for development
export const mockBlogs: Blog[] = [
    {
        id: '1',
        title: 'The Future of Web Development in 2024',
        slug: 'future-of-web-development-2024',
        excerpt: 'Explore the latest trends shaping the web development landscape, from AI-powered tools to new frameworks revolutionizing how we build.',
        content: `The web development industry continues to evolve at a rapid pace. In 2024, we're seeing exciting developments in AI-assisted coding, edge computing, and new JavaScript frameworks that promise better performance and developer experience.

## AI-Powered Development

Tools like GitHub Copilot and Claude are transforming how developers write code. These AI assistants can help with everything from code completion to debugging, making development faster and more efficient.

## Edge Computing

With the rise of edge computing platforms like Cloudflare Workers and Vercel Edge Functions, we're seeing a shift towards deploying code closer to users for better performance.

## Modern Frameworks

React Server Components, Astro, and SolidJS are leading the charge in creating faster, more efficient web applications with improved developer experience.`,
        cover_image: null,
        author: 'HiTech Globals',
        category: 'Technology',
        tags: ['Web Development', 'Trends', '2024'],
        published: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '2',
        title: 'Building Scalable React Applications',
        slug: 'building-scalable-react-applications',
        excerpt: 'Learn best practices for building React applications that can grow with your business needs.',
        content: `Building scalable React applications requires careful planning and the right architectural decisions. Here's how to set your project up for success.

## Component Architecture

Break your UI into small, reusable components. Follow the single responsibility principle and keep components focused on one task.

## State Management

Choose the right state management solution based on your needs. For smaller apps, Context API works well. For complex applications, consider Redux Toolkit or Zustand.

## Performance Optimization

Use React.memo, useMemo, and useCallback strategically. Implement code splitting with React.lazy to reduce initial bundle size.`,
        cover_image: null,
        author: 'HiTech Globals',
        category: 'Development',
        tags: ['React', 'JavaScript', 'Best Practices'],
        published: true,
        created_at: new Date(Date.now() - 86400000).toISOString(),
        updated_at: new Date(Date.now() - 86400000).toISOString(),
    },
    {
        id: '3',
        title: 'UI/UX Design Principles for Modern Websites',
        slug: 'ui-ux-design-principles-modern-websites',
        excerpt: 'Discover the key design principles that create engaging and user-friendly website experiences.',
        content: `Great design is invisible. It guides users naturally through your website without them even noticing. Here are the principles we follow at HiTech Globals.

## Visual Hierarchy

Use size, color, and spacing to guide the user's eye to the most important elements first. Headlines should stand out, CTAs should be prominent.

## Consistency

Maintain consistent design patterns throughout your site. Users should be able to predict how elements will behave based on previous interactions.

## Accessibility

Design for everyone. Use sufficient color contrast, provide alt text for images, and ensure your site works with keyboard navigation.`,
        cover_image: null,
        author: 'HiTech Globals',
        category: 'Design',
        tags: ['UI/UX', 'Design', 'Web Design'],
        published: true,
        created_at: new Date(Date.now() - 172800000).toISOString(),
        updated_at: new Date(Date.now() - 172800000).toISOString(),
    },
];

export const mockTestimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Sarah Johnson',
        role: 'CEO',
        company: 'TechStart Inc',
        content: 'HiTech Globals transformed our online presence completely. Their attention to detail and modern design approach exceeded our expectations. Highly recommended!',
        avatar: null,
        rating: 5,
        featured: true,
        created_at: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Michael Chen',
        role: 'Product Manager',
        company: 'InnovateCo',
        content: 'Working with HiTech Globals was a fantastic experience. They delivered our mobile app on time and the quality was exceptional. The team truly cares about their work.',
        avatar: null,
        rating: 5,
        featured: true,
        created_at: new Date().toISOString(),
    },
    {
        id: '3',
        name: 'Emily Rodriguez',
        role: 'Founder',
        company: 'DesignHub',
        content: 'The e-commerce platform they built for us has increased our sales by 200%. Their development skills and business understanding is impressive.',
        avatar: null,
        rating: 5,
        featured: true,
        created_at: new Date().toISOString(),
    },
    {
        id: '4',
        name: 'David Kim',
        role: 'CTO',
        company: 'CloudScale',
        content: 'Professional, responsive, and technically excellent. They understood our complex requirements and delivered a solution that perfectly fits our needs.',
        avatar: null,
        rating: 5,
        featured: false,
        created_at: new Date().toISOString(),
    },
];

// Data fetching functions
export async function getBlogs(): Promise<Blog[]> {
    if (!supabase) return mockBlogs;

    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching blogs:', error);
        return mockBlogs;
    }

    return data?.length ? data : mockBlogs;
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
    if (!supabase) {
        return mockBlogs.find(blog => blog.slug === slug) || null;
    }

    const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .single();

    if (error) {
        console.error('Error fetching blog:', error);
        return mockBlogs.find(blog => blog.slug === slug) || null;
    }

    return data;
}

export async function getTestimonials(): Promise<Testimonial[]> {
    if (!supabase) return mockTestimonials;

    const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching testimonials:', error);
        return mockTestimonials;
    }

    return data?.length ? data : mockTestimonials;
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
    if (!supabase) return mockTestimonials.filter(t => t.featured);

    const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('featured', true)
        .order('created_at', { ascending: false })
        .limit(4);

    if (error) {
        console.error('Error fetching testimonials:', error);
        return mockTestimonials.filter(t => t.featured);
    }

    return data?.length ? data : mockTestimonials.filter(t => t.featured);
}
