"use client";

import { useState } from "react";
import Image from "next/image";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Thank you for your message. Our team will contact you shortly."
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <div className="bg-[#f8f5f1]">
      {/* Hero section */}
      <div className="relative h-[400px]">
        <Image 
          src="/about-heritage1.png" 
          alt="Contact Zahra Al Dahab"  
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#D4AF37]" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}>
              Contact Us
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}>
              We&apos;re here to assist you with any questions or concerns about our products and services.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Contact grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact cards */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-[#E8DFD8] group">
            <div className="relative h-40 overflow-hidden">
              <Image 
                src="/contact-phone.png" 
                alt="Call Us"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(58,38,24,0.9)] to-[rgba(58,38,24,0.6)]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <PhoneIcon className="h-16 w-16 text-[#D4AF37]" />
              </div>
            </div>
            <div className="p-8 text-center border-t-4 border-[#D4AF37]">
              <h3 className="text-2xl font-bold text-[#3A2618] mb-4">Call Us</h3>
              <p className="text-lg text-[#5D4037] mb-2">+971 4 123 4567</p>
              <p className="text-[#5D4037]">Mon-Fri, 9am-6pm (GMT+4)</p>
              <div className="mt-6">
                <a 
                  href="tel:+97141234567" 
                  className="inline-block text-[#D4AF37] font-medium border-b-2 border-transparent hover:border-[#D4AF37] transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-[#E8DFD8] group">
            <div className="relative h-40 overflow-hidden">
              <Image 
                src="/contact-email.png" 
                alt="Email Us"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(58,38,24,0.9)] to-[rgba(58,38,24,0.6)]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <EnvelopeIcon className="h-16 w-16 text-[#D4AF37]" />
              </div>
            </div>
            <div className="p-8 text-center border-t-4 border-[#D4AF37]">
              <h3 className="text-2xl font-bold text-[#3A2618] mb-4">Email Us</h3>
              <p className="text-lg text-[#5D4037] mb-2">customer.service@zahra-al-dahab.com</p>
              <p className="text-[#5D4037]">We aim to respond within 24 hours</p>
              <div className="mt-6">
                <a 
                  href="mailto:customer.service@zahra-al-dahab.com" 
                  className="inline-block text-[#D4AF37] font-medium border-b-2 border-transparent hover:border-[#D4AF37] transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 border border-[#E8DFD8] group">
            <div className="relative h-40 overflow-hidden">
              <Image 
                src="/contact-visit.png" 
                alt="Visit Us"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(58,38,24,0.9)] to-[rgba(58,38,24,0.6)]"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPinIcon className="h-16 w-16 text-[#D4AF37]" />
              </div>
            </div>
            <div className="p-8 text-center border-t-4 border-[#D4AF37]">
              <h3 className="text-2xl font-bold text-[#3A2618] mb-4">Visit Us</h3>
              <p className="text-lg text-[#5D4037] mb-2">Zahra Al Dahab Flagship Boutique</p>
              <p className="text-[#5D4037]">Dubai Mall, Fashion Avenue</p>
              <p className="text-[#5D4037]">Dubai, United Arab Emirates</p>
              <div className="mt-6">
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-[#D4AF37] font-medium border-b-2 border-transparent hover:border-[#D4AF37] transition-colors"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-white rounded-xl shadow-xl overflow-hidden border border-[#E8DFD8]">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-[#3A2618] mb-6">
                Send Us a Message
              </h2>
              <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
              
              {formStatus && (
                <div className={`mb-6 p-4 rounded-md ${formStatus.success ? 'bg-[#e8f5e9] text-[#2e7d32]' : 'bg-[#ffebee] text-[#c62828]'} border ${formStatus.success ? 'border-[#a5d6a7]' : 'border-[#ef9a9a]'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#5D4037] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full rounded-md border-[#E8DFD8] shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-[#FDFBF9] py-3 px-4"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#5D4037] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full rounded-md border-[#E8DFD8] shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-[#FDFBF9] py-3 px-4"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#5D4037] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full rounded-md border-[#E8DFD8] shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-[#FDFBF9] py-3 px-4"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[#5D4037] mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-md border-[#E8DFD8] shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-[#FDFBF9] py-3 px-4"
                    >
                      <option value="">Please select</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="order-status">Order Status</option>
                      <option value="returns">Returns & Exchanges</option>
                      <option value="customization">Customization Request</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#5D4037] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full rounded-md border-[#E8DFD8] shadow-sm focus:border-[#D4AF37] focus:ring-[#D4AF37] bg-[#FDFBF9] py-3 px-4"
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-4 px-6 border border-transparent rounded-md shadow-sm text-base font-medium text-[#3A2618] bg-[#D4AF37] hover:bg-[#E5C363] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#E8DFD8] mb-8">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3A2618] mb-6">Opening Hours</h3>
                <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-[#5D4037]">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#5D4037]">
                    <span>Saturday</span>
                    <span>10:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between text-[#5D4037]">
                    <span>Sunday</span>
                    <span>12:00 PM - 8:00 PM</span>
                  </div>
                  <div className="pt-3 border-t border-[#E8DFD8]">
                    <span className="text-[#D4AF37] font-medium">Public Holidays</span>
                    <p className="text-[#5D4037] mt-1">Special hours may apply</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#E8DFD8]">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#3A2618] mb-6">Follow Us</h3>
                <div className="w-16 h-1 bg-[#D4AF37] mb-6"></div>
                
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="h-12 w-12 rounded-full bg-[#f8f5f1] flex items-center justify-center hover:bg-[#D4AF37] transition-colors group"
                  >
                    <svg className="h-6 w-6 text-[#3A2618] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="h-12 w-12 rounded-full bg-[#f8f5f1] flex items-center justify-center hover:bg-[#D4AF37] transition-colors group"
                  >
                    <svg className="h-6 w-6 text-[#3A2618] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="h-12 w-12 rounded-full bg-[#f8f5f1] flex items-center justify-center hover:bg-[#D4AF37] transition-colors group"
                  >
                    <svg className="h-6 w-6 text-[#3A2618] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="h-12 w-12 rounded-full bg-[#f8f5f1] flex items-center justify-center hover:bg-[#D4AF37] transition-colors group"
                  >
                    <svg className="h-6 w-6 text-[#3A2618] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                
                <div className="mt-6 py-6 border-t border-[#E8DFD8]">
                  <h4 className="text-lg font-semibold text-[#3A2618] mb-3">Stay Updated</h4>
                  <p className="text-[#5D4037] mb-4">
                    Subscribe to our newsletter for updates on new collections, special events, and exclusive offers.
                  </p>
                  <div className="flex">
                    <input 
                      type="email" 
                      placeholder="Your email" 
                      className="flex-1 rounded-l-md border-[#E8DFD8] bg-[#FDFBF9] py-3 px-4 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                    />
                    <button className="rounded-r-md bg-[#3A2618] px-4 py-3 text-white hover:bg-[#5D4037] transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 

