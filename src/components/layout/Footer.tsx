// src/components/layout/Footer.tsx
"use client";

import Link from "next/link";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";

// --- Custom SVG Icons ---
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
  </svg>
);

export default function Footer() {
  // UPDATED: Sunset Theme Gradient Strings
  const btnGradient = "bg-gradient-to-r from-[#fce4a4] via-[#f48f98] to-[#eb3f80]";
  const hoverBtnGradient = "hover:bg-gradient-to-r hover:from-[#fce4a4] hover:via-[#f48f98] hover:to-[#eb3f80]";
  const groupHoverBtnGradient = "group-hover:bg-gradient-to-r group-hover:from-[#fce4a4] group-hover:via-[#f48f98] group-hover:to-[#eb3f80]";
  
  // Simplified text gradients to 2-stops for better readability
  const textGradient = "bg-gradient-to-r from-[#f48f98] to-[#eb3f80] text-transparent bg-clip-text";
  const hoverTextGradient = "group-hover:bg-gradient-to-r group-hover:from-[#f48f98] group-hover:to-[#eb3f80] group-hover:text-transparent group-hover:bg-clip-text";

  return (
    // UPDATED: Background uses the soft milky pastel gradient
    <footer className="relative w-full border-t border-white/60 bg-gradient-to-b from-[#fdf4d6]/40 to-[#fad1e1]/60 backdrop-blur-3xl overflow-hidden shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
      {/* --- PREMIUM TOP BORDER SHIMMER --- */}
      <div className={`absolute top-0 left-0 w-full h-[2px] ${btnGradient} opacity-80`}></div>

      {/* UPDATED: Background Decorative Glows to match sunset theme */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#f48f98]/20 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fce4a4]/30 rounded-full blur-[100px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Brand & Identity */}
          <ScrollReveal direction="up" delay={0.1}>
            <Link href="/" className="text-4xl font-black tracking-tighter text-gray-900 inline-block mb-8">
              Tender<span className={textGradient}>Touch</span>
            </Link>
            <p className="text-gray-700 mb-8 leading-relaxed font-medium">
              Pure, organic Donkey milk skincare crafted with love for your baby's delicate skin. Farm to bath, naturally.
            </p>
            <div className="flex space-x-4">
              {[InstagramIcon, FacebookIcon, WhatsAppIcon].map((Icon, i) => (
                <a key={i} href="#" className={`w-12 h-12 rounded-2xl glass flex items-center justify-center text-gray-600 hover:text-white ${hoverBtnGradient} hover:-translate-y-1.5 transition-all duration-500 shadow-lg border-white/60`}>
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </ScrollReveal>

          {/* Column 2: Navigation */}
          <ScrollReveal direction="up" delay={0.2}>
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#f48f98] rounded-full"></span> {/* UPDATED DOT COLOR */}
              Explore
            </h3>
            <ul className="space-y-5">
              {[
                { name: "Home", path: "/" },
                { name: "Products", path: "/products" },
                { name: "About Us", path: "/about" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-gray-700 transition-all duration-300 font-bold flex items-center group">
                    <span className={`w-0 h-[2px] ${btnGradient} group-hover:w-4 mr-0 group-hover:mr-3 transition-all duration-300`}></span>
                    <span className={`transition-all duration-300 ${hoverTextGradient}`}>
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Column 3: Contact Details & Location */}
          <ScrollReveal direction="up" delay={0.3}>
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#eb3f80] rounded-full"></span> {/* UPDATED DOT COLOR */}
              Say Hello
            </h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 group cursor-pointer">
                {/* UPDATED: Icon text color */}
                <div className={`w-10 h-10 glass rounded-xl flex items-center justify-center text-[#f48f98] ${groupHoverBtnGradient} group-hover:text-white transition-all shadow-md shrink-0`}>
                  <Mail size={18} />
                </div>
                <p className="font-bold text-gray-800">hello@TenderTouch.com</p>
              </li>
              
              <li className="flex items-center gap-4 group cursor-pointer">
                {/* UPDATED: Icon text color */}
                <div className={`w-10 h-10 glass rounded-xl flex items-center justify-center text-[#eb3f80] ${groupHoverBtnGradient} group-hover:text-white transition-all shadow-md shrink-0`}>
                  <Phone size={18} />
                </div>
                <p className="font-bold text-gray-800">1-800-TENDER-TOUCH</p>
              </li>
              
              <li className="flex items-start gap-4 group cursor-pointer">
                {/* UPDATED: Icon text color */}
                <div className={`w-10 h-10 glass rounded-xl flex items-center justify-center text-[#f48f98] ${groupHoverBtnGradient} group-hover:text-white transition-all shadow-md shrink-0 mt-1`}>
                  <MapPin size={18} />
                </div>
                <p className="font-medium text-gray-700 text-sm leading-relaxed">
                  31, Ramalingam Nagar 1st St,<br/>
                  Ponnangipuram, Seetha Nagar,<br/>
                  Nungambakkam, Chennai,<br/>
                  Tamil Nadu 600034, India
                </p>
              </li>
            </ul>
          </ScrollReveal>

          {/* Column 4: Register */}
          <ScrollReveal direction="up" delay={0.4}>
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#fce4a4] rounded-full"></span> {/* UPDATED DOT COLOR */}
              Join the Family
            </h3>
            <div className="glass p-6 rounded-[2rem] border-white/60 shadow-xl relative overflow-hidden">
               <div className={`absolute top-0 right-0 w-20 h-20 ${btnGradient} opacity-10 blur-2xl`}></div>
               <p className="text-gray-700 mb-5 text-sm font-bold">Register to get expert baby care tips & 10% off your first box.</p>
               <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  {/* UPDATED: Focus ring color */}
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full px-5 py-3 rounded-xl bg-white/70 border border-white focus:outline-none focus:ring-2 focus:ring-[#f48f98] text-sm font-medium shadow-inner"
                  />
                  <button className={`w-full ${btnGradient} text-white py-3 rounded-xl font-bold shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] transition-all border-none`}>
                    Register <Send size={14}/>
                  </button>
               </form>
            </div>
          </ScrollReveal>

        </div>

        {/* --- BOTTOM LEGAL BAR --- */}
        <ScrollReveal direction="up" delay={0.5} className="pt-10 border-t border-white/60 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
          <p className="font-bold text-gray-600">© 2026 TenderTouch. All rights reserved.</p>
          <div className="flex gap-8 font-bold text-gray-700">
            {/* UPDATED: Hover link colors */}
            <Link href="#" className="hover:text-[#eb3f80] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#eb3f80] transition-colors">Terms</Link>
            <Link href="#" className="hover:text-[#eb3f80] transition-colors">Shipping</Link>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}