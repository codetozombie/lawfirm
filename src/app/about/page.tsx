"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <p className="text-gold text-sm uppercase tracking-widest mb-4">Our Legacy</p>
            <h1 className="text-white font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Built on Trust,<br />
              Driven by Results
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              For over three decades, Morse & Associates has stood as a pillar of legal excellence, 
              representing clients with unwavering dedication and achieving outcomes that matter.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6 md:px-12 bg-cream/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-white/70 leading-relaxed">
                <p>
                  Founded in 1992 by Jonathan Morse, our firm began with a simple mission: 
                  to provide exceptional legal representation with personal attention and integrity. 
                  What started as a single attorney practice has grown into a respected firm of 
                  seasoned professionals.
                </p>
                <p>
                  Throughout our history, we've never lost sight of what matters most—our clients. 
                  Every case we handle receives the same meticulous attention and strategic thinking 
                  that built our reputation.
                </p>
                <p>
                  Today, we continue to evolve and adapt, staying ahead of legal trends while 
                  maintaining the core values that have defined us from day one: excellence, 
                  integrity, and results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gold/20 to-navy border border-gold/30"></div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 border-2 border-gold/40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-widest mb-4">What Drives Us</p>
            <h2 className="text-white font-serif text-4xl md:text-5xl font-bold">
              Our Core Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description: "We uphold the highest ethical standards in every case, every interaction, every decision. Your trust is our most valuable asset."
              },
              {
                title: "Excellence",
                description: "We pursue mastery in our craft, staying current with legal developments and employing cutting-edge strategies to serve you better."
              },
              {
                title: "Dedication",
                description: "Your case isn't just another file. We invest ourselves fully in understanding your situation and fighting for your interests."
              },
              {
                title: "Results",
                description: "While we can't guarantee outcomes, we guarantee relentless effort. We measure success by the positive impact we create in your life."
              },
              {
                title: "Communication",
                description: "You'll never wonder where things stand. We keep you informed, answer your questions promptly, and explain complex matters clearly."
              },
              {
                title: "Respect",
                description: "We treat every client with dignity and compassion, regardless of case size. Your concerns matter to us, period."
              }
            ].map((value, idx) => (
              <div key={idx} className="group">
                <div className="border border-gold/30 p-8 hover:border-gold transition-colors h-full bg-cream/5">
                  <div className="w-12 h-12 border-2 border-gold flex items-center justify-center mb-6">
                    <span className="text-gold font-serif text-2xl font-bold">{idx + 1}</span>
                  </div>
                  <h3 className="text-white font-serif text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-white/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 px-6 md:px-12 bg-cream/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-widest mb-4">Recognition</p>
            <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-6">
              Acknowledged Excellence
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              While awards don't define us, they reflect our commitment to exceptional legal service
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Best Law Firm 2023",
              "Top Rated Attorneys",
              "Client Choice Award",
              "Legal Excellence",
              "AV Preeminent Rating",
              "Super Lawyers",
              "Best of the Bar",
              "Outstanding Service"
            ].map((award, idx) => (
              <div key={idx} className="border border-gold/30 p-6 text-center hover:border-gold transition-colors">
                <div className="w-16 h-16 border-2 border-gold mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gold text-2xl">★</span>
                </div>
                <p className="text-white/80 font-medium">{award}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="border-2 border-gold/30 p-12 md:p-16 text-center">
            <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-6">
              Experience the Difference
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join the hundreds of clients who have trusted us with their most important legal matters
            </p>
            <Link href="/contact">
              <Button variant="primary" className="!px-12 !py-4">
                Schedule Your Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}