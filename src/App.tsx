import { useState, useEffect, lazy, Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { ThemeProvider } from './components/ThemeProvider';
import { BackToTop } from './components/BackToTop';

// Lazy load page components for code splitting
const Home = lazy(() => import('./components/pages/Home').then(m => ({ default: m.Home })));
const About = lazy(() => import('./components/pages/About').then(m => ({ default: m.About })));
const Services = lazy(() => import('./components/pages/Services').then(m => ({ default: m.Services })));
const Portfolio = lazy(() => import('./components/pages/Portfolio').then(m => ({ default: m.Portfolio })));
const Contact = lazy(() => import('./components/pages/Contact').then(m => ({ default: m.Contact })));
const Blog = lazy(() => import('./components/pages/Blog').then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./components/pages/BlogPost').then(m => ({ default: m.BlogPost })));
const NotFound = lazy(() => import('./components/pages/NotFound').then(m => ({ default: m.NotFound })));

// Lazy load admin components
const AdminLogin = lazy(() => import('./components/admin/AdminLogin').then(m => ({ default: m.AdminLogin })));
const AdminLayout = lazy(() => import('./components/admin/AdminLayout').then(m => ({ default: m.AdminLayout })));
const AdminDashboard = lazy(() => import('./components/admin/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const AdminBlogs = lazy(() => import('./components/admin/AdminBlogs').then(m => ({ default: m.AdminBlogs })));
const BlogEditor = lazy(() => import('./components/admin/BlogEditor').then(m => ({ default: m.BlogEditor })));
const AdminTestimonials = lazy(() => import('./components/admin/AdminTestimonials').then(m => ({ default: m.AdminTestimonials })));
const TestimonialEditor = lazy(() => import('./components/admin/TestimonialEditor').then(m => ({ default: m.TestimonialEditor })));
const AdminServices = lazy(() => import('./components/admin/AdminServices').then(m => ({ default: m.AdminServices })));
const ServiceEditor = lazy(() => import('./components/admin/ServiceEditor').then(m => ({ default: m.ServiceEditor })));
const AdminPortfolio = lazy(() => import('./components/admin/AdminPortfolio').then(m => ({ default: m.AdminPortfolio })));
const ProjectEditor = lazy(() => import('./components/admin/ProjectEditor').then(m => ({ default: m.ProjectEditor })));

// Non-lazy imports for core functionality
import { AuthProvider } from './components/admin/AuthContext';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react";

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-4 border-[#0063cd]/20 border-t-[#0063cd] rounded-full animate-spin" />
        <span className="text-muted-foreground text-sm">Loading...</span>
      </div>
    </div>
  );
}

// Component to handle scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

// Main site layout with navigation and footer
function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const splashSeen = sessionStorage.getItem('splashSeen');
    if (splashSeen === 'true') {
      setShowSplash(false);
      setContentReady(true);
    } else {
      setShowSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem('splashSeen', 'true');
    setShowSplash(false);
    setContentReady(true);
  };

  return (
    <ThemeProvider>
      <HelmetProvider>
        <AuthProvider>
          <Router>
            {showSplash && (
              <SplashScreen onComplete={handleSplashComplete} />
            )}

            {contentReady && (
              <>
                <ScrollToTop />
                <Suspense fallback={<PageLoader />}>
                  <Routes>
                    {/* Admin Routes */}
                    <Route path="/admin/login" element={<AdminLogin />} />
                    <Route
                      path="/admin"
                      element={
                        <ProtectedRoute>
                          <AdminLayout />
                        </ProtectedRoute>
                      }
                    >
                      <Route index element={<AdminDashboard />} />
                      <Route path="blogs" element={<AdminBlogs />} />
                      <Route path="blogs/new" element={<BlogEditor />} />
                      <Route path="blogs/:id" element={<BlogEditor />} />
                      <Route path="testimonials" element={<AdminTestimonials />} />
                      <Route path="testimonials/new" element={<TestimonialEditor />} />
                      <Route path="testimonials/:id" element={<TestimonialEditor />} />
                      <Route path="services" element={<AdminServices />} />
                      <Route path="services/new" element={<ServiceEditor />} />
                      <Route path="services/:id" element={<ServiceEditor />} />
                      <Route path="portfolio" element={<AdminPortfolio />} />
                      <Route path="portfolio/new" element={<ProjectEditor />} />
                      <Route path="portfolio/:id" element={<ProjectEditor />} />
                    </Route>

                    {/* Main Site Routes */}
                    <Route
                      path="*"
                      element={
                        <MainLayout>
                          <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/blog/:slug" element={<BlogPost />} />
                            <Route path="*" element={<NotFound />} />
                          </Routes>
                        </MainLayout>
                      }
                    />
                  </Routes>
                </Suspense>
                <Analytics />
                <SpeedInsights />
              </>
            )}
          </Router>
        </AuthProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

