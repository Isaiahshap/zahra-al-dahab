import { Metadata } from "next";
import ProductGrid from "@/components/product/ProductGrid";
import CategoryHeader from "@/components/category/CategoryHeader";
import FilterSidebar from "@/components/category/FilterSidebar";
import { jewelryCategories, genderJewelry } from "@/lib/jewelry";

export const metadata: Metadata = {
  title: "Luxury Watches | Zahra Al Dahab",
  description: "Discover our exclusive collection of luxury watches for both men and women, crafted with precision and elegance.",
};

// Mock data for both men's and women's watches
const mockWatchProducts = [
  // Women's watches
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
    id: "w3",
    name: "Classic Gold Watch",
    price: 1099.99,
    image: "/images/products/womens-watch-3.jpg",
    category: "watches",
    gender: "women",
    collections: ["classic"],
  },
  // Men's watches
  {
    id: "m1",
    name: "Executive Chronograph",
    price: 1599.99,
    image: "/images/products/mens-watch-1.jpg",
    category: "watches",
    gender: "men",
    collections: ["classic"],
  },
  {
    id: "m2",
    name: "Heritage Gold Watch",
    price: 1899.99,
    image: "/images/products/mens-watch-2.jpg",
    category: "watches",
    gender: "men",
    collections: ["heritage"],
  },
  {
    id: "m3",
    name: "Sport Chronograph",
    price: 1299.99,
    image: "/images/products/mens-watch-3.jpg",
    category: "watches",
    gender: "men",
    collections: ["sport"],
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
];

// Filters for watches
const watchFilters = [
  {
    name: "Gender",
    options: [
      { value: "men", label: "Men" },
      { value: "women", label: "Women" },
    ],
  },
  {
    name: "Collections",
    options: [
      { value: "diamond-classic", label: "Diamond Classic" },
      { value: "classic", label: "Classic" },
      { value: "heritage", label: "Heritage" },
      { value: "sport", label: "Sport" },
    ],
  },
  {
    name: "Price",
    options: [
      { value: "0-1000", label: "Under $1,000" },
      { value: "1000-1500", label: "$1,000 - $1,500" },
      { value: "1500-2000", label: "$1,500 - $2,000" },
      { value: "2000+", label: "Over $2,000" },
    ],
  },
];

// Create gender-specific links using the imported genderJewelry
const genderLinks = [
  { name: genderJewelry.men[0].name, href: genderJewelry.men[0].href },
  { name: genderJewelry.women[0].name, href: genderJewelry.women[0].href },
];

export default function JewelryWatchesPage() {
  // Get related categories for the sidebar navigation
  const relatedCategories = jewelryCategories.filter(
    (category) => category.name !== "Watches"
  );
  
  return (
    <main className="container mx-auto px-4 py-8">
      <CategoryHeader 
        title="Luxury Watches" 
        description="Discover our exclusive collection of luxury watches for both men and women, crafted with precision and elegance."
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Jewelry", href: "/jewelry" },
          { name: "Watches", href: "/jewelry/watches" },
        ]}
      />
      
      <div className="flex flex-col md:flex-row gap-8 mt-8">
        <div className="w-full md:w-64 lg:w-72">
          <FilterSidebar 
            filters={watchFilters}
            relatedCategories={relatedCategories}
            basePath="/jewelry"
          />
          
          {/* Gender-specific navigation section */}
          <div className="mt-8 p-4 border border-gray-200 rounded-md">
            <h3 className="text-lg font-medium mb-4">Shop By Gender</h3>
            <ul className="space-y-2">
              {genderLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-700 hover:text-gold transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex-1">
          <ProductGrid products={mockWatchProducts} />
        </div>
      </div>
    </main>
  );
} 