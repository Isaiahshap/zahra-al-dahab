"use client";

import Image from "next/image";
import Link from "next/link";
import ProductGrid from "@/components/product/ProductGrid";
import { FilterOptions, SortOption } from "@/components/product/ProductFilter";
import { ProductWithFeatures } from "@/components/product/ProductModal";

// Filter options
const filterOptions: FilterOptions = {
  collections: [
    { id: "for-her", label: "For Her", checked: false },
    { id: "for-him", label: "For Him", checked: false },
    { id: "couples", label: "Couples", checked: false },
    { id: "wedding", label: "Wedding", checked: false },
    { id: "special-occasions", label: "Special Occasions", checked: false },
    { id: "limited-edition", label: "Limited Edition", checked: false },
  ],
  priceRanges: [
    { id: "0-499", label: "Under $500", checked: false },
    { id: "500-999", label: "500 - 999", checked: false },
    { id: "1000-1999", label: "1,000 - 1,999", checked: false },
    { id: "2000-100000", label: "2,000+", checked: false },
  ],
  availability: [
    { id: "in-stock", label: "In Stock", checked: false },
  ],
  special: [
    { id: "new", label: "New Arrivals", checked: false },
    { id: "bestseller", label: "Bestsellers", checked: false },
    { id: "sale", label: "On Sale", checked: false },
  ]
};

// Sort options
const sortOptions: SortOption[] = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
  { id: "newest", label: "Newest" },
];

// Mock data for gift sets
const giftSets: ProductWithFeatures[] = [
  {
    id: 1,
    name: "Royal Diamond Gift Set for Her",
    price: 1299,
    originalPrice: 1599,
    discount: 19,
    rating: 4.9,
    reviewCount: 76,
    image: "/images/gift-sets/diamond-gift-set-her.jpg",
    description: "An exquisite gift set featuring a diamond pendant necklace, matching earrings, and a luxury perfume, presented in our signature gold box.",
    features: [
      { name: "Includes", value: "Diamond Necklace, Earrings, Perfume" },
      { name: "Diamond Carat", value: "1.5 Total Carat Weight" },
      { name: "Metal", value: "18K White Gold" },
      { name: "Perfume", value: "Rose Gold Saffron (75ml)" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["For Her", "Special Occasions", "Wedding"]
  },
  {
    id: 2,
    name: "Platinum Chronograph Set for Him",
    price: 1799,
    rating: 5.0,
    reviewCount: 58,
    image: "/images/gift-sets/watch-set-him.jpg",
    description: "A distinguished gift set featuring a platinum chronograph watch, matching cufflinks, and a premium oud perfume, elegantly packaged.",
    features: [
      { name: "Includes", value: "Chronograph Watch, Cufflinks, Perfume" },
      { name: "Watch Case", value: "Platinum with Sapphire Crystal" },
      { name: "Movement", value: "Swiss Automatic" },
      { name: "Perfume", value: "Royal Amber Oud (100ml)" }
    ],
    inStock: true,
    new: true,
    collections: ["For Him", "Limited Edition"]
  },
  {
    id: 3,
    name: "Eternal Love Couples Set",
    price: 2499,
    rating: 4.8,
    reviewCount: 42,
    image: "/images/gift-sets/couples-gift-set.jpg",
    description: "A magnificent gift set for couples featuring matching his and hers watches, complementary fragrances, and personalized jewelry items.",
    features: [
      { name: "Includes", value: "2 Watches, 2 Perfumes, 2 Jewelry Pieces" },
      { name: "Watches", value: "18K Gold with Diamond Markers" },
      { name: "Jewelry", value: "Personalized Engravings Available" },
      { name: "Perfumes", value: "Signature His & Hers Fragrances" }
    ],
    inStock: true,
    collections: ["Couples", "Wedding", "Special Occasions"]
  },
  {
    id: 4,
    name: "Pearl Elegance Bridal Set",
    price: 1599,
    originalPrice: 1899,
    discount: 16,
    rating: 4.9,
    reviewCount: 63,
    image: "/images/gift-sets/bridal-gift-set.jpg",
    description: "A breathtaking bridal gift set featuring South Sea pearl jewelry, including a necklace, earrings, and bracelet with diamond accents.",
    features: [
      { name: "Includes", value: "Pearl Necklace, Earrings, Bracelet" },
      { name: "Pearl Type", value: "South Sea Cultured Pearls" },
      { name: "Diamonds", value: "0.75 Total Carat Weight" },
      { name: "Metal", value: "18K White Gold" }
    ],
    inStock: false,
    collections: ["For Her", "Wedding", "Special Occasions"]
  },
  {
    id: 5,
    name: "Business Executive Set",
    price: 999,
    rating: 4.7,
    reviewCount: 87,
    image: "/images/gift-sets/executive-gift-set.jpg",
    description: "A sophisticated gift set for business professionals featuring a luxury pen, leather card holder, cufflinks, and a woody fragrance.",
    features: [
      { name: "Includes", value: "Pen, Card Holder, Cufflinks, Perfume" },
      { name: "Pen", value: "Platinum-Plated Fountain Pen" },
      { name: "Card Holder", value: "Premium Italian Leather" },
      { name: "Perfume", value: "Velvet Sandalwood (100ml)" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["For Him", "Special Occasions"]
  },
  {
    id: 6,
    name: "Anniversary Celebration Set",
    price: 3299,
    rating: 5.0,
    reviewCount: 29,
    image: "/images/gift-sets/anniversary-gift-set.jpg",
    description: "An extraordinary anniversary gift set featuring diamond jewelry, premium champagne flutes, and a pair of luxury fragrances.",
    features: [
      { name: "Includes", value: "Diamond Jewelry, Champagne Flutes, 2 Perfumes" },
      { name: "Jewelry", value: "Diamond Pendant and Bracelet" },
      { name: "Flutes", value: "Crystal with Gold Accents" },
      { name: "Perfumes", value: "Signature Couple Fragrances" }
    ],
    inStock: true,
    new: true,
    collections: ["Couples", "Special Occasions", "Limited Edition"]
  },
];

// Gift categories with images
const giftCategories = [
  {
    title: "For Her",
    image: "/images/gift-sets/category-for-her.jpg",
    link: "/gift-sets/for-her",
    description: "Exquisite gift sets designed to delight and impress her"
  },
  {
    title: "For Him",
    image: "/images/gift-sets/category-for-him.jpg",
    link: "/gift-sets/for-him",
    description: "Distinguished gift collections crafted for the modern gentleman"
  },
  {
    title: "Wedding Gifts",
    image: "/images/gift-sets/category-wedding.jpg",
    link: "/gift-sets/wedding",
    description: "Celebrate their special day with timeless luxury"
  }
];

export default function GiftSetsPage() {
  return (
    <div className="bg-[#f8f5f1]">
      {/* Hero section */}
      <div className="relative h-[600px]">
        <Image 
          src="/images/gift-sets-hero.jpg" 
          alt="Luxury Gift Sets"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#D4AF37]" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}>
              Luxury Gift Sets
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}>
              Curated collections of our finest pieces, perfectly packaged for life&apos;s most precious moments
            </p>
          </div>
        </div>
      </div>
      
      {/* Categories section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A2618] mb-6">Gift Categories</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
          <p className="text-lg text-[#5D4037] max-w-3xl mx-auto">
            Explore our thoughtfully curated gift collections, designed for every special person and occasion in your life
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {giftCategories.map((category, index) => (
            <Link href={category.link} key={index}>
              <div className="group bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={category.image} 
                    alt={category.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent opacity-70"></div>
                  <div className="absolute inset-0 flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-white/90">{category.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 border-t-4 border-[#D4AF37] flex justify-center">
                  <span className="text-[#D4AF37] font-medium group-hover:underline">Explore Collection</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Why Choose Our Gift Sets section */}
        <div className="bg-white rounded-xl shadow-xl p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3A2618] mb-6">Why Choose Our Gift Sets</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f8f5f1] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3A2618] mb-3">Expertly Curated</h3>
              <p className="text-[#5D4037]">
                Each gift set is thoughtfully curated by our luxury experts to create a harmonious and impressive collection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f8f5f1] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm0 0V5.5A2.5 2.5 0 1114.5 8H12zm0 0V6a2 2 0 114 0v2H12z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3A2618] mb-3">Exquisite Packaging</h3>
              <p className="text-[#5D4037]">
                Our signature gift boxes with hand-tied ribbons create a memorable unboxing experience for your recipient.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#f8f5f1] flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#3A2618] mb-3">Personalization</h3>
              <p className="text-[#5D4037]">
                Many of our gift sets can be personalized with engravings, monograms, or customized selections.
              </p>
            </div>
          </div>
        </div>
      </div>

      <ProductGrid
        products={giftSets}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Exclusive Gift Sets"
        description="Discover our handpicked selection of luxury gift sets, perfect for celebrating special occasions and creating unforgettable memories. Each set is thoughtfully assembled and beautifully presented."
        showSidebar={true}
      />
    </div>
  );
} 