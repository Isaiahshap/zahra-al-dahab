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

// Mock data for rings
const rings: ProductWithFeatures[] = [
  {
    id: 1,
    name: "Royal Gold Signet Ring",
    price: 3299,
    originalPrice: 3699,
    discount: 10,
    rating: 4.8,
    reviewCount: 124,
    image: "/images/rings/gold-ring-1.jpg",
    description: "Exquisite 18K gold signet ring with engraved family crest option. Perfect for the distinguished gentleman.",
    features: [
      { name: "Material", value: "18K Gold" },
      { name: "Weight", value: "14g" },
      { name: "Stone", value: "None" },
      { name: "Width", value: "8mm" }
    ],
    inStock: true,
    new: true,
    collections: ["Royal Collection", "Gold"]
  },
  {
    id: 2,
    name: "Diamond Encrusted Platinum Band",
    price: 5499,
    rating: 4.9,
    reviewCount: 86,
    image: "/images/rings/platinum-ring-1.jpg",
    description: "Stunning platinum band with 12 channel-set diamonds. Sophisticated and modern design.",
    features: [
      { name: "Material", value: "Platinum" },
      { name: "Weight", value: "16g" },
      { name: "Stone", value: "Diamond" },
      { name: "Width", value: "6mm" }
    ],
    inStock: true,
    collections: ["Diamond Collection", "Platinum"]
  },
  {
    id: 3,
    name: "Black Titanium Band",
    price: 1899,
    originalPrice: 2299,
    discount: 17,
    rating: 4.7,
    reviewCount: 178,
    image: "/images/rings/black-ring-1.jpg",
    description: "Sleek black titanium band with carbon fiber inlay. Lightweight and durable for everyday wear.",
    features: [
      { name: "Material", value: "Titanium" },
      { name: "Weight", value: "8g" },
      { name: "Stone", value: "None" },
      { name: "Width", value: "7mm" }
    ],
    inStock: false,
    bestseller: true,
    collections: ["Signature Collection", "Titanium"]
  },
  {
    id: 4,
    name: "Rose Gold & Onyx Ring",
    price: 3899,
    rating: 4.6,
    reviewCount: 92,
    image: "/images/rings/rose-gold-ring-1.jpg",
    description: "Elegant rose gold ring with black onyx stone. A perfect blend of classic and contemporary.",
    features: [
      { name: "Material", value: "18K Rose Gold" },
      { name: "Weight", value: "12g" },
      { name: "Stone", value: "Black Onyx" },
      { name: "Width", value: "10mm" }
    ],
    inStock: true,
    collections: ["Luxury Collection", "Gold"]
  },
  {
    id: 5,
    name: "Platinum Sapphire Ring",
    price: 6299,
    rating: 5.0,
    reviewCount: 64,
    image: "/images/rings/sapphire-ring-1.jpg",
    description: "Sophisticated platinum ring with a deep blue sapphire. A timeless piece for the modern gentleman.",
    features: [
      { name: "Material", value: "Platinum" },
      { name: "Weight", value: "15g" },
      { name: "Stone", value: "Sapphire" },
      { name: "Width", value: "9mm" }
    ],
    inStock: true,
    new: true,
    collections: ["Platinum Collection", "Limited Edition"]
  },
  {
    id: 6,
    name: "Tungsten Carbide Ring",
    price: 1699,
    rating: 4.7,
    reviewCount: 142,
    image: "/images/rings/tungsten-ring-1.jpg",
    description: "Durable tungsten carbide ring with brushed finish. Scratch-resistant and perfect for active lifestyles.",
    features: [
      { name: "Material", value: "Tungsten Carbide" },
      { name: "Weight", value: "18g" },
      { name: "Stone", value: "None" },
      { name: "Width", value: "8mm" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Signature Collection", "Tungsten"]
  },
];

export default function MensRingsPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Men's Rings"
        description="Discover our exquisite collection of rings crafted for the modern gentleman."
        backgroundImage="/images/men-rings-hero.jpg"
      />
      
      <ProductGrid
        products={rings}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Men's Rings"
        description="Explore our carefully curated selection of luxury rings for men. From bold statement pieces to elegant bands, find the perfect ring to complement your style."
        showSidebar={true}
      />
    </div>
  );
} 