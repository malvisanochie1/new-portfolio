"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/components/ui/hooks/useSmoothScroll";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "Service", href: "#service" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const scrollTo = useSmoothScroll();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    scrollTo(href);
  };

  const handleMobileNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    toggleMobileMenu();
    // Small delay so the sidebar closes before scrolling starts
    setTimeout(() => scrollTo(href), 50);
  };

  useEffect(() => {
    const sectionIds = navigationItems.map(({ href }) => href.slice(1));
    const visible = new Set<string>();
    const observed = new Set<string>();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = `#${entry.target.id}`;
          if (entry.isIntersecting) visible.add(id);
          else visible.delete(id);
        });
        // Highlight the topmost visible section in page order
        const first = navigationItems.find(({ href }) => visible.has(href));
        if (first) setActiveSection(first.href);
      },
      {
        // Below sticky navbar (80px) through upper half of viewport
        rootMargin: "-80px 0px -50% 0px",
        threshold: 0,
      },
    );

    // Attach IO to any section elements already in the DOM
    const attachNew = () => {
      let allFound = true;
      sectionIds.forEach((id) => {
        if (!observed.has(id)) {
          const el = document.getElementById(id);
          if (el) {
            io.observe(el);
            observed.add(id);
          } else {
            allFound = false;
          }
        }
      });
      return allFound;
    };

    // Observe immediately-available sections (home, about)
    const allFound = attachNew();

    // Lazy-loaded sections (service, portfolio, skills, contact) appear later —
    // watch the DOM and attach them as they render, then stop watching.
    let mo: MutationObserver | null = null;
    if (!allFound) {
      mo = new MutationObserver(() => {
        if (attachNew()) mo?.disconnect();
      });
      mo.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      io.disconnect();
      mo?.disconnect();
    };
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="backdrop-blur-lg border-b border-slate-800 sticky top-0 z-50 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-xl font-semibold text_gradient">
              Chisom<span className="text-gray-300">Malvis</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-3 lg:space-x-6">
                {navigationItems.map(({ name, href }) => (
                  <Link
                    key={name}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                      activeSection === href
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {name}
                    {activeSection === href && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient" />
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                aria-label="Toggle menu"
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-white hover:bg-gray-800"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={toggleMobileMenu}
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900/40 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-900 pe-3">
          <h1 className="text-white text-xl font-semibold">
            Chisom<span className="text-pink-500/70">Malvis</span>
          </h1>
          <Button
            aria-label="Close menu"
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white hover:bg-gray-800 me-5"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="px-4 py-6 space-y-1">
          {navigationItems.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              onClick={(e) => handleMobileNavClick(e, href)}
              className={`block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md ${
                activeSection === href
                  ? "text-white bg-gray-900/40 backdrop-blur-sm border-l-4 border-pink-500/70"
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>
      </aside>
    </>
  );
}
