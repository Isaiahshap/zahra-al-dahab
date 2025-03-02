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
    <div ref={containerRef} className="grid md:grid-cols-2 gap-8 md:gap-12">
      {/* Image side */}
      <div className="relative aspect-square md:aspect-auto md:h-full">
        {collections.map((collection, index) => (
          <motion.div
            key={collection.slug}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeIndex === index ? 1 : 0,
              scale: activeIndex === index ? 1 : 1.05,
            }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src={collection.image || `/images/collections/${collection.slug}.jpg`}
              alt={collection.name}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Text side */}
      <div className="flex flex-col justify-center space-y-8">
        <Heading level={2}>Our Collections</Heading>
        
        <div className="space-y-6">
          {collections.map((collection, index) => (
            <div 
              key={collection.slug}
              className={`cursor-pointer transition-all duration-300 border-l-2 pl-4 ${
                activeIndex === index 
                  ? "border-accent" 
                  : "border-gray-200 hover:border-gray-400"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <h4 className={`text-lg font-medium mb-1 transition-colors ${
                activeIndex === index ? "text-accent" : ""
              }`}>
                {collection.name}
              </h4>
              <Text variant="muted" className="line-clamp-2">
                {collection.description}
              </Text>
            </div>
          ))}
        </div>
        <div className="pt-4">
          <Button 
            href="/collections"
            variant="outline"
            className="border-black text-black hover:bg-black hover:text-white"
          >
            View All Collections
          </Button>
        </div>
      </div>
    </div>
  );
} 