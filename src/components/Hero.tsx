import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      
      {/* 1. BACKGROUND & OVERLAY */}
      <div 
        className="absolute inset-0 z-0 animate-[pulse_15s_ease-in-out_infinite]"
        style={{
          backgroundImage: "url('/hero.png')", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Darker gradient on mobile to make text pop */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/60"></div>

      {/* 2. CONTENT CONTAINER */}
      {/* Changed pt-32 to pt-44 to push content down from the logo */}
      <div className="relative z-20 container mx-auto px-6 md:px-12 pt-44 pb-20">
        
        <div className="max-w-4xl">
          {/* Gold Accent Line */}
          <div className="w-16 h-1 bg-gold mb-6 shadow-lg shadow-gold/50"></div>
          
          {/* Subheader: Made slightly brighter and spaced out */}
          <h4 className="text-gold/90 uppercase tracking-[0.25em] text-[10px] md:text-sm font-bold mb-6 animate-fade-in">
            Attorneys at Law • Est. 1995
          </h4>
          
          {/* Main Headline: Reduced text-4xl to text-3xl for mobile elegance */}
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-6 drop-shadow-2xl">
            Defending Your Legacy<br />
            {/* Italic text: Added lighter weight to look less 'chunky' */}
            <span className="italic font-light text-white/90 block mt-2">
              With Absolute Resolve.
            </span>
          </h1>
          
          {/* Body Text: Added more line-height (leading-relaxed) */}
          <p className="text-sm md:text-xl text-gray-300 mb-10 font-light leading-relaxed max-w-xl border-l-2 border-gold/30 pl-4">
            We provide sophisticated legal counsel for complex litigation, corporate governance, and private wealth management.
          </p>

          {/* Buttons: Stacked vertically on mobile with gap */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="w-full sm:w-auto justify-center shadow-lg shadow-black/20">
              Make an Appointment
            </Button>
            <Button variant="outline" className="w-full sm:w-auto justify-center backdrop-blur-sm bg-navy/20">
              View Case Results
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-navy to-transparent z-10"></div>
    </section>
  );
}