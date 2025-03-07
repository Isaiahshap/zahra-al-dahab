import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-[#f8f5f1]">
      {/* Hero section */}
      <div className="relative h-[600px]">
        <Image 
          src="/images/about-banner.jpg" 
          alt="About Zahra Al Dahab"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#D4AF37]" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}>
              About Zahra Al Dahab
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}>
              Discover the heritage, craftsmanship, and commitment to excellence 
              that has made us the trusted name in luxury jewelry and accessories.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#f8f5f1]">
              <Image 
                src="/images/about-craftsmanship.jpg" 
                alt="Luxury craftsmanship"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3A2618] mb-6">
              A Legacy of Luxury
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-lg text-[#5D4037] mb-6 leading-relaxed">
              For over three decades, Zahra Al Dahab has redefined luxury by creating exquisite jewelry and accessories that blend traditional craftsmanship with contemporary design.
            </p>
            <p className="text-lg text-[#5D4037] mb-6 leading-relaxed">
              Each piece in our collection represents our dedication to excellence, from the careful selection of the finest materials to the meticulous attention to detail in our manufacturing process.
            </p>
            <Link 
              href="/about/our-story" 
              className="inline-block bg-[#3A2618] text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#5D4037] transition-colors duration-300 shadow-md"
            >
              Explore Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation cards */}
      <div className="bg-[#3A2618] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Discover More</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-white max-w-2xl mx-auto">
              Learn more about our heritage, values, and services that make Zahra Al Dahab your trusted destination for luxury jewelry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/about/about-us">
              <div className="group bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/about-heritage.jpg" 
                    alt="About Us"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 border-t-4 border-[#D4AF37]">
                  <h3 className="text-2xl font-bold text-[#3A2618] mb-3">About Us</h3>
                  <p className="text-[#5D4037] mb-6">
                    Learn about our company, values, and what makes us unique in the luxury market.
                  </p>
                  <span className="text-[#D4AF37] font-medium group-hover:underline">Discover &rarr;</span>
                </div>
              </div>
            </Link>

            <Link href="/about/our-story">
              <div className="group bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/about-commitment.jpg" 
                    alt="Our Story"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 border-t-4 border-[#D4AF37]">
                  <h3 className="text-2xl font-bold text-[#3A2618] mb-3">Our Story</h3>
                  <p className="text-[#5D4037] mb-6">
                    Explore the rich history and journey of Zahra Al Dahab through the years.
                  </p>
                  <span className="text-[#D4AF37] font-medium group-hover:underline">Discover &rarr;</span>
                </div>
              </div>
            </Link>

            <Link href="/about/faq">
              <div className="group bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/about-customer-care.jpg" 
                    alt="FAQ"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 border-t-4 border-[#D4AF37]">
                  <h3 className="text-2xl font-bold text-[#3A2618] mb-3">FAQ</h3>
                  <p className="text-[#5D4037] mb-6">
                    Find answers to commonly asked questions about our products and services.
                  </p>
                  <span className="text-[#D4AF37] font-medium group-hover:underline">Discover &rarr;</span>
                </div>
              </div>
            </Link>

            <Link href="/about/contact">
              <div className="group bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/contact-us.jpg" 
                    alt="Contact Us"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 border-t-4 border-[#D4AF37]">
                  <h3 className="text-2xl font-bold text-[#3A2618] mb-3">Contact Us</h3>
                  <p className="text-[#5D4037] mb-6">
                    Reach out to our customer service team for any questions or assistance.
                  </p>
                  <span className="text-[#D4AF37] font-medium group-hover:underline">Discover &rarr;</span>
                </div>
              </div>
            </Link>

            <Link href="/about/shipping-returns">
              <div className="group bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src="/images/shipping-returns.jpg" 
                    alt="Shipping & Returns"
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-8 border-t-4 border-[#D4AF37]">
                  <h3 className="text-2xl font-bold text-[#3A2618] mb-3">Shipping & Returns</h3>
                  <p className="text-[#5D4037] mb-6">
                    Information about our shipping policies and hassle-free return process.
                  </p>
                  <span className="text-[#D4AF37] font-medium group-hover:underline">Discover &rarr;</span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Testimonial section */}
      <div className="py-20 bg-[#f8f5f1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A2618] mb-4">What Our Clients Say</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          </div>
          
          <div className="relative px-8 md:px-16">
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border border-[#E8DFD8]">
              <div className="text-8xl text-[#D4AF37] font-serif absolute top-0 left-0 transform -translate-y-1/2 ml-4 md:ml-8" aria-hidden="true">&quot;</div>
              <div className="relative z-10">
                <p className="text-xl md:text-2xl text-[#5D4037] italic mb-8 leading-relaxed">
                  Zahra Al Dahab pieces have become family heirlooms for us. The quality and craftsmanship are unmatched, and their customer service is  exceptional. Every piece tells a story, and we are proud to be part of the Zahra Al Dahab legacy.
                </p>
                <div className="flex items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#D4AF37]">
                    <Image 
                      src="/images/testimonial-1.jpg" 
                      alt="Client"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-bold text-[#3A2618]">Amira Al-Farsi</p>
                    <p className="text-[#5D4037]">Loyal Client Since 2005</p>
                  </div>
                </div>
              </div>
              <div className="text-8xl text-[#D4AF37] font-serif absolute bottom-0 right-0 transform translate-y-1/2 mr-4 md:mr-8" aria-hidden="true">&quot;</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 