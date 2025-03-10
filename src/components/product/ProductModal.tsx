"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { XMarkIcon, StarIcon } from "@heroicons/react/24/outline";
import { StarIcon as StarIconSolid, ShoppingBagIcon } from "@heroicons/react/24/solid";
import Button from "@/components/ui/Button";
import { Product } from "./ProductCard";

type ProductFeature = {
  name: string;
  value: string;
};

export type ProductWithFeatures = Product & {
  features: ProductFeature[];
};

type ProductModalProps = {
  product: ProductWithFeatures | null;
  onClose: () => void;
  onAddToCart: (product: ProductWithFeatures, quantity: number, size?: string) => void;
  onSizeChange?: (productId: number, size: string) => void;
};

export default function ProductModal({ product, onClose, onAddToCart, onSizeChange }: ProductModalProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>("");

  // Initialize selectedSize when product changes
  useEffect(() => {
    if (product && product.selectedSize) {
      setSelectedSize(product.selectedSize);
    } else {
      setSelectedSize("");
    }
  }, [product]);

  if (!product) return null;

  // Handle size change
  const handleSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newSize = e.target.value;
    setSelectedSize(newSize);
    
    // Call parent handler if provided
    if (onSizeChange) {
      onSizeChange(product.id, newSize);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="text-xl font-normal font-sans">{product.name}</h3>
          <button onClick={onClose}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image gallery */}
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image
                src={product.image || "/images/placeholder-product.jpg"}
                alt={product.name}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            
            {/* Product details */}
            <div>
              {/* Price */}
              <div className="flex items-baseline mb-4">
                <span className="text-2xl font-bold">${product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-base text-darkBrown line-through ml-2">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.discount && (
                  <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                    Save {product.discount}%
                  </span>
                )}
              </div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>
                      {star <= Math.round(product.rating) ? (
                        <StarIconSolid className="h-5 w-5 text-gold" />
                      ) : (
                        <StarIcon className="h-5 w-5 text-gold" />
                      )}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-darkBrown ml-2">{product.rating} ({product.reviewCount} reviews)</span>
              </div>
              
              {/* Description */}
              <p className="text-darkBrown mb-4">{product.description}</p>
              
              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="font-medium mr-1">{feature.name}:</span>
                        <span>{feature.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Collections */}
              {product.collections && product.collections.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Collections:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.collections.map((collection, index) => (
                      <span key={index} className="bg-gray-100 text-black text-xs font-medium px-2.5 py-0.5 rounded">
                        {collection}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Size selector */}
              {product.availableSizes && product.availableSizes.length > 0 && (
                <div className="mb-6">
                  <label htmlFor="size" className="block font-medium mb-2">Ring Size:</label>
                  <select
                    id="size"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedSize}
                    onChange={handleSizeChange}
                    disabled={!product.inStock}
                  >
                    <option value="" disabled>Select a size</option>
                    {product.availableSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              )}
              
              {/* Quantity selector */}
              {product.inStock && (
                <div className="mb-6">
                  <label htmlFor="quantity" className="block font-medium mb-2">Quantity:</label>
                  <div className="flex items-center">
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      max="10"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                      className="w-12 h-8 border-t border-b border-gray-300 text-center"
                    />
                    <button
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {product.inStock ? (
                  <>
                    <Button
                      className="flex-1"
                      onClick={() => onAddToCart(product, quantity, selectedSize)}
                      disabled={product.availableSizes && product.availableSizes.length > 0 && !selectedSize}
                    >
                      <ShoppingBagIcon className="h-5 w-5 mr-2" />
                      Add to Cart
                    </Button>
                  </>
                ) : (
                  <Button
                    variant="outline"
                    className="w-full"
                    disabled
                  >
                    Out of Stock
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 