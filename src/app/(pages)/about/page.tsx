import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="pb-12">
      {/* Hero Banner */}
      <div className="relative h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1633810513000-1afaea3ca5cf?q=80&w=1974&auto=format&fit=crop"
          alt="About Zahra Al Dahab"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white">
            Our Story
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-3xl mb-6">A Legacy of Luxury</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, Zahra Al Dahab has become synonymous with luxury and elegance in the world of fine jewelry. 
                What started as a small boutique in the heart of Dubai has now grown into an internationally recognized brand, 
                with our creations adorning the most discerning clients around the globe.
              </p>
              <p className="text-gray-600 mb-4">
                Our passionate team of artisans combines traditional craftsmanship with innovative design to create timeless 
                pieces that transcend trends. We believe that true luxury lies in the details, which is why each piece is 
                meticulously crafted to perfection.
              </p>
              <p className="text-gray-600">
                At Zahra Al Dahab, we are committed to ethical sourcing and sustainable practices. 
                All our diamonds and gemstones are conflict-free, and our gold is sourced from 
                responsible suppliers who adhere to strict environmental standards.
              </p>
            </div>
            <div className="relative aspect-square">
              <Image
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2065&auto=format&fit=crop"
                alt="Jewelry Craftsmanship"
                fill
                className="object-cover rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-4 rounded-full bg-[#9E835F]/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9E835F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h3 className="text-xl font-heading mb-2">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every aspect of our craft, from design to execution.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-4 rounded-full bg-[#9E835F]/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9E835F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <h3 className="text-xl font-heading mb-2">Innovation</h3>
              <p className="text-gray-600">
                We constantly push boundaries to create innovative designs that set new standards.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mb-4 inline-block p-4 rounded-full bg-[#9E835F]/10">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#9E835F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-heading mb-2">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our business practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container">
          <div className="bg-black text-white py-12 px-8 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-heading mb-4">Experience Luxury</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Visit our showroom to discover our exquisite collections and experience the craftsmanship firsthand.
            </p>
            <Link 
              href="/contact"
              className="btn btn-outline border-white text-white hover:bg-white hover:text-black btn-md"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
