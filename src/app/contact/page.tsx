// src/app/contact/page.tsx
"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-24 pb-12 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: INFO & FORM */}
          <ScrollReveal direction="right">
            {/* Scaled text for mobile and added TextReveal for consistency */}
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight">
              <TextReveal text="Say" /> <span className="text-gradient">Hello.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-12 font-medium">
              Have a question about our ingredients or your order? We're here to help.
            </p>
            
            {/* UPDATED: Contact Info wrapped in Glass Cards with Touch/Hover Effects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 sm:mb-12">
              {/* Email Card */}
              <div className="glass card-premium p-4 sm:p-6 rounded-2xl group cursor-pointer hover:-translate-y-2 active:-translate-y-1 hover:shadow-[0_0_25px_rgba(96,165,250,0.3)] active:shadow-[0_0_25px_rgba(96,165,250,0.4)] transition-all duration-300 flex items-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-theme-gradient opacity-0 group-hover:opacity-10 group-active:opacity-10 transition-opacity duration-300 -z-10"></div>
                <div className="w-12 h-12 shrink-0 glass rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-gradient-to-br group-hover:from-blue-400 group-hover:to-purple-500 group-hover:text-white group-active:bg-gradient-to-br group-active:from-blue-400 group-active:to-purple-500 group-active:text-white transition-all shadow-md">
                  <Mail size={20}/>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase text-gray-400 group-hover:text-blue-500 group-active:text-blue-500 transition-colors">Email us</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900">hello@goatbaby.com</p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="glass card-premium p-4 sm:p-6 rounded-2xl group cursor-pointer hover:-translate-y-2 active:-translate-y-1 hover:shadow-[0_0_25px_rgba(244,114,182,0.3)] active:shadow-[0_0_25px_rgba(244,114,182,0.4)] transition-all duration-300 flex items-center gap-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-theme-gradient opacity-0 group-hover:opacity-10 group-active:opacity-10 transition-opacity duration-300 -z-10"></div>
                <div className="w-12 h-12 shrink-0 glass rounded-xl flex items-center justify-center text-pink-500 group-hover:bg-gradient-to-br group-hover:from-purple-400 group-hover:to-pink-500 group-hover:text-white group-active:bg-gradient-to-br group-active:from-purple-400 group-active:to-pink-500 group-active:text-white transition-all shadow-md">
                  <Phone size={20}/>
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs font-bold uppercase text-gray-400 group-hover:text-pink-500 group-active:text-pink-500 transition-colors">Call us</p>
                  <p className="text-sm sm:text-lg font-bold text-gray-900">1-800-GOAT-BBY</p>
                </div>
              </div>
            </div>

            {/* UPDATED: Form scaling, grid layout for inputs on desktop, and glowing button */}
            <form className="glass p-6 sm:p-8 rounded-3xl sm:rounded-[2.5rem] border-white/60 space-y-4 shadow-xl hover:shadow-[0_0_40px_rgba(96,165,250,0.15)] transition-shadow duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full px-5 py-4 rounded-xl sm:rounded-2xl bg-white/50 border border-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-sm sm:text-base text-gray-800 placeholder-gray-500" />
                <input type="email" placeholder="Email Address" className="w-full px-5 py-4 rounded-xl sm:rounded-2xl bg-white/50 border border-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all text-sm sm:text-base text-gray-800 placeholder-gray-500" />
              </div>
              <textarea placeholder="How can we help?" rows={4} className="w-full px-5 py-4 rounded-xl sm:rounded-2xl bg-white/50 border border-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all text-sm sm:text-base text-gray-800 placeholder-gray-500 resize-none" />
              
              <button className="w-full relative overflow-hidden group bg-white text-gray-900 py-4 rounded-xl sm:rounded-2xl font-bold shadow-md hover:shadow-[0_0_25px_rgba(244,114,182,0.5)] active:scale-[0.98] transition-all flex items-center justify-center gap-2 border-2 border-gray-100 border-transparent">
                <div className="absolute inset-0 bg-theme-gradient opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
                <span className="relative z-10 flex items-center gap-2 text-white sm:text-gray-900 sm:group-hover:text-white transition-colors duration-300">
                  Send Message <Send size={18} className="group-hover:translate-x-1 group-active:translate-x-1 transition-transform"/>
                </span>
              </button>
            </form>
          </ScrollReveal>

        {/* RIGHT: LIVE MAP INTEGRATION */}
          <ScrollReveal direction="left" className="lg:sticky lg:top-32 mt-8 lg:mt-0">
            {/* ADDED: 'group' class to trigger child animations.
              UPDATED: Replaced the standard shadow with an intense pink/purple glowing shadow on hover.
            */}
            <div className="p-3 sm:p-4 rounded-3xl sm:rounded-[3rem] border border-white/60 shadow-2xl overflow-hidden h-[400px] sm:h-[600px] relative group hover:shadow-[0_0_50px_rgba(244,114,182,0.4)] transition-all duration-500">
              
              {/* Default Glass Background - Fades OUT on hover */}
              <div className="absolute inset-0 glass transition-opacity duration-500 group-hover:opacity-0 z-0"></div>
              
              {/* Hover Gradient Background - Fades IN on hover */}
              <div className="absolute inset-0 bg-theme-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

              {/* Added 'relative z-10' and a white background placeholder to keep the map solid over the gradient */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5367621182287!2d80.24151331529328!3d13.06516699079509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666687009383%3A0xc6c764e037cc5748!2sNungambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1683000000000!5m2!1sen!2sin"
                className="w-full h-full rounded-2xl sm:rounded-[2.5rem] grayscale-[20%] contrast-[1.1] opacity-90 relative z-10 bg-white"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
              />
              
              {/* Flagship Farm Floating Badge (Added z-20 to ensure it stays on top) */}
              <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 glass px-4 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-2xl border-white/80 shadow-lg flex items-center gap-2 sm:gap-3 w-max backdrop-blur-xl bg-white/70 z-20 group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
                <p className="font-bold text-gray-800 text-xs sm:text-base">Visit Our Flagship Farm</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </main>
  );
}