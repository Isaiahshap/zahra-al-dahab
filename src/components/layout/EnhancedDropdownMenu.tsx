"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavigationItem } from "@/lib/navigation";

interface EnhancedDropdownMenuProps {
  items: NavigationItem[];
  category: string;
  featured?: {
    title: string;
    image: string;
    link: string;
    description?: string;
  }[];
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onLinkClick?: () => void;
}

export default function EnhancedDropdownMenu({ 
  items, 
  category,
  featured = [],
  onMouseEnter,
  onMouseLeave,
  onLinkClick
}: EnhancedDropdownMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 w-full bg-white shadow-xl z-[60] group-hover:block hover:block"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        transformOrigin: "top",
        willChange: "transform, opacity"
      }}
    >
      {/* Replace the invisible area with a gold border line */}
      <div className="absolute -top-[1px] left-0 right-0 h-[1px] bg-[#D4AF37]" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main category links - Column 1 */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold uppercase tracking-wide text-gray-900 border-b border-gray-200 pb-2">
              Shop {category}
            </h3>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="group flex items-center transition-colors hover:text-gold"
                    onClick={onLinkClick}
                  >
                    <span className="text-sm font-medium uppercase tracking-wide text-gray-800 group-hover:translate-x-1 transition-transform duration-200">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link 
                  href={category === "Gift Sets" ? "/gift-sets" : `/${category.toLowerCase()}`}
                  className="inline-flex items-center text-sm font-medium text-gold uppercase tracking-wide hover:underline"
                  onClick={onLinkClick}
                >
                  View All {category}
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Featured items - Columns 2-4 */}
          <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.length > 0 ? (
              featured.map((item, index) => (
                <div key={index} className="group">
                  <Link href={item.link} className="block" onClick={onLinkClick}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-3">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <h4 className="text-sm font-medium uppercase tracking-wide group-hover:text-gold transition-colors">
                      {item.title}
                    </h4>
                    {item.description && (
                      <p className="text-gray-700 text-xs mt-1">
                        {item.description}
                      </p>
                    )}
                  </Link>
                </div>
              ))
            ) : (
              <>
                <div className="bg-gray-50 flex flex-col justify-center items-center p-6 rounded-sm">
                  <h4 className="text-lg font-medium text-center">New Arrivals</h4>
                  <p className="text-gray-700 text-sm text-center mt-2">Discover our latest {category.toLowerCase()} collection</p>
                  <Link 
                    href={category === "Perfume" || category === "Gift Sets" ? `/${category.toLowerCase().replace(" ", "-")}` : `/${category.toLowerCase()}/new-arrivals`} 
                    className="mt-4 px-6 py-2 bg-black text-white text-sm uppercase tracking-wide hover:bg-gold transition-colors duration-300"
                    onClick={onLinkClick}
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="bg-gray-50 flex flex-col justify-center items-center p-6 rounded-sm">
                  <h4 className="text-lg font-medium text-center">Best Sellers</h4>
                  <p className="text-gray-700 text-sm text-center mt-2">Shop our most popular {category.toLowerCase()} items</p>
                  <Link 
                    href={category === "Perfume" || category === "Gift Sets" ? `/${category.toLowerCase().replace(" ", "-")}` : `/${category.toLowerCase()}/best-sellers`} 
                    className="mt-4 px-6 py-2 bg-black text-white text-sm uppercase tracking-wide hover:bg-gold transition-colors duration-300"
                    onClick={onLinkClick}
                  >
                    Shop Now
                  </Link>
                </div>
                <div className="bg-gray-50 flex flex-col justify-center items-center p-6 rounded-sm">
                  <h4 className="text-lg font-medium text-center">Collections</h4>
                  <p className="text-gray-700 text-sm text-center mt-2">Browse {category.toLowerCase()} by collections</p>
                  <Link 
                    href={category === "Perfume" || category === "Gift Sets" ? `/${category.toLowerCase().replace(" ", "-")}` : `/${category.toLowerCase()}/collections`} 
                    className="mt-4 px-6 py-2 bg-black text-white text-sm uppercase tracking-wide hover:bg-gold transition-colors duration-300"
                    onClick={onLinkClick}
                  >
                    View Collections
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Bottom promotional banner */}
      <div className="bg-gray-100 py-3 text-center">
        <p className="text-xs md:text-sm font-medium">
          Free shipping on orders over $150 | Use code <span className="text-gold">RAMADAN30</span> for 30% off
        </p>
      </div>
    </motion.div>
  );
} 