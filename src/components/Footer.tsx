export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-10 border-t-4 border-gold">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 mb-20">
        <div className="md:col-span-2 pr-12">
          <h2 className="font-serif text-3xl font-bold mb-6">AMOAKO & ASSOCIATES</h2>
          <p className="text-gray-400 leading-relaxed font-light">
            A premier law firm dedicated to the pursuit of justice and the protection of commercial interests. We serve clients globally from our headquarters in Accra.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-serif text-lg mb-6">Contact</h4>
          <div className="space-y-4 text-gray-400 text-sm">
            <p>1 Independence Avenue, Ridge</p>
            <p>Accra, Ghana</p>
            <p className="text-gold mt-4 block">+233 (0) 20 192 9434</p>
            <p>counsel@amoakolaw.com</p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-serif text-lg mb-6">Links</h4>
          <ul className="space-y-3 text-gray-400 text-sm uppercase tracking-widest">
            <li><a href="#" className="hover:text-gold transition-colors">Attorneys</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Practice Areas</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Case Results</a></li>
            <li><a href="#" className="hover:text-gold transition-colors">Careers</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-gray-500 uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} Amoako & Associates.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}