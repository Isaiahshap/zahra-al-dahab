"use client";

import CategoryHeader from "@/components/category/CategoryHeader";
import ProductGrid from "@/components/product/ProductGrid";
import { FilterOptions, SortOption } from "@/components/product/ProductFilter";
import { ProductWithFeatures } from "@/components/product/ProductModal";

// Filter options
const filterOptions: FilterOptions = {
  collections: [
    { id: "monogram-collection", label: "Monogram Collection", checked: false },
    { id: "nameplate-collection", label: "Nameplate Collection", checked: false },
    { id: "birthstone-collection", label: "Birthstone Collection", checked: false },
    { id: "initial-collection", label: "Initial Collection", checked: false },
    { id: "coordinates-collection", label: "Coordinates Collection", checked: false },
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

// Mock data for personalized jewelry
const personalizedJewelry: ProductWithFeatures[] = [
  {
    id: 1,
    name: "Custom Name Necklace",
    price: 699,
    originalPrice: 899,
    discount: 22,
    rating: 4.9,
    reviewCount: 186,
    image: "/images/personalized/women-name-necklace-1.jpg",
    description: "Elegant 14K gold necklace with your custom name in script lettering. A timeless personalized piece.",
    features: [
      { name: "Material", value: "14K Yellow Gold" },
      { name: "Length", value: "16-18 inches adjustable" },
      { name: "Max Characters", value: "10" },
      { name: "Production Time", value: "2-3 weeks" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Nameplate Collection", "Initial Collection"]
  },
  {
    id: 2,
    name: "Birthstone & Initial Ring",
    price: 899,
    rating: 4.8,
    reviewCount: 112,
    image: "/images/personalized/women-initial-ring-1.jpg",
    description: "Stunning sterling silver ring with your initial and birthstone. Sophisticated and meaningful.",
    features: [
      { name: "Material", value: "Sterling Silver" },
      { name: "Stone", value: "Genuine Birthstone" },
      { name: "Customization", value: "Initial & Birthstone" },
      { name: "Production Time", value: "1-2 weeks" }
    ],
    inStock: true,
    new: true,
    collections: ["Initial Collection", "Birthstone Collection"]
  },
  {
    id: 3,
    name: "Coordinates Bracelet",
    price: 599,
    originalPrice: 699,
    discount: 14,
    rating: 4.7,
    reviewCount: 94,
    image: "/images/personalized/women-coordinates-bracelet-1.jpg",
    description: "Delicate gold-filled bracelet engraved with coordinates of your special place. A meaningful keepsake.",
    features: [
      { name: "Material", value: "14K Gold-Filled" },
      { name: "Length", value: "6.5-7.5 inches adjustable" },
      { name: "Engraving", value: "Coordinates" },
      { name: "Production Time", value: "1-2 weeks" }
    ],
    inStock: false,
    collections: ["Coordinates Collection"]
  },
  {
    id: 4,
    name: "Monogram Diamond Pendant",
    price: 1299,
    rating: 4.9,
    reviewCount: 76,
    image: "/images/personalized/women-monogram-pendant-1.jpg",
    description: "Luxurious 18K white gold pendant with your monogram surrounded by diamonds. Elegance personified.",
    features: [
      { name: "Material", value: "18K White Gold" },
      { name: "Stone", value: "Diamond" },
      { name: "Chain Length", value: "18 inches" },
      { name: "Production Time", value: "2-3 weeks" }
    ],
    inStock: true,
    collections: ["Monogram Collection", "Limited Edition"]
  },
  {
    id: 5,
    name: "Family Birthstone Bangle",
    price: 1499,
    rating: 5.0,
    reviewCount: 58,
    image: "/images/personalized/women-birthstone-bangle-1.jpg",
    description: "14K gold bangle with up to 6 birthstones representing your family members. A cherished family keepsake.",
    features: [
      { name: "Material", value: "14K Yellow Gold" },
      { name: "Stone", value: "Genuine Birthstones" },
      { name: "Stones", value: "Up to 6" },
      { name: "Production Time", value: "2-3 weeks" }
    ],
    inStock: true,
    new: true,
    collections: ["Birthstone Collection", "Limited Edition"]
  },
  {
    id: 6,
    name: "Engraved Date Earrings",
    price: 799,
    rating: 4.7,
    reviewCount: 68,
    image: "/images/personalized/women-date-earrings-1.jpg",
    description: "Sterling silver disc earrings that can be engraved with a special date. Subtle and meaningful.",
    features: [
      { name: "Material", value: "Sterling Silver" },
      { name: "Diameter", value: "12mm" },
      { name: "Engraving", value: "Date (MM/DD/YYYY)" },
      { name: "Production Time", value: "1-2 weeks" }
    ],
    inStock: true,
    bestseller: false,
    collections: ["Monogram Collection", "Coordinates Collection"]
  },
];

export default function WomensPersonalizedPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Personalized Jewelry"
        description="Discover our exquisite collection of personalized jewelry crafted for the modern woman."
        backgroundImage="/images/women-personalized-hero.jpg"
      />
      
      <ProductGrid
        products={personalizedJewelry}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Women's Personalized Jewelry"
        description="Explore our carefully curated selection of luxury personalized jewelry for women. From custom name necklaces to birthstone pieces, find the perfect jewelry to tell your unique story."
        showSidebar={true}
      />
    </div>
  );
} 