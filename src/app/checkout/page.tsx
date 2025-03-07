"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Container from "@/components/ui/Container";

export default function CheckoutPage() {
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

  return (
    <Container className="py-12">
      <h1 className="text-3xl md:text-4xl font-light mb-8">Checkout</h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-gray-100 rounded-lg overflow-hidden">
          <div className="p-8 text-center">
            <div className="w-20 h-20 mx-auto mb-6 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-medium mb-4">This is a Demo Site</h2>
            
            <p className="text-gray-600 mb-6">
              Thank you for exploring our demo. For premium Dubai luxury websites, please visit:
            </p>
            
            <div className="mb-8">
              <a 
                href="https://elux.dev" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl font-medium text-gold hover:underline"
              >
                elux.dev
              </a>
            </div>
            
            <Link href="/cart" className="inline-flex items-center text-sm text-gold hover:text-black">
              <ArrowLeftIcon className="h-4 w-4 mr-1" />
              Return to cart
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
} 