// src/components/sections/HeroSection.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);
  
  // List of images for the background transition
  const images = ["/assets/b1.png", "/assets/b2.png"];

  // Auto-transition timer (every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Scroll animations
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.8, 0.2]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef} 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      
      {/* --- SLIDESHOW BACKGROUND CONTAINER --- */}
      <motion.div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{ opacity: bgOpacity }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={images[index]}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.div style={{ scale: bgScale }} className="w-full h-full">
              <Image
                src={images[index]} 
                alt="Goat Milk Skincare Background"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Glowing Overlay (No Blur) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,rgba(244,114,182,0.1)_50%,transparent_100%)] mix-blend-overlay z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-white/20 z-0"></div>
      </motion.div>

      {/* --- HERO CONTENT --- */}
      {/* UPDATED: Increased max-w-4xl to max-w-6xl to allow the headline to stretch across the screen */}
      <div className="relative z-20 w-full max-w-6xl mx-auto text-center mt-10 flex flex-col items-center">
        
        {/* Animated Pill Badge */}
        <ScrollReveal direction="down" delay={0.2} className="flex justify-center mb-6">
          <span className="glass px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 tracking-wide uppercase shadow-[0_0_15px_rgba(255,255,255,0.8)] border border-white/60 backdrop-blur-md">
            100% Organic Goat Milk & Gentle
          </span>
        </ScrollReveal>

        {/* UPDATED: Headline with fluid mobile sizing (6.5vw) and whitespace-nowrap to guarantee a single line */}
        <h1 className="text-[6.5vw] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-lg flex flex-col items-center justify-center text-center w-full">
          <span className="whitespace-nowrap">
            <TextReveal text="Pure Comfort for Your Baby's" />
          </span>
          <span className="text-gradient block mt-2 md:mt-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            Sensitive Skin
          </span>
        </h1>

        {/* Subheadline Reveal (Max width kept tighter so paragraph doesn't stretch too far) */}
        <ScrollReveal delay={0.4} direction="up" className="max-w-2xl">
          <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-800 font-bold opacity-95 leading-relaxed mb-12 drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] px-4">
            Nourish and protect with the natural goodness of farm-fresh goat milk. Dermatologist approved, naturally hypoallergenic.
          </p>
        </ScrollReveal>

        {/* Call to Actions Reveal */}
        <ScrollReveal delay={0.6} direction="up" className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto px-6">
          
          {/* BUTTON 1: Glassmorphism -> Products */}
          <Link 
            href="/products" 
            className="w-full sm:w-auto relative overflow-hidden px-10 py-4 rounded-full font-bold bg-white/30 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.1)] group hover:-translate-y-1 active:-translate-y-1 hover:shadow-[0_0_30px_rgba(96,165,250,0.6)] active:shadow-[0_0_30px_rgba(96,165,250,0.6)] transition-all duration-500 flex items-center justify-center"
          >
             <div className="absolute inset-0 bg-theme-gradient opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 z-0"></div>
             <span className="relative z-10 text-gray-900 group-hover:text-white group-active:text-white transition-colors duration-300 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] group-active:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
               Explore Products
             </span>
          </Link>

          {/* BUTTON 2: Neumorphism -> About Us */}
          <Link 
            href="/about" 
            className="w-full sm:w-auto relative px-10 py-4 rounded-full font-bold text-gray-700 bg-[#eef2f6] shadow-[6px_6px_12px_rgba(0,0,0,0.15),-6px_-6px_12px_rgba(255,255,255,0.9)] group hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] active:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.1),inset_-6px_-6px_12px_rgba(255,255,255,0.9)] transition-all duration-300 flex items-center justify-center"
          >
            <span className="group-hover:text-pink-500 group-active:text-pink-500 transition-colors duration-300 group-hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.4)] group-active:drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
              Read Our Story
            </span>
          </Link>

        </ScrollReveal>

      </div>

      {/* Subtle Bottom Vignette */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}