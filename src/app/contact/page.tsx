"use client";
import Button from "@/components/Button";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Connect to Django API here later
    alert("Thank you. We will contact you shortly.");
  };

  return (
    <main className="pt-20 bg-white">
      {/* Header */}
      <section className="bg-navy py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl text-white font-serif mb-4">Contact Us</h1>
        <p className="text-gold uppercase tracking-widest text-xs font-bold">Confidential Consultation</p>
      </section>

      <div className="container mx-auto px-6 md:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left: Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-navy mb-8">Get in Touch</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              To schedule a consultation with one of our partners, please complete the form or contact our offices directly. All communications are protected by attorney-client privilege.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-2">Headquarters</h4>
                <p className="text-navy font-serif text-lg">1 Independence Avenue, Ridge</p>
                <p className="text-gray-500">Accra, Ghana</p>
              </div>
              
              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-2">Phone & Email</h4>
                <p className="text-navy font-serif text-lg">+233 (0) 20 192 9434</p>
                <p className="text-gray-500">counsel@amoakolaw.com</p>
              </div>

              <div>
                <h4 className="text-gold uppercase tracking-widest text-xs font-bold mb-2">Hours</h4>
                <p className="text-gray-500">Mon - Fri: 8:00 AM - 6:00 PM</p>
                <p className="text-gray-500">Sat - Sun: By Appointment Only</p>
              </div>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="bg-gray-50 p-8 md:p-12 border border-gray-200 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-navy font-bold mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 p-4 text-navy focus:outline-none focus:border-gold transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-navy font-bold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 p-4 text-navy focus:outline-none focus:border-gold transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-navy font-bold mb-2">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-white border border-gray-300 p-4 text-navy focus:outline-none focus:border-gold transition-colors"
                    placeholder="+233 ..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-navy font-bold mb-2">Case Details</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full bg-white border border-gray-300 p-4 text-navy focus:outline-none focus:border-gold transition-colors"
                  placeholder="Please briefly describe your legal matter..."
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full justify-center">
                Submit Inquiry
              </Button>
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}