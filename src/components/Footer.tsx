export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10 border-t-8 border-gold">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <h2 className="font-serif text-2xl font-bold mb-6">AMOAKO & ASSOCIATES</h2>
          <p className="text-gray-400 max-w-sm leading-relaxed">
            Providing legal excellence since 1995. We are committed to maintaining the highest 
            standards of integrity and client service.
          </p>
        </div>
        
        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-6">Contact</h4>
          <p className="text-gray-300 mb-2">123 Legal Avenue, Suite 400</p>
          <p className="text-gray-300 mb-2">Accra, Ghana</p>
          <p className="text-gray-300 mb-2">+233 20 000 0000</p>
          <p className="text-gray-300">info@amoakolaw.com</p>
        </div>

        <div>
          <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-6">Navigation</h4>
          <ul className="space-y-3 text-gray-300">
            <li><a href="#" className="hover:text-gold">Home</a></li>
            <li><a href="#" className="hover:text-gold">Attorneys</a></li>
            <li><a href="#" className="hover:text-gold">Practice Areas</a></li>
            <li><a href="#" className="hover:text-gold">Client Portal</a></li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-6 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Amoako & Associates. All Rights Reserved.</p>
        <div className="space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}