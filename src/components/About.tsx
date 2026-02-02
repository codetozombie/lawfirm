export default function About() {
  return (
    <section id="about" className="py-32 bg-navy text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="w-full md:w-1/2">
           <div className="aspect-[4/5] bg-gradient-to-br from-gray-800 to-gray-900 relative border border-white/10 shadow-2xl group overflow-hidden">
              <div className="absolute inset-4 border border-gold/30 transition-all duration-500 group-hover:inset-2 group-hover:border-gold/50"></div>
              <div className="absolute inset-0 flex items-center justify-center text-gold/20 font-serif text-6xl group-hover:text-gold/30 transition-colors">
                 <img src="/morse.png" alt="Mike Morse" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-6 flex items-center gap-3">
            <span className="w-12 h-px bg-gold"></span>
            The Firm
          </h4>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            We do not follow precedents. <br/>
            <span className="italic text-gold bg-gradient-to-r from-gold to-gold/80 bg-clip-text text-transparent">
              We set them.
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-light text-lg border-l-2 border-gold/30 pl-6">
            At Morse & Associates, we believe that true legal excellence requires more than just knowledge of the law—it requires a deep understanding of the people and businesses we represent.
          </p>
          <p className="text-gray-300 leading-relaxed mb-10 font-light text-lg">
            For three decades, we have remained small by design, ensuring that every client receives the undivided attention of our senior partners.
          </p>
          
          <div className="mt-8 pt-8 border-t border-white/10">
            {/* <img src="/sign.png" alt="Signature" className="h-24 opacity-80 invert mb-4" />  */}
            <p className="font-serif italic text-gold text-lg">Mike Morse</p>
            <p className="text-gray-400 text-sm uppercase tracking-widest">Managing Partner</p>
          </div>
        </div>
      </div>
    </section>
  );
}