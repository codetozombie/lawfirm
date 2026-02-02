export default function About() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center bg-navy">
         <div className="absolute inset-0 bg-navy/90 z-0"></div>
         <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">The Firm</h1>
            <p className="text-xl text-gold font-serif italic">Est. 1995</p>
         </div>
      </section>

      {/* Narrative */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif text-navy mb-8">A Tradition of Excellence</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Founded by Albert Amoako, our firm was built on a singular premise: that the most complex legal challenges require not just knowledge, but creativity and relentless dedication.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Over the last three decades, we have grown from a boutique practice into one of the region's most respected legal institutions, yet we have never lost our personal touch. We do not process cases; we champion causes.
            </p>
            <div className="mt-8 p-6 bg-navy/5 border-l-4 border-gold">
              <p className="text-navy font-serif text-lg italic">
                "We are not just attorneys. We are architects of resolution."
              </p>
            </div>
          </div>
          
          <div className="relative h-[500px] bg-gray-100 border border-gray-200 p-4">
             <div className="absolute inset-4 border border-navy/20"></div>
             <div className="h-full w-full bg-navy/5 flex items-center justify-center text-navy/20 font-serif text-4xl">
                OFFICE INTERIOR
             </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-navy text-white py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="p-8 border border-white/10 hover:border-gold transition-colors duration-300">
              <h3 className="text-2xl font-serif text-gold mb-4">Integrity</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We adhere to the highest ethical standards. Our word is our bond, and our clients' trust is our most valuable asset.
              </p>
            </div>
            <div className="p-8 border border-white/10 hover:border-gold transition-colors duration-300">
              <h3 className="text-2xl font-serif text-gold mb-4">Diligence</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We leave no stone unturned. Our preparation is exhaustive, ensuring we are always the most prepared team in the room.
              </p>
            </div>
            <div className="p-8 border border-white/10 hover:border-gold transition-colors duration-300">
              <h3 className="text-2xl font-serif text-gold mb-4">Discretion</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We understand the sensitivity of high-stakes matters. Confidentiality is absolute and non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}