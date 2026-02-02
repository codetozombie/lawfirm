"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    practiceArea: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", practiceArea: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy/95 to-navy"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl">
            <p className="text-gold text-sm uppercase tracking-widest mb-4">Get In Touch</p>
            <h1 className="text-white font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's Start the<br />
              Conversation
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-2xl">
              Whether you have questions about our services or need immediate legal assistance, 
              we're here to help. Reach out today for a confidential consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-12">
              {/* Office Location */}
              <div>
                <h3 className="text-white font-serif text-2xl font-bold mb-6">Main Office</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gold text-xs uppercase tracking-widest mb-2">Address</p>
                    <p className="text-white/80 leading-relaxed">
                      450 Lexington Avenue<br />
                      Suite 2800<br />
                      New York, NY 10017
                    </p>
                  </div>
                  <div>
                    <p className="text-gold text-xs uppercase tracking-widest mb-2">Phone</p>
                    <a href="tel:2125551234" className="text-white/80 hover:text-gold transition-colors">
                      (212) 555-1234
                    </a>
                  </div>
                  <div>
                    <p className="text-gold text-xs uppercase tracking-widest mb-2">Email</p>
                    <a href="mailto:info@morselaw.com" className="text-white/80 hover:text-gold transition-colors">
                      info@morselaw.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="border-t border-gold/20 pt-12">
                <h3 className="text-white font-serif text-2xl font-bold mb-6">Office Hours</h3>
                <div className="space-y-3 text-white/80">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span>8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>By Appointment</span>
                  </div>
                </div>
                <p className="text-white/60 text-sm mt-4 italic">
                  * Emergency consultations available 24/7
                </p>
              </div>

              {/* Additional Locations */}
              <div className="border-t border-gold/20 pt-12">
                <h3 className="text-white font-serif text-2xl font-bold mb-6">Additional Offices</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-white/80 font-medium mb-2">Brooklyn Office</p>
                    <p className="text-white/60 text-sm">
                      85 Court Street, Suite 300<br />
                      Brooklyn, NY 11201
                    </p>
                  </div>
                  <div>
                    <p className="text-white/80 font-medium mb-2">White Plains Office</p>
                    <p className="text-white/60 text-sm">
                      100 Main Street, Floor 8<br />
                      White Plains, NY 10601
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="border border-gold/30 p-8 md:p-12 bg-cream/5">
                <h3 className="text-white font-serif text-3xl font-bold mb-2">
                  Request a Consultation
                </h3>
                <p className="text-white/70 mb-8">
                  Fill out the form below and we'll contact you within 24 hours
                </p>

                {submitted ? (
                  <div className="border-2 border-gold/50 p-8 text-center">
                    <div className="w-16 h-16 border-2 border-gold mx-auto mb-4 flex items-center justify-center">
                      <span className="text-gold text-3xl">✓</span>
                    </div>
                    <h4 className="text-white font-serif text-2xl font-bold mb-2">
                      Thank You!
                    </h4>
                    <p className="text-white/70">
                      We've received your message and will be in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gold text-xs uppercase tracking-widest mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy/50 border border-gold/30 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block text-gold text-xs uppercase tracking-widest mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy/50 border border-gold/30 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gold text-xs uppercase tracking-widest mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-navy/50 border border-gold/30 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="block text-gold text-xs uppercase tracking-widest mb-3">
                          Practice Area *
                        </label>
                        <select
                          name="practiceArea"
                          value={formData.practiceArea}
                          onChange={handleChange}
                          required
                          className="w-full bg-navy/50 border border-gold/30 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors"
                        >
                          <option value="">Select an area</option>
                          <option value="corporate">Corporate Law</option>
                          <option value="personal-injury">Personal Injury</option>
                          <option value="family">Family Law</option>
                          <option value="criminal">Criminal Defense</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="estate-planning">Estate Planning</option>
                          <option value="employment">Employment Law</option>
                          <option value="intellectual-property">Intellectual Property</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gold text-xs uppercase tracking-widest mb-3">
                        Tell Us About Your Case *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full bg-navy/50 border border-gold/30 px-4 py-3 text-white focus:border-gold focus:outline-none transition-colors resize-none"
                        placeholder="Please provide details about your legal matter..."
                      />
                    </div>

                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        className="w-full justify-center !py-4"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Submit Request"}
                      </Button>
                      <p className="text-white/50 text-xs text-center mt-4">
                        By submitting this form, you agree to our privacy policy. 
                        This form does not establish an attorney-client relationship.
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Additional Contact Methods */}
              <div className="mt-8 grid md:grid-cols-3 gap-6">
                <div className="border border-gold/30 p-6 text-center hover:border-gold transition-colors">
                  {/* <div className="text-3xl mb-3">📞</div> */}
                  <h4 className="text-white font-medium mb-2">Call Us</h4>
                  <p className="text-white/60 text-sm">Speak directly with an attorney</p>
                </div>
                <div className="border border-gold/30 p-6 text-center hover:border-gold transition-colors">
                  {/* <div className="text-3xl mb-3">📧</div> */}
                  <h4 className="text-white font-medium mb-2">Email Us</h4>
                  <p className="text-white/60 text-sm">Send detailed inquiries</p>
                </div>
                <div className="border border-gold/30 p-6 text-center hover:border-gold transition-colors">
                  {/* <div className="text-3xl mb-3">📍</div> */}
                  <h4 className="text-white font-medium mb-2">Visit Us</h4>
                  <p className="text-white/60 text-sm">Meet in person at our office</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 px-6 md:px-12 bg-cream/5">
        <div className="container mx-auto">
          <div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-gold/20 to-navy border border-gold/30 flex items-center justify-center">
            <div className="text-center">
              {/* <div className="text-5xl mb-4">📍</div> */}
              <p className="text-white/60">Interactive Map</p>
              <p className="text-white/40 text-sm">450 Lexington Avenue, New York, NY</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}