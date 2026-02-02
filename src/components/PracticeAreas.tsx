import { PracticeArea } from "@/types";

const practices: PracticeArea[] = [
  { id: 1, title: "Corporate Litigation", description: "Defending business interests in complex commercial disputes." },
  { id: 2, title: "Estate Planning", description: "Preserving wealth and legacy for future generations." },
  { id: 3, title: "Intellectual Property", description: "Safeguarding your most valuable assets and ideas." },
  { id: 4, title: "Real Estate Law", description: "Navigating commercial and residential property transactions." },
];

export default function PracticeAreas() {
  return (
    <section className="py-24 bg-white text-navy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-200 pb-6">
          <div className="max-w-xl">
            <h4 className="text-gold uppercase tracking-widest font-bold text-sm mb-2">Our Expertise</h4>
            <h2 className="font-serif text-4xl md:text-5xl">Areas of Practice</h2>
          </div>
          <a href="/practice" className="text-navy font-bold border-b-2 border-navy pb-1 hover:text-gold hover:border-gold transition-colors mt-6 md:mt-0">
            VIEW ALL AREAS
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((item) => (
            <div key={item.id} className="group p-8 border border-gray-200 hover:border-gold transition-colors duration-300">
              <div className="w-12 h-12 bg-navy text-gold flex items-center justify-center font-serif text-xl font-bold mb-6 group-hover:bg-gold group-hover:text-navy transition-colors">
                {item.id}
              </div>
              <h3 className="font-serif text-2xl mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}