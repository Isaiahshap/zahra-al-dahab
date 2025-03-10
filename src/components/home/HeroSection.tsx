"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Marquee from "../ui/Marquee";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (heroRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
      
      tl.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      );
      
      // Text animation removed
    }
  }, []);

  return (
    <>
      <section ref={heroRef} className="relative w-full h-[30vh] md:h-[60vh] sm:h-[40vh] xl:h-[80vh] overflow-hidden">
        {/* Main large hero image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/hero.png"
            alt="Zahra Al Dahab Luxury Jewelry"
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Overlay gradient */}
        
        {/* Text content */}
      </section>

      {/* Marquee positioned below the hero section */}
      <div className="relative w-full z-10">
        <Marquee 
          text="⋆ THE FINEST DUBAI LUXURY GOODS ⋆ أرقى السلع الفاخرة من دبي ⋆ THE FINEST DUBAI LUXURY GOODS ⋆ أرقى السلع الفاخرة من دبي ⋆" 
          className="text-black bg-[#D4AF37] py-3 font-medium"
          speed={30}
        />
      </div>
    </>
  );
} 