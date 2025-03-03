import { Metadata } from "next";
import ProductGrid from "@/components/product/ProductGrid";
import CategoryHeader from "@/components/category/CategoryHeader";
import FilterSidebar from "@/components/category/FilterSidebar";
import { womensCategories } from "@/lib/womens";

export const metadata: Metadata = {
  title: "Women's Watches | Zahra Al Dahab",
  description: "Discover our exquisite collection of women's watches, combining elegance with precision craftsmanship.",
};

// This would normally come from an API or database
const mockWatchProducts = [
  {
    id: "w1",
    name: "Elegant Diamond Watch",
    price: 1299.99,
    image: "/images/products/womens-watch-1.jpg",
    category: "watches",
    gender: "women",
    collections: ["diamond-classic"],
  },
  {
    id: "w2",
    name: "Rose Gold Petite Watch",
    price: 899.99,
    image: "/images/products/womens-watch-2.jpg",
    category: "watches",
    gender: "women",
    collections: ["petite"],
  },
  {
    id: "w3",
    name: "Classic Gold Watch",
    price: 1099.99,
    image: "/images/products/womens-watch-3.jpg",
    category: "watches",
    gender: "women",
    collections: ["classic"],
  },
  {
    id: "w4",
    name: "Diamond Bezel Watch",
    price: 1599.99,
    image: "/images/products/womens-watch-4.jpg",
    category: "watches",
    gender: "women",
    collections: ["diamond-classic"],
  },
  {
    id: "w5",
    name: "Oval Face Watch",
    price: 1299.99,
    image: "/images/products/womens-watch-5.jpg",
    category: "watches",
    gender: "women",
    collections: ["oval"],
  },
  {
    id: "w6",
    name: "Luxury Diamond Watch",
    price: 2199.99,
    image: "/images/products/womens-watch-6.jpg",
    category: "watches",
    gender: "women",
    collections: ["diamond-classic", "luxury"],
  },
];

// Filters specific to watches
const watchFilters = [
  {
    name: "Collections",
    options: [
      { value: "diamond-classic", label: "Diamond Classic" },
      { value: "petite", label: "Petite" },
      { value: "classic", label: "Classic" },
      { value: "oval", label: "Oval" },
      { value: "luxury", label: "Luxury" },
    ],
  },
  {
    name: "Price",
    options: [
      { value: "0-500", label: "Under $500" },
      { value: "500-1000", label: "$500 - $1,000" },
      { value: "1000-1500", label: "1,000 - $1,500" },
      { value: "1500+", label: "Over $1,500" },
    ],
  },
  {
    name: "Material",
    options: [
      { value: "gold", label: "Gold" },
      { value: "rose-gold", label: "Rose Gold" },
      { value: "silver", label: "Silver" },
      { value: "diamond", label: "Diamond" },
    ],
  },
];

export default function WomensWatchesPage() {
  // Get related categories for the sidebar navigation
  const relatedCategories = womensCategories.filter(
    (category) => category.name !== "Watches"
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <CategoryHeader 
        title="Women's Watches" 
        description="Discover our exquisite collection of women's watches, combining elegance with precision craftsmanship."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Women", href: "/women" },
          { name: "Watches", href: "/women/watches" },
        ]}
      />
      
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <FilterSidebar 
          filters={watchFilters}
          relatedCategories={relatedCategories}
          basePath="/women"
        />
        
        <div className="flex-1">
          <ProductGrid products={mockWatchProducts} />
        </div>
      </div>
    </main>
  );
} 