import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import { Newsletter } from './Newsletter';

export function Footer() {
  const links = {
    company: [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Work', path: '/portfolio' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Brand Design', path: '/services' },
      { name: 'UX/UI Design', path: '/services' },
      { name: 'Web Design', path: '/services' },
      { name: 'Web Development', path: '/services' },
      { name: 'Mobile Apps', path: '/services' },
    ],
    social: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/company/hitech-globals/' },
      { name: 'Twitter', url: '#' },
      { name: 'Instagram', url: '#' },
      { name: 'GitHub', url: '#' },
    ],
  };

  return (
    <footer className="bg-secondary dark:bg-[#0f0f0f] text-foreground dark:text-white border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <div className="flex items-baseline">
                <span className="text-3xl sm:text-4xl" style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 600 }}>
                  hitech
                </span>
              </div>
              <div className="text-lg sm:text-xl line-height-6" style={{ fontFamily: 'Fredoka, sans-serif', fontWeight: 400 }}>
                Globals
              </div>
            </Link>
            <p className="text-base sm:text-lg opacity-80 mb-2 max-w-md">
              <span className="font-bold text-[#0063cd]">HiTech Globals</span> — Your Premium Agentic AI & Software Studio.
            </p>
            <p className="text-sm sm:text-base opacity-70 mb-6 sm:mb-8 max-w-md">
              A remote-first studio building exceptional digital products and autonomous AI solutions for businesses worldwide.
            </p>
            <Link to="/contact">
              <button className="px-6 py-3 bg-[#0063cd] text-white rounded-full hover:bg-[#0063cd]/90 transition-colors inline-flex items-center gap-2 group">
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h4 className="text-sm uppercase tracking-wider mb-6 opacity-60">Company</h4>
              <ul className="space-y-3">
                {links.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider mb-6 opacity-60">Services</h4>
              <ul className="space-y-3">
                {links.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm uppercase tracking-wider mb-6 opacity-60">Connect</h4>
              <ul className="space-y-3">
                {links.social.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-80 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-12 lg:pt-16 pb-8">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl mb-4">Get in touch</h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <Mail className="w-5 h-5 opacity-60" />
                <a
                  href="mailto:hello@hitechglobals.com"
                  className="text-base sm:text-lg opacity-90 hover:text-[#0063cd] transition-colors break-all"
                >
                  hello@hitechglobals.com
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                <Phone className="w-5 h-5 opacity-60" />
                <a
                  href="tel:+919596672738"
                  className="text-base sm:text-lg opacity-90 hover:text-[#0063cd] transition-colors"
                >
                  +91 959 667 2738
                </a>
              </div>
            </div>
            <p className="opacity-70 text-sm mt-6">
              We're a remote-first team available 24/7. Whether you're across the street or across the world, we're here to help bring your ideas to life.
            </p>
          </div>

          {/* Newsletter */}
          <div className="mt-8 max-w-md">
            <h4 className="text-sm uppercase tracking-wider mb-4 opacity-60">Newsletter</h4>
            <p className="opacity-70 text-sm mb-4">Get the latest insights in your inbox</p>
            <Newsletter variant="footer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm opacity-60">
            <p>© {new Date().getFullYear()} HiTech Globals. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/legal/privacy-policy" className="hover:opacity-100 transition-opacity">
                Privacy Policy
              </Link>
              <Link to="/legal/terms-of-service" className="hover:opacity-100 transition-opacity">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
