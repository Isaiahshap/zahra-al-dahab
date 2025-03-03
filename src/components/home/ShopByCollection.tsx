"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { collections } from "@/lib/navigation";
import Button from "@/components/ui/Button";
import { Heading, Text } from "@/components/ui/Typography";

export default function ShopByCollection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto rotate through collections
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % collections.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 gap-8 md:gap-12 bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image side */}
      <div className="relative aspect-square md:aspect-auto md:h-full">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.href}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeIndex === index ? 1 : 0,
              scale: activeIndex === index ? 1 : 1.05,
            }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={collection.image || `/images/collections/${collection.href.split('/').pop()}.jpg`}
              alt={collection.name}
              fill
              className="object-cover"
            />
            {/* Add overlay gradient */}
            <div key={`overlay-${collection.href}`} className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        ))}
      </div>
      
      {/* Text side */}
      <div className="flex flex-col justify-center space-y-8 p-8 md:p-12">
        <div className="space-y-2">
          <Heading level={2} className="text-gray-900">Our Collections</Heading>
          <Text variant="muted" className="text-gray-600">Discover our curated selection of fine jewelry</Text>
        </div>
        
        <div className="space-y-6">
          {collections.map((collection, index) => (
            <div 
              key={collection.href}
              className={`cursor-pointer transition-all duration-300 border-l-4 pl-4 py-2 ${
                activeIndex === index 
                  ? "border-gold bg-gold/5" 
                  : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h4 className={`text-lg font-medium mb-1 transition-colors ${
                activeIndex === index ? "text-gold" : "text-gray-900"
              }`}>
                {collection.name}
              </h4>
              <Text variant="muted" className="line-clamp-2 text-gray-600">
                {collection.description}
              </Text>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <Button 
            href="/collections"
            variant="outline"
            className="border-gold text-gold hover:bg-gold hover:text-white"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </div>
  );
} 