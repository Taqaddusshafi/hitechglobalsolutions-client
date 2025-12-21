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
        <Router>
          {showSplash && (
            <SplashScreen onComplete={handleSplashComplete} />
          )}

          {contentReady && (
            <div className="min-h-screen flex flex-col bg-background text-foreground">
              <ScrollToTop />
              <Navigation />
              <main className="flex-1">
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
              </main>
              <Footer />
              <Analytics />
              <SpeedInsights />
            </div>
          )}
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}
