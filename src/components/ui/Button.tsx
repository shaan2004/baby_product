// src/components/ui/Button.tsx
import React from "react";
import { cn } from "@/lib/utils"; // Assuming you use a utility like clsx/tailwind-merge

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "glass";
}

export default function Button({ className, variant = "primary", children, ...props }: ButtonProps) {
  
  // The new sunset theme base styles
  const baseStyles = "relative overflow-hidden rounded-full font-bold transition-all duration-500 flex items-center justify-center gap-2 group shadow-md active:scale-[0.98]";
  
  const variants = {
    // Solid background with the new sunset gradient
    primary: "bg-gradient-to-br from-[#fce4a4] via-[#f48f98] to-[#eb3f80] text-white border-none hover:shadow-[0_0_25px_rgba(235,63,128,0.5)]",
    
    // Transparent with outline, fills with gradient on hover
    outline: "bg-transparent border-2 border-gray-200 text-gray-900 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(235,63,128,0.4)]",
    
    // Glassmorphism style
    glass: "bg-white/40 backdrop-blur-md border border-white/60 text-gray-900 hover:text-white hover:shadow-[0_0_20px_rgba(235,63,128,0.4)]"
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {/* Invisible gradient overlay that fades in on hover for outline/glass variants */}
      {variant !== "primary" && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#fce4a4] via-[#f48f98] to-[#eb3f80] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
}