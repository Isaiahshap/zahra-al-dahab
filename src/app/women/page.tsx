import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { womensCategories } from "@/lib/womens";

export const metadata: Metadata = {
  title: "Women's Luxury Collection | Zahra Al Dahab",
  description: "Discover our exclusive women's collection of luxury watches, rings, bracelets, earrings, necklaces and more.",
};

// Images for category cards with descriptions
const categoryDetails: Record<string, {image: string, description: string}> = {
  "Watches": {
    image: "/images/women-watches.jpg",
    description: "Timepieces of exquisite craftsmanship, our watches blend precision with elegance, adorning your wrist with timeless luxury."
  },
  "Necklaces": {
    image: "/images/women-necklaces.jpg",
    description: "Graceful chains and pendants that frame your décolletage, crafted with precious metals and stunning gemstones."
  },
  "Rings": {
    image: "/images/women-rings.jpg",
    description: "Symbols of eternal beauty, our rings showcase intricate designs inspired by ancient Middle Eastern artistry."
  },
  "Bracelets": {
    image: "/images/women-bracelets.jpg",
    description: "Elaborate bangles and delicate chains designed to accentuate your natural grace with the finest materials."
  },
  "Earrings": {
    image: "/images/women-earrings.jpg",
    description: "From subtle studs to statement chandeliers, our earrings frame your face with radiant elegance and sophistication."
  },
  "Anklets": {
    image: "/images/women-anklets.jpg",
    description: "Delicate chains adorned with charms and gemstones, celebrating a cherished tradition of feminine adornment."
  },
  "Personalized": {
    image: "/images/women-personalized.jpg",
    description: "Bespoke treasures created especially for you, with personalized details that tell your unique story."
  },
};

export default function WomensPage() {
  return (
    <main className="bg-[#FCFAF7] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image 
          src="/images/womens-collection-hero.jpg"
          alt="Women's Luxury Collection"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-wide">
              Women&apos;s Luxury Collection
            </h1>
            <p className="text-xl md:text-2xl text-[#E0D2B4] mb-8 max-w-3xl mx-auto font-light">
              Adorn yourself with the epitome of elegance and artistry, crafted with passion and precision by master jewelers.
            </p>
            <div className="h-1 w-40 bg-[#D4AF37] mx-auto mb-8"></div>
          </div>
        </div>
      </div>
      
      {/* Elegant introduction */}
      <div className="container mx-auto px-4 py-20 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-serif text-[#5D4037] mb-8">
          Discover Our Exquisite Collections
        </h2>
        <p className="text-lg text-[#8D6E63] mb-12 leading-relaxed">
          Each piece in our women&apos;s collection embodies centuries of Middle Eastern jewelry-making tradition, reimagined for the modern woman. Explore our categories to find your perfect adornment.
        </p>
        <div className="h-0.5 w-24 bg-[#D4AF37] mx-auto"></div>
      </div>
      
      {/* Luxury Category Showcase */}
      <div className="container mx-auto px-4 pb-24">
        {womensCategories.map((category, index) => (
          <div 
            key={category.name}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                       min-h-[500px] mb-20 items-center`}
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 h-[500px] relative overflow-hidden group">
              <Image 
                src={categoryDetails[category.name]?.image || "/images/womens-default.jpg"}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:opacity-0"></div>
            </div>
            
            {/* Content Side */}
            <div className="w-full md:w-1/2 p-10 md:p-16 bg-white shadow-lg flex flex-col justify-center items-center md:items-start text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-serif text-[#5D4037] mb-6 relative">
                {category.name}
                <span className="block h-0.5 w-20 bg-[#D4AF37] mt-4 md:mx-0"></span>
              </h3>
              
              <p className="text-lg text-[#8D6E63] mb-8 leading-relaxed">
                {categoryDetails[category.name]?.description || `Discover our exclusive collection of women's ${category.name.toLowerCase()}`}
              </p>
              
              <Link 
                href={category.href} 
                className="group relative inline-flex items-center justify-center overflow-hidden px-8 py-4 bg-transparent border border-[#D4AF37] text-[#5D4037] font-medium transition-all duration-500"
              >
                <span className="absolute inset-0 w-0 bg-[#D4AF37] transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative transition-colors duration-500 ease-out group-hover:text-white flex items-center">
                  Explore Collection
                  <svg className="ml-2 w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      {/* Elegant Footer CTA */}
      <div className="bg-[#3A2D27] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center relative">
            {/* Decorative element */}
            <div className="absolute left-0 right-0 top-0 h-px w-32 bg-[#D4AF37] opacity-40 mx-auto"></div>
            
            <h3 className="text-[#D4AF37] font-serif text-3xl md:text-4xl mb-6 pt-8">
              Experience Timeless Elegance
            </h3>
            <p className="text-white text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              Our expert jewelry consultants are ready to help you find the perfect piece 
              that reflects your unique style and personality.
            </p>
            
            <Link 
              href="/about/contact" 
              className="group relative inline-flex items-center justify-center overflow-hidden px-10 py-4 bg-transparent border border-[#D4AF37] text-[#D4AF37] font-medium transition-all duration-500"
            >
              <span className="absolute inset-0 w-0 bg-[#D4AF37] transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative transition-colors duration-500 ease-out group-hover:text-[#3A2D27] flex items-center">
                Schedule a Consultation
                <svg className="ml-2 w-5 h-5 transition-transform duration-500 ease-out group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </Link>
            
            {/* Decorative element */}
            <div className="mt-16 mb-2 relative">
              <div className="h-px w-32 bg-[#D4AF37] opacity-40 mx-auto"></div>
            </div>
            <p className="text-[#D4AF37] font-serif text-lg">
              Zahra Al Dahab — Luxury Reimagined
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 