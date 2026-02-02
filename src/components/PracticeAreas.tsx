import Link from "next/link"; // Import Link

const practices = [
  { title: "Corporate Litigation", text: "Navigating high-stakes commercial disputes with precision." },
  { title: "Mergers & Acquisitions", text: "Strategic counsel for complex business transactions." },
  { title: "Intellectual Property", text: "Protecting your most valuable intangible assets." },
  { title: "Private Wealth", text: "Estate planning and asset protection for generations." },
  { title: "Real Estate", text: "Commercial development and regulatory compliance." },
  { title: "Regulatory Defense", text: "Shielding your business from government overreach." },
];

export default function PracticeAreas() {
  return (
    <section className="py-32 bg-texture text-navy">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Our Expertise</h4>
          <h2 className="text-4xl md:text-5xl font-serif">Areas of Practice</h2>
          <div className="w-24 h-1 bg-gold mx-auto mt-6 mb-8"></div>
          
          {/* FIX: Link to the full practice page */}
          <Link 
            href="/practice" 
            className="text-navy font-bold border-b-2 border-navy pb-1 hover:text-gold hover:border-gold transition-colors"
          >
            VIEW ALL AREAS
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practices.map((item, idx) => (
            // FIX: Wrapped card in Link to allow clicking
            <Link key={idx} href="/practice" className="block">
              <div 
                className="group relative bg-white p-10 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="absolute top-0 left-0 w-0 h-1 bg-gold group-hover:w-full transition-all duration-500"></div>
                <h3 className="font-serif text-2xl mb-4 group-hover:text-gold transition-colors">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm mb-6">
                  {item.text}
                </p>
                <span className="text-xs font-bold uppercase tracking-widest text-navy group-hover:text-gold flex items-center gap-2">
                  Learn More <span>→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}