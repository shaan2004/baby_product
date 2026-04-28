// src/components/layout/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Reusable gradient classes to perfectly match the sunset theme
  const lineGradient = "bg-gradient-to-r from-[#fce4a4] via-[#f48f98] to-[#eb3f80]";
  const textHoverGradient = "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#f48f98] group-hover:to-[#eb3f80]";

  return (
    <nav className="fixed top-0 w-full z-50 flex flex-col">
      {/* Main Navbar */}
      <div className="w-full glass border-b-0 backdrop-blur-2xl bg-white/40 shadow-sm">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 mr-4 lg:mr-8">
              <Link href="/" className="text-2xl font-extrabold tracking-tighter text-gray-900">
                Tender<span className="text-gradient">Touch</span>
              </Link>
            </div>

            {/* Desktop Menu - SINGLE LINE, EQUAL SPACING */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-8">
              
              {/* Contact Links */}
              <a href="tel:18008363378" className="flex items-center gap-1.5 text-[13px] xl:text-[14px] font-bold text-gray-600 hover:text-[#eb3f80] transition-colors whitespace-nowrap">
                <Phone size={14} />
                1-800-TENDER-TOUCH
              </a>
              <a href="mailto:hello@TenderTouch.com" className="flex items-center gap-1.5 text-[13px] xl:text-[14px] font-bold text-gray-600 hover:text-[#f48f98] transition-colors whitespace-nowrap">
                <Mail size={14} />
                hello@TenderTouch.com
              </a>

              {/* Subtle Divider */}
              <div className="w-[2px] h-5 bg-white/60 rounded-full mx-1"></div>

              {/* Main Navigation Links */}
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center py-2 rounded-md font-bold transition-all duration-300 whitespace-nowrap"
                >
                  {/* Expanding Gradient Line */}
                  <span className={`w-0 h-[2px] ${lineGradient} rounded-full group-hover:w-4 group-hover:mr-2 transition-all duration-300`}></span>
                  
                  {/* Text that transitions to gradient */}
                  <span className={`text-[13px] xl:text-[15px] text-gray-800 transition-all duration-300 ${textHoverGradient}`}>
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block ml-4 lg:ml-8">
              <Link 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-white text-gray-900 font-bold shadow-md hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(235,63,128,0.4)] hover:bg-theme-gradient hover:text-white transition-all duration-500 border border-white/60 whitespace-nowrap"
              >
                Get a Free Sample
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#eb3f80] focus:outline-none transition-colors"
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
                  className="block w-full px-5 py-4 mb-4 rounded-2xl bg-theme-gradient text-white font-bold text-center shadow-lg hover:shadow-[0_0_25px_rgba(235,63,128,0.5)] transition-all duration-300"
                >
                  Get a Free Sample
                </Link>

                {/* Mobile Contact Links */}
                <div className="flex flex-col items-center gap-3 text-sm font-bold text-gray-500">
                   <a href="tel:18008363378" className="flex items-center gap-2 hover:text-[#eb3f80] transition-colors p-2 glass rounded-full w-full justify-center">
                     <Phone size={14} className="text-[#eb3f80]" />
                     1-800-TENDER-TOUCH
                   </a>
                   <a href="mailto:hello@TenderTouch.com" className="flex items-center gap-2 hover:text-[#f48f98] transition-colors p-2 glass rounded-full w-full justify-center">
                     <Mail size={14} className="text-[#f48f98]" />
                     hello@TenderTouch.com
                   </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}