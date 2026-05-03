"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Sparkles, History, Droplets } from "lucide-react";

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

        {/* RIGHT SIDE: Ancestral Roots Text */}
        <ScrollReveal direction="left" className="flex flex-col justify-center order-1 md:order-2">
          
          <span className="inline-flex items-center gap-2 py-1 px-4 rounded-full bg-white/60 border border-white/80 text-[#eb3f80] font-bold text-sm tracking-widest uppercase mb-6 shadow-sm backdrop-blur-md w-max">
            <History className="w-4 h-4" />
            Our Ancestral Roots
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] mb-6">
            <TextReveal text="Ancient Wisdom." />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f48f98] to-[#eb3f80]">
              <TextReveal text="Modern Purity." delay={0.2} />
            </span>
          </h2>

          <div className="glass card-premium p-6 sm:p-8 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_10px_40px_rgba(244,143,152,0.15)] mb-8">
            <p className="text-lg text-gray-800 leading-relaxed font-medium mb-4">
              Long before modern labs and synthetic chemicals, our ancestors knew the secret to healing. For thousands of years—dating back to the queens of ancient Egypt—donkey milk has been revered as a sacred, healing elixir.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed font-medium">
              We are returning to those roots. By harnessing the time-tested magic of nature, we bring you skincare that is as raw, pure, and untainted as the earth it comes from.
            </p>
          </div>

          {/* Quick Ancestral Facts */}
          <ul className="space-y-4">
            {[
              { icon: Sparkles, title: "The Royal Standard", desc: "Used by ancient royalty to preserve youth and soothe sensitive skin." },
              { icon: Droplets, title: "Nature's Perfect Match", desc: "The closest natural composition to human mother's milk." }
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

        </ScrollReveal>

      </div>
    </section>
  );
}