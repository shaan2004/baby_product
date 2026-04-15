// src/components/animations/CrawlingGuide.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function CrawlingGuide() {
  const ref = useRef(null);
  
  // Track scroll progress specifically for the section this component is in
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Move baby from left to right across the screen
  const x = useTransform(scrollYProgress, [0.1, 0.9], ["-20%", "110%"]);
  
  // A slight waddle/rotation to simulate crawling movement
  const rotate = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 5, -5, 5, -5, 0]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
      <motion.div
        style={{ x, rotate }}
        className="absolute top-1/2 -translate-y-1/2 w-32 h-32 md:w-48 md:h-48"
      >
        <Image
          src="/assets/baby-crawling.png" 
          alt="Crawling Baby Guide"
          width={200}
          height={200}
          className="object-contain"
        />
        
        {/* Subtle "Trail" effect behind the baby */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-full h-1 bg-theme-gradient opacity-20 blur-md rounded-full" />
      </motion.div>
    </div>
  );
}