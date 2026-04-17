// src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Reusable gradient classes to perfectly match the footer's style
  const lineGradient = "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500";
  const textHoverGradient = "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-purple-500 group-hover:to-pink-500";

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b-0 backdrop-blur-2xl bg-white/40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-extrabold tracking-tighter text-gray-900">
              Tender<span className="text-gradient">Touch</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center px-3 py-2 rounded-md font-bold transition-all duration-300"
                >
                  {/* Expanding Gradient Line */}
                  <span className={`w-0 h-[2px] ${lineGradient} rounded-full group-hover:w-4 group-hover:mr-2 transition-all duration-300`}></span>
                  
                  {/* Text that transitions to gradient */}
                  <span className={`text-gray-800 transition-all duration-300 ${textHoverGradient}`}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-white text-gray-900 font-bold shadow-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(244,114,182,0.4)] hover:bg-theme-gradient hover:text-white transition-all duration-500 border border-white/60"
            >
              Get a Free Sample
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-pink-500 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass absolute w-full rounded-b-3xl shadow-2xl border-b border-white/60 bg-white/60 backdrop-blur-3xl">
          <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-center w-full hover:bg-white/40 px-3 py-3 rounded-xl text-lg font-bold transition-all duration-300"
              >
                {/* Expanding Gradient Line (Mobile) */}
                <span className={`w-0 h-[2px] ${lineGradient} rounded-full group-hover:w-5 group-hover:mr-2 transition-all duration-300`}></span>
                
                {/* Text that transitions to gradient (Mobile) */}
                <span className={`text-gray-800 transition-all duration-300 ${textHoverGradient}`}>
                  {link.name}
                </span>
              </Link>
            ))}
            
            <div className="w-full pt-4 mt-2 border-t border-white/40">
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="block w-full px-5 py-4 rounded-2xl bg-theme-gradient text-white font-bold text-center shadow-lg hover:shadow-[0_0_25px_rgba(244,114,182,0.5)] transition-all duration-300"
              >
                Get a Free Sample
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}