import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-navy text-white border-b-4 border-gold sticky top-0 z-50">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        {/* Logo Text */}
        <Link href="/" className="font-serif text-2xl md:text-3xl font-bold tracking-wide">
          AMOAKO & ASSOCIATES
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium text-gray-300">
          <Link href="/" className="hover:text-gold transition-colors">Home</Link>
          <Link href="/practice" className="hover:text-gold transition-colors">Practice Areas</Link>
          <Link href="/attorneys" className="hover:text-gold transition-colors">Attorneys</Link>
          <Link href="/contact" className="hover:text-gold transition-colors">Contact</Link>
        </div>
        
        {/* Mobile Menu Placeholder */}
        <div className="md:hidden text-gold text-xl cursor-pointer">MENU</div>
      </div>
    </nav>
  );
}