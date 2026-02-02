export default function About() {
  return (
    <section className="py-24 bg-navy text-white">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
           {/* Placeholder for an office interior shot */}
           <div className="aspect-[4/5] bg-gray-800 relative border border-white/10">
              <div className="absolute inset-4 border border-gold/30"></div>
              {/* <Image src="/office.jpg" fill className="object-cover opacity-60" /> */}
              <div className="absolute inset-0 flex items-center justify-center text-gold/20 font-serif text-6xl">
                 IMAGE
              </div>
           </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-6">The Firm</h4>
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            We do not follow precedents. <br/>
            <span className="italic text-gold">We set them.</span>
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6 font-light text-lg">
            At Amoako & Associates, we believe that true legal excellence requires more than just knowledge of the law—it requires a deep understanding of the people and businesses we represent.
          </p>
          <p className="text-gray-300 leading-relaxed mb-10 font-light text-lg">
            For three decades, we have remained small by design, ensuring that every client receives the undivided attention of our senior partners.
          </p>
          
          <img src="/signature.png" alt="Signature" className="h-16 opacity-60 invert" /> 
          {/* Note: Invert makes a black signature white. Or just use text below */}
          <p className="font-serif italic mt-4 text-gold">Albert Amoako, Managing Partner</p>
        </div>
      </div>
    </section>
  );
}