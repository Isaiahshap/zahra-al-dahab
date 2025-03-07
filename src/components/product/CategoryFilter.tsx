import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
  className?: string;
}

export default function CategoryFilter({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  className = "" 
}: CategoryFilterProps) {
  return (
    <div className={`flex flex-wrap gap-3 mb-6 ${className}`}>
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-sm 
        ${!selectedCategory 
          ? 'bg-black text-white border-black' 
          : 'bg-white text-darkBrown border-gray-300 hover:border-darkBrown'
        }`}
      >
        All
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 text-sm font-medium transition-all duration-300 border rounded-sm 
          ${selectedCategory === category 
            ? 'bg-black text-white border-black' 
            : 'bg-white text-darkBrown border-gray-300 hover:border-darkBrown'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 