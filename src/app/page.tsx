// src/app/page.tsx
"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import HeroSection from "@/components/sections/HeroSection";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TextReveal from "@/components/animations/TextReveal";
import LeadGenBanner from "@/components/sections/LeadGenBanner";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { Star, ShieldCheck, Droplets, Leaf, ArrowRight, ChevronDown } from "lucide-react";

// --- INLINE INTERACTIVE FAQ COMPONENT ---
function InlineFaqCard({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="glass card-premium p-6 rounded-2xl cursor-pointer hover:bg-white/50 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(96,165,250,0.2)] transition-all duration-500"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-gray-900 pr-4">{question}</h3>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
          <ChevronDown className="text-blue-400 w-6 h-6 flex-shrink-0" />
        </motion.div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-700 mt-4 leading-relaxed border-t border-white/40 pt-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// --- NEW: THE HORIZONTAL PROCESS TIMELINE ---
function ProcessTimeline() {
  const targetRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] 
  });

  // Since we have 6 cards, the container is 600vw wide. 
  // To see the last card, we shift the container exactly 500vw to the left.
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-500vw"]);

  const steps = [
    { num: "01", title: "Ethical Sourcing", desc: "Our happy goats graze on organic pastures, ensuring the most nutrient-dense milk.", pos: "top-[15%]" },
    { num: "02", title: "Fresh Milking", desc: "Collected daily and immediately chilled to preserve vitamins A & E.", pos: "bottom-[15%]" },
    { num: "03", title: "Botanical Infusion", desc: "Slowly blended with calming chamomile and oat extracts in small batches.", pos: "top-[15%]" },
    { num: "04", title: "Curing & Testing", desc: "Cured for 6 weeks and triple-tested to guarantee a perfect pH match for baby skin.", pos: "bottom-[15%]" },
    { num: "05", title: "Gentle Formulation", desc: "Carefully pH balanced to perfectly match newborn tears and sensitive skin.", pos: "top-[15%]" },
    { num: "06", title: "Eco-Delivery", desc: "Sealed in 100% recyclable bottles and delivered fresh to your nursery.", pos: "bottom-[15%]" },
  ];

  return (
   
    <section ref={targetRef} className="relative h-[600vh] bg-blue-50/20">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Background Flowing Milk Video (Locked in center) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-80 pointer-events-none">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover scale-110 md:scale-100 mix-blend-multiply opacity-70"
            src="/assets/milk-wave.mp4"
          />
        </div>

        {/* FIXED TITLE: This is now outside the moving div so it stays perfectly centered! */}
       {/* FIXED TITLE: Now with Gradient + Glow + Glassy Opacity */}
<div className="absolute top-[18%] left-0 w-full text-center pointer-events-none z-0">
  <h2 className="text-5xl md:text-8xl font-black tracking-widest uppercase text-gradient drop-shadow-[0_0_30px_rgba(244,114,182,0.4)] opacity-80">
    The Process
  </h2>
</div>

        {/* SLIDING TIMELINE: Now uses a Flex row, completely eliminating CSS cut-off bugs */}
        <motion.div style={{ x }} className="relative z-10 flex h-full w-[600vw]">
          {steps.map((step, index) => (
            // Each card gets its own 100vw "screen" to sit inside
            <div key={index} className="relative w-[100vw] h-full flex-shrink-0 flex items-center justify-center pointer-events-none">
              
              <div className={`absolute ${step.pos} w-[85vw] sm:w-[400px] pointer-events-auto`}>
                <div className="glass card-premium p-8 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl shadow-xl group hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(244,114,182,0.5)] transition-all duration-500 overflow-hidden relative">
                  
                  {/* ADDED: Hover Gradient Background Layer */}
                  <div className="absolute inset-0 bg-theme-gradient opacity-0 group-hover:opacity-90 transition-opacity duration-500 -z-10"></div>

                  {/* Badge: Inverts colors on hover */}
                  <div className="w-14 h-14 rounded-full bg-theme-gradient text-white group-hover:bg-white group-hover:text-pink-500 flex items-center justify-center font-black text-2xl mb-6 shadow-lg transition-colors duration-500">
                    {step.num}
                  </div>
                  
                  {/* Text: Turns white on hover to stand out against the gradient */}
                  <h3 className="text-3xl font-extrabold text-gray-900 group-hover:text-white transition-colors duration-500 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700 font-medium leading-relaxed group-hover:text-white/95 transition-colors duration-500">
                    {step.desc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
export default function Home() {
  return (
    // THE FIX: Changed 'overflow-hidden' to 'overflow-x-clip' so 'sticky' positioning works!
    <main className="relative w-full min-h-screen selection:bg-pink-200 selection:text-gray-900 overflow-x-clip">
     
      <HeroSection />

     {/* --- OUR STORY SECTION --- */}
      <section id="about" className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="right" className="order-2 md:order-1">
            <div className="glass card-premium p-8 md:p-12 rounded-3xl relative hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(96,165,250,0.2)] transition-all duration-500">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                <TextReveal text="Born from a Mother's Need" />
              </h2>
              
              <div className="text-lg text-gray-700 mb-8 leading-relaxed space-y-4">
                <p>
                  Tired of harsh chemicals irritating your baby's delicate skin? <strong>We were too.</strong>
                </p>
                <p>
                  When commercial products failed our little ones, we turned to nature. We discovered that farm-fresh goat milk perfectly matches your baby's natural pH, delivering deep, chemical-free hydration that instantly soothes and protects.
                </p>
              </div>
              
              <motion.button 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
                className="relative overflow-hidden px-10 py-4 rounded-full font-bold bg-white border border-white/80 group shrink-0 shadow-lg hover:shadow-[0_0_25px_rgba(96,165,250,0.6)] hover:-translate-y-1 transition-all duration-500"
              >
                <motion.div 
                  variants={{
                    initial: { height: "0%" },
                    animate: { height: "100%" }
                  }}
                  transition={{ duration: 3, ease: [0.23, 1, 0.32, 1], delay: 0.5 }}
                  className="liquid-container"
                >
                  <div className="wave-base wave-top" />
                  <div className="wave-base wave-bottom" />
                </motion.div>
                
                <span className="relative z-10 flex items-center gap-2 text-gray-900 group-hover:text-white transition-colors duration-700">
                  Meet Our Farmers
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="order-1 md:order-2 h-96 w-full rounded-3xl glass card-premium flex items-center justify-center overflow-hidden relative group hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(244,114,182,0.2)] transition-all duration-500">
            <Image 
              src="/assets/story.png" 
              alt="Goat Milk Farm to Skin" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-pink-100/30 group-hover:opacity-0 transition-opacity duration-500"></div>
          </ScrollReveal>
        </div>
      </section>
      {/* --- HORIZONTAL PROCESS SECTION --- */}
      <ProcessTimeline />

{/* --- SIGNATURE SPECIAL PRODUCT --- */}
      <section className="py-24 relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto glass card-premium rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl bg-white/30 backdrop-blur-2xl hover:-translate-y-2 hover:shadow-[0_0_50px_rgba(244,114,182,0.15)] transition-all duration-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-theme-gradient opacity-10 rounded-full blur-3xl"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <ScrollReveal direction="up" className="flex justify-center">
              {/* UPDATED: Increased size (w-72 md:w-80 h-96 md:h-[28rem]) and added continuous animation class */}
              <div className="relative w-72 h-96 md:w-80 md:h-[28rem] glass card-premium rounded-3xl border-white/50 overflow-hidden shadow-inner animate-float-tilt hover:shadow-[0_0_40px_rgba(96,165,250,0.4)] transition-shadow duration-500">
                <Image src="/assets/lotion.png" alt="Signature Daily Baby Lotion" fill className="object-cover" />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <span className="text-gradient font-bold tracking-wider uppercase text-sm mb-2 block">Award Winning</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
                <TextReveal text="The Miracle Lotion" />
              </h2>
              
              <ul className="space-y-4 mb-8">
                {[
                  { icon: Droplets, text: "Rich in vitamins A & E for deep nourishment" },
                  { icon: ShieldCheck, text: "Repairs the skin barrier naturally" },
                  { icon: Leaf, text: "100% free from toxins, parabens, and sulfates" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center text-lg text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 text-blue-500 shadow-sm">
                      <item.icon className="w-4 h-4" />
                    </div>
                    {item.text}
                  </li>
                ))}
              </ul>
              
              <div className="glass card-premium p-6 rounded-2xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(96,165,250,0.2)] transition-all duration-500">
                <p className="font-semibold text-gray-900 mb-4">Not sure yet? Try it for free.</p>
                <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-5 py-4 rounded-full bg-white/60 border border-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-800 placeholder-gray-500 backdrop-blur-sm shadow-inner"
                  />
                  <motion.button 
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative overflow-hidden px-10 py-4 rounded-full font-bold bg-white border border-white/80 group shrink-0 shadow-md hover:shadow-[0_0_25px_rgba(244,114,182,0.6)] hover:-translate-y-1 transition-all duration-500"
                  >
                    <motion.div 
                      variants={{
                        initial: { height: "0%" },
                        animate: { height: "100%" }
                      }}
                      transition={{ duration: 2.5, ease: "easeInOut", delay: 0.8 }}
                      className="direct-fill-layer"
                    />
                    <span className="relative z-10 flex items-center gap-2 text-gray-900 group-hover:text-white transition-colors duration-700">
                      Claim Free Sample
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

     {/* --- ALL PRODUCTS SECTION --- */}
      <section id="products" className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* UPDATED: Centered Header with Glassy Gradient Glow (Same style as 'The Process') */}
        <div className="text-center mb-16 relative z-10 flex flex-col items-center justify-center">
          <ScrollReveal direction="down">
             <h2 className="text-4xl md:text-6xl font-black tracking-widest uppercase text-gradient drop-shadow-[0_0_20px_rgba(244,114,182,0.3)] mb-6">
                Gentle Care Essentials
             </h2>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={0.2}>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Everything you need to keep your baby's skin soft, safe, and smiling.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Gentle Wash & Shampoo", price: "$18.00", tag: "Best Seller", image: "/assets/shampoo.png" },
            { name: "Soothing Diaper Balm", price: "$14.00", tag: "Must Have", image: "/assets/balm.png" },
            { name: "Calming Massage Oil", price: "$22.00", tag: "New", image: "/assets/oil.png" }
          ].map((product, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.15}>
              <div className="glass card-premium rounded-[2.5rem] p-6 group hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(244,114,182,0.25)] transition-all duration-500 flex flex-col h-full bg-white/40 backdrop-blur-2xl">
                <div className="w-full h-48 rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center border border-white/50 shadow-inner bg-white/20">
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm z-20">
                    {product.tag}
                  </div>
                  <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500 z-10" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <TextReveal text={product.name} delay={0.2} />
                </h3>
                <p className="text-gray-600 font-medium mb-6 flex-grow">{product.price}</p>
                <Button variant="outline" className="w-full group-hover:bg-theme-gradient group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_0_20px_rgba(244,114,182,0.5)] transition-all duration-500">
                  Add to Cart
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <LeadGenBanner />

      {/* --- FAQ SECTION --- */}
      <section className="py-24 relative px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <TextReveal text="Frequently Asked Questions" />
          </h2>
        </div>

        <div className="space-y-4">
          {[
            { q: "Is goat milk safe for newborns?", a: "Yes! Goat milk is incredibly gentle and has a pH level similar to human skin, making it safe and soothing for newborns." },
            { q: "Do you use artificial fragrances?", a: "Never. Our gentle scent comes strictly from a very mild, organic blend of chamomile and oat extracts." },
            { q: "Is your packaging eco-friendly?", a: "Absolutely. We use 100% recyclable bottles and sustainable shipping materials." }
          ].map((faq, i) => (
            <ScrollReveal key={i} direction="up" delay={i * 0.1}>
              <InlineFaqCard question={faq.q} answer={faq.a} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}