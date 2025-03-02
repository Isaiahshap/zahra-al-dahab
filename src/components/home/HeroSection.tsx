"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current && textRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      
      tl.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
      
      tl.fromTo(
        textRef.current.querySelectorAll("h1, p, a"),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 0.8 },
        "-=0.5"
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">
      {/* Main large hero image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=2069&auto=format&fit=crop"
          alt="Zahra Al Dahab Luxury Jewelry"
          fill
          priority
          className="object-cover"
        />
      </div>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      
      {/* Text content */}
      <div ref={textRef} className="relative h-full container flex flex-col justify-center mx-auto px-4">
        <div className="max-w-lg text-white space-y-6 px-8 md:px-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-medium leading-tight tracking-tight">
            Exquisite Jewelry for Extraordinary Moments
          </h1>
          <p className="text-lg md:text-xl text-gray-100 font-light">
            Discover our curated collections of fine jewelry crafted with precision and passion.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Button 
              href="/shop" 
              variant="primary" 
              size="lg" 
              className="bg-accent hover:bg-accent/90 tracking-wider"
            >
              Explore Collections
            </Button>
            <Button 
              href="/about" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black tracking-wider"
            >
              Our Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
} 