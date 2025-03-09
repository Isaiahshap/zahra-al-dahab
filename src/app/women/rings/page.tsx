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
    { id: "signature-collection", label: "Signature Collection", checked: false },
    { id: "luxury-collection", label: "Luxury Collection", checked: false },
    { id: "platinum-collection", label: "Platinum Collection", checked: false },
    { id: "limited-edition", label: "Limited Edition", checked: false },
  ],
  priceRanges: [
    { id: "0-1999", label: "Under $2,000", checked: false },
    { id: "2000-3999", label: "2,000 - 3,999", checked: false },
    { id: "4000-5999", label: "4,000 - 5,999", checked: false },
    { id: "6000-100000", label: "6,000+", checked: false },
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

// Common ring sizes
const ringStandardSizes = ["4", "4.5", "5", "5.5", "6", "6.5", "7", "7.5", "8", "8.5", "9"];

// Mock data for rings
const rings: ProductWithFeatures[] = [
  {
    id: 1,
    name: "Royal Gold Diamond Ring",
    price: 3299,
    originalPrice: 3699,
    discount: 10,
    rating: 4.8,
    reviewCount: 132,
    image: "/rings/women-gold-ring-1.png",
    description: "Exquisite 18K gold ring with pavé diamond setting. Elegant and timeless design for any occasion.",
    features: [
      { name: "Material", value: "18K Gold" },
      { name: "Weight", value: "6g" },
      { name: "Stone", value: "Diamond" },
      { name: "Width", value: "5mm" }
    ],
    inStock: true,
    new: true,
    collections: ["Royal Collection", "Diamond Collection"],
    availableSizes: ["5", "5.5", "6", "6.5", "7", "7.5", "8"]
  },
  {
    id: 2,
    name: "Diamond Solitaire Platinum Ring",
    price: 5499,
    rating: 4.9,
    reviewCount: 94,
    image: "/rings/women-platinum-ring-1.png",
    description: "Stunning platinum solitaire ring with brilliant-cut diamond. The epitome of elegance and sophistication.",
    features: [
      { name: "Material", value: "Platinum" },
      { name: "Weight", value: "8g" },
      { name: "Stone", value: "Diamond" },
      { name: "Width", value: "4mm" }
    ],
    inStock: true,
    collections: ["Diamond Collection", "Platinum Collection"],
    availableSizes: ringStandardSizes
  },
  {
    id: 3,
    name: "Rose Gold Eternity Band",
    price: 1899,
    originalPrice: 2299,
    discount: 17,
    rating: 4.7,
    reviewCount: 186,
    image: "/rings/women-rose-gold-ring-1.png",
    description: "Elegant rose gold eternity band with channel-set diamonds. A symbol of everlasting love.",
    features: [
      { name: "Material", value: "18K Rose Gold" },
      { name: "Weight", value: "4g" },
      { name: "Stone", value: "Diamond" },
      { name: "Width", value: "3mm" }
    ],
    inStock: false,
    bestseller: true,
    collections: ["Signature Collection", "Rose Gold"],
    availableSizes: ["4.5", "5", "5.5", "6", "6.5", "7"]
  },
  {
    id: 4,
    name: "Sapphire & Diamond Halo Ring",
    price: 3899,
    rating: 4.6,
    reviewCount: 78,
    image: "/rings/women-sapphire-ring-1.png",
    description: "Elegant white gold ring with blue sapphire center stone surrounded by a diamond halo.",
    features: [
      { name: "Material", value: "14K White Gold" },
      { name: "Weight", value: "7g" },
      { name: "Stone", value: "Sapphire & Diamond" },
      { name: "Width", value: "8mm" }
    ],
    inStock: true,
    collections: ["Luxury Collection", "Signature Collection"],
    availableSizes: ["5", "6", "7", "8"]
  },
  {
    id: 5,
    name: "Emerald Cut Diamond Ring",
    price: 6299,
    rating: 5.0,
    reviewCount: 52,
    image: "/rings/women-emerald-cut-ring-1.png",
    description: "Sophisticated platinum ring with emerald-cut diamond center stone and tapered baguette side stones.",
    features: [
      { name: "Material", value: "Platinum" },
      { name: "Weight", value: "9g" },
      { name: "Stone", value: "Diamond" },
      { name: "Width", value: "7mm" }
    ],
    inStock: true,
    new: true,
    collections: ["Platinum Collection", "Limited Edition"],
    availableSizes: ["5.5", "6", "6.5", "7", "7.5", "8"]
  },
  {
    id: 6,
    name: "Pearl & Diamond Accent Ring",
    price: 1699,
    rating: 4.7,
    reviewCount: 118,
    image: "/rings/women-pearl-ring-1.png",
    description: "Elegant white gold ring featuring a cultured pearl with diamond accents. Timeless and sophisticated.",
    features: [
      { name: "Material", value: "14K White Gold" },
      { name: "Weight", value: "5g" },
      { name: "Stone", value: "Pearl & Diamond" },
      { name: "Width", value: "6mm" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Signature Collection", "Pearl"],
    availableSizes: ["5", "5.5", "6", "6.5", "7", "7.5"]
  },
];

export default function WomensRingsPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Women's Rings"
        description="Discover our exquisite collection of rings crafted for the modern woman."
        backgroundImage="/rings/rings-hero.png"
      />
      
      <ProductGrid
        products={rings}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Women's Rings"
        description="Explore our carefully curated selection of luxury rings for women. From stunning solitaires to elegant bands, find the perfect ring to express your unique style."
        showSidebar={true}
      />
    </div>
  );
} 