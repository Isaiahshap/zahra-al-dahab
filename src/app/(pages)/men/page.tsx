"use client";

import React from 'react';
import { Heading, Text } from '@/components/ui/Typography';
import Image from 'next/image';
import Link from 'next/link';

// Using the men's dropdown categories from navigation.ts for consistency
const mensCategories = [
  { name: "Watches", href: "/men/watches" },
  { name: "Bracelets", href: "/men/bracelets" },
  { name: "Rings", href: "/men/rings" },
  { name: "Necklaces", href: "/men/necklaces" },
];

export default function MenPage() {
  return (
    <div className="container mx-auto py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <Heading level={1} className="mb-4">Men&apos;s Collection</Heading>
        <Text variant="lead" className="max-w-2xl mx-auto">
          Discover our refined selection of luxury jewelry and timepieces for the modern gentleman. From statement watches to sophisticated accessories.
        </Text>
      </div>

      {/* Featured Banner */}
      <div className="relative w-full h-[400px] mb-16 rounded-lg overflow-hidden">
        <Image 
          src="/images/mens-jewelry.jpg" 
          alt="Men's Jewelry Collection" 
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
          <Heading level={2} className="text-white mb-4">Bold & Refined</Heading>
          <Text variant="lead" className="text-white max-w-lg">
            Luxury pieces designed for the discerning gentleman
          </Text>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-16">
        <Heading level={2} className="text-center mb-8">Shop by Category</Heading>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {mensCategories.map((category) => (
            <Link 
              href={category.href} 
              key={category.href}
              className="group"
            >
              <div className="relative h-64 rounded-lg overflow-hidden mb-3 transition-all duration-300 group-hover:shadow-lg">
                <Image 
                  src={`/images/categories/men-${category.name.toLowerCase()}.jpg`}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
                  <Text className="text-white font-medium text-lg">{category.name}</Text>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Additional Content */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gold/5 p-8 rounded-lg border border-gold/20">
          <Heading level={3} className="mb-4">New Arrivals</Heading>
          <Text className="mb-6">Discover our latest additions to the men&apos;s collection. Upgrade your style with our newest designs.</Text>
          <Link href="/men/new-arrivals" className="text-gold hover:underline font-medium">
            Explore New Arrivals →
          </Link>
        </div>
        <div className="bg-gold/5 p-8 rounded-lg border border-gold/20">
          <Heading level={3} className="mb-4">Best Sellers</Heading>
          <Text className="mb-6">Shop our most popular pieces for men. Timeless favorites that never go out of style.</Text>
          <Link href="/men/best-sellers" className="text-gold hover:underline font-medium">
            Explore Best Sellers →
          </Link>
        </div>
      </div>
    </div>
  );
} 