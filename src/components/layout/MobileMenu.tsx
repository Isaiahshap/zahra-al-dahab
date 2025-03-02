"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CategoryItem } from "@/lib/navigation";

interface MobileMenuProps {
  categories: CategoryItem[];
  onClose: () => void;
}

export default function MobileMenu({ categories, onClose }: MobileMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const toggleCategory = (categoryName: string) => {
    if (expandedCategory === categoryName) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(categoryName);
    }
  };

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
          <Link href="/" onClick={onClose} className="text-2xl font-medium font-heading">
            Zahra Al Dahab
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
          {categories.map((category) => (
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
            href="/brand"
            onClick={onClose}
            className="block py-2 uppercase font-medium"
          >
            Brand
          </Link>
          <Link 
            href="/account"
            onClick={onClose}
            className="block py-2 uppercase font-medium"
          >
            Account
          </Link>
          <Link 
            href="/cart"
            onClick={onClose}
            className="block py-2 uppercase font-medium"
          >
            Cart (0)
          </Link>
        </div>
      </div>
    </motion.div>
  );
} 