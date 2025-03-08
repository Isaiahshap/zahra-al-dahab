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
    { id: "pendant-collection", label: "Pendant Collection", checked: false },
    { id: "luxury-collection", label: "Luxury Collection", checked: false },
    { id: "platinum-collection", label: "Platinum Collection", checked: false },
    { id: "limited-edition", label: "Limited Edition", checked: false },
  ],
  priceRanges: [
    { id: "0-1499", label: "Under $1,500", checked: false },
    { id: "1500-2999", label: "1,500 - 2,999", checked: false },
    { id: "3000-4999", label: "3,000 - 4,999", checked: false },
    { id: "5000-100000", label: "5,000+", checked: false },
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

// Mock data for necklaces
const necklaces: ProductWithFeatures[] = [
  {
    id: 1,
    name: "Royal Gold Chain",
    price: 2899,
    originalPrice: 3299,
    discount: 12,
    rating: 4.8,
    reviewCount: 108,
    image: "/necklaces/gold-chain-1.png",
    description: "Exquisite 18K gold chain with a sophisticated interlocking design. Perfect weight and balance for daily wear.",
    features: [
      { name: "Material", value: "18K Gold" },
      { name: "Length", value: "22 inches" },
      { name: "Weight", value: "32g" },
      { name: "Clasp", value: "Lobster" }
    ],
    inStock: true,
    new: true,
    collections: ["Royal Collection", "Gold"]
  },
  {
    id: 2,
    name: "Diamond Pendant Necklace",
    price: 4799,
    rating: 4.9,
    reviewCount: 72,
    image: "/necklaces/diamond-pendant-1.png",
    description: "Stunning silver chain with a round cut diamond pendant. Elegant and versatile for any occasion.",
    features: [
      { name: "Material", value: "Sterling Silver" },
      { name: "Length", value: "20 inches" },
      { name: "Pendant", value: "0.5ct Diamond" },
      { name: "Clasp", value: "Box" }
    ],
    inStock: true,
    collections: ["Diamond Collection", "Pendant Collection"]
  },
  {
    id: 3,
    name: "Black Pendant Chain",
    price: 1699,
    originalPrice: 1999,
    discount: 15,
    rating: 4.7,
    reviewCount: 156,
    image: "/necklaces/black-chain-1.png",
    description: "Sleek black titanium chain with a modern design. Lightweight and durable for everyday wear.",
    features: [
      { name: "Material", value: "Titanium" },
      { name: "Length", value: "24 inches" },
      { name: "Weight", value: "24g" },
      { name: "Clasp", value: "Barrel" }
    ],
    inStock: false,
    bestseller: true,
    collections: ["Pendant Collection", "Titanium"]
  },
  {
    id: 4,
    name: "Rose Gold Figaro Chain",
    price: 3199,
    rating: 4.6,
    reviewCount: 94,
    image: "/necklaces/rose-gold-chain-1.png",
    description: "Elegant rose gold figaro chain with alternating link sizes. A timeless classic with a modern twist.",
    features: [
      { name: "Material", value: "18K Rose Gold" },
      { name: "Length", value: "22 inches" },
      { name: "Weight", value: "28g" },
      { name: "Clasp", value: "Lobster" }
    ],
    inStock: true,
    collections: ["Luxury Collection", "Gold"]
  },
  {
    id: 5,
    name: "Platinum Chain",
    price: 5499,
    rating: 5.0,
    reviewCount: 48,
    image: "/necklaces/platinum-tag-1.png",
    description: "Sophisticated platinum dog tag pendant on a platinum chain. Can be personalized with custom engraving.",
    features: [
      { name: "Material", value: "Platinum" },
      { name: "Length", value: "24 inches" },
      { name: "Weight", value: "42g" },
      { name: "Pendant", value: "Dog Tag" }
    ],
    inStock: true,
    new: true,
    collections: ["Platinum Collection", "Limited Edition"]
  },
  {
    id: 6,
    name: "Steel Cuban Link Chain",
    price: 1299,
    rating: 4.7,
    reviewCount: 186,
    image: "/necklaces/steel-chain-1.png",
    description: "Durable stainless steel Cuban link chain. Bold design with a heavy feel and secure clasp.",
    features: [
      { name: "Material", value: "Stainless Steel" },
      { name: "Length", value: "22 inches" },
      { name: "Weight", value: "48g" },
      { name: "Clasp", value: "Box" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Pendant Collection", "Steel"]
  },
];

export default function MensNecklacesPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Men's Necklaces"
        description="Discover our exquisite collection of necklaces crafted for the modern gentleman."
        backgroundImage="/necklaces/mens-necklaces-hero.png"
        overlayOpacity={0.5}
      />
      
      <ProductGrid
        products={necklaces}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Men's Necklaces"
        description="Explore our carefully curated selection of luxury necklaces for men. From bold chains to elegant pendants, find the perfect piece to complement your style."
        showSidebar={true}
      />
    </div>
  );
} 