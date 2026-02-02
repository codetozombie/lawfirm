import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative bg-navy text-white min-h-[80vh] flex items-center">
      {/* Background Image Overlay (Optional) */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-start max-w-4xl">
        <div className="w-24 h-1 bg-gold mb-8"></div>
        
        <h1 className="font-serif text-5xl md:text-7xl leading-tight font-medium mb-6">
          Unwavering Counsel.<br /> 
          Proven Results.
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 font-light leading-relaxed">
          With over fifty years of combined experience in corporate law and high-stakes litigation, 
          we protect your legacy with precision and integrity.
        </p>

        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="primary">Schedule Consultation</Button>
          <Button variant="outline">View Our History</Button>
        </div>
      </div>
    </section>
  );
}