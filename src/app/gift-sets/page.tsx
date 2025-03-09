"use client";

import Image from "next/image";
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