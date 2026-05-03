"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatBgRef = useRef<HTMLDivElement>(null);
  const fallBgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const storyCardRef = useRef<HTMLDivElement>(null);
  
  // New Refs for the Goat Section
  const goatSectionRef = useRef<HTMLDivElement>(null);
  const goatTextRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      // --- SEQUENCE 1: The Floating to Falling Transition ---
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", 
          end: "+=200%",    // Pins the hero for 2 screen heights
          scrub: 1,         
          pin: true,        
        }
      });

      tl.to(floatBgRef.current, { scale: 1.1, duration: 2 })
        .to(textRef.current, { opacity: 0, y: -50, duration: 1 }, "<0.5")
        .to(fallBgRef.current, { opacity: 1, duration: 1.5 }, "<0.5")
        .to(fallBgRef.current, { scale: 1.25, y: "-15%", duration: 2 });


      // --- SEQUENCE 2: The "Our Story" Texture Reveal ---
      gsap.from(storyCardRef.current, {
        scrollTrigger: {
          trigger: ".story-section",
          start: "top 85%", 
          end: "center center",
          scrub: true,
        },
        y: 100,
        opacity: 0,
        scale: 0.95,
      });

      // --- SEQUENCE 3: The Goat Section Reveal ---
      // This creates a beautiful 3D tilt and slide-up effect for your 3D text image
      gsap.from(goatTextRef.current, {
        scrollTrigger: {
          trigger: goatSectionRef.current,
          start: "top 75%",
          end: "center center",
          scrub: 1.5, // slightly slower scrub for a heavier, premium feel
        },
        y: 150,
        opacity: 0,
        scale: 0.8,
        rotationX: 25, // Gives it a 3D tilt as it comes in
        transformOrigin: "bottom center"
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#fdf4d6]"> {/* Soft cream background behind everything */}
      
      {/* --- 1. PINNED HERO SECTION (The Cloud Drop) --- */}
      <section 
        ref={containerRef} 
        className="relative w-full h-screen overflow-hidden bg-black"
      >
        {/* Layer 1: Floating */}
        <div 
          ref={floatBgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/floating.png')" }} 
        />

        {/* Layer 2: Falling */}
        <div 
          ref={fallBgRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0"
          style={{ backgroundImage: "url('/assets/falling.png')" }} 
        />

        {/* Hero Text */}
        <div 
          ref={textRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 pointer-events-none"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-widest uppercase drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            Powerful
          </h1>
          <h2 className="text-5xl md:text-7xl font-serif italic mt-4 drop-shadow-md">
            & Gentle
          </h2>
        </div>
      </section>

      {/* --- 2. MOTHER SECTION (Textured Paper) --- */}
      <section 
        className="story-section relative w-full min-h-screen flex items-center justify-center py-32 px-6 shadow-[0_-20px_50px_rgba(0,0,0,0.3)] z-10"
        style={{ 
          backgroundImage: "url('/assets/texture.png')", 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          backgroundAttachment: "fixed" // Parallax effect
        }}
      >
        <div 
          ref={storyCardRef}
          className="max-w-3xl glass p-12 md:p-16 rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.1)] text-center"
        >
          <span className="text-[#eb3f80] font-bold tracking-widest uppercase text-sm mb-4 block">
            Our Origin
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Radical Transparency. <br/> Hide Nothing.
          </h2>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-medium">
            Just like the purity of the clouds, our skincare is formulated with absolute transparency. We use ancient, gentle ingredients merged with modern science to create the perfect harmony for delicate skin.
          </p>
        </div>
      </section>

      {/* --- 3. GOAT MILK SECTION (Grassland) --- */}
      <section 
        ref={goatSectionRef}
        className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.4)]"
        style={{
          backgroundImage: "url('/assets/goat1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed" // Parallax effect
        }}
      >
        {/* Dark gradient overlay so the text image pops better against the bright grass */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>

        {/* The 3D Stylized Text Image Container */}
        <div 
          className="relative z-10 w-full max-w-5xl px-6 mt-32"
          style={{ perspective: "1000px" }} // Required for the 3D rotationX in GSAP
        >
          <img 
            ref={goatTextRef}
            src="/assets/goat-text.png" 
            alt="First Goat Milk Baby Product" 
            className="w-full h-auto rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] border-4 border-white/20"
          />
        </div>
      </section>
      
    </div>
  );
}