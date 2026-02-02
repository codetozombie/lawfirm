import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PracticeAreas from "@/components/PracticeAreas";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      {/* Introduction Statement */}
      <section className="bg-white py-20 border-b border-gray-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl text-navy mb-8">
            "Justice consists not in being neutral between right and wrong, but in finding out the right and upholding it."
          </h2>
          <p className="text-gray-500 font-sans italic">— Founding Partner</p>
        </div>
      </section>

      <PracticeAreas />
      
      <Footer />
    </main>
  );
}