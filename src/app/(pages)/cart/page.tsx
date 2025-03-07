"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/Toast";

export default function CartPage() {
  const { items, totalItems, removeItem, updateQuantity, clearCart } = useCartStore();
  const { addToast } = useToast();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => {
    return total + (item.product.price * item.quantity);
  }, 0);

  // Calculate shipping (free over $100)
  const shipping = subtotal > 100 ? 0 : 10;
  
  // Calculate tax (8%)
  const tax = subtotal * 0.08;
  
  // Calculate total
  const total = subtotal + shipping + tax;
  
  // Handle quantity change
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      // Remove item when quantity reaches 0
      removeItem(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };
  
  
  // Handle checkout (demo only)
  const handleCheckout = () => {
    setIsCheckingOut(true);
    
    // Simulate checkout process
    setTimeout(() => {
      addToast({
        title: "Order Placed!",
        description: "This is a demo, so no real order was placed.",
        type: "success",
        duration: 5000
      });
      clearCart();
      setIsCheckingOut(false);
    }, 2000);
  };
  
  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Looks like you haven&apos;t added any items to your cart yet.</p>
          <Link href="/">
            <Button>Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart items */}
        <div className="lg:w-2/3">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-medium mb-4">Cart Items ({totalItems})</h2>
              
              <div className="divide-y">
                {items.map((item) => (
                  <div key={item.product.id} className="py-6 flex flex-col sm:flex-row">
                    {/* Product image */}
                    <div className="sm:w-24 h-24 relative mb-4 sm:mb-0">
                      <Image
                        src={item.product.image || "/images/placeholder-product.jpg"}
                        alt={item.product.name}
                        fill
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    
                    {/* Product details */}
                    <div className="flex-1 sm:ml-6">
                      <div className="flex justify-between">
                        <h3 className="text-lg font-medium">{item.product.name}</h3>
                      </div>
                      
                      <div className="text-gray-600 mb-4">
                        ${item.product.price.toLocaleString()}
                      </div>
                      
                      {/* Quantity selector */}
                      <div className="flex items-center">
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        >
                          <MinusIcon className="h-4 w-4" />
                        </button>
                        <div
                          className="w-12 h-8 flex items-center justify-center border-t border-b border-gray-300"
                        >
                          {item.quantity}
                        </div>
                        <button
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md"
                          onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        >
                          <PlusIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                    
                    {/* Item total */}
                    <div className="mt-4 sm:mt-0 text-right">
                      <div className="font-bold">
                        ${(item.product.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Order summary */}
        <div className="lg:w-1/3">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
            <h2 className="text-xl font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toLocaleString()}`}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="border-t pt-4">
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full mt-4" 
                onClick={handleCheckout}
                disabled={isCheckingOut}
              >
                {isCheckingOut ? 'Processing...' : 'Checkout (Demo)'}
              </Button>
              
              <div className="text-xs text-center text-gray-500 mt-2">
                This is a demo. No actual purchase will be made.
              </div>
              
              <div className="mt-6">
                <Link href="/shop">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
