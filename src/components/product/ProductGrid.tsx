"use client";

import { useState } from "react";
import { useToast } from "@/components/ui/Toast";
import ProductCard from "./ProductCard";
import ProductModal, { ProductWithFeatures } from "./ProductModal";
import ProductFilter, { FilterOptions, FiltersState, SortOption } from "./ProductFilter";
import ProductSidebar from "./ProductSidebar";
import Button from "@/components/ui/Button";

type ProductGridProps = {
  products: ProductWithFeatures[];
  filterOptions: FilterOptions;
  sortOptions: SortOption[];
  title: string;
  description?: string;
  showSidebar?: boolean; 
};

export default function ProductGrid({
  products,
  filterOptions,
  sortOptions,
  title,
  description,
  showSidebar = true
}: ProductGridProps) {
  const { addToast } = useToast();
  
  // State for filters
  const [filters, setFilters] = useState<FiltersState>({
    collections: [],
    priceRanges: [],
    availability: [],
    special: [],
  });
  
  // State for sorting
  const [sortBy, setSortBy] = useState<string>("featured");
  
  // State for selected product (modal)
  const [selectedProduct, setSelectedProduct] = useState<ProductWithFeatures | null>(null);
  
  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Filter by collections
    if (filters.collections.length > 0 && !product.collections.some(c => 
      filters.collections.includes(c.toLowerCase().replace(' ', '-')))) {
      return false;
    }
    
    // Filter by price ranges
    if (filters.priceRanges.length > 0) {
      const matchesPrice = filters.priceRanges.some(range => {
        const [min, max] = range.split('-').map(Number);
        return product.price >= min && product.price <= max;
      });
      if (!matchesPrice) return false;
    }
    
    // Filter by availability
    if (filters.availability.includes('in-stock') && !product.inStock) {
      return false;
    }
    
    // Filter by special attributes
    if (filters.special.includes('new') && !product.new) {
      return false;
    }
    if (filters.special.includes('bestseller') && !product.bestseller) {
      return false;
    }
    if (filters.special.includes('sale') && !product.discount) {
      return false;
    }
    
    return true;
  });
  
  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (b.new ? 1 : 0) - (a.new ? 1 : 0);
      default: // featured
        return 0;
    }
  });
  
  // Handle filter change
  const handleFilterChange = (category: keyof FiltersState, value: string) => {
    setFilters(prev => {
      const currentFilters = [...prev[category]];
      
      if (currentFilters.includes(value)) {
        return {
          ...prev,
          [category]: currentFilters.filter(item => item !== value)
        };
      } else {
        return {
          ...prev,
          [category]: [...currentFilters, value]
        };
      }
    });
  };
  
  // Clear all filters
  const clearFilters = () => {
    setFilters({
      collections: [],
      priceRanges: [],
      availability: [],
      special: [],
    });
  };
  
  // Add to cart function
  const addToCart = (product: ProductWithFeatures, qty: number) => {
    addToast({
      title: "Added to Cart",
      description: `${qty} × ${product.name} added to your cart.`,
      type: "success",
      duration: 3000,
    });
    
    setSelectedProduct(null);
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12" id="products">
      {/* Title and description */}
      {(title || description) && (
        <div className="mb-8">
          {title && <h2 className="text-3xl font-bold mb-2">{title}</h2>}
          {description && (
            <p className="text-gray-600">{description}</p>
          )}
        </div>
      )}
      
      {/* Filters */}
      <ProductFilter 
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        filters={filters}
        sortBy={sortBy}
        onFilterChange={handleFilterChange}
        onSortChange={setSortBy}
        onClearFilters={clearFilters}
      />
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar filters (desktop only) */}
        {showSidebar && (
          <div className="hidden md:block md:w-1/4 lg:w-1/5">
            <ProductSidebar 
              filterOptions={filterOptions}
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
              className="sticky top-24"
            />
          </div>
        )}
        
        {/* Products grid */}
        <div className={`${showSidebar ? 'md:w-3/4 lg:w-4/5' : 'w-full'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setSelectedProduct}
                onAddToCart={addToCart}
              />
            ))}
          </div>
          
          {/* Empty state */}
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium mb-2">No products found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your filters to find what you&apos;re looking for.</p>
              <Button onClick={clearFilters}>
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      {/* Product detail modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
    </div>
  );
} 