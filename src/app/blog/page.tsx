// src/app/blog/page.tsx
"use client";

import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import Image from "next/image";
import { ArrowUpRight, Clock, Tag } from "lucide-react";

const posts = [
  { title: "Why Goat Milk is the Best for Eczema", category: "Skin Care", time: "5 min read", img: "/assets/milk.jpg" },
  { title: "The Bedtime Routine Every Mom Needs", category: "Wellness", time: "8 min read", img: "/assets/bedtime.jpg" },
  { title: "Sourcing Organic: What to Look For", category: "Sourcing", time: "6 min read", img: "/assets/nature.jpg" },
  { title: "Understanding Your Baby's Skin pH", category: "Science", time: "10 min read", img: "/assets/php.jpg" },
  { title: "Handcrafted vs Commercial Skincare", category: "Handmade", time: "4 min read", img: "/assets/handmade.jpg" },
  { title: "Essential Oils: Safe or Not?", category: "Education", time: "7 min read", img: "/assets/oil.png" }
];

export default function BlogPage() {
  return (
    <main className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-4 py-20">
        
        <header className="text-center mb-20">
          <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6">The <span className="text-gradient">Daily Bleat.</span></h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Expert advice, farm stories, and tips for your little one's skin journey.</p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <div className="glass card-premium rounded-[2.5rem] p-4 group hover:-translate-y-4 transition-all duration-500 bg-white/20 backdrop-blur-2xl h-full flex flex-col">
                
                {/* Blog Image */}
                <div className="relative h-64 w-full rounded-[2rem] overflow-hidden mb-6 shadow-inner border border-white/50">
                  <Image src={post.img} alt={post.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-sm">
                    <Tag size={12} className="text-pink-500" /> {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-4 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Clock size={14}/> {post.time}</span>
                    <span>April 15, 2026</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-500 transition-colors">{post.title}</h3>
                  
                  <div className="mt-auto flex justify-between items-center">
                    <span className="text-sm font-bold text-gray-900 group-hover:text-gradient transition-colors">Read Story</span>
                    <div className="w-10 h-10 glass rounded-full flex items-center justify-center group-hover:bg-theme-gradient group-hover:text-white transition-all shadow-md">
                      <ArrowUpRight size={18} />
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