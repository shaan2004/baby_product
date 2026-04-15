// src/app/about/page.tsx
"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";
import { Heart, Shrub, ShieldCheck, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="pt-24 pb-20 overflow-hidden">
      {/* SECTION 1: MISSION HERO */}
      <section className="px-4 max-w-7xl mx-auto py-20 text-center">
        <ScrollReveal direction="down" className="glass card-premium px-4 py-1.5 rounded-full text-xs font-bold text-gray-700 uppercase mb-8 inline-block hover:-translate-y-1 transition-transform">
          Our Heart & Soul
        </ScrollReveal>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight mb-8">
          <TextReveal text="Pure Love," />
          <span className="text-gradient block">Pure Ingredients.</span>
        </h1>
        <ScrollReveal delay={0.4} direction="up">
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto font-medium leading-relaxed">
            We didn't start as a brand; we started as parents looking for a cure. 
            Today, we share the healing power of goat milk with the world.
          </p>
        </ScrollReveal>
      </section>

      {/* SECTION 2: THE SOURCE (THE FARM) */}
      <section className="py-24 relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right" className="relative h-[500px] glass card-premium rounded-[3rem] overflow-hidden hover:-translate-y-2 transition-transform duration-500 bg-white/30 backdrop-blur-xl">
             <Image src="/assets/goat.jpg" alt="Our happy goats" fill className="object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-blue-200/40 to-transparent" />
          </ScrollReveal>
          <ScrollReveal direction="left">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Ethically Sourced, <br/><span className="text-pink-500">Happily Raised.</span></h2>
            <p className="text-lg text-gray-700 mb-6">Our goats graze on organic pastures in the rolling hills. We believe that happy, stress-free goats produce the richest, most nutrient-dense milk.</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass card-premium p-4 rounded-2xl hover:-translate-y-1 transition-transform duration-300"><p className="font-bold text-blue-500">100% Organic</p><p className="text-sm">Non-GMO Feed</p></div>
              <div className="glass card-premium p-4 rounded-2xl hover:-translate-y-1 transition-transform duration-300"><p className="font-bold text-pink-500">Cruelty-Free</p><p className="text-sm">Ethical Milking</p></div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SECTION 3: THE PROCESS */}
      <section className="py-24 bg-white/20 backdrop-blur-sm border-y border-white/40">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-16">The Handcrafted Journey</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Small Batches", desc: "Crafted by hand to ensure potency and freshness." },
              { icon: Shrub, title: "Botanical Blends", desc: "Infused with organic chamomile and lavender." },
              { icon: ShieldCheck, title: "Triple Tested", desc: "Every batch is tested for purity and pH balance." }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.2} direction="up" className="glass card-premium p-8 rounded-[2rem] hover:-translate-y-3 transition-transform duration-500 relative group bg-white/30 backdrop-blur-xl">
                <div className="w-16 h-16 bg-theme-gradient rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SUSTAINABILITY VALUES */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="glass card-premium p-12 rounded-[4rem] text-center bg-white/40 backdrop-blur-2xl overflow-hidden relative hover:-translate-y-2 transition-transform duration-500">
          <div className="absolute top-0 left-0 w-full h-2 bg-theme-gradient" />
          <ScrollReveal direction="up">
            <h2 className="text-4xl font-bold mb-6">A Promise to the Future</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-10">We use 100% recyclable glass and plant-based plastics. Because we aren't just protecting your baby—we're protecting the world they'll grow up in.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <span className="glass card-premium px-6 py-2 rounded-full font-bold text-blue-600 hover:-translate-y-1 transition-transform">Zero Waste</span>
              <span className="glass card-premium px-6 py-2 rounded-full font-bold text-pink-600 hover:-translate-y-1 transition-transform">Carbon Neutral</span>
              <span className="glass card-premium px-6 py-2 rounded-full font-bold text-blue-600 hover:-translate-y-1 transition-transform">Plastic Positive</span>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}