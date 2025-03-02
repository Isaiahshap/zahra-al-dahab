"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const featuredCollections = [
  {
    name: "Bridal Collection",
    slug: "bridal",
    description: "Timeless pieces for your special day",
    image: "https://images.unsplash.com/photo-1546168555-af9bf2a0329a?q=80&w=1887&auto=format&fit=crop",
    href: "/collections/bridal",
  },
  // Add other collections here
];

export default function FeaturedCollections() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featuredCollections.map((collection, index) => (
        <motion.div
          key={collection.slug}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative overflow-hidden aspect-[3/4] cursor-pointer">
            <Image
              src={collection.image}
              alt={collection.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-heading mb-2">{collection.name}</h3>
              <p className="text-gray-200 text-sm mb-4">{collection.description}</p>
              <Link
                href={collection.href}
                className="inline-block border-b border-white pb-1 text-sm hover:text-accent hover:border-accent transition-colors"
              >
                Explore Collection
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}