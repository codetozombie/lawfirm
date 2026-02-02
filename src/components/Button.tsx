import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyle = "px-8 py-4 font-bold uppercase tracking-widest text-xs md:text-sm transition-all duration-300 border hover:shadow-lg active:scale-95";
  
  const variants = {
    primary: "bg-gold border-gold text-navy hover:bg-white hover:text-navy hover:border-white",
    outline: "bg-transparent border-white text-white hover:bg-white hover:text-navy",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props} />
  );
}