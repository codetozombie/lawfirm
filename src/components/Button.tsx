import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  const baseStyle = "px-8 py-3 font-bold uppercase tracking-widest transition-all duration-300 border-2";
  
  const variants = {
    primary: "bg-gold border-gold text-navy hover:bg-white hover:text-navy",
    outline: "bg-transparent border-white text-white hover:bg-white hover:text-navy",
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props} />
  );
}