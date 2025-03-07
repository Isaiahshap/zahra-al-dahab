"use client";

import CategoryHeader from "@/components/category/CategoryHeader";
import ProductGrid from "@/components/product/ProductGrid";
import { FilterOptions, SortOption } from "@/components/product/ProductFilter";
import { ProductWithFeatures } from "@/components/product/ProductModal";

// Filter options
const filterOptions: FilterOptions = {
  collections: [
    { id: "royal-collection", label: "Royal Collection", checked: false },
    { id: "diamond-collection", label: "Diamond Collection", checked: false },
    { id: "sport-collection", label: "Sport Collection", checked: false },
    { id: "luxury-collection", label: "Luxury Collection", checked: false },
    { id: "platinum-collection", label: "Platinum Collection", checked: false },
    { id: "limited-edition", label: "Limited Edition", checked: false },
  ],
  priceRanges: [
    { id: "0-2999", label: "Under $3,000", checked: false },
    { id: "3000-4999", label: "3,000 - 4,999", checked: false },
    { id: "5000-7999", label: "5,000 - 7,999", checked: false },
    { id: "8000-100000", label: "8,000+", checked: false },
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

// Mock data for watches
const watches: ProductWithFeatures[] = [
  {
    id: 1,
    name: "Royal Gold Chronograph",
    price: 3499,
    originalPrice: 3999,
    discount: 12,
    rating: 4.8,
    reviewCount: 156,
    image: "/images/watches/gold-watch-1.jpg",
    description: "Exquisite 18K gold chronograph with sapphire crystal and automatic movement. Water resistant to 100 meters.",
    features: [
      { name: "Movement", value: "Automatic" },
      { name: "Case Material", value: "18K Gold" },
      { name: "Water Resistance", value: "100m" },
      { name: "Diameter", value: "42mm" }
    ],
    inStock: true,
    new: true,
    collections: ["Royal Collection", "Gold"]
  },
  {
    id: 2,
    name: "Diamond Encrusted Silver",
    price: 5999,
    rating: 4.9,
    reviewCount: 78,
    image: "/images/watches/silver-watch-1.jpg",
    description: "Stunning silver timepiece with 24 diamonds embedded in the bezel. Leather strap and automatic movement.",
    features: [
      { name: "Movement", value: "Automatic" },
      { name: "Case Material", value: "Sterling Silver" },
      { name: "Strap", value: "Genuine Leather" },
      { name: "Diameter", value: "40mm" }
    ],
    inStock: true,
    collections: ["Diamond Collection", "Silver"]
  },
  {
    id: 3,
    name: "Black Titanium Diver",
    price: 2799,
    originalPrice: 3299,
    discount: 15,
    rating: 4.7,
    reviewCount: 203,
    image: "/images/watches/black-watch-1.jpg",
    description: "Professional diver's watch with titanium case and rubber strap. Water resistant to 300 meters.",
    features: [
      { name: "Movement", value: "Automatic" },
      { name: "Case Material", value: "Titanium" },
      { name: "Water Resistance", value: "300m" },
      { name: "Diameter", value: "44mm" }
    ],
    inStock: false,
    bestseller: true,
    collections: ["Sport Collection", "Titanium"]
  },
  {
    id: 4,
    name: "Rose Gold Skeleton",
    price: 4299,
    rating: 4.6,
    reviewCount: 112,
    image: "/images/watches/rose-gold-watch-1.jpg",
    description: "Elegant rose gold skeleton watch with visible movement and sapphire crystal on both sides.",
    features: [
      { name: "Movement", value: "Manual" },
      { name: "Case Material", value: "Rose Gold" },
      { name: "Water Resistance", value: "50m" },
      { name: "Diameter", value: "41mm" }
    ],
    inStock: true,
    collections: ["Luxury Collection", "Gold"]
  },
  {
    id: 5,
    name: "Platinum Moonphase",
    price: 7999,
    rating: 5.0,
    reviewCount: 56,
    image: "/images/watches/platinum-watch-1.jpg",
    description: "Sophisticated platinum watch with moonphase complication and crocodile leather strap.",
    features: [
      { name: "Movement", value: "Automatic" },
      { name: "Case Material", value: "Platinum" },
      { name: "Strap", value: "Crocodile Leather" },
      { name: "Diameter", value: "39mm" }
    ],
    inStock: true,
    new: true,
    collections: ["Platinum Collection", "Limited Edition"]
  },
  {
    id: 6,
    name: "Carbon Fiber Chronograph",
    price: 3199,
    rating: 4.7,
    reviewCount: 94,
    image: "/images/watches/carbon-watch-1.jpg",
    description: "Lightweight carbon fiber chronograph with rubber strap. Perfect for sports and active lifestyles.",
    features: [
      { name: "Movement", value: "Quartz" },
      { name: "Case Material", value: "Carbon Fiber" },
      { name: "Water Resistance", value: "200m" },
      { name: "Diameter", value: "45mm" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Sport Collection", "Carbon"]
  },
];

export default function MensWatchesPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Men's Watches"
        description="Discover our exquisite collection of timepieces crafted for the modern gentleman."
        backgroundImage="/images/men-watches-hero.jpg"
      />
      
      <ProductGrid
        products={watches}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Men's Watches"
        description="Explore our carefully curated selection of luxury timepieces for men. From classic elegance to modern sophistication, find the perfect watch to complement your style."
        showSidebar={true}
      />
    </div>
  );
} 