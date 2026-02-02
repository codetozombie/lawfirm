"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";

export default function AttorneysPage() {
  const attorneys = [
    {
      name: "Jonathan Morse",
      title: "Senior Partner",
      specialties: ["Corporate Law", "Mergers & Acquisitions", "Business Litigation"],
      experience: "32 years",
      education: "Harvard Law School, J.D., 1991",
      bar: "New York, California",
      bio: "Jonathan founded Morse & Associates with a vision of providing big-firm expertise with boutique-firm attention. His practice focuses on complex business transactions and high-stakes litigation. He has successfully represented Fortune 500 companies and emerging startups alike."
    },
    {
      name: "Sarah Chen",
      title: "Managing Partner",
      specialties: ["Intellectual Property", "Technology Law", "Contract Negotiation"],
      experience: "18 years",
      education: "Stanford Law School, J.D., 2005",
      bar: "California, New York",
      bio: "Sarah brings extensive experience in technology and IP law, having previously worked at leading Silicon Valley firms. She specializes in patent litigation, trademark protection, and licensing agreements for tech companies and creative professionals."
    },
    {
      name: "Michael Rodriguez",
      title: "Senior Associate",
      specialties: ["Personal Injury", "Medical Malpractice", "Product Liability"],
      experience: "15 years",
      education: "Columbia Law School, J.D., 2008",
      bar: "New York, New Jersey",
      bio: "Michael has recovered over $50 million for injured clients throughout his career. He is known for his thorough case preparation and persuasive courtroom presence. He fights tirelessly to ensure victims receive full and fair compensation."
    },
    {
      name: "Emily Washington",
      title: "Partner",
      specialties: ["Family Law", "Estate Planning", "Probate"],
      experience: "14 years",
      education: "Yale Law School, J.D., 2009",
      bar: "New York, Connecticut",
      bio: "Emily handles sensitive family matters with compassion and strategic insight. She guides clients through divorce, custody disputes, and estate planning with a focus on protecting what matters most while minimizing conflict."
    },
    {
      name: "David Park",
      title: "Associate",
      specialties: ["Criminal Defense", "White Collar Crime", "Appeals"],
      experience: "9 years",
      education: "University of Chicago Law School, J.D., 2014",
      bar: "New York, Illinois",
      bio: "David is a former federal prosecutor who now defends individuals and businesses facing criminal charges. His insider knowledge of prosecution strategies gives his clients a significant advantage in the courtroom."
    },
    {
      name: "Jessica Martinez",
      title: "Associate",
      specialties: ["Employment Law", "Civil Rights", "Discrimination"],
      experience: "7 years",
      education: "NYU School of Law, J.D., 2016",
      bar: "New York",
      bio: "Jessica is passionate about protecting employee rights and fighting workplace discrimination. She represents individuals in wrongful termination, harassment, and wage disputes, as well as advising employers on compliance matters."
    }
  ];

  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <p className="text-gold text-sm uppercase tracking-widest mb-4">Our Team</p>
            <h1 className="text-white font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Experienced Advocates,<br />
              Proven Results
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Meet the accomplished legal professionals dedicated to protecting your interests 
              and achieving your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid gap-16">
            {attorneys.map((attorney, idx) => (
              <div key={idx} className="grid md:grid-cols-5 gap-8 border-b border-gold/20 pb-16 last:border-b-0">
                {/* Photo Placeholder */}
                <div className="md:col-span-2">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gold/20 to-navy border border-gold/30 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 border-2 border-gold mx-auto mb-4 flex items-center justify-center">
                          <span className="text-gold font-serif text-4xl font-bold">
                            {attorney.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="md:col-span-3 space-y-6">
                  <div>
                    <h2 className="text-white font-serif text-3xl md:text-4xl font-bold mb-2">
                      {attorney.name}
                    </h2>
                    <p className="text-gold text-sm uppercase tracking-widest mb-4">
                      {attorney.title}
                    </p>
                  </div>

                  <p className="text-white/70 leading-relaxed">
                    {attorney.bio}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-gold/20">
                    <div>
                      <p className="text-gold text-xs uppercase tracking-widest mb-2">Practice Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {attorney.specialties.map((specialty, i) => (
                          <span key={i} className="border border-gold/30 px-3 py-1 text-white/80 text-sm">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 pt-4">
                      <div>
                        <p className="text-gold text-xs uppercase tracking-widest mb-1">Experience</p>
                        <p className="text-white/80">{attorney.experience}</p>
                      </div>
                      <div>
                        <p className="text-gold text-xs uppercase tracking-widest mb-1">Education</p>
                        <p className="text-white/80 text-sm">{attorney.education}</p>
                      </div>
                      <div>
                        <p className="text-gold text-xs uppercase tracking-widest mb-1">Bar Admissions</p>
                        <p className="text-white/80">{attorney.bar}</p>
                      </div>
                    </div>
                  </div>

                  <Link href="/contact">
                    <Button variant="primary" className="mt-4">
                      Request Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Staff Section */}
      <section className="py-20 px-6 md:px-12 bg-cream/5">
        <div className="container mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-6">
              Supported by Excellence
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              Behind every successful case is a dedicated team of paralegals, legal assistants, 
              and administrative professionals who ensure nothing falls through the cracks. 
              Our support staff brings decades of combined experience and an unwavering commitment 
              to client service.
            </p>
            <p className="text-white/70 leading-relaxed">
              From your first phone call to the final resolution of your matter, you'll experience 
              the seamless coordination and attention to detail that sets our firm apart.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto text-center">
          <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Connect with an attorney who has the experience and dedication to help you succeed
          </p>
          <Link href="/contact">
            <Button variant="primary" className="!px-12 !py-4">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

    </div>
  );
}