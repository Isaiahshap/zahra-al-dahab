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
    { id: "pearl-collection", label: "Pearl Collection", checked: false },
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
    name: "Diamond Solitaire Pendant",
    price: 2499,
    originalPrice: 2899,
    discount: 13,
    rating: 4.9,
    reviewCount: 146,
    image: "/images/necklaces/women-diamond-pendant-1.jpg",
    description: "Exquisite 18K white gold solitaire pendant with brilliant-cut diamond on a delicate chain. Simple elegance.",
    features: [
      { name: "Material", value: "18K White Gold" },
      { name: "Weight", value: "8g" },
      { name: "Stone", value: "Diamond" },
      { name: "Chain Length", value: "18 inches" }
    ],
    inStock: true,
    new: true,
    collections: ["Diamond Collection", "Pendant Collection"]
  },
  {
    id: 2,
    name: "South Sea Pearl Strand",
    price: 5999,
    rating: 5.0,
    reviewCount: 72,
    image: "/images/necklaces/women-pearl-necklace-1.jpg",
    description: "Stunning graduated strand of lustrous South Sea pearls with an 18K gold clasp. Timeless elegance.",
    features: [
      { name: "Material", value: "18K Gold & South Sea Pearl" },
      { name: "Weight", value: "45g" },
      { name: "Stone", value: "South Sea Pearl" },
      { name: "Length", value: "18 inches" }
    ],
    inStock: true,
    collections: ["Pearl Collection", "Luxury Collection"]
  },
  {
    id: 3,
    name: "Rose Gold Diamond Bar Necklace",
    price: 1899,
    originalPrice: 2199,
    discount: 13,
    rating: 4.7,
    reviewCount: 168,
    image: "/images/necklaces/women-bar-necklace-1.jpg",
    description: "Minimalist rose gold horizontal bar necklace with pavé-set diamonds. Modern and versatile.",
    features: [
      { name: "Material", value: "18K Rose Gold" },
      { name: "Weight", value: "6g" },
      { name: "Stone", value: "Diamond" },
      { name: "Chain Length", value: "16 inches" }
    ],
    inStock: false,
    bestseller: true,
    collections: ["Diamond Collection", "Rose Gold"]
  },
  {
    id: 4,
    name: "Sapphire & Diamond Halo Pendant",
    price: 3899,
    rating: 4.8,
    reviewCount: 84,
    image: "/images/necklaces/women-sapphire-pendant-1.jpg",
    description: "Elegant white gold pendant featuring a blue sapphire surrounded by a diamond halo on a matching chain.",
    features: [
      { name: "Material", value: "14K White Gold" },
      { name: "Weight", value: "9g" },
      { name: "Stone", value: "Sapphire & Diamond" },
      { name: "Chain Length", value: "18 inches" }
    ],
    inStock: true,
    collections: ["Luxury Collection", "Pendant Collection"]
  },
  {
    id: 5,
    name: "Ruby & Diamond Royal Necklace",
    price: 7999,
    rating: 5.0,
    reviewCount: 58,
    image: "/images/necklaces/women-ruby-necklace-1.jpg",
    description: "Sophisticated gold necklace with alternating ruby and diamond stations. A truly regal statement piece.",
    features: [
      { name: "Material", value: "18K Gold" },
      { name: "Weight", value: "32g" },
      { name: "Stone", value: "Ruby & Diamond" },
      { name: "Length", value: "17 inches" }
    ],
    inStock: true,
    new: true,
    collections: ["Royal Collection", "Limited Edition"]
  },
  {
    id: 6,
    name: "Diamond Tennis Necklace",
    price: 4699,
    rating: 4.9,
    reviewCount: 126,
    image: "/images/necklaces/women-tennis-necklace-1.jpg",
    description: "Classic diamond tennis necklace in white gold with graduated round brilliant diamonds. Elegant luxury.",
    features: [
      { name: "Material", value: "18K White Gold" },
      { name: "Weight", value: "22g" },
      { name: "Stone", value: "Diamond" },
      { name: "Length", value: "16 inches" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Diamond Collection", "Luxury Collection"]
  },
];

export default function WomensNecklacesPage() {
  return (
    <div className="bg-gray-50">
      <CategoryHeader 
        title="Luxury Women's Necklaces"
        description="Discover our exquisite collection of necklaces crafted for the modern woman."
        backgroundImage="/images/women-necklaces-hero.jpg"
      />
      
      <ProductGrid
        products={necklaces}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Women's Necklaces"
        description="Explore our carefully curated selection of luxury necklaces for women. From elegant pendants to statement pieces, find the perfect necklace to express your unique style."
        showSidebar={true}
      />
    </div>
  );
} 