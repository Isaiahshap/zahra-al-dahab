import Image from "next/image";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import ShopByCollection from "@/components/home/ShopByCollection";
import HeroSection from "@/components/home/HeroSection";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";

// Sample featured products data
const featuredProducts = [
  {
    id: 1,
    name: "Fan Pendant Necklace",
    slug: "fan-pendant-necklace",
    price: 1499,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1974&auto=format&fit=crop",
    category: "Necklaces",
    isNew: true,
  },
  {
    id: 2,
    name: "Fan Diamond Bracelet",
    slug: "fan-diamond-bracelet",
    price: 1299,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1974&auto=format&fit=crop",
    category: "Bracelets",
  },
  {
    id: 3,
    name: "Fan Mother of Pearl Earrings",
    slug: "fan-mother-of-pearl-earrings",
    price: 899,
    image: "https://images.unsplash.com/photo-1561172317-5c05c650ca49?q=80&w=1974&auto=format&fit=crop",
    category: "Earrings",
    isNew: true,
  },
  {
    id: 4,
    name: "Petite Diamond Watch",
    slug: "petite-diamond-watch",
    price: 2499,
    image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1970&auto=format&fit=crop",
    category: "Watches",
  },
];

export default function Home() {
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Featured Collections */}
      <section className="py-16">
        <Container>
          <Heading level={2} className="text-center mb-12">Featured Collections</Heading>
          <FeaturedCollections />
        </Container>
      </section>
      
      {/* Ramadan Sale Banner */}
      <section className="py-8">
        <Container>
          <div className="relative overflow-hidden bg-black text-white">
            <div className="grid md:grid-cols-2">
              {/* Left side with text */}
              <div className="flex flex-col justify-center px-8 py-12 md:px-12 md:py-16">
                <div className="space-y-6 max-w-md">
                  <Heading level={2} className="text-white">
                    Ramadan Sale
                  </Heading>
                  <Text variant="lead" className="text-gray-200">
                    Celebrate the holy month with exclusive offers on our finest jewelry. 
                    Up to 30% off on selected items.
                  </Text>
                  <div className="pt-2">
                    <Button 
                      href="/shop"
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      Shop Now
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Right side with image */}
              <div className="relative min-h-[300px] md:min-h-0">
                <Image
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop"
                  alt="Ramadan Sale"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Featured Products */}
      <section className="py-16">
        <Container>
          <Heading level={2} className="text-center mb-12">New Arrivals</Heading>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button 
              href="/shop"
              variant="outline" 
              className="border-black text-black hover:bg-black hover:text-white"
            >
              View All Products
            </Button>
          </div>
        </Container>
      </section>
      
      {/* Shop By Collection */}
      <section className="py-16 bg-gray-50">
        <Container>
          <ShopByCollection />
        </Container>
      </section>
      
      {/* About/Quality Statement */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <Image
                src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2065&auto=format&fit=crop"
                alt="Craftsmanship"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-6 px-4 md:px-8">
              <Heading level={2}>Unmatched Craftsmanship</Heading>
              <Text variant="body" className="text-gray-600">
                At Zahra Al Dahab, we believe in creating timeless pieces that transcend trends and become cherished heirlooms. Each piece is meticulously crafted by master artisans with decades of experience.
              </Text>
              <Text variant="body" className="text-gray-600">
                Our commitment to quality means we source only the finest materials - from ethically mined diamonds to certified precious metals. We combine traditional craftsmanship techniques with modern innovation to create jewelry that&apos;s both exquisite and enduring.
              </Text>
              <div className="pt-4">
                <Button 
                  href="/about"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white"
                >
                  Our Story
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
