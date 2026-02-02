"use client";
import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-navy/95 backdrop-blur-md border-b border-gold/20 shadow-lg">
      <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border-2 border-gold flex items-center justify-center">
            <span className="text-gold font-serif text-xl font-bold">M</span>
          </div>
          <div>
            <h1 className="text-white font-serif text-lg md:text-xl font-bold tracking-tight">
              MORSE & ASSOCIATES
            </h1>
            <p className="text-gold text-[8px] md:text-xs uppercase tracking-widest">
              Attorneys at Law
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#practice" className="text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors">
            Practice Areas
          </a>
          <a href="#about" className="text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors">
            About
          </a>
          <a href="#attorneys" className="text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors">
            Attorneys
          </a>
          <a href="#contact" className="text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors">
            Contact
          </a>
          <Button variant="primary" className="!py-2 !px-6">
            Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-navy border-t border-gold/20">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <a href="#practice" className="text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors py-2">
              Practice Areas
            </a>
            <a href="#about" className="text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors py-2">
              About
            </a>
            <a href="#attorneys" className="text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors py-2">
              Attorneys
            </a>
            <a href="#contact" className="text-white/80 hover:text-gold text-sm uppercase tracking-widest transition-colors py-2">
              Contact
            </a>
            <Button variant="primary" className="w-full justify-center mt-2">
              Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}