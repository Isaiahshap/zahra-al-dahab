"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type FilterOption = {
  value: string;
  label: string;
};

type FilterCategory = {
  name: string;
  options: FilterOption[];
};

type Category = {
  name: string;
  href: string;
  icon?: React.ReactNode;
};

type FilterSidebarProps = {
  filters: FilterCategory[];
  relatedCategories: Category[];
  basePath: string;
};

export default function FilterSidebar({ filters, relatedCategories, basePath }: FilterSidebarProps) {
  const [expandedFilters, setExpandedFilters] = useState<string[]>(filters.map(f => f.name));
  const [expandedCategories, setExpandedCategories] = useState(true);
  
  const toggleFilter = (name: string) => {
    setExpandedFilters(prev => 
      prev.includes(name) 
        ? prev.filter(item => item !== name) 
        : [...prev, name]
    );
  };
  
  const toggleCategories = () => {
    setExpandedCategories(!expandedCategories);
  };
  
  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-sm p-6">
        {/* Filter heading */}
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        
        {/* Filter sections */}
        <div className="space-y-6">
          {filters.map((filter) => (
            <div key={filter.name} className="border-b pb-4">
              <button
                className="flex justify-between items-center w-full text-left mb-2"
                onClick={() => toggleFilter(filter.name)}
              >
                <h3 className="font-medium">{filter.name}</h3>
                {expandedFilters.includes(filter.name) ? (
                  <ChevronDownIcon className="h-4 w-4" />
                ) : (
                  <ChevronRightIcon className="h-4 w-4" />
                )}
              </button>
              
              {expandedFilters.includes(filter.name) && (
                <div className="space-y-2 mt-2">
                  {filter.options.map((option) => (
                    <div key={option.value} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`filter-${filter.name}-${option.value}`}
                        className="mr-2 h-4 w-4 text-primary rounded border-gray-300"
                      />
                      <label 
                        htmlFor={`filter-${filter.name}-${option.value}`}
                        className="text-sm text-black"
                      >
                        {option.label}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Related categories */}
        {relatedCategories.length > 0 && (
          <div className="mt-8">
            <button
              className="flex justify-between items-center w-full text-left mb-4"
              onClick={toggleCategories}
            >
              <h3 className="font-medium">Related Categories</h3>
              {expandedCategories ? (
                <ChevronDownIcon className="h-4 w-4" />
              ) : (
                <ChevronRightIcon className="h-4 w-4" />
              )}
            </button>
            
            {expandedCategories && (
              <ul className="space-y-2">
                {relatedCategories.map((category) => (
                  <li key={category.href}>
                    <Link 
                      href={`${basePath}/${category.href.split('/').pop()}`}
                      className="text-sm text-black hover:text-primary flex items-center"
                    >
                      {category.icon && <span className="mr-2">{category.icon}</span>}
                      {category.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </aside>
  );
} 