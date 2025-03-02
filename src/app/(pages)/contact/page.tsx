import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="pb-12">
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1517497052582-25e6fe8ec001?q=80&w=2074&auto=format&fit=crop"
          alt="Contact Zahra Al Dahab"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                We would love to hear from you. Please fill out the form below and one of our jewelry 
                specialists will be in touch with you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      className="w-full px-4 py-2.5 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      className="w-full px-4 py-2.5 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2.5 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2.5 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-2.5 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-black"
                    required
                  ></textarea>
                </div>
                <div>
                  <button 
                    type="submit"
                    className="btn btn-primary btn-md w-full md:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl mb-4">Visit Our Showroom</h3>
                <div className="relative aspect-square md:aspect-auto md:h-[300px] mb-4">
                  <Image
                    src="https://images.unsplash.com/photo-1631516894438-e5bc8c383be1?q=80&w=2070&auto=format&fit=crop"
                    alt="Zahra Al Dahab Showroom"
                    fill
                    className="object-cover"
                  />
                </div>
                <address className="not-italic text-gray-600">
                  <p>123 Luxury Street</p>
                  <p>Dubai, United Arab Emirates</p>
                  <p className="mt-2">
                    <span className="font-medium">Opening Hours:</span><br />
                    Monday - Saturday: 10:00 AM - 8:00 PM<br />
                    Sunday: 12:00 PM - 6:00 PM
                  </p>
                </address>
              </div>
              
              <div>
                <h3 className="font-heading text-xl mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <span className="font-medium">Phone:</span> +971 4 123 4567
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> info@zahraaldahab.com
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="font-heading text-xl mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
