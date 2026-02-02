import Button from "@/components/Button";

// Mock Data - In a real app, this comes from Django
const attorneys = [
  {
    id: 1,
    name: "Divine Boadi, Esq.",
    role: "Founding Partner",
    specialty: "Corporate Litigation",
    bio: "With over 30 years of experience, Divine Boadi has successfully defended Fortune 500 companies in high-stakes commercial disputes.",
    image: "/lawyer1.jpg" // Put placeholder images in public folder
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Senior Partner",
    specialty: "Mergers & Acquisitions",
    bio: "Sarah oversees complex international transactions and provides strategic counsel on regulatory compliance.",
    image: "/lawyer2.jpg"
  },
  {
    id: 3,
    name: "Kwame Osei",
    role: "Associate Attorney",
    specialty: "Intellectual Property",
    bio: "A specialist in patent law and copyright protection, helping innovators secure their legacy.",
    image: "/lawyer3.jpg"
  },
];

export default function Attorneys() {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="bg-navy py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl text-white font-serif mb-4">Our Attorneys</h1>
        <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
        <p className="text-gray-300 max-w-2xl mx-auto font-light text-lg">
          Meet the minds dedicated to protecting your interests with unwavering resolve.
        </p>
      </section>

      {/* Grid */}
      <section className="container mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="group">
              {/* Image Frame */}
              <div className="relative aspect-[3/4] bg-gray-200 mb-6 overflow-hidden border border-gray-200 group-hover:border-gold transition-colors duration-500">
                {/* Placeholder for image */}
                <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors"></div>
                {/* <Image src={attorney.image} alt={attorney.name} fill className="object-cover" /> */}
                <div className="absolute inset-0 flex items-center justify-center text-navy/20 font-serif text-4xl">
                  PHOTO
                </div>
              </div>
              
              <h3 className="text-2xl font-serif text-navy group-hover:text-gold transition-colors duration-300">
                {attorney.name}
              </h3>
              <p className="text-xs uppercase tracking-widest text-gold font-bold mb-4">
                {attorney.role} • {attorney.specialty}
              </p>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                {attorney.bio}
              </p>
              <Button variant="outline" className="text-navy border-navy/20 hover:bg-navy hover:text-white text-xs py-2 px-6">
                View Profile
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}