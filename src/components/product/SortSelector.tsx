import React from 'react';

export type SortOption = {
  id: string;
  name: string;
};

interface SortSelectorProps {
  options: SortOption[];
  selectedOption: string;
  onChange: (value: string) => void;
  className?: string;
}

export default function SortSelector({
  options,
  selectedOption,
  onChange,
  className = ""
}: SortSelectorProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <label htmlFor="sort-select" className="mr-2 text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <div className="relative">
        <select
          id="sort-select"
          value={selectedOption}
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-2 pr-8 text-sm font-medium bg-white border border-gray-300 rounded-sm appearance-none focus:outline-none focus:border-black"
        >
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg 
            className="w-4 h-4 text-gray-500" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
} 