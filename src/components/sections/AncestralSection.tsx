"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Sparkles, History, Droplets, ArrowRight } from "lucide-react";

export default function AncestralSection() {
  return (
    <section className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#fce4a4] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 -z-10"></div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#f48f98] rounded-full mix-blend-multiply filter blur-[120px] opacity-30 -z-10"></div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT SIDE: The Live Floating Island Video */}
        <ScrollReveal direction="right" className="relative w-full h-[450px] md:h-[600px] flex items-center justify-center pointer-events-none order-2 md:order-1">
          <motion.div
            className="absolute z-10 w-[120%] h-[120%]"
            animate={{ 
              y: [-15, 15, -15], 
              rotate: [-1, 1, -1] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 6, 
              ease: "easeInOut" 
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain drop-shadow-[0_40px_40px_rgba(0,0,0,0.2)]"
              src="/assets/floating-island.webm"
            />
          </motion.div>
        </ScrollReveal>

        {/* RIGHT SIDE: Lead-Gen Focused Text */}
        <ScrollReveal direction="left" className="flex flex-col justify-center order-1 md:order-2">
          
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/60 border border-white/80 text-[#eb3f80] font-bold text-sm tracking-widest uppercase mb-6 shadow-sm backdrop-blur-md w-max">
            <History className="w-4 h-4" />
            The Ancient Secret
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
            <TextReveal text="Ancient Wisdom." />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f48f98] to-[#eb3f80]">
              <TextReveal text="Instant Relief." delay={0.2} />
            </span>
          </h2>

          <div className="glass card-premium p-6 sm:p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(244,143,152,0.15)] mb-8">
            <p className="text-xl text-gray-900 leading-relaxed font-bold mb-3">
              Donkey milk isn't a trend—it's a centuries-old remedy.
            </p>
            <p className="text-md text-gray-700 leading-relaxed font-medium">
              Rich in essential vitamins and perfectly pH-balanced, it naturally soothes irritation, clears eczema, and locks in moisture. Give your baby the purest, chemical-free care known to history.
            </p>
          </div>

          {/* Quick Benefit Facts */}
          <ul className="space-y-4 mb-10">
            {[
              { icon: Sparkles, title: "The Royal Standard", desc: "The exact ingredient ancient queens used to heal sensitive skin." },
              { icon: Droplets, title: "100% Biocompatible", desc: "The closest natural alternative to mother's milk. Safe from day one." }
            ].map((item, i) => (
              <li key={i} className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#fce4a4] to-[#f48f98] flex items-center justify-center text-[#eb3f80] shrink-0 mt-1 shadow-md">
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-bold text-gray-900">{item.title}</h4>
                  <p className="text-gray-700 font-medium">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* LEAD GENERATION FORM */}
          <div className="bg-white/50 backdrop-blur-md p-2 rounded-full border border-white/80 shadow-[0_10px_30px_rgba(235,63,128,0.1)]">
            <form className="flex flex-col sm:flex-row gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter email for a Free Sample..." 
                className="flex-1 px-6 py-3 rounded-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-500 font-medium"
                required
              />
              <button 
                type="submit"
                className="bg-gradient-to-r from-[#f48f98] to-[#eb3f80] text-white px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group whitespace-nowrap"
              >
                Claim Offer
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </ScrollReveal>

      </div>
    </section>
  );
}