// src/components/sections/LeadGenBanner.tsx
"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import Button from "@/components/ui/Button";
import { Gift, ArrowRight } from "lucide-react";

export default function LeadGenBanner() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
      <ScrollReveal direction="up">
        {/* The Banner Container */}
        <div className="relative overflow-hidden rounded-[2.5rem] glass shadow-xl border-2 border-white/60 bg-white/30 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between p-8 md:p-12 gap-8">
          
          {/* Decorative Glowing Orbs behind the content */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>

          {/* Left Side: Product Value Proposition */}
          <div className="relative z-10 flex-1 w-full text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-white mb-6 shadow-sm">
              <Gift className="w-4 h-4 text-pink-500" />
              <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Unlock Your <span className="text-gradient">Free Newborn Care Kit</span>
            </h2>
            
            <p className="text-lg text-gray-700 font-medium mb-2">
              Join 10,000+ happy moms. 
            </p>
            <p className="text-gray-600">
              Enter your email to get 15% off your first order plus a complimentary travel-size Goat Milk Diaper Balm.
            </p>
          </div>

          {/* Right Side: The Lead Capture Form */}
          <div className="relative z-10 w-full md:w-[450px] shrink-0 glass p-6 md:p-8 rounded-3xl bg-white/50 border border-white shadow-sm">
            <form 
              className="flex flex-col gap-4" 
              onSubmit={(e) => {
                e.preventDefault();
                // Add your form submission logic here (e.g., Mailchimp, Klaviyo, API call)
                alert("Lead captured! Ready to send the promo code.");
              }}
            >
              <div className="space-y-1">
                <label htmlFor="promo-email" className="text-sm font-bold text-gray-700 ml-2">
                  Where should we send your kit?
                </label>
                <input 
                  id="promo-email"
                  type="email" 
                  required
                  placeholder="mama@example.com" 
                  className="w-full px-6 py-4 rounded-full bg-white/80 border-2 border-transparent focus:border-pink-300 focus:outline-none focus:ring-4 focus:ring-pink-100 transition-all text-gray-800 placeholder-gray-400 shadow-inner"
                />
              </div>
              
              <Button variant="primary" type="submit" className="w-full bg-theme-gradient text-white border-none py-4 text-lg shadow-lg hover:shadow-pink-300/50 flex justify-center items-center gap-2 group">
                Claim My Free Kit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
            <p className="text-xs text-center text-gray-500 mt-4">
              By claiming, you agree to our privacy policy. No spam, ever.
            </p>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}