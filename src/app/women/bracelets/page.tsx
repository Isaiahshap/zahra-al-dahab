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
    { id: "charm-collection", label: "Charm Collection", checked: false },
    { id: "luxury-collection", label: "Luxury Collection", checked: false },
    { id: "tennis-collection", label: "Tennis Collection", checked: false },
    { id: "limited-edition", label: "Limited Edition", checked: false },
  ],
  priceRanges: [
    { id: "0-999", label: "Under $1,000", checked: false },
    { id: "1000-2499", label: "1,000 - 2,499", checked: false },
    { id: "2500-3999", label: "2,500 - 3,999", checked: false },
    { id: "4000-100000", label: "4,000+", checked: false },
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

// Mock data for bracelets
const bracelets: ProductWithFeatures[] = [
  {
    id: 1,
    name: "Diamond Tennis Bracelet",
    price: 3299,
    originalPrice: 3699,
    discount: 10,
    rating: 4.8,
    reviewCount: 124,
    image: "/bracelets/women-tennis-bracelet-1.png",
    description: "Exquisite 18K white gold tennis bracelet with round brilliant diamonds. A timeless classic for any occasion.",
    features: [
      { name: "Material", value: "18K White Gold" },
      { name: "Weight", value: "18g" },
      { name: "Stone", value: "Diamond" },
      { name: "Length", value: "7 inches" }
    ],
    inStock: true,
    new: true,
    collections: ["Tennis Collection", "Diamond Collection"]
  },
  {
    id: 2,
    name: "Pearl & Diamond Bangle",
    price: 2499,
    rating: 4.9,
    reviewCount: 86,
    image: "/bracelets/women-pearl-bracelet-1.png",
    description: "Stunning gold bangle with alternating freshwater pearls and diamond stations. Elegant and sophisticated.",
    features: [
      { name: "Material", value: "18K Gold" },
      { name: "Weight", value: "22g" },
      { name: "Stone", value: "Pearl & Diamond" },
      { name: "Diameter", value: "2.5 inches" }
    ],
    inStock: true,
    collections: ["Luxury Collection", "Pearl"]
  },
  {
    id: 3,
    name: "Rose Gold Charm Bracelet",
    price: 1299,
    originalPrice: 1499,
    discount: 13,
    rating: 4.7,
    reviewCount: 178,
    image: "/bracelets/women-charm-bracelet-1.png",
    description: "Delicate rose gold chain bracelet with interchangeable diamond charms. Personalize your style.",
    features: [
      { name: "Material", value: "18K Rose Gold" },
      { name: "Weight", value: "12g" },
      { name: "Stone", value: "Diamond" },
      { name: "Length", value: "6.5 inches" }
    ],
    inStock: false,
    bestseller: true,
    collections: ["Charm Collection", "Rose Gold"]
  },
  {
    id: 4,
    name: "Sapphire & Diamond Cuff",
    price: 3899,
    rating: 4.6,
    reviewCount: 92,
    image: "/bracelets/women-cuff-bracelet-1.png",
    description: "Elegant platinum cuff bracelet with sapphire center stones and diamond accents. Bold and sophisticated.",
    features: [
      { name: "Material", value: "Platinum" },
      { name: "Weight", value: "32g" },
      { name: "Stone", value: "Sapphire & Diamond" },
      { name: "Width", value: "15mm" }
    ],
    inStock: true,
    collections: ["Luxury Collection", "Platinum"]
  },
  {
    id: 5,
    name: "Ruby & Diamond Royal Bracelet",
    price: 5299,
    rating: 5.0,
    reviewCount: 64,
    image: "/bracelets/women-ruby-bracelet-1.png",
    description: "Sophisticated gold bracelet with alternating ruby and diamond links. A truly royal statement piece.",
    features: [
      { name: "Material", value: "18K Gold" },
      { name: "Weight", value: "28g" },
      { name: "Stone", value: "Ruby & Diamond" },
      { name: "Length", value: "7 inches" }
    ],
    inStock: true,
    new: true,
    collections: ["Royal Collection", "Limited Edition"]
  },
  {
    id: 6,
    name: "Multi-strand Pearl Bracelet",
    price: 1699,
    rating: 4.7,
    reviewCount: 142,
    image: "/bracelets/women-pearl-bracelet-2.png",
    description: "Elegant three-strand freshwater pearl bracelet with 14K white gold clasp and diamond accent.",
    features: [
      { name: "Material", value: "14K White Gold & Pearl" },
      { name: "Weight", value: "26g" },
      { name: "Stone", value: "Pearl & Diamond" },
      { name: "Length", value: "7 inches" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Luxury Collection", "Pearl"]
  },
];

export default function WomensBraceletsPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Women's Bracelets"
        description="Discover our exquisite collection of bracelets crafted for the modern woman."
        backgroundImage="/women-bracelets-hero.png"
      />
      
      <ProductGrid
        products={bracelets}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Women's Bracelets"
        description="Explore our carefully curated selection of luxury bracelets for women. From elegant tennis bracelets to statement cuffs, find the perfect bracelet to express your unique style."
        showSidebar={true}
      />
    </div>
  );
} 