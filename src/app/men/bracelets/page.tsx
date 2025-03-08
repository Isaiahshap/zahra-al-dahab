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
    { id: "link-collection", label: "Link Collection", checked: false },
    { id: "luxury-collection", label: "Luxury Collection", checked: false },
    { id: "platinum-collection", label: "Platinum Collection", checked: false },
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
    name: "Royal Gold Link Bracelet",
    price: 2499,
    originalPrice: 2899,
    discount: 14,
    rating: 4.8,
    reviewCount: 116,
    image: "/bracelets/gold-bracelet-1.png",
    description: "Exquisite 18K gold link bracelet with a sophisticated design. Perfect weight and balance for daily wear.",
    features: [
      { name: "Material", value: "18K Gold" },
      { name: "Length", value: "8.5 inches" },
      { name: "Weight", value: "24g" },
      { name: "Clasp", value: "Box" }
    ],
    inStock: true,
    new: true,
    collections: ["Royal Collection", "Gold", "Link Collection"]
  },
  {
    id: 2,
    name: "Diamond Tennis Bracelet",
    price: 3999,
    rating: 4.9,
    reviewCount: 68,
    image: "/bracelets/diamond-bracelet-1.png",
    description: "Stunning silver tennis bracelet with 36 round cut diamonds. Elegant and versatile for any occasion.",
    features: [
      { name: "Material", value: "Sterling Silver" },
      { name: "Length", value: "7.5 inches" },
      { name: "Stones", value: "36 Diamonds" },
      { name: "Clasp", value: "Double Safety" }
    ],
    inStock: true,
    collections: ["Diamond Collection", "Silver"]
  },
  {
    id: 3,
    name: "Black Titanium Cuff",
    price: 899,
    originalPrice: 1099,
    discount: 18,
    rating: 4.7,
    reviewCount: 142,
    image: "/bracelets/titanium-bracelet-1.png",
    description: "Sleek black titanium cuff with a modern design. Lightweight and durable for everyday wear.",
    features: [
      { name: "Material", value: "Titanium" },
      { name: "Size", value: "Adjustable" },
      { name: "Weight", value: "18g" },
      { name: "Style", value: "Cuff" }
    ],
    inStock: false,
    bestseller: true,
    collections: ["Link Collection", "Titanium"]
  },
  {
    id: 4,
    name: "Rose Gold Cuban Link",
    price: 1899,
    rating: 4.6,
    reviewCount: 86,
    image: "/bracelets/rose-gold-bracelet-1.png",
    description: "Elegant rose gold Cuban link bracelet. A timeless classic with a modern twist.",
    features: [
      { name: "Material", value: "18K Rose Gold" },
      { name: "Length", value: "8 inches" },
      { name: "Weight", value: "22g" },
      { name: "Clasp", value: "Lobster" }
    ],
    inStock: true,
    collections: ["Luxury Collection", "Gold", "Link Collection"]
  },
  {
    id: 5,
    name: "Platinum ID Bracelet",
    price: 4599,
    rating: 5.0,
    reviewCount: 41,
    image: "/bracelets/platinum-bracelet-1.png",
    description: "Sophisticated platinum ID bracelet. Can be personalized with custom engraving.",
    features: [
      { name: "Material", value: "Platinum" },
      { name: "Length", value: "8.5 inches" },
      { name: "Weight", value: "32g" },
      { name: "Style", value: "ID" }
    ],
    inStock: true,
    new: true,
    collections: ["Platinum Collection", "Limited Edition"]
  },
  {
    id: 6,
    name: "Steel Mesh Bracelet",
    price: 799,
    rating: 4.7,
    reviewCount: 164,
    image: "/bracelets/steel-bracelet-1.png",
    description: "Durable stainless steel mesh bracelet. Sleek design with an adjustable clasp for a perfect fit.",
    features: [
      { name: "Material", value: "Stainless Steel" },
      { name: "Length", value: "Adjustable" },
      { name: "Weight", value: "16g" },
      { name: "Style", value: "Mesh" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Link Collection", "Steel"]
  },
];

export default function MensBraceletsPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Men's Bracelets"
        description="Discover our exquisite collection of bracelets crafted for the modern gentleman."
        backgroundImage="/bracelets/mens-bracelets-hero.png"
        overlayOpacity={0.5}
      />
      
      <ProductGrid
        products={bracelets}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Men's Bracelets"
        description="Explore our carefully curated selection of luxury bracelets for men. From bold statement pieces to elegant designs, find the perfect bracelet to complement your style."
        showSidebar={true}
      />
    </div>
  );
} 