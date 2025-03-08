"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CategoryItem } from "@/lib/navigation";
import { useCartStore } from "@/store/cartStore";

interface MobileMenuProps {
  categories: CategoryItem[];
  onClose: () => void;
}

export default function MobileMenu({ categories, onClose }: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  // Get cart items count from the cart store
  const totalItems = useCartStore(state => state.totalItems);

  const toggleCategory = (categoryName: string) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

  // Filter out "Leather Goods" from the categories
  const filteredCategories = categories.filter(category => category.name !== "Leather Goods");

  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -300 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
    >
      <div className="p-6">
        <div className="mb-8 flex justify-between items-center">
          <Link href="/" onClick={onClose} className="flex flex-col items-center">
            <div className="text-center">
              <p className="text-xl font-bold text-[#D4AF50]" style={{ fontFamily: 'Arial, sans-serif' }}>زهرة الذهب</p>
              <p className="text-xs tracking-[0.2em] font-medium text-[#D4AF37] mt-1">ZAHRA AL DAHAB</p>
            </div>
          </Link>
          <button 
            onClick={onClose}
            className="p-2"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="space-y-4">
          {filteredCategories.map((category) => (
            <div key={category.name} className="border-b border-gray-100 pb-4">
              <div className="flex justify-between items-center">
                <Link 
                  href={category.href}
                  onClick={onClose}
                  className="text-lg font-medium uppercase"
                >
                  {category.name}
                </Link>
                {category.dropdown && (
                  <button 
                    onClick={() => toggleCategory(category.name)}
                    className="p-2"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className={`transition-transform duration-200 ${
                        expandedCategory === category.name ? "rotate-180" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                )}
              </div>
              
              {category.dropdown && expandedCategory === category.name && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 ml-4 space-y-2"
                >
                  {category.dropdown.map((item) => (
                    <Link 
                      key={item.name}
                      href={item.href}
                      onClick={onClose}
                      className="block py-2 text-gray-600 hover:text-black transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <Link 
            href="/cart"
            onClick={onClose}
            className="block py-2 uppercase font-medium flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="mr-2"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            Cart ({totalItems})
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 