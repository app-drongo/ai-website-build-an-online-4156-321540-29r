import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
} from 'lucide-react';

export default function Footer() {
  const footerSections = [
    {
      title: 'Collections',
      links: [
        { name: 'Tote Bags', href: '/collections/tote-bags' },
        { name: 'Crossbody Bags', href: '/collections/crossbody' },
        { name: 'Evening Clutches', href: '/collections/clutches' },
        { name: 'Travel Bags', href: '/collections/travel' },
        { name: 'Custom Orders', href: '/custom-bags' },
        { name: 'Limited Edition', href: '/collections/limited' },
      ],
    },
    {
      title: 'About',
      links: [
        { name: 'Our Story', href: '/about' },
        { name: 'Artisan Process', href: '/craftsmanship' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Materials', href: '/materials' },
        { name: 'Care Guide', href: '/care-instructions' },
        { name: 'Reviews', href: '/reviews' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Size Guide', href: '/size-guide' },
        { name: 'Shipping Info', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'Repairs', href: '/bag-repairs' },
        { name: 'Gift Cards', href: '/gift-cards' },
        { name: 'FAQ', href: '/faq' },
      ],
    },
    {
      title: 'Policies',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Sale', href: '/terms' },
        { name: 'Return Policy', href: '/return-policy' },
        { name: 'Warranty', href: '/warranty' },
        { name: 'Wholesale', href: '/wholesale' },
        { name: 'Affiliate Program', href: '/affiliates' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/artisanbagco' },
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/artisanbagco' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/artisanbagco' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/artisan-bag-co' },
  ];

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">A</span>
                </div>
                <span className="font-bold text-xl">Artisan Bag Co.</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Handcrafted with love, designed for life. Each bag tells a story of traditional
                craftsmanship meets modern elegance. Discover your perfect companion piece.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">hello@artisanbagco.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 847-2247</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Portland Artisan District, OR</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Exclusive Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                First access to new collections and artisan stories. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Artisan Bag Co. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Crafted with <Heart className="size-3 text-primary fill-current" /> in Portland
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Follow our journey:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <Link
              href="/sitemap"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Sitemap
            </Link>
            <Link
              href="/accessibility"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Accessibility
            </Link>
            <Link
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Preferences
            </Link>
            <Link
              href="/contact"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
