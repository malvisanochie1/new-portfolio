"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Service", href: "#service" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  //   const router = useRouter();

  // Track hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || "#home";
      setActiveSection(hash);
    };

    // Set initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Cleanup
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="backdrop-blur-lg border-b border-slate-500 sticky top-0 z-50 w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-semibold text_gradient">
                Chisom<span className="text-gray-300">Malvis</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                      activeSection === item.href
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 gradient"></div>
                    )}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-800 pe-3">
          <h1 className="text-white text-xl font-semibold">
            Chisom<span className="text-pink-500">Malvis</span>
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white hover:bg-gray-800 me-5"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="px-4 py-6">
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={toggleMobileMenu}
                className={`block px-3 py-3 text-base font-medium transition-colors duration-200 rounded-md ${
                  activeSection === item.href
                    ? "text-white bg-gray-800 border-l-4 border-pink-500"
                    : "text-gray-300 hover:text-white hover:bg-gray-800"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
