"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

type Breadcrumb = {
  name: string;
  href: string;
};

type CategoryHeaderProps = {
  title: string;
  description: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  overlayOpacity?: number;
  className?: string;
  breadcrumbs?: Breadcrumb[];
};

export default function CategoryHeader({
  title,
  description,
  backgroundImage,
  ctaText = "Shop Now",
  ctaLink = "#products",
  secondaryCtaText = "View Collections",
  secondaryCtaLink = "#",
  overlayOpacity = 0.6,
  className = "",
  breadcrumbs,
}: CategoryHeaderProps) {
  return (
    <div className={`bg-gray-50 ${className}`}>
      {/* Breadcrumbs if available */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm">
            {breadcrumbs.map((breadcrumb, index) => (
              <div key={breadcrumb.href} className="flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                <Link href={breadcrumb.href} className="text-gray-500 hover:text-gray-700">
                  {breadcrumb.name}
                </Link>
              </div>
            ))}
          </nav>
        </div>
      )}
      
      {/* Hero section with background image */}
      {backgroundImage ? (
        <div className="relative h-[40vh] md:h-[50vh] bg-black text-white">
          <div className={`absolute inset-0 opacity-${Math.round(overlayOpacity * 100)}`}>
            <Image 
              src={backgroundImage}
              alt={title}
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="relative h-full flex flex-col justify-center items-center text-center p-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{title}</h1>
            <p className="text-lg md:text-xl max-w-2xl mb-8">
              {description}
            </p>
            <div className="flex space-x-4">
              <Button size="lg" href={ctaLink}>{ctaText}</Button>
              <Button variant="outline" size="lg" href={secondaryCtaLink}>
                {secondaryCtaText}
              </Button>
            </div>
          </div>
        </div>
      ) : (
        /* Simple header without background image */
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            {description}
          </p>
        </div>
      )}
    </div>
  );
} 