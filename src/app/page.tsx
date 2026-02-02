import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PracticeAreas from "@/components/PracticeAreas";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* The Stats bar overlaps the hero/content boundary */}
      <div className="relative z-30">
        <Stats />
      </div>

      <div className="relative z-10 bg-white">
        <PracticeAreas />
        <About />
        
        {/* Call to Action Strip */}
        <section className="bg-gold py-16 text-center">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-3xl text-navy mb-4">
              Your Case Deserves a Master Strategy.
            </h2>
            <p className="text-navy/80 mb-8 max-w-2xl mx-auto">
              Contact us today for a confidential review of your legal standing.
            </p>
            <button className="bg-navy text-white px-10 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-all duration-300 border border-navy">
              Request Consultation
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}