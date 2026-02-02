"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Link from "next/link";

export default function PracticePage() {
  const practiceAreas = [
    {
      title: "Corporate Law",
      icon: "🏛️",
      description: "Strategic counsel for businesses at every stage, from formation to acquisition.",
      services: [
        "Business Formation & Structuring",
        "Mergers & Acquisitions",
        "Corporate Governance",
        "Commercial Transactions",
        "Contract Drafting & Negotiation",
        "Regulatory Compliance"
      ],
      highlight: "We've facilitated over $500M in successful transactions"
    },
    {
      title: "Personal Injury",
      icon: "⚖️",
      description: "Aggressive representation for injury victims seeking the compensation they deserve.",
      services: [
        "Car & Motorcycle Accidents",
        "Slip & Fall Injuries",
        "Medical Malpractice",
        "Product Liability",
        "Wrongful Death",
        "Workers' Compensation"
      ],
      highlight: "$50M+ recovered for injured clients"
    },
    {
      title: "Family Law",
      icon: "👨‍👩‍👧‍👦",
      description: "Compassionate guidance through life's most difficult personal transitions.",
      services: [
        "Divorce & Separation",
        "Child Custody & Support",
        "Spousal Support/Alimony",
        "Property Division",
        "Adoption",
        "Prenuptial Agreements"
      ],
      highlight: "Protecting families with care and discretion"
    },
    {
      title: "Criminal Defense",
      icon: "🛡️",
      description: "Fierce advocacy protecting your rights and your freedom.",
      services: [
        "White Collar Crime",
        "DUI/DWI Defense",
        "Drug Offenses",
        "Assault & Violent Crimes",
        "Theft & Fraud",
        "Appeals & Post-Conviction Relief"
      ],
      highlight: "Former prosecutors on your side"
    },
    {
      title: "Real Estate Law",
      icon: "🏠",
      description: "Protecting your interests in residential and commercial property matters.",
      services: [
        "Property Purchases & Sales",
        "Lease Negotiations",
        "Title Issues",
        "Zoning & Land Use",
        "Landlord-Tenant Disputes",
        "Real Estate Litigation"
      ],
      highlight: "Thousands of successful closings"
    },
    {
      title: "Estate Planning",
      icon: "📜",
      description: "Secure your legacy and protect your loved ones' future.",
      services: [
        "Wills & Trusts",
        "Estate Administration",
        "Probate",
        "Power of Attorney",
        "Healthcare Directives",
        "Asset Protection"
      ],
      highlight: "Planning for generations to come"
    },
    {
      title: "Employment Law",
      icon: "💼",
      description: "Defending worker rights and advising employers on compliance.",
      services: [
        "Wrongful Termination",
        "Discrimination & Harassment",
        "Wage & Hour Disputes",
        "Employment Contracts",
        "Non-Compete Agreements",
        "Workplace Investigations"
      ],
      highlight: "Fighting for fairness in the workplace"
    },
    {
      title: "Intellectual Property",
      icon: "💡",
      description: "Protecting your innovations, brands, and creative works.",
      services: [
        "Patent Applications & Prosecution",
        "Trademark Registration",
        "Copyright Protection",
        "IP Litigation",
        "Licensing Agreements",
        "Trade Secret Protection"
      ],
      highlight: "Safeguarding your competitive advantage"
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
            <p className="text-gold text-sm uppercase tracking-widest mb-4">What We Do</p>
            <h1 className="text-white font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Comprehensive Legal<br />
              Solutions
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              From complex business transactions to personal legal challenges, we deliver 
              experienced counsel across a full spectrum of practice areas.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area, idx) => (
              <div key={idx} className="group border border-gold/30 hover:border-gold transition-colors bg-cream/5">
                <div className="p-8 md:p-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-4xl mb-4">{area.icon}</div>
                      <h3 className="text-white font-serif text-3xl font-bold mb-3">
                        {area.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>

                  {/* Services List */}
                  <div className="mb-6 pt-6 border-t border-gold/20">
                    <p className="text-gold text-xs uppercase tracking-widest mb-4">Key Services</p>
                    <ul className="space-y-2">
                      {area.services.map((service, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70">
                          <span className="text-gold mt-1">—</span>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight */}
                  <div className="pt-6 border-t border-gold/20">
                    <p className="text-gold text-sm italic">
                      {area.highlight}
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link href="/contact">
                      <Button variant="primary" className="w-full justify-center">
                        Discuss Your Case
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-12 bg-cream/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-widest mb-4">How We Work</p>
            <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-6">
              Our Approach
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Every case follows a proven methodology designed to maximize your chances of success
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We listen carefully to understand your situation, goals, and concerns during a thorough initial meeting."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Our team develops a customized legal strategy based on your specific circumstances and objectives."
              },
              {
                step: "03",
                title: "Execution",
                description: "We implement the plan with precision, keeping you informed and involved at every critical juncture."
              },
              {
                step: "04",
                title: "Resolution",
                description: "We work tirelessly toward the best possible outcome, whether through negotiation, settlement, or trial."
              }
            ].map((phase, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 border-2 border-gold mx-auto mb-6 flex items-center justify-center">
                  <span className="text-gold font-serif text-2xl font-bold">{phase.step}</span>
                </div>
                <h3 className="text-white font-serif text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-white/70 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-6">
                Why Choose<br />
                Morse & Associates?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Experience That Matters",
                    description: "Our attorneys bring over 100 combined years of legal experience to your case."
                  },
                  {
                    title: "Personalized Attention",
                    description: "You're not a case number. You'll work directly with experienced attorneys who know your name."
                  },
                  {
                    title: "Proven Track Record",
                    description: "Our results speak for themselves—millions recovered and countless successful outcomes."
                  },
                  {
                    title: "Clear Communication",
                    description: "We explain complex legal matters in plain English and keep you updated every step of the way."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="border-l-2 border-gold pl-6">
                    <h3 className="text-white font-serif text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-gold/20 to-navy border border-gold/30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="border-2 border-gold/30 p-12 md:p-16 text-center">
            <h2 className="text-white font-serif text-4xl md:text-5xl font-bold mb-6">
              Let's Discuss Your Legal Needs
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Schedule a consultation to explore how our experience can benefit your case
            </p>
            <Link href="/contact">
              <Button variant="primary" className="!px-12 !py-4">
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}