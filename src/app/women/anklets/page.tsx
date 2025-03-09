"use client";

import CategoryHeader from "@/components/category/CategoryHeader";
import ProductGrid from "@/components/product/ProductGrid";
import { FilterOptions, SortOption } from "@/components/product/ProductFilter";
import { ProductWithFeatures } from "@/components/product/ProductModal";

// Filter options
const filterOptions: FilterOptions = {
  collections: [
    { id: "gold-collection", label: "Gold Collection", checked: false },
    { id: "silver-collection", label: "Silver Collection", checked: false },
    { id: "diamond-collection", label: "Diamond Collection", checked: false },
    { id: "beach-collection", label: "Beach Collection", checked: false },
    { id: "charm-collection", label: "Charm Collection", checked: false },
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

// Mock data for anklets
const anklets: ProductWithFeatures[] = [
  {
    id: 1,
    name: "Diamond Station Anklet",
    price: 1299,
    originalPrice: 1499,
    discount: 13,
    rating: 4.8,
    reviewCount: 92,
    image: "/anklets/women-diamond-anklet-1.png",
    description: "Delicate 18K white gold anklet with five bezel-set diamond stations. Elegant sparkle for any occasion.",
    features: [
      { name: "Material", value: "18K White Gold" },
      { name: "Stone", value: "Diamond" },
      { name: "Total Carat", value: "0.25ct" },
      { name: "Length", value: "9 inches" }
    ],
    inStock: true,
    new: true,
    collections: ["Diamond Collection", "Gold Collection"]
  },
  {
    id: 2,
    name: "Gold Chain Anklet",
    price: 699,
    rating: 4.7,
    reviewCount: 128,
    image: "/anklets/women-gold-anklet-1.png",
    description: "Classic 14K yellow gold cable chain anklet with adjustable length. Timeless summer accessory.",
    features: [
      { name: "Material", value: "14K Yellow Gold" },
      { name: "Weight", value: "3g" },
      { name: "Chain Type", value: "Cable" },
      { name: "Length", value: "Adjustable 9-10 inches" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Gold Collection", "Beach Collection"]
  },
  {
    id: 3,
    name: "Pearl & Silver Anklet",
    price: 499,
    originalPrice: 599,
    discount: 16,
    rating: 4.6,
    reviewCount: 74,
    image: "/anklets/women-pearl-anklet-1.png",
    description: "Sterling silver anklet with freshwater pearl accents. Subtle elegance for beach days or special occasions.",
    features: [
      { name: "Material", value: "Sterling Silver" },
      { name: "Stone", value: "Freshwater Pearl" },
      { name: "Pearl Size", value: "3-4mm" },
      { name: "Length", value: "9.5 inches" }
    ],
    inStock: false,
    collections: ["Silver Collection", "Beach Collection"]
  },
  {
    id: 4,
    name: "Multi-Charm Gold Anklet",
    price: 899,
    rating: 4.9,
    reviewCount: 64,
    image: "/anklets/women-charm-anklet-1.png",
    description: "14K yellow gold anklet featuring various charms including shells, stars, and moon. Perfect beach accessory.",
    features: [
      { name: "Material", value: "14K Yellow Gold" },
      { name: "Weight", value: "4g" },
      { name: "Charms", value: "Shell, Star, Moon" },
      { name: "Length", value: "9.5 inches" }
    ],
    inStock: true,
    collections: ["Gold Collection", "Charm Collection", "Beach Collection"]
  },
  {
    id: 5,
    name: "Diamond Tennis Anklet",
    price: 2499,
    rating: 5.0,
    reviewCount: 36,
    image: "/anklets/women-tennis-anklet-1.png",
    description: "Luxurious 18K white gold tennis anklet with round brilliant diamonds. Ultimate statement piece.",
    features: [
      { name: "Material", value: "18K White Gold" },
      { name: "Stone", value: "Diamond" },
      { name: "Total Carat", value: "1.5ct" },
      { name: "Length", value: "9 inches" }
    ],
    inStock: true,
    new: true,
    collections: ["Diamond Collection", "Limited Edition"]
  },
  {
    id: 6,
    name: "Rose Gold Satellite Anklet",
    price: 799,
    rating: 4.7,
    reviewCount: 58,
    image: "/anklets/women-rosegold-anklet-1.png",
    description: "Delicate rose gold chain anklet with small bezel-set cubic zirconia stones. Modern and feminine.",
    features: [
      { name: "Material", value: "14K Rose Gold" },
      { name: "Stone", value: "Cubic Zirconia" },
      { name: "Weight", value: "2.5g" },
      { name: "Length", value: "Adjustable 9-10 inches" }
    ],
    inStock: true,
    bestseller: false,
    collections: ["Gold Collection", "Beach Collection"]
  },
];

export default function WomensAnkletsPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Women's Anklets"
        description="Discover our exquisite collection of anklets crafted for the modern woman."
        backgroundImage="/women-anklets-hero.png"
      />
      
      <ProductGrid
        products={anklets}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Women's Anklets"
        description="Explore our carefully curated selection of luxury anklets for women. From delicate chains to diamond-set designs, find the perfect anklet to express your unique style."
        showSidebar={true}
      />
    </div>
  );
} 