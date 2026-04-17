// src/app/about/page.tsx
"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import LeadGenBanner from "@/components/sections/LeadGenBanner"; 
import Image from "next/image";
import { Heart, Shrub, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    // UPDATED: Added the denser gradient background (blue-200, purple-100, pink-200)
    <main className="pt-24 pb-20 overflow-hidden bg-gradient-to-br from-blue-200 via-purple-100 to-pink-200 min-h-screen">
      {/* SECTION 1: MISSION HERO */}
      <section className="px-4 max-w-7xl mx-auto py-20 text-center flex flex-col items-center justify-center">
        <ScrollReveal direction="down" className="glass card-premium px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 uppercase mb-8 inline-block hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-all">
          Our Heart & Soul
        </ScrollReveal>
        
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 leading-tight mb-8 flex flex-col items-center">
          <TextReveal text="Pure Love," />
          <span className="text-gradient block">Pure Ingredients.</span>
        </h1>
        
        <ScrollReveal delay={0.4} direction="up">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            We didn't start as a brand; we started as parents looking for a cure. 
            Today, we share the healing power of donkey milk with the world.
          </p>
        </ScrollReveal>
      </section>

      {/* SECTION 2: THE SOURCE (THE FARM) */}
      <section className="py-12 sm:py-24 relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
          <ScrollReveal direction="right" className="order-2 md:order-1 relative h-64 sm:h-[500px] glass card-premium rounded-[2rem] sm:rounded-[3rem] overflow-hidden hover:-translate-y-3 active:-translate-y-2 hover:shadow-[0_0_40px_rgba(244,114,182,0.3)] active:shadow-[0_0_40px_rgba(244,114,182,0.3)] transition-all duration-500 bg-white/30 backdrop-blur-xl">
             <Image src="/assets/donkey.jpg" alt="Our happy donkeys" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-blue-200/40 to-transparent" />
          </ScrollReveal>
          
          <ScrollReveal direction="left" className="order-1 md:order-2 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Ethically Sourced, <br className="hidden sm:block"/><span className="text-pink-500">Happily Raised.</span></h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 mx-auto md:mx-0 max-w-md">Our donkeys graze on organic pastures in the rolling hills. We believe that happy, stress-free donkeys produce the richest, most nutrient-dense milk.</p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="glass card-premium p-4 rounded-2xl group cursor-pointer hover:-translate-y-2 active:-translate-y-1 hover:shadow-[0_0_20px_rgba(96,165,250,0.4)] active:shadow-[0_0_20px_rgba(96,165,250,0.4)] transition-all duration-300 relative overflow-hidden">
                 <div className="absolute inset-0 bg-theme-gradient opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10"></div>
                 <p className="font-bold text-blue-500 group-hover:text-white group-active:text-white transition-colors">100% Organic</p>
                 <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 group-active:text-white/90 transition-colors">Non-GMO Feed</p>
              </div>
              <div className="glass card-premium p-4 rounded-2xl group cursor-pointer hover:-translate-y-2 active:-translate-y-1 hover:shadow-[0_0_20px_rgba(244,114,182,0.4)] active:shadow-[0_0_20px_rgba(244,114,182,0.4)] transition-all duration-300 relative overflow-hidden">
                 <div className="absolute inset-0 bg-theme-gradient opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 -z-10"></div>
                 <p className="font-bold text-pink-500 group-hover:text-white group-active:text-white transition-colors">Cruelty-Free</p>
                 <p className="text-xs sm:text-sm text-gray-600 group-hover:text-white/90 group-active:text-white/90 transition-colors">Ethical Milking</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: THE PROCESS */}
      <section className="py-16 sm:py-24 bg-white/20 backdrop-blur-sm border-y border-white/40">
        <div className="max-w-7xl mx-auto text-center px-0 sm:px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16">The Handcrafted Journey</h2>
          
          <div className="flex md:grid md:grid-cols-3 overflow-x-auto md:overflow-visible gap-6 px-4 pb-8 sm:pb-0 snap-x snap-mandatory hide-scrollbar">
            {[
              { icon: Heart, title: "Small Batches", desc: "Crafted by hand to ensure potency and freshness." },
              { icon: Shrub, title: "Botanical Blends", desc: "Infused with organic chamomile and lavender." },
              { icon: ShieldCheck, title: "Triple Tested", desc: "Every batch is tested for purity and pH balance." }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.2} direction="up" className="min-w-[85vw] sm:min-w-0 snap-center glass card-premium p-8 rounded-[2rem] hover:-translate-y-3 active:-translate-y-2 hover:shadow-[0_0_35px_rgba(244,114,182,0.3)] active:shadow-[0_0_35px_rgba(244,114,182,0.3)] transition-all duration-500 relative group cursor-pointer bg-white/30 backdrop-blur-xl overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-theme-gradient opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500 -z-10"></div>
                
                <div className="w-16 h-16 bg-theme-gradient group-hover:bg-white group-active:bg-white rounded-2xl flex items-center justify-center text-white group-hover:text-pink-500 group-active:text-pink-500 mb-6 group-hover:scale-110 group-active:scale-110 transition-all shadow-lg mx-auto">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-white group-active:text-white transition-colors">{step.title}</h3>
                <p className="text-gray-600 group-hover:text-white/90 group-active:text-white/90 leading-relaxed transition-colors">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Banner Section */}
      <div className="mb-12 mt-8">
        <LeadGenBanner />
      </div>

      {/* SECTION 4: SUSTAINABILITY VALUES */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4">
        <div className="card-premium py-24 px-6 sm:py-32 sm:px-16 rounded-3xl sm:rounded-[4rem] text-center overflow-hidden relative hover:-translate-y-3 active:-translate-y-2 hover:shadow-[0_0_50px_rgba(96,165,250,0.4)] transition-all duration-500 flex flex-col justify-center min-h-[500px]">
          
          <div className="absolute inset-0 w-full h-full z-0">
            <Image src="/assets/nature.jpg" alt="Sustainable Future" fill className="object-cover" />
            <div className="absolute inset-0 bg-gray-900/65 backdrop-blur-[2px]" />
          </div>
          
          <div className="absolute top-0 left-0 w-full h-2 bg-theme-gradient z-10" />
          
          <ScrollReveal direction="up" className="relative z-10 w-full">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">A Promise to the Future</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 drop-shadow-sm font-medium leading-relaxed">
              We use 100% recyclable glass and plant-based plastics. Because we aren't just protecting your baby—we're protecting the world they'll grow up in.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
              <span className="glass card-premium px-6 py-3 rounded-full font-bold text-white text-sm sm:text-lg border border-white/40 hover:-translate-y-1 hover:bg-theme-gradient hover:border-transparent transition-all cursor-pointer shadow-xl backdrop-blur-md bg-white/10">Zero Waste</span>
              <span className="glass card-premium px-6 py-3 rounded-full font-bold text-white text-sm sm:text-lg border border-white/40 hover:-translate-y-1 hover:bg-theme-gradient hover:border-transparent transition-all cursor-pointer shadow-xl backdrop-blur-md bg-white/10">Carbon Neutral</span>
              <span className="glass card-premium px-6 py-3 rounded-full font-bold text-white text-sm sm:text-lg border border-white/40 hover:-translate-y-1 hover:bg-theme-gradient hover:border-transparent transition-all cursor-pointer shadow-xl backdrop-blur-md bg-white/10">Plastic Positive</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}