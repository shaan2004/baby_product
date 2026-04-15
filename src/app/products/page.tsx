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

  const verticalClass = vPos === "top" ? "-top-24" : "-bottom-24";

  return (
    <div className={`absolute ${verticalClass} left-0 w-screen pointer-events-none z-20`}>
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
    { name: "Gentle Wash & Shampoo", price: "$18.00", tag: "Best Seller", image: "/assets/shampoo.png" },
    { name: "Soothing Diaper Balm", price: "$14.00", tag: "Must Have", image: "/assets/balm.png" },
    { name: "Calming Massage Oil", price: "$22.00", tag: "New", image: "/assets/oil.png" },
    { name: "Signature Daily Baby Lotion", price: "$24.00", tag: "Award Winning", image: "/assets/lotion.png" },
    { name: "Organic Baby Wash", price: "$18.00", tag: "Eco Friendly", image: "/assets/shampoo.png" },
    { name: "Nourishing Baby Oil", price: "$22.00", tag: "Pure", image: "/assets/oil.png" },
  ];

  return (
    <main className="relative w-full min-h-screen pt-24 pb-12 overflow-x-hidden">
      
      {/* --- CENTERED HEADER SECTION --- */}
      <section className="relative px-4 max-w-4xl mx-auto mb-40 text-center z-10 flex flex-col items-center">
        <ScrollReveal direction="down" className="flex items-center gap-2 glass px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 tracking-widest uppercase mb-8">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          Pediatrician Approved & Organic
        </ScrollReveal>

        <h1 className="text-6xl md:text-8xl font-extrabold text-gray-900 leading-[0.9] mb-6">
          <TextReveal text="Gentle Care" />
          <span className="text-gradient block mt-2">Essentials</span>
        </h1>

        <ScrollReveal delay={0.4} direction="up">
          <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto">
            Nurture your baby's delicate skin with the healing power of farm-fresh goat milk. Our pH-balanced formulas are designed to soothe eczema and protect the natural skin barrier. Trusted by over 10,000 parents nationwide.
          </p>
        </ScrollReveal>
      </section>

      {/* --- ROW 1 SECTION --- */}
      <section ref={row1Ref} className="relative mb-56 w-full">
        <RowGuide containerRef={row1Ref} direction="rtl" vPos="top" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {products.slice(0, 3).map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </section>

      {/* --- ROW 2 SECTION --- */}
      <section ref={row2Ref} className="relative mb-48 w-full">
        <RowGuide containerRef={row2Ref} direction="ltr" vPos="top" />
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          {products.slice(3, 6).map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
        <RowGuide containerRef={row2Ref} direction="rtl" vPos="bottom" />
      </section>

      <div className="h-40" />
    </main>
  );
}

// --- PRODUCT CARD COMPONENT (WITH PREMIUM GRADIENT BORDER & DEPTH) ---
function ProductCard({ product }: { product: any }) {
  return (
    <ScrollReveal direction="up">
      <div className="glass card-premium rounded-[2.5rem] p-8 group hover:-translate-y-3 transition-all duration-500 flex flex-col h-full bg-white/40 backdrop-blur-2xl">
        
        {/* Image Container with Inner Glass Look */}
        <div className="w-full h-56 rounded-3xl mb-6 relative overflow-hidden border border-white/50 bg-white/20 shadow-inner">
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-gray-800 z-20 shadow-sm">
            {product.tag}
          </div>
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className="object-cover group-hover:scale-110 transition-transform duration-700" 
          />
        </div>

        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
          <div className="flex text-pink-400 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
          </div>
          <p className="text-xl font-bold text-gray-900 mb-8">{product.price}</p>
        </div>

        {/* Hover-to-Gradient Button */}
        <button className="w-full relative overflow-hidden px-8 py-4 rounded-full font-bold bg-white text-gray-900 border-2 border-gray-100 shadow-md transition-all duration-500 hover:text-white group flex items-center justify-center gap-2">
          <div className="absolute inset-0 bg-theme-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
          <span className="relative z-10 flex items-center gap-2">
            Add to Cart
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </span>
        </button>
      </div>
    </ScrollReveal>
  );
}