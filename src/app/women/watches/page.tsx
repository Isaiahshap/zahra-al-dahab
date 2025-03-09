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
    { id: "petite-collection", label: "Petite Collection", checked: false },
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
    name: "Royal Gold Diamond Watch",
    price: 3499,
    originalPrice: 3999,
    discount: 12,
    rating: 4.8,
    reviewCount: 142,
    image: "/watches/women-gold-watch-1.png",
    description: "Exquisite 18K gold watch with diamond bezel and mother of pearl dial. Water resistant to 50 meters.",
    features: [
      { name: "Movement", value: "Swiss Quartz" },
      { name: "Case Material", value: "18K Gold" },
      { name: "Water Resistance", value: "50m" },
      { name: "Diameter", value: "32mm" }
    ],
    inStock: true,
    new: true,
    collections: ["Royal Collection", "Diamond Collection"]
  },
  {
    id: 2,
    name: "Diamond Encrusted Rose",
    price: 5999,
    rating: 4.9,
    reviewCount: 86,
    image: "/watches/women-rose-gold-watch-1.png",
    description: "Stunning rose gold timepiece with 36 diamonds embedded in the bezel. Satin strap and automatic movement.",
    features: [
      { name: "Movement", value: "Automatic" },
      { name: "Case Material", value: "Rose Gold" },
      { name: "Strap", value: "Satin" },
      { name: "Diameter", value: "28mm" }
    ],
    inStock: true,
    collections: ["Diamond Collection", "Luxury Collection"]
  },
  {
    id: 3,
    name: "Petite Silver Watch",
    price: 2799,
    originalPrice: 3299,
    discount: 15,
    rating: 4.7,
    reviewCount: 178,
    image: "/watches/women-silver-watch-1.png",
    description: "Elegant silver petite watch with mother of pearl dial. Perfect for formal occasions.",
    features: [
      { name: "Movement", value: "Swiss Quartz" },
      { name: "Case Material", value: "Sterling Silver" },
      { name: "Water Resistance", value: "30m" },
      { name: "Diameter", value: "24mm" }
    ],
    inStock: false,
    bestseller: true,
    collections: ["Petite Collection", "Silver"]
  },
  {
    id: 4,
    name: "Oval Silver Watch",
    price: 4299,
    rating: 4.6,
    reviewCount: 94,
    image: "/watches/women-oval-watch-1.png",
    description: "Elegant silver oval watch with sapphire crystal and diamond hour markers.",
    features: [
      { name: "Movement", value: "Automatic" },
      { name: "Case Material", value: "Silver" },
      { name: "Water Resistance", value: "30m" },
      { name: "Case Shape", value: "Oval" }
    ],
    inStock: true,
    collections: ["Luxury Collection", "Silver"]
  },
  {
    id: 5,
    name: "Platinum Diamond Watch",
    price: 7999,
    rating: 5.0,
    reviewCount: 62,
    image: "/watches/women-platinum-watch-1.png",
    description: "Sophisticated platinum watch with full diamond-set dial and alligator leather strap.",
    features: [
      { name: "Movement", value: "Swiss Quartz" },
      { name: "Case Material", value: "Platinum" },
      { name: "Strap", value: "Alligator Leather" },
      { name: "Diameter", value: "30mm" }
    ],
    inStock: true,
    new: true,
    collections: ["Platinum Collection", "Limited Edition"]
  },
  {
    id: 6,
    name: "Pearl Dial Gold Watch",
    price: 3199,
    rating: 4.7,
    reviewCount: 108,
    image: "/watches/women-pearl-watch-1.png",
    description: "Luxurious gold watch with mother of pearl dial and diamond hour markers.",
    features: [
      { name: "Movement", value: "Automatic" },
      { name: "Case Material", value: "18K Gold" },
      { name: "Water Resistance", value: "50m" },
      { name: "Diameter", value: "26mm" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Luxury Collection", "Gold"]
  },
];

export default function WomensWatchesPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Women's Watches"
        description="Discover our exquisite collection of timepieces crafted for the modern woman."
        backgroundImage="/watches/women-watches-hero.png"
      />
      
      <ProductGrid
        products={watches}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Women's Watches"
        description="Explore our carefully curated selection of luxury timepieces for women. From classic elegance to modern sophistication, find the perfect watch to complement your style."
        showSidebar={true}
      />
    </div>
  );
} 