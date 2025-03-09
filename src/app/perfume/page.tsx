"use client";

import Image from "next/image";
import ProductGrid from "@/components/product/ProductGrid";
import { FilterOptions, SortOption } from "@/components/product/ProductFilter";
import { ProductWithFeatures } from "@/components/product/ProductModal";

// Filter options
const filterOptions: FilterOptions = {
  collections: [
    { id: "oriental-collection", label: "Oriental Collection", checked: false },
    { id: "floral-collection", label: "Floral Collection", checked: false },
    { id: "woody-collection", label: "Woody Collection", checked: false },
    { id: "fresh-collection", label: "Fresh Collection", checked: false },
    { id: "oud-collection", label: "Oud Collection", checked: false },
    { id: "limited-edition", label: "Limited Edition", checked: false },
  ],
  priceRanges: [
    { id: "0-149", label: "Under $150", checked: false },
    { id: "150-249", label: "150 - 249", checked: false },
    { id: "250-399", label: "250 - 399", checked: false },
    { id: "400-100000", label: "400+", checked: false },
  ],
  availability: [
    { id: "in-stock", label: "In Stock", checked: false },
  ],
  special: [
    { id: "new", label: "New Arrivals", checked: false },
    { id: "bestseller", label: "Bestsellers", checked: false },
    { id: "sale", label: "On Sale", checked: false },
  ]
};

// Sort options
const sortOptions: SortOption[] = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "rating", label: "Highest Rated" },
  { id: "newest", label: "Newest" },
];

// Mock data for perfumes
const perfumes: ProductWithFeatures[] = [
  {
    id: 1,
    name: "Royal Amber Oud",
    price: 299,
    originalPrice: 349,
    discount: 14,
    rating: 4.9,
    reviewCount: 187,
    image: "/amber-oud.png",
    description: "A luxurious blend of rare amber and precious oud, accented with notes of vanilla and spices for a rich, opulent fragrance that lingers.",
    features: [
      { name: "Fragrance Type", value: "Oriental Woody" },
      { name: "Volume", value: "100ml" },
      { name: "Top Notes", value: "Cardamom, Cinnamon" },
      { name: "Heart Notes", value: "Amber, Oud" },
      { name: "Base Notes", value: "Vanilla, Musk" }
    ],
    inStock: true,
    bestseller: true,
    collections: ["Oriental Collection", "Oud Collection"]
  },
  {
    id: 2,
    name: "Rose Gold Saffron",
    price: 279,
    rating: 4.8,
    reviewCount: 143,
    image: "/rose-saffron.png",
    description: "An exquisite combination of Bulgarian rose and precious saffron, with undertones of suede and amber for a sophisticated floral experience.",
    features: [
      { name: "Fragrance Type", value: "Floral Oriental" },
      { name: "Volume", value: "75ml" },
      { name: "Top Notes", value: "Saffron, Bergamot" },
      { name: "Heart Notes", value: "Bulgarian Rose, Jasmine" },
      { name: "Base Notes", value: "Suede, Amber" }
    ],
    inStock: true,
    new: true,
    collections: ["Floral Collection", "Oriental Collection"]
  },
  {
    id: 3,
    name: "Midnight Oud Intense",
    price: 399,
    rating: 5.0,
    reviewCount: 96,
    image: "/midnight-oud.png",
    description: "An intense oud fragrance enriched with rare Arabian woods and smoky incense, creating a powerful and mysterious aura.",
    features: [
      { name: "Fragrance Type", value: "Woody Oriental" },
      { name: "Volume", value: "100ml" },
      { name: "Top Notes", value: "Black Pepper, Saffron" },
      { name: "Heart Notes", value: "Oud, Incense" },
      { name: "Base Notes", value: "Leather, Amber, Sandalwood" }
    ],
    inStock: true,
    collections: ["Oud Collection", "Limited Edition"]
  },
  {
    id: 4,
    name: "Desert Mirage",
    price: 249,
    originalPrice: 299,
    discount: 17,
    rating: 4.7,
    reviewCount: 154,
    image: "/desert-mirage.png",
    description: "A refreshing yet warm composition inspired by desert landscapes, blending citrus, spices, and resins for a unique sensory journey.",
    features: [
      { name: "Fragrance Type", value: "Fresh Spicy" },
      { name: "Volume", value: "75ml" },
      { name: "Top Notes", value: "Grapefruit, Cardamom" },
      { name: "Heart Notes", value: "Saffron, Pink Pepper" },
      { name: "Base Notes", value: "Frankincense, Myrrh" }
    ],
    inStock: false,
    collections: ["Fresh Collection", "Oriental Collection"]
  },
  {
    id: 5,
    name: "Sapphire Lotus",
    price: 229,
    rating: 4.6,
    reviewCount: 118,
    image: "/sapphire-lotus.png",
    description: "A serene aquatic floral fragrance featuring lotus flower, water lily, and marine notes, reminiscent of crystal-clear waters and blue skies.",
    features: [
      { name: "Fragrance Type", value: "Fresh Floral" },
      { name: "Volume", value: "50ml" },
      { name: "Top Notes", value: "Marine Accord, Bergamot" },
      { name: "Heart Notes", value: "Lotus, Water Lily" },
      { name: "Base Notes", value: "White Musk, Cedar" }
    ],
    inStock: true,
    bestseller: false,
    collections: ["Fresh Collection", "Floral Collection"]
  },
  {
    id: 6,
    name: "Velvet Sandalwood",
    price: 319,
    rating: 4.8,
    reviewCount: 109,
    image: "/velvet-sandalwood.png",
    description: "A sophisticated woody fragrance centered around creamy Australian sandalwood, enhanced with vanilla and exotic spices.",
    features: [
      { name: "Fragrance Type", value: "Woody Oriental" },
      { name: "Volume", value: "100ml" },
      { name: "Top Notes", value: "Mandarin, Cardamom" },
      { name: "Heart Notes", value: "Vanilla, Cinnamon" },
      { name: "Base Notes", value: "Sandalwood, Tonka Bean" }
    ],
    inStock: true,
    new: true,
    collections: ["Woody Collection", "Oriental Collection"]
  },
  {
    id: 7,
    name: "Golden Jasmine",
    price: 259,
    rating: 4.7,
    reviewCount: 132,
    image: "/golden-jasmine.png",
    description: "A radiant floral fragrance showcasing precious jasmine absolute, supported by tuberose and ylang-ylang for an opulent bouquet.",
    features: [
      { name: "Fragrance Type", value: "Floral" },
      { name: "Volume", value: "75ml" },
      { name: "Top Notes", value: "Bergamot, Neroli" },
      { name: "Heart Notes", value: "Jasmine, Tuberose, Ylang-Ylang" },
      { name: "Base Notes", value: "Vanilla, Amber" }
    ],
    inStock: true,
    collections: ["Floral Collection"]
  },
  {
    id: 8,
    name: "Emerald Cedar",
    price: 289,
    originalPrice: 339,
    discount: 15,
    rating: 4.8,
    reviewCount: 87,
    image: "/emerald-cedar.png",
    description: "A refined woody fragrance centered around Atlas cedar and Virginia cedar, with hints of vetiver and pine for a fresh forest experience.",
    features: [
      { name: "Fragrance Type", value: "Woody Aromatic" },
      { name: "Volume", value: "100ml" },
      { name: "Top Notes", value: "Bergamot, Pine" },
      { name: "Heart Notes", value: "Cedar, Cypress" },
      { name: "Base Notes", value: "Vetiver, Amber" }
    ],
    inStock: true,
    collections: ["Woody Collection", "Fresh Collection"]
  },
];

export default function PerfumePage() {
  return (
    <div className="bg-[#f8f5f1]">
      {/* Hero section */}
      <div className="relative h-[600px]">
        <Image 
          src="/perfume-hero.png" 
          alt="Luxury Perfumes"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#D4AF37]" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}>
              Luxury Perfumes
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}>
              Exquisite fragrances crafted from the world&apos;s finest ingredients, capturing the essence of luxury
            </p>
          </div>
        </div>
      </div>
      
      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3A2618] mb-6">
              The Art of Perfumery
            </h2>
            <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
            <p className="text-lg text-[#5D4037] mb-6 leading-relaxed">
              At Zahra Al Dahab, we believe that a fragrance is more than just a scent—it&apos;s an expression of personality, a trigger for memories, and an invisible accessory that completes your presence.
            </p>
            <p className="text-lg text-[#5D4037] leading-relaxed">
              Our master perfumers source the finest ingredients from around the world, from precious oud and amber to exotic florals and rare spices, creating complex and captivating fragrances that tell a story on your skin.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-2xl border-4 border-[#f8f5f1]">
              <Image 
                src="/perfume2.png" 
                alt="The Art of Perfumery"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      <ProductGrid
        products={perfumes}
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        title="Luxury Perfumes"
        description="Discover our exquisite collection of artisanal perfumes, crafted by master perfumers using the world's finest ingredients. Each fragrance tells a unique story, designed to evoke emotions and create lasting impressions."
        showSidebar={true}
      />
    </div>
  );
} 