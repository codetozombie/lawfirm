export default function Practice() {
  const practices = [
    {
      title: "Corporate Law",
      description: "We provide comprehensive legal support for businesses at every stage of their lifecycle. From formation to dissolution, our team ensures compliance and strategic advantage.",
      bullets: ["Business Formation", "Contract Negotiation", "Corporate Governance", "Shareholder Disputes"]
    },
    {
      title: "Commercial Litigation",
      description: "When disputes arise, you need aggressive representation. We handle complex litigation with a focus on achieving favorable outcomes efficiently.",
      bullets: ["Breach of Contract", "Partnership Disputes", "Real Estate Litigation", "Fraud Defense"]
    },
    {
      title: "Private Wealth & Estate",
      description: "Protecting your legacy requires meticulous planning. We assist high-net-worth individuals in structuring their assets for future generations.",
      bullets: ["Wills & Trusts", "Asset Protection", "Probate Administration", "Tax Planning"]
    },
    {
      title: "Intellectual Property",
      description: "Your ideas are your currency. We help you secure patents, trademarks, and copyrights to prevent infringement and maximize value.",
      bullets: ["Trademark Registration", "Patent Litigation", "Licensing Agreements", "IP Audits"]
    },
  ];

  return (
    <main className="pt-20">
      <section className="bg-navy py-24 px-6">
        <div className="container mx-auto md:px-12">
          <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Expertise</h4>
          <h1 className="text-4xl md:text-6xl text-white font-serif mb-6">Areas of Practice</h1>
          <p className="text-gray-300 max-w-2xl text-lg font-light border-l-2 border-gold pl-6">
            We limit our caseload to focus intensely on complex matters requiring high-level strategy.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          {practices.map((area, idx) => (
            <div key={idx} className="flex flex-col border-t border-gray-200 pt-8 hover:border-gold transition-colors duration-500">
              <h3 className="text-3xl font-serif text-navy mb-6">{area.title}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {area.description}
              </p>
              <ul className="space-y-3 mt-auto">
                {area.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-center text-sm font-bold text-navy/80 uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 bg-gold mr-3 rounded-full"></span>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}