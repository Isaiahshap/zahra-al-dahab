"use client";

import { FiltersState, FilterOptions } from "./ProductFilter";

type ProductSidebarProps = {
  filterOptions: FilterOptions;
  filters: FiltersState;
  onFilterChange: (category: keyof FiltersState, value: string) => void;
  onClearFilters: () => void;
  className?: string;
};

export default function ProductSidebar({
  filterOptions,
  filters,
  onFilterChange,
  onClearFilters,
  className = "",
}: ProductSidebarProps) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-sm ${className}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-lg">Filters</h3>
        <button 
          className="text-darkBrown hover:text-primary text-sm"
          onClick={onClearFilters}
        >
          Clear All
        </button>
      </div>
      
      {/* Collections Filter */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Collections</h4>
        <div className="space-y-2">
          {filterOptions.collections.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type="checkbox"
                id={`sidebar-collection-${option.id}`}
                checked={filters.collections.includes(option.id)}
                onChange={() => onFilterChange('collections', option.id)}
                className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
              />
              <label 
                htmlFor={`sidebar-collection-${option.id}`}
                className="ml-2 text-sm text-darkBrown"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Price Ranges Filter */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Price Range</h4>
        <div className="space-y-2">
          {filterOptions.priceRanges.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type="checkbox"
                id={`sidebar-price-${option.id}`}
                checked={filters.priceRanges.includes(option.id)}
                onChange={() => onFilterChange('priceRanges', option.id)}
                className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
              />
              <label 
                htmlFor={`sidebar-price-${option.id}`}
                className="ml-2 text-sm text-darkBrown"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Availability Filter */}
      <div className="mb-8">
        <h4 className="font-medium mb-4">Availability</h4>
        <div className="space-y-2">
          {filterOptions.availability.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type="checkbox"
                id={`sidebar-availability-${option.id}`}
                checked={filters.availability.includes(option.id)}
                onChange={() => onFilterChange('availability', option.id)}
                className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
              />
              <label 
                htmlFor={`sidebar-availability-${option.id}`}
                className="ml-2 text-sm text-darkBrown"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
      
      {/* Special Filter */}
      <div className="mb-4">
        <h4 className="font-medium mb-4">Special</h4>
        <div className="space-y-2">
          {filterOptions.special.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type="checkbox"
                id={`sidebar-special-${option.id}`}
                checked={filters.special.includes(option.id)}
                onChange={() => onFilterChange('special', option.id)}
                className="h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary"
              />
              <label 
                htmlFor={`sidebar-special-${option.id}`}
                className="ml-2 text-sm text-darkBrown"
              >
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 