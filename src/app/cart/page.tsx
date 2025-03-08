"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { XMarkIcon, MinusIcon, PlusIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { formatPrice } from "../../lib/utils";

// Fallback formatPrice function if import still fails
// function formatPrice(price: number): string {
//   return price % 1 === 0 ? price.toString() : price.toFixed(2);
// }

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems } = useCartStore();
  const [mounted, setMounted] = useState(false);
  
  // Handle hydration mismatch by only rendering after component is mounted
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) {
    return (
      <Container className="py-12">
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="animate-pulse bg-gray-100 h-96 w-full max-w-4xl rounded"></div>
        </div>
      </Container>
    );
  }

  // Calculate subtotal
  const subtotal = items.reduce((acc, item) => {
    return acc + (item.product.price * item.quantity);
  }, 0);
  
  // Calculate estimated tax (example: 8.5%)
  const tax = subtotal * 0.085;
  
  // Calculate shipping (free above $100)
  const shipping = subtotal > 100 ? 0 : 15;
  
  // Calculate total
  const total = subtotal + tax + shipping;

  return (
    <Container className="py-12">
      <h1 className="text-3xl md:text-4xl font-light mb-8">Shopping Cart</h1>
      
      {totalItems > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
              <div className="p-6 space-y-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-100">
                    {/* Product Image */}
                    <div className="relative w-full sm:w-28 h-28 bg-gray-50 rounded-md overflow-hidden">
                      <Image
                        src={item.product.image || "/images/placeholder-product.jpg"}
                        alt={item.product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium">{item.product.name}</h3>
                        <button onClick={() => removeItem(item.product.id)} className="text-gray-400 hover:text-black">
                          <XMarkIcon className="h-5 w-5" />
                        </button>
                      </div>
                      
                      {/* Price */}
                      <p className="text-gold font-medium mt-1">
                        ${formatPrice(item.product.price)}
                      </p>
                      
                      {/* Category & Attributes */}
                      <p className="text-sm text-gray-500 mt-1">
                        {item.product.collections && item.product.collections.length > 0
                          ? item.product.collections[0]
                          : 'Jewelry'}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center mt-auto pt-3">
                        <button 
                          onClick={() => item.quantity > 1 && updateQuantity(item.product.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                          className="p-1 border border-gray-200 rounded disabled:opacity-50"
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <span className="mx-3 w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="p-1 border border-gray-200 rounded"
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                        
                        <span className="ml-auto font-medium">
                          ${formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-gray-50 flex justify-between items-center">
                <Link href="/" className="flex items-center text-sm text-gold hover:text-black">
                  <ArrowLeftIcon className="h-4 w-4 mr-1" />
                  Continue shopping
                </Link>
                <button onClick={clearCart} className="text-sm text-gray-500 hover:text-black">
                  Clear cart
                </button>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${formatPrice(subtotal)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${formatPrice(shipping)}`}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Tax</span>
                    <span>${formatPrice(tax)}</span>
                  </div>
                  
                  <div className="pt-3 mt-3 border-t border-gray-100 flex justify-between font-medium">
                    <span>Total</span>
                    <span>${formatPrice(total)}</span>
                  </div>
                </div>
                
                <Link href="/checkout">
                  <Button className="w-full">Proceed to Checkout</Button>
                </Link>
                
                {/* Promo code input */}
                <div className="mt-6">
                  <h3 className="text-sm font-medium mb-2">Promo Code</h3>
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="Enter code"
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                    <Button variant="secondary" className="rounded-l-none">Apply</Button>
                  </div>
                </div>
                
                {/* Shipping & policies */}
                <div className="mt-6 text-sm text-gray-500 space-y-2">
                  <p>Free shipping on orders over $100</p>
                  <p>30-day returns for all items</p>
                  <Link href="/about/shipping-returns" className="text-gold hover:underline block">
                    View our shipping & return policies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[40vh] flex flex-col items-center justify-center">
          <div className="text-center max-w-md">
            <div className="w-20 h-20 mx-auto mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-full h-full text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven&apos;t added anything to your cart yet.</p>
            <Link href="/">
              <Button className="w-full">Start Shopping</Button>
            </Link>
          </div>
        </div>
      )}
    </Container>
  );
} 