import Link from "next/link"; // Import Link
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* Background & Overlay */}
      <div 
        className="absolute inset-0 z-0 animate-[pulse_15s_ease-in-out_infinite]"
        style={{
          backgroundImage: "url('/hero.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/60"></div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 pt-44 pb-20">
        <div className="max-w-4xl">
          <div className="w-16 h-1 bg-gold mb-6 shadow-lg shadow-gold/50"></div>
          
          <h4 className="text-gold/90 uppercase tracking-[0.25em] text-[10px] md:text-sm font-bold mb-6 animate-fade-in">
            Attorneys at Law • Est. 1995
          </h4>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-6 drop-shadow-2xl">
            Defending Your Legacy<br />
            <span className="italic font-light text-white/90 block mt-2">
              With Absolute Resolve.
            </span>
          </h1>
          
          <p className="text-sm md:text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-xl border-l-2 border-gold/30 pl-4">
            We provide sophisticated legal counsel for complex litigation, corporate governance, and private wealth management.
          </p>

          {/* FIX: Buttons are now wrapped in Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full justify-center shadow-lg shadow-black/20">
                Make an Appointment
              </Button>
            </Link>
            
            <Link href="/practice" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full justify-center backdrop-blur-sm bg-navy/20">
                View Practice Areas
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy to-transparent z-10"></div>
    </section>
  );
}