"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NavigationItem } from "@/lib/navigation";

interface DropdownMenuProps {
  items: NavigationItem[];
}

export default function DropdownMenu({ items }: DropdownMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 w-screen bg-white shadow-lg z-50 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <div key={item.name} className="group">
              <Link
                href={item.href}
                className="block"
              >
                {item.image && (
                  <div className="mb-3 aspect-square relative overflow-hidden rounded-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <h3 className="text-center uppercase text-sm font-medium tracking-wide group-hover:text-gray-600 transition-colors">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-gray-500 text-xs mt-1 text-center">
                    {item.description}
                  </p>
                )}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
} 