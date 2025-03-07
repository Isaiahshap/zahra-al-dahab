import Image from "next/image";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <div className="bg-[#f8f5f1]">
      {/* Hero section */}
      <div className="relative h-[600px]">
        <Image 
          src="/images/our-story-hero.jpg" 
          alt="Our Story"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#D4AF37]" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}>
              Our Story
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}>
              A journey of passion, excellence, and artistry spanning over three decades
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3A2618] mb-6">
              Our Heritage
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-lg text-[#5D4037] mb-6 leading-relaxed">
              Founded in 1987 by master goldsmith Khalid Al Dahab in Dubai, Zahra Al Dahab began as a small jewelry boutique inspired by the rich cultural heritage of the Middle East.
            </p>
            <p className="text-lg text-[#5D4037] mb-6 leading-relaxed">
              Named after Khalid&apos;s daughter Zahra, whose name means &quot;flower&quot; in Arabic, the brand embodies the beauty, elegance, and uniqueness of each handcrafted piece that blooms from our ateliers.
            </p>
            <p className="text-lg text-[#5D4037] leading-relaxed">
              What started as a family passion has flourished into an internationally recognized luxury brand, while remaining true to our founding principles of exceptional craftsmanship, ethical sourcing, and timeless design.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[500px] w-full">
              <div className="absolute w-[80%] h-[80%] top-0 right-0 rounded-xl overflow-hidden shadow-2xl border-4 border-[#f8f5f1] z-10">
                <Image 
                  src="/images/our-story-founder.jpg" 
                  alt="Our Founder"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute w-[60%] h-[60%] bottom-0 left-0 rounded-xl overflow-hidden shadow-2xl border-4 border-[#f8f5f1] z-20">
                <Image 
                  src="/images/our-story-boutique.jpg" 
                  alt="First Boutique"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="absolute w-full h-full inset-0 bg-[rgba(212,175,55,0.1)] rounded-full z-0"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline section */}
      <div className="bg-[#3A2618] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Explore the key milestones that have shaped our legacy of excellence
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#D4AF37]"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {/* 1987 */}
              <div className="mb-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-right order-2 md:order-1">
                    <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-[#D4AF37] ml-auto md:mr-0" style={{ maxWidth: "500px" }}>
                      <h3 className="text-2xl font-bold text-[#3A2618] mb-2">1987</h3>
                      <h4 className="text-xl text-[#D4AF37] mb-4">The Beginning</h4>
                      <p className="text-[#5D4037]">
                        Khalid Al Dahab opens the first Zahra Al Dahab boutique in Dubai&apos;s Gold Souk, offering handcrafted gold jewelry inspired by traditional Arabic designs.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] border-4 border-white shadow-xl"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-16 order-1 md:order-2">
                    <div className="relative h-[240px] w-full rounded-xl overflow-hidden shadow-xl">
                      <Image 
                        src="/images/timeline-1987.jpg" 
                        alt="Opening of first boutique"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 1995 */}
              <div className="mb-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 order-2">
                    <div className="relative h-[240px] w-full rounded-xl overflow-hidden shadow-xl">
                      <Image 
                        src="/images/timeline-1995.jpg" 
                        alt="International expansion"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] border-4 border-white shadow-xl"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-16 text-left order-1">
                    <div className="bg-white p-8 rounded-xl shadow-xl border-r-4 border-[#D4AF37] mr-auto md:ml-0" style={{ maxWidth: "500px" }}>
                      <h3 className="text-2xl font-bold text-[#3A2618] mb-2">1995</h3>
                      <h4 className="text-xl text-[#D4AF37] mb-4">International Expansion</h4>
                      <p className="text-[#5D4037]">
                        The brand opens its first international store in London, introducing Middle Eastern craftsmanship to the European market.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2003 */}
              <div className="mb-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-right order-2 md:order-1">
                    <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-[#D4AF37] ml-auto md:mr-0" style={{ maxWidth: "500px" }}>
                      <h3 className="text-2xl font-bold text-[#3A2618] mb-2">2003</h3>
                      <h4 className="text-xl text-[#D4AF37] mb-4">Diamond Collection Launch</h4>
                      <p className="text-[#5D4037]">
                        Zahra Al Dahab launches its signature Diamond Collection, featuring ethically sourced diamonds and innovative designs that blend Eastern and Western aesthetics.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] border-4 border-white shadow-xl"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-16 order-1 md:order-2">
                    <div className="relative h-[240px] w-full rounded-xl overflow-hidden shadow-xl">
                      <Image 
                        src="/images/timeline-2003.jpg" 
                        alt="Diamond Collection"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 2011 */}
              <div className="mb-24">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 order-2">
                    <div className="relative h-[240px] w-full rounded-xl overflow-hidden shadow-xl">
                      <Image 
                        src="/images/timeline-2011.jpg" 
                        alt="E-commerce platform"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] border-4 border-white shadow-xl"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-16 text-left order-1">
                    <div className="bg-white p-8 rounded-xl shadow-xl border-r-4 border-[#D4AF37] mr-auto md:ml-0" style={{ maxWidth: "500px" }}>
                      <h3 className="text-2xl font-bold text-[#3A2618] mb-2">2011</h3>
                      <h4 className="text-xl text-[#D4AF37] mb-4">Digital Transformation</h4>
                      <p className="text-[#5D4037]">
                        Launch of our global e-commerce platform, bringing our exclusive collections to customers worldwide with a personalized digital shopping experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2023 */}
              <div>
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 text-right order-2 md:order-1">
                    <div className="bg-white p-8 rounded-xl shadow-xl border-l-4 border-[#D4AF37] ml-auto md:mr-0" style={{ maxWidth: "500px" }}>
                      <h3 className="text-2xl font-bold text-[#3A2618] mb-2">2023</h3>
                      <h4 className="text-xl text-[#D4AF37] mb-4">Sustainable Future</h4>
                      <p className="text-[#5D4037]">
                        Zahra Al Dahab commits to full sustainability across all operations, introducing our eco-friendly packaging and 100% traceability for all gemstones and precious metals.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#D4AF37] border-4 border-white shadow-xl"></div>
                  </div>
                  <div className="md:w-1/2 md:pl-16 order-1 md:order-2">
                    <div className="relative h-[240px] w-full rounded-xl overflow-hidden shadow-xl">
                      <Image 
                        src="/images/timeline-2023.jpg" 
                        alt="Sustainable Initiative"
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A2618] mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-[#5D4037] max-w-3xl mx-auto">
              The guiding principles that define our brand and our commitment to excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/value-craftsmanship.jpg" 
                  alt="Craftsmanship"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">Craftsmanship</h3>
                </div>
              </div>
              <div className="p-8 border-t-4 border-[#D4AF37]">
                <p className="text-[#5D4037] leading-relaxed">
                  Every piece is meticulously handcrafted by our master artisans who combine traditional techniques with innovative approaches, ensuring exceptional quality and attention to detail.
                </p>
              </div>
            </div>
            
            {/* Value 2 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/value-integrity.jpg" 
                  alt="Integrity"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">Integrity</h3>
                </div>
              </div>
              <div className="p-8 border-t-4 border-[#D4AF37]">
                <p className="text-[#5D4037] leading-relaxed">
                  We are committed to ethical sourcing and transparent business practices. All our gemstones are conflict-free, and we work with suppliers who share our values and standards.
                </p>
              </div>
            </div>
            
            {/* Value 3 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src="/images/value-heritage.jpg" 
                  alt="Heritage"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-3xl font-bold text-white">Heritage</h3>
                </div>
              </div>
              <div className="p-8 border-t-4 border-[#D4AF37]">
                <p className="text-[#5D4037] leading-relaxed">
                  We honor our rich cultural heritage while embracing innovation. Our designs celebrate the artistry of the past while looking forward to the future of luxury jewelry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CEO message section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#f8f5f1]">
                <Image 
                  src="/images/ceo-portrait.jpg" 
                  alt="Zahra Al Dahab - CEO"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <div className="text-5xl text-[#D4AF37] font-serif mb-6" aria-hidden="true">&quot;</div>
              <p className="text-xl md:text-2xl text-[#5D4037] italic mb-8 leading-relaxed">
                Our mission has always been to create more than just jewelry; we create heirlooms that carry stories and emotions across generations. Each piece that leaves our workshop carries with it our heritage, our passion, and our commitment to perfection.
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <p className="font-bold text-xl text-[#3A2618]">Zahra Al Dahab</p>
                  <p className="text-[#5D4037]">Chief Executive Officer</p>
                </div>
                <div className="ml-4">
                  <Image 
                    src="/images/signature.png" 
                    alt="Signature"
                    width={120}
                    height={60}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative h-[400px]">
        <Image 
          src="/images/story-cta-bg.jpg" 
          alt="Visit Our Boutiques"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(58,38,24,0.9)] to-[rgba(58,38,24,0.7)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-3xl px-4">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">Experience Our Legacy</h2>
            <p className="text-xl text-white mb-8">
              Visit our boutiques to explore our collections and experience the exceptional craftsmanship and service that defines Zahra Al Dahab.
            </p>
            <Link 
              href="/about/contact" 
              className="inline-block bg-[#D4AF37] text-[#3A2618] px-8 py-4 rounded text-lg font-medium hover:bg-[#E5C363] transition-colors duration-300 shadow-md"
            >
              Find Our Boutiques
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 