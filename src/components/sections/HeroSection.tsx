// src/components/sections/HeroSection.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
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
  const bgBlur = useTransform(scrollYProgress, [0, 0.8], ["blur(0px)", "blur(20px)"]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [0.7, 0.2]);
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
        style={{ filter: bgBlur, opacity: bgOpacity }}
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

        {/* Global Glassy Overlay */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      </motion.div>

      {/* --- HERO CONTENT (NOW ON TOP OF SLIDESHOW) --- */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-10">
        
        {/* Animated Pill Badge */}
        <ScrollReveal direction="down" delay={0.2} className="flex justify-center mb-6">
          <span className="glass px-4 py-1.5 rounded-full text-sm font-semibold text-gray-800 tracking-wide uppercase shadow-sm border border-white/50">
            100% Organic Goat Milk & Gentle
          </span>
        </ScrollReveal>

        {/* Text Reveal Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 drop-shadow-md">
          <TextReveal text="Pure Comfort for Your Baby's" />
          <span className="text-gradient block mt-2">Sensitive Skin</span>
        </h1>

        {/* Subheadline Reveal */}
        <ScrollReveal delay={0.4} direction="up">
          <p className="mt-4 text-xl md:text-2xl text-gray-800 max-w-2xl mx-auto font-medium opacity-95 leading-relaxed mb-10 drop-shadow-sm">
            Nourish and protect with the natural goodness of farm-fresh goat milk. Dermatologist approved, naturally hypoallergenic.
          </p>
        </ScrollReveal>

        {/* Call to Actions Reveal */}
        <ScrollReveal delay={0.6} direction="up" className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg">
            Shop the Collection
          </Button>
          <Button variant="glass" className="w-full sm:w-auto text-lg px-8 py-4 bg-white/60 shadow-md">
            Read Our Story
          </Button>
        </ScrollReveal>

      </div>

      {/* Subtle Bottom Vignette to transition into the next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#82e2ff] to-transparent z-0"></div>
    </section>
  );
}