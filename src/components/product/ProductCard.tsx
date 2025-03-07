"use client";

import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid } from "@heroicons/react/24/solid";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import Button from "@/components/ui/Button";

export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  image: string;
  description: string;
  inStock: boolean;
  new?: boolean;
  bestseller?: boolean;
  collections: string[];
};

type ProductCardProps = {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
};

export default function ProductCard({ product, onQuickView, onAddToCart }: ProductCardProps) {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <Image 
          src={product.image || "/images/placeholder-product.jpg"}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.new && (
            <span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded">New</span>
          )}
          {product.bestseller && (
            <span className="bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">Bestseller</span>
          )}
          {product.discount && (
            <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">Sale {product.discount}%</span>
          )}
        </div>
        
        {/* Quick action buttons */}
        <div className="absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:bg-opacity-30 transition-all duration-300">
          <button 
            className="bg-white text-black px-4 py-2 rounded-md font-medium mx-2 hover:bg-primary hover:text-white transition-colors duration-300"
            onClick={() => onQuickView(product)}
          >
            Quick View
          </button>
        </div>
        
        {/* Out of stock overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-white text-black px-4 py-2 rounded-md font-medium">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-normal font-sans mb-1">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center mb-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star}>
                {star <= Math.round(product.rating) ? (
                  <StarIconSolid className="h-4 w-4 text-gold" />
                ) : (
                  <StarIcon className="h-4 w-4 text-gold" />
                )}
              </span>
            ))}
          </div>
          <span className="text-xs text-darkBrown ml-1">({product.reviewCount})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-baseline mb-3">
          <span className="text-xl font-bold">${product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-darkBrown line-through ml-2">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        
        {/* Add to cart button */}
        <Button
          className="w-full"
          onClick={() => product.inStock && onAddToCart(product, 1)}
          disabled={!product.inStock}
        >
          <ShoppingBagIcon className="h-5 w-5 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}