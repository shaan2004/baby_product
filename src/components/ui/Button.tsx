// src/components/ui/Button.tsx
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "glass" | "outline";
}

export default function Button({ children, variant = "primary", className, ...props }: ButtonProps) {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-all duration-500 transform hover:-translate-y-1 active:scale-95 flex items-center justify-center relative overflow-hidden";
  
  const variants = {
    primary: "bg-white text-gray-900 hover:bg-theme-gradient hover:text-white shadow-md border-none",
    glass: "glass text-gray-900 hover:bg-white/50 border-white/50",
    // Outline starts blank (white/transparent) and fills with gradient on hover
    outline: "bg-white/10 border-2 border-gray-200 text-gray-900 hover:border-transparent hover:text-white hover:bg-theme-gradient shadow-sm",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}