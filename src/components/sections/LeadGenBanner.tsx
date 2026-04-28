// src/components/sections/LeadGenBanner.tsx
"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import Image from "next/image"; 
import { Gift, ArrowRight } from "lucide-react";

export default function LeadGenBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <ScrollReveal direction="up">
        {/* The Banner Container - Stacks perfectly on mobile, Side-by-Side on Desktop */}
        <div className="relative overflow-hidden rounded-[2.5rem] glass shadow-xl border-2 border-white/60 bg-white/30 backdrop-blur-xl flex flex-col lg:flex-row items-center lg:items-start justify-between p-6 md:p-12 gap-10">
          
          {/* UPDATED: Decorative Glowing Orbs to match sunset theme */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#f48f98] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#fce4a4] rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

          {/* LEFT SIDE: Product Value Proposition (Always on top for mobile) */}
          <div className="relative z-10 flex-1 w-full text-center lg:text-left max-w-2xl lg:mt-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white mb-6 shadow-sm">
              {/* UPDATED: Gift icon color */}
              <Gift className="w-4 h-4 text-[#eb3f80]" />
              <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Newborn Welcome Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Unlock Your <span className="text-gradient">Free Newborn Care Kit</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-700 font-bold mb-4">
              Switch to the world's most ancient, gentle skincare.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-0">
              Join thousands of moms discovering the unmatched purity of Donkey Milk. Incredibly close to human breast milk in composition and pH, it is rich in Vitamins A, B, C, D, and E to naturally repair and protect the most delicate skin. Enter your email to get 15% off your first order plus a complimentary travel-size <span className="font-semibold text-[#eb3f80]">Donkey Milk Diaper Balm</span>.
            </p>
          </div>

          {/* RIGHT SIDE: Image + Form Stack (Stacks directly below text on mobile) */}
          <div className="relative z-10 w-full lg:w-[420px] flex flex-col gap-6 shrink-0">
            
            {/* 1. Image on top of the form */}
            <div className="relative w-full h-56 sm:h-72 lg:h-64 rounded-[2rem] overflow-hidden shadow-lg border-2 border-white/80 group cursor-pointer">
              <Image 
                src="/assets/story.png" 
                alt="Nature's gentlest cure for newborns" 
                fill 
                className="object-cover group-hover:scale-105 group-active:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
            </div>

            {/* 2. Input and Button directly below the image */}
            {/* UPDATED: Card hover shadow colors */}
            <div className="w-full glass p-6 md:p-8 rounded-3xl bg-white/50 border border-white shadow-sm hover:shadow-[0_0_30px_rgba(244,143,152,0.2)] active:shadow-[0_0_30px_rgba(244,143,152,0.3)] transition-shadow duration-500">
              <form 
                className="flex flex-col gap-5" 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Lead captured! Ready to send the promo code.");
                }}
              >
                <div className="space-y-2">
                  <label htmlFor="promo-email" className="text-sm font-bold text-gray-700 ml-2">
                    Where should we send your kit & discount?
                  </label>
                  
                  {/* UPDATED: Neumorphic Input Field */}
                  <input 
                    id="promo-email"
                    type="email" 
                    required
                    placeholder="mama@example.com" 
                    className="w-full px-6 py-4 rounded-full bg-white/60 shadow-[inset_5px_5px_10px_rgba(0,0,0,0.06),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] border border-transparent focus:outline-none focus:shadow-[0_0_15px_rgba(244,143,152,0.4),inset_5px_5px_10px_rgba(0,0,0,0.05),inset_-5px_-5px_10px_rgba(255,255,255,0.8)] transition-all duration-300 text-gray-800 placeholder-gray-500"
                  />
                </div>
                
                {/* UPDATED: Button hover/active shadows to match sunset pink */}
                <Button variant="primary" type="submit" className="w-full bg-theme-gradient text-white border-none py-4 text-lg shadow-lg hover:shadow-[0_0_20px_rgba(235,63,128,0.5)] active:shadow-[0_0_25px_rgba(235,63,128,0.7)] active:scale-[0.98] flex justify-center items-center gap-2 group transition-all duration-300">
                  Claim My Free Kit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 group-active:translate-x-1 transition-transform" />
                </Button>
              </form>
              <p className="text-xs text-center text-gray-500 mt-5 leading-relaxed">
                By claiming, you agree to receive offers. <br className="hidden sm:block" /> Complimentary balm available while stocks last.
              </p>
            </div>
            
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}