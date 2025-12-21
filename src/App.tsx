import { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { SplashScreen } from './components/SplashScreen';
import { ThemeProvider } from './components/ThemeProvider';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Portfolio } from './components/pages/Portfolio';
import { Contact } from './components/pages/Contact';
import { Blog } from './components/pages/Blog';
import { BlogPost } from './components/pages/BlogPost';
import { NotFound } from './components/pages/NotFound';

// Admin imports
import { AuthProvider } from './components/admin/AuthContext';
import { AdminLogin } from './components/admin/AdminLogin';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminBlogs } from './components/admin/AdminBlogs';
import { BlogEditor } from './components/admin/BlogEditor';
import { AdminTestimonials } from './components/admin/AdminTestimonials';
import { TestimonialEditor } from './components/admin/TestimonialEditor';
import { AdminServices } from './components/admin/AdminServices';
import { ServiceEditor } from './components/admin/ServiceEditor';
import { AdminPortfolio } from './components/admin/AdminPortfolio';
import { ProjectEditor } from './components/admin/ProjectEditor';
import { ProtectedRoute } from './components/admin/ProtectedRoute';

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react";

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

