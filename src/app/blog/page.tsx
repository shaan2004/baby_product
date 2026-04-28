// src/app/blog/page.tsx
"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";
import { ArrowUpRight, Clock, Tag } from "lucide-react";

const posts = [
  { title: "Why Donkey Milk is the Best for Eczema", category: "Skin Care", time: "5 min read", img: "/assets/milk.jpg" },
  { title: "The Bedtime Routine Every Mom Needs", category: "Wellness", time: "8 min read", img: "/assets/bedtime.jpg" },
  { title: "Sourcing Organic: What to Look For", category: "Sourcing", time: "6 min read", img: "/assets/nature.jpg" },
  { title: "Understanding Your Baby's Skin pH", category: "Science", time: "10 min read", img: "/assets/php.jpg" },
  { title: "Handcrafted vs Commercial Skincare", category: "Handmade", time: "4 min read", img: "/assets/handmade.jpg" },
  { title: "Essential Oils: Safe or Not?", category: "Education", time: "7 min read", img: "/assets/oil.png" }
];

export default function BlogPage() {
  return (
    // UPDATED: Used the new milky pastel gradient background
    <main className="pt-24 pb-20 bg-gradient-to-br from-[#fdf4d6] via-[#fbe6e8] to-[#fad1e1] min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        
        <header className="text-center mb-16 sm:mb-20">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-gray-900 mb-6">
            The <span className="text-gradient">Daily Bleat.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Expert advice, farm stories, and tips for your little one's skin journey.
          </p>
        </header>

        {/* Forced grid-cols-2 for mobile, scaling up to 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-10">
          {posts.map((post, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              {/* UPDATED: Hover/Active glowing shadows changed to the new hot pink/coral theme */}
              <div className="glass card-premium rounded-3xl sm:rounded-[2.5rem] p-3 sm:p-4 group cursor-pointer hover:-translate-y-4 active:-translate-y-2 hover:shadow-[0_0_40px_rgba(235,63,128,0.3)] active:shadow-[0_0_40px_rgba(235,63,128,0.4)] transition-all duration-500 bg-white/20 backdrop-blur-2xl h-full flex flex-col">
                
                {/* Blog Image - Responsive Height */}
                <div className="relative h-32 sm:h-64 w-full rounded-2xl sm:rounded-[2rem] overflow-hidden mb-4 sm:mb-6 shadow-inner border border-white/50">
                  {/* group-active:scale-110 for touch zoom */}
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 group-active:scale-110 transition-transform duration-700" />
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4 glass px-2 py-1 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-1 shadow-sm">
                    {/* UPDATED: Tag icon color to #eb3f80 */}
                    <Tag size={12} className="text-[#eb3f80] w-3 h-3 sm:w-4 sm:h-4" /> 
                    <span className="hidden sm:inline">{post.category}</span> {/* Hide text on small screens to save space */}
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 sm:px-4 pb-2 sm:pb-4 flex flex-col flex-grow">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-[10px] sm:text-xs font-bold text-gray-500 mb-2 sm:mb-3">
                    <span className="flex items-center gap-1"><Clock size={12} className="sm:w-[14px] sm:h-[14px]"/> {post.time}</span>
                    <span className="hidden sm:block">April 15, 2026</span>
                  </div>
                  
                  {/* UPDATED: group-active/hover text gradients using the client's custom hex colors */}
                  <h3 className="text-sm sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#f48f98] group-hover:to-[#eb3f80] group-active:text-transparent group-active:bg-clip-text group-active:bg-gradient-to-r group-active:from-[#f48f98] group-active:to-[#eb3f80] transition-all duration-300 line-clamp-3 sm:line-clamp-none">
                    {post.title}
                  </h3>
                  
                  <div className="mt-auto flex justify-between items-center">
                    {/* Hide the "Read Story" text on mobile to keep the 2-col UI clean */}
                    {/* UPDATED: group-active/hover text gradients using the client's custom hex colors */}
                    <span className="hidden sm:block text-sm font-bold text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#f48f98] group-hover:to-[#eb3f80] group-active:text-transparent group-active:bg-clip-text group-active:bg-gradient-to-r group-active:from-[#f48f98] group-active:to-[#eb3f80] transition-all duration-300">
                      Read Story
                    </span>
                    
                    {/* UPDATED: group-active/hover background gradients for the button */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 glass rounded-full flex items-center justify-center ml-auto sm:ml-0 group-hover:bg-gradient-to-br group-hover:from-[#fce4a4] group-hover:via-[#f48f98] group-hover:to-[#eb3f80] group-hover:text-white group-active:bg-gradient-to-br group-active:from-[#fce4a4] group-active:via-[#f48f98] group-active:to-[#eb3f80] group-active:text-white transition-all shadow-md">
                      <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </section>
    </main>
  );
}