"use client";

import { useState } from "react";
import { XMarkIcon, ChevronDownIcon, AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";

export type FilterOption = {
  id: string;
  label: string;
  checked: boolean;
};

export type FilterOptions = {
  collections: FilterOption[];
  priceRanges: FilterOption[];
  availability: FilterOption[];
  special: FilterOption[];
};

export type SortOption = {
  id: string;
  label: string;
};

export type FiltersState = {
  collections: string[];
  priceRanges: string[];
  availability: string[];
  special: string[];
};

type ProductFilterProps = {
  filterOptions: FilterOptions;
  sortOptions: SortOption[];
  filters: FiltersState;
  sortBy: string;
  onFilterChange: (category: keyof FiltersState, value: string) => void;
  onSortChange: (sortId: string) => void;
  showClearButton?: boolean;
  onClearFilters?: () => void;
};

export default function ProductFilter({
  filterOptions,
  sortOptions,
  filters,
  sortBy,
  onFilterChange,
  onSortChange,
  showClearButton = true,
  onClearFilters,
}: ProductFilterProps) {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  return (
    <>
      {/* Filters and sorting - desktop */}
      <div className="hidden md:flex justify-between items-center mb-6">
        <div className="flex space-x-4">
          {/* Collection dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 bg-white px-4 py-2 border rounded-md shadow-sm">
              <span>Collections</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            <div className="absolute z-10 left-0 mt-2 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-4">
                {filterOptions.collections.map((option) => (
                  <div key={option.id} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`collection-${option.id}`}
                      checked={filters.collections.includes(option.id)}
                      onChange={() => onFilterChange('collections', option.id)}
                      className="mr-2"
                    />
                    <label htmlFor={`collection-${option.id}`}>{option.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Price dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 bg-white px-4 py-2 border rounded-md shadow-sm">
              <span>Price</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            <div className="absolute z-10 left-0 mt-2 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-4">
                {filterOptions.priceRanges.map((option) => (
                  <div key={option.id} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`price-${option.id}`}
                      checked={filters.priceRanges.includes(option.id)}
                      onChange={() => onFilterChange('priceRanges', option.id)}
                      className="mr-2"
                    />
                    <label htmlFor={`price-${option.id}`}>{option.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Availability dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 bg-white px-4 py-2 border rounded-md shadow-sm">
              <span>Availability</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            <div className="absolute z-10 left-0 mt-2 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-4">
                {filterOptions.availability.map((option) => (
                  <div key={option.id} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`availability-${option.id}`}
                      checked={filters.availability.includes(option.id)}
                      onChange={() => onFilterChange('availability', option.id)}
                      className="mr-2"
                    />
                    <label htmlFor={`availability-${option.id}`}>{option.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Special dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 bg-white px-4 py-2 border rounded-md shadow-sm">
              <span>Special</span>
              <ChevronDownIcon className="h-4 w-4" />
            </button>
            <div className="absolute z-10 left-0 mt-2 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="p-4">
                {filterOptions.special.map((option) => (
                  <div key={option.id} className="flex items-center mb-2">
                    <input
                      type="checkbox"
                      id={`special-${option.id}`}
                      checked={filters.special.includes(option.id)}
                      onChange={() => onFilterChange('special', option.id)}
                      className="mr-2"
                    />
                    <label htmlFor={`special-${option.id}`}>{option.label}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Clear filters button */}
          {showClearButton && onClearFilters && (
            <button 
              className="text-darkBrown hover:text-primary text-sm px-2 flex items-center"
              onClick={onClearFilters}
            >
              Clear All
            </button>
          )}
        </div>
        
        {/* Sort dropdown */}
        <div className="relative group">
          <button className="flex items-center space-x-1 bg-white px-4 py-2 border rounded-md shadow-sm">
            <span>Sort By: {sortOptions.find(opt => opt.id === sortBy)?.label}</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          <div className="absolute z-10 right-0 mt-2 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="p-4">
              {sortOptions.map((option) => (
                <div
                  key={option.id}
                  className={`py-2 px-4 hover:bg-gray-100 cursor-pointer ${
                    sortBy === option.id ? "bg-gray-100 font-medium" : ""
                  }`}
                  onClick={() => onSortChange(option.id)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Filters and sorting - mobile */}
      <div className="md:hidden flex justify-between items-center mb-6">
        <button
          className="flex items-center space-x-1 bg-white px-4 py-2 border rounded-md shadow-sm"
          onClick={() => setShowFilters(!showFilters)}
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
          <span>Filters</span>
        </button>
        
        <div className="relative group">
          <button className="flex items-center space-x-1 bg-white px-4 py-2 border rounded-md shadow-sm">
            <span>Sort</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>
          <div className="absolute z-10 right-0 mt-2 w-64 bg-white border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="p-4">
              {sortOptions.map((option) => (
                <div
                  key={option.id}
                  className={`py-2 px-4 hover:bg-gray-100 cursor-pointer ${
                    sortBy === option.id ? "bg-gray-100 font-medium" : ""
                  }`}
                  onClick={() => onSortChange(option.id)}
                >
                  {option.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile filters panel */}
      {showFilters && (
        <div className="md:hidden bg-white p-4 border rounded-md shadow-md mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Filters</h3>
            <button onClick={() => setShowFilters(false)}>
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
          
          {/* Collections */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Collections</h4>
            {filterOptions.collections.map((option) => (
              <div key={option.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`mobile-collection-${option.id}`}
                  checked={filters.collections.includes(option.id)}
                  onChange={() => onFilterChange('collections', option.id)}
                  className="mr-2"
                />
                <label htmlFor={`mobile-collection-${option.id}`}>{option.label}</label>
              </div>
            ))}
          </div>
          
          {/* Price Ranges */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Price</h4>
            {filterOptions.priceRanges.map((option) => (
              <div key={option.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`mobile-price-${option.id}`}
                  checked={filters.priceRanges.includes(option.id)}
                  onChange={() => onFilterChange('priceRanges', option.id)}
                  className="mr-2"
                />
                <label htmlFor={`mobile-price-${option.id}`}>{option.label}</label>
              </div>
            ))}
          </div>
          
          {/* Availability */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Availability</h4>
            {filterOptions.availability.map((option) => (
              <div key={option.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`mobile-availability-${option.id}`}
                  checked={filters.availability.includes(option.id)}
                  onChange={() => onFilterChange('availability', option.id)}
                  className="mr-2"
                />
                <label htmlFor={`mobile-availability-${option.id}`}>{option.label}</label>
              </div>
            ))}
          </div>
          
          {/* Special */}
          <div className="mb-4">
            <h4 className="font-medium mb-2">Special</h4>
            {filterOptions.special.map((option) => (
              <div key={option.id} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={`mobile-special-${option.id}`}
                  checked={filters.special.includes(option.id)}
                  onChange={() => onFilterChange('special', option.id)}
                  className="mr-2"
                />
                <label htmlFor={`mobile-special-${option.id}`}>{option.label}</label>
              </div>
            ))}
          </div>

          {/* Clear filters button */}
          {showClearButton && onClearFilters && (
            <button 
              className="text-darkBrown hover:text-primary border border-gray-300 rounded px-4 py-2 w-full text-center mb-4"
              onClick={onClearFilters}
            >
              Clear All Filters
            </button>
          )}
          
          <div className="mt-4">
            <Button 
              variant="primary" 
              className="w-full"
              onClick={() => setShowFilters(false)}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      )}
    </>
  );
} 