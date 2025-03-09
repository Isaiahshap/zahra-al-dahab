import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  // About section cards data
  const aboutSections = [
    {
      title: "Our Heritage",
      description: "Discover the rich history and cultural roots behind Zahra Al Dahab's luxury jewelry and accessories.",
      imageUrl: "/about-heritage.png",
      link: "/about/about-us"
    },
    {
      title: "Our Commitment",
      description: "Learn about our meticulous artisanal process and the skilled craftspeople behind every piece.",
      imageUrl: "/about-commitment.png",
      link: "/about/about-us"
    },
    {
      title: "Customer Care",
      description: "Explore our dedicated customer service approach that ensures your complete satisfaction.",
      imageUrl: "/about-customer-care.png",
      link: "/about/contact"
    },
    {
      title: "Our Team",
      description: "Meet the passionate individuals who bring our vision to life and craft our luxury pieces.",
      imageUrl: "/team-member-1.png",
      link: "/about/about-us"
    }
  ];

  return (
    <div className="bg-[#f8f5f1]">
      {/* Hero section */}
      <div className="relative h-[600px]">
        <Image 
          src="/about-heritage.png" 
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
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative h-[350px] sm:h-[400px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#f8f5f1]">
              <Image 
                src="/about-commitment.png" 
                alt="Luxury craftsmanship"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
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
              href="/about/about-us" 
              className="inline-block bg-[#3A2618] text-white px-8 py-4 rounded text-lg font-medium hover:bg-[#5D4037] transition-colors duration-300 shadow-md"
            >
              Explore Our Story
            </Link>
          </div>
        </div>
      </div>

      {/* About Section Cards */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3A2618] mb-4">Our Essence</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-lg text-[#5D4037] max-w-3xl mx-auto">
              Explore the elements that define Zahra Al Dahab&apos;s commitment to excellence and luxury.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutSections.map((section, index) => (
              <div key={index} className="bg-[#f8f5f1] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-60 w-full">
                  <Image 
                    src={section.imageUrl}
                    alt={section.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#3A2618] mb-3">{section.title}</h3>
                  <p className="text-[#5D4037] mb-4">{section.description}</p>
                  <Link href={section.link} className="text-[#D4AF37] font-medium hover:underline inline-flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
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
                  Zahra Al Dahab pieces have become family heirlooms for us. The quality and craftsmanship are unmatched, and their customer service is exceptional. Every piece tells a story, and we are proud to be part of the Zahra Al Dahab legacy.
                </p>
                <div className="flex items-center">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-2 border-[#D4AF37]">
                    <Image 
                      src="/team-member-4.png" 
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