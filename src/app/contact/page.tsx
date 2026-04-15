"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-24 pb-12 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT: INFO & FORM */}
          <ScrollReveal direction="right">
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-6">Say <span className="text-gradient">Hello.</span></h1>
            <p className="text-lg text-gray-700 mb-12">Have a question about our ingredients or your order? We're here to help.</p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-theme-gradient group-hover:text-white transition-all shadow-md"><Mail size={20}/></div>
                <div><p className="text-xs font-bold uppercase text-gray-400">Email us</p><p className="text-lg font-bold">hello@goatbaby.com</p></div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center text-pink-500 group-hover:bg-theme-gradient group-hover:text-white transition-all shadow-md"><Phone size={20}/></div>
                <div><p className="text-xs font-bold uppercase text-gray-400">Call us</p><p className="text-lg font-bold">1-800-GOAT-BBY</p></div>
              </div>
            </div>

            <form className="glass p-8 rounded-[2.5rem] border-white/60 space-y-4 shadow-xl">
              <input type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all" />
              <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all" />
              <textarea placeholder="How can we help?" rows={4} className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all" />
              <button className="w-full bg-theme-gradient text-white py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all">
                Send Message <Send size={18}/>
              </button>
            </form>
          </ScrollReveal>

          {/* RIGHT: LIVE MAP INTEGRATION */}
          <ScrollReveal direction="left" className="lg:sticky lg:top-32">
            <div className="glass p-4 rounded-[3rem] border-white/60 shadow-2xl overflow-hidden h-[600px] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1713120000000!5m2!1sen!2sus" 
                className="w-full h-full rounded-[2.5rem] grayscale-[20%] contrast-[1.1] opacity-80"
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 glass px-6 py-4 rounded-2xl border-white/80 shadow-lg flex items-center gap-3 w-max">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <p className="font-bold text-gray-800">Visit Our Flagship Farm</p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </main>
  );
}