"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { name: "Home", href: "#home", active: true },
  { name: "About", href: "#about", active: false },
  { name: "Skills", href: "#skills", active: false },
  { name: "Portfolio", href: "#portfolio", active: false },
  { name: "Service", href: "#service", active: false },
  { name: "Contact", href: "#contact", active: false },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-white text-xl font-semibold">
                Chris<span className="text-pink-500">Smith</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                      item.active
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {item.active && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-pink-500"></div>
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
        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="text-white text-xl font-semibold">
            Chris<span className="text-pink-500">Smith</span>
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-gray-300 hover:text-white hover:bg-gray-800"
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
                  item.active
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
