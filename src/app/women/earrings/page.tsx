"use client";

import CategoryHeader from "@/components/category/CategoryHeader";
import ProductGrid from "@/components/product/ProductGrid";
import { FilterOptions, SortOption } from "@/components/product/ProductFilter";
import { ProductWithFeatures } from "@/components/product/ProductModal";

// Filter options
const filterOptions: FilterOptions = {
  collections: [
    { id: "diamond-collection", label: "Diamond Collection", checked: false },
    { id: "stud-collection", label: "Stud Collection", checked: false },
    { id: "hoop-collection", label: "Hoop Collection", checked: false },
    { id: "drop-collection", label: "Drop Collection", checked: false },
    { id: "pearl-collection", label: "Pearl Collection", checked: false },
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

// Mock data for earrings
const earrings: ProductWithFeatures[] = [
  {
    id: 1,
    name: "Diamond Stud Earrings",
    price: 1499,
    originalPrice: 1799,
    discount: 16,
    rating: 4.9,
    reviewCount: 156,
    image: "/earrings/women-diamond-studs-1.png",
    description: "Classic round-cut diamond stud earrings set in 18K white gold. Timeless elegance for any occasion.",
    features: [
      { name: "Material", value: "18K White Gold" },
      { name: "Stone", value: "Diamond" },
      { name: "Total Carat", value: "1.0ct" },
      { name: "Clarity", value: "VS1-VS2" }
    ],
    inStock: true,
    new: true,
    collections: ["Diamond Collection", "Stud Collection"]
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    price: 1299,
    rating: 4.8,
    reviewCount: 88,
    image: "/earrings/women-pearl-drop-1.png",
    description: "Elegant South Sea pearl drop earrings with diamond accents in 18K yellow gold. Sophisticated and feminine.",
    features: [
      { name: "Material", value: "18K Yellow Gold" },
      { name: "Stone", value: "South Sea Pearl & Diamond" },
      { name: "Pearl Size", value: "9-10mm" },
      { name: "Length", value: "1.5 inches" }
    ],
    inStock: true,
    collections: ["Pearl Collection", "Drop Collection"]
  },
  {
    id: 3,
    name: "Diamond Hoop Earrings",
    price: 2899,
    originalPrice: 3299,
    discount: 12,
    rating: 4.7,
    reviewCount: 132,
    image: "/earrings/women-diamond-hoops-1.png",
    description: "Stunning diamond-set hoop earrings in 18K white gold. Sparkle with every movement.",
    features: [
      { name: "Material", value: "18K White Gold" },
      { name: "Stone", value: "Diamond" },
      { name: "Total Carat", value: "1.5ct" },
      { name: "Diameter", value: "1 inch" }
    ],
    inStock: false,
    bestseller: true,
    collections: ["Diamond Collection", "Hoop Collection"]
  },
  {
    id: 4,
    name: "Sapphire & Diamond Drops",
    price: 3599,
    rating: 4.9,
    reviewCount: 74,
    image: "/earrings/women-sapphire-drop-1.png",
    description: "Elegant drop earrings featuring blue sapphires surrounded by a diamond halo in white gold.",
    features: [
      { name: "Material", value: "14K White Gold" },
      { name: "Stone", value: "Sapphire & Diamond" },
      { name: "Sapphire Size", value: "6x4mm each" },
      { name: "Length", value: "1.25 inches" }
    ],
    inStock: true,
    collections: ["Drop Collection", "Limited Edition"]
  },
  {
    id: 5,
    name: "Emerald Cut Diamond Studs",
    price: 4999,
    rating: 5.0,
    reviewCount: 46,
    image: "/earrings/women-emerald-cut-studs-1.png",
    description: "Sophisticated emerald-cut diamond stud earrings in platinum. Modern and elegant.",
    features: [
      { name: "Material", value: "Platinum" },
      { name: "Stone", value: "Diamond" },
      { name: "Total Carat", value: "2.0ct" },
      { name: "Clarity", value: "VVS1-VVS2" }
    ],
    inStock: true,
    new: true,
    collections: ["Diamond Collection", "Stud Collection", "Limited Edition"]
  },
  {
    id: 6,
    name: "Gold & Pearl Hoops",
    price: 999,
    rating: 4.6,
    reviewCount: 108,
    image: "/earrings/women-pearl-hoops-1.png",
    description: "Delicate gold hoop earrings adorned with freshwater pearls. Subtle and elegant for everyday wear.",
    features: [
      { name: "Material", value: "14K Yellow Gold" },
      { name: "Stone", value: "Freshwater Pearl" },
      { name: "Pearl Size", value: "4-5mm each" },
      { name: "Diameter", value: "0.75 inch" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Pearl Collection", "Hoop Collection"]
  },
];

export default function WomensEarringsPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Women's Earrings"
        description="Discover our exquisite collection of earrings crafted for the modern woman."
        backgroundImage="/women-earrings-hero.png"
      />
      
      <ProductGrid
        products={earrings}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Women's Earrings"
        description="Explore our carefully curated selection of luxury earrings for women. From elegant studs to statement drops, find the perfect pair to express your unique style."
        showSidebar={true}
      />
    </div>
  );
} 