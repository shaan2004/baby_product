// src/app/products/page.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TextReveal from "@/components/animations/TextReveal";
import ScrollReveal from "@/components/animations/ScrollReveal";
import Image from "next/image";
import { Star, ArrowRight, ShieldCheck } from "lucide-react";

// --- 1. REFINED ROW GUIDE ---
function RowGuide({ 
  containerRef, 
  direction,
  vPos = "top" 
}: { 
  containerRef: React.RefObject<HTMLElement | null>, 
  direction: "rtl" | "ltr",
  vPos?: "top" | "bottom"
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xRange = direction === "rtl" ? ["100vw", "-25vw"] : ["-25vw", "100vw"];
  const x = useTransform(scrollYProgress, [0, 1], xRange);
  const scaleX = direction === "ltr" ? -1 : 1;
  const rotate = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 7, -7, 7, -7, 0]);

  const verticalClass = vPos === "top" ? "-top-24" : "-bottom-40";

  return (
    <div className={`absolute ${verticalClass} left-0 w-screen pointer-events-none z-50`}>
      <motion.div
        style={{ x, rotate, scaleX }}
        className="w-28 h-28 md:w-36 md:h-36"
      >
        <Image
          src="/assets/baby-crawling.png" 
          alt="Crawling Baby Guide"
          width={150}
          height={150}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}

export default function ProductsPage() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const products = [
    { name: "Gentle Wash & Shampoo", price: "₹750", tag: "Best Seller", image: "/assets/shampoo.png" },
    { name: "Soothing Diaper Balm", price: "₹450", tag: "Must Have", image: "/assets/balm.png" },
    { name: "Calming Massage Oil", price: "₹250", tag: "New", image: "/assets/oil.png" },
    { name: "Signature Daily Baby Lotion", price: "₹240", tag: "Award Winning", image: "/assets/lotion.png" },
    { name: "Organic Baby Wash", price: "₹180", tag: "Eco Friendly", image: "/assets/shampoo.png" },
    { name: "Nourishing Baby Oil", price: "₹220", tag: "Pure", image: "/assets/oil.png" },
  ];

  return (
    // UPDATED: Added the denser colorful gradient background (from-blue-200 via-purple-100 to-pink-200)
    <main className="relative w-full min-h-screen pt-24 pb-12 overflow-x-hidden bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200">
      
      {/* --- CENTERED HEADER SECTION --- */}
      <section className="relative px-4 max-w-4xl mx-auto mb-20 sm:mb-40 text-center z-10 flex flex-col items-center">
        <ScrollReveal direction="down" className="flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 tracking-widest uppercase mb-8">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span className="hidden sm:inline">Pediatrician Approved & Organic</span>
          <span className="sm:hidden">100% Organic</span>
        </ScrollReveal>

        {/* Scaled text for mobile */}
        <ScrollReveal direction="down">
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-widest uppercase text-gradient drop-shadow-[0_0_30px_rgba(244,114,182,0.4)] opacity-80 mb-6">
            Gentle Care Essentials
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.4} direction="up">
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
            {/* UPDATED: goat -> donkey */}
            Nurture your baby's delicate skin with the healing power of farm-fresh donkey milk. Our pH-balanced formulas are designed to soothe eczema and protect the natural skin barrier. Trusted by over 10,000 parents nationwide.
          </p>
        </ScrollReveal>
      </section>

      {/* --- ROW 1 SECTION --- */}
      <section ref={row1Ref} className="relative mb-28 sm:mb-56 w-full">
        <RowGuide containerRef={row1Ref} direction="rtl" vPos="top" />
        {/* UPDATED GRID: grid-cols-2 for mobile, gap-4 for mobile spacing */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-12 relative z-10">
          {products.slice(0, 3).map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </section>

      {/* --- ROW 2 SECTION --- */}
      <section ref={row2Ref} className="relative mb-28 sm:mb-48 w-full">
        <RowGuide containerRef={row2Ref} direction="ltr" vPos="top" />
        {/* UPDATED GRID: grid-cols-2 for mobile, gap-4 for mobile spacing */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-12 relative z-10">
          {products.slice(3, 6).map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
        <RowGuide containerRef={row2Ref} direction="rtl" vPos="bottom" />
      </section>

      <div className="h-20 sm:h-40" />
    </main>
  );
}

// --- PRODUCT CARD COMPONENT (MOBILE RESPONSIVE & TOUCH READY) ---
function ProductCard({ product }: { product: any }) {
  return (
    <ScrollReveal direction="up">
      {/* Added `group cursor-pointer`, `active:` variants, and scaled padding for mobile */}
      <div className="glass card-premium rounded-3xl sm:rounded-[2.5rem] p-3 sm:p-8 group cursor-pointer hover:-translate-y-3 active:-translate-y-2 hover:shadow-[0_0_40px_rgba(244,114,182,0.2)] active:shadow-[0_0_40px_rgba(244,114,182,0.3)] transition-all duration-500 flex flex-col h-full bg-white/40 backdrop-blur-2xl">
        
        {/* Scaled Image Container for mobile */}
        <div className="w-full h-32 sm:h-56 rounded-2xl sm:rounded-3xl mb-3 sm:mb-6 relative overflow-hidden border border-white/50 bg-white/20 shadow-inner">
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-md px-2 py-1 sm:px-4 sm:py-1.5 rounded-full text-[9px] sm:text-xs font-bold text-gray-800 z-20 shadow-sm">
            {product.tag}
          </div>
          {/* Added `group-active:scale-110` for touch screen image zooming */}
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover group-hover:scale-110 group-active:scale-110 transition-transform duration-700" 
          />
        </div>

        <div className="flex-grow flex flex-col">
          {/* Scaled Title & 2-line clamp for mobile safety */}
          <h3 className="text-[13px] sm:text-2xl leading-snug font-bold text-gray-900 mb-1 sm:mb-3 line-clamp-2 sm:line-clamp-none">
            {product.name}
          </h3>
          
          {/* Scaled Stars */}
          <div className="flex text-pink-400 mb-2 sm:mb-4 gap-[2px]">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-5 sm:h-5 fill-current" />)}
          </div>
          
          {/* Scaled Price */}
          <p className="text-sm sm:text-xl font-bold text-gray-900 mb-3 sm:mb-8 mt-auto">{product.price}</p>
        </div>

        {/* Hover/Active-to-Gradient Button, Scaled down for mobile */}
        <button className="w-full relative overflow-hidden px-2 py-2 sm:px-8 sm:py-4 rounded-xl sm:rounded-full font-bold bg-white text-gray-900 border-2 border-gray-100 shadow-md transition-all duration-500 group-hover:text-white group-active:text-white flex items-center justify-center gap-1 sm:gap-2">
          {/* The gradient layer activates on hover (desktop) OR active (touch) */}
          <div className="absolute inset-0 bg-theme-gradient opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 z-0"></div>
          <span className="relative z-10 flex items-center gap-1 sm:gap-2 text-[10px] sm:text-base">
            <span className="hidden sm:inline">Add to Cart</span>
            <span className="sm:hidden">Add</span> {/* Shortened text on mobile so it doesn't break limits */}
            <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 group-hover:translate-x-1 sm:group-hover:translate-x-2 group-active:translate-x-1 sm:group-active:translate-x-2 transition-transform" />
          </span>
        </button>
      </div>
    </ScrollReveal>
  );
}