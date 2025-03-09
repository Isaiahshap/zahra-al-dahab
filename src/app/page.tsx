import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/home/HeroSection";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { Heading, Text } from "@/components/ui/Typography";
import { womensCategories } from "@/lib/womens";

export default function Home() {
  return (
    <div className="pb-12">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Categories Showcase */}
      <section className="py-16">
        <Container>
          <Heading level={2} className="text-center mb-4">Browse By Category</Heading>
          <Text variant="muted" className="text-center mb-12 max-w-2xl mx-auto">Explore our extensive collection of luxury jewelry and accessories</Text>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Men's Watches */}
            <div className="group relative overflow-hidden rounded-md aspect-square">
              <Image 
                src="/mens-watches.jpg" 
                alt="Men's Watches"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-medium text-lg">Men&apos;s Watches</h3>
                <Link 
                  href="/men/watches" 
                  className="text-sm text-gray-200 hover:text-white transition-colors underline mt-1 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            
            {/* Women's Necklaces */}
            <div className="group relative overflow-hidden rounded-md aspect-square">
              <Image 
                src="/women-necklaces.png" 
                alt="Women's Necklaces"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-medium text-lg">Women&apos;s Necklaces</h3>
                <Link 
                  href="/women/necklaces" 
                  className="text-sm text-gray-200 hover:text-white transition-colors underline mt-1 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            
            {/* Perfume */}
            <div className="group relative overflow-hidden rounded-md aspect-square">
              <Image 
                src="/perfume2.png" 
                alt="Perfume"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-medium text-lg">Perfume</h3>
                <Link 
                  href="/perfume" 
                  className="text-sm text-gray-200 hover:text-white transition-colors underline mt-1 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            
            {/* Women's Rings */}
            <div className="group relative overflow-hidden rounded-md aspect-square">
              <Image 
                src="/women-rings.png" 
                alt="Women's Rings"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-medium text-lg">Women&apos;s Rings</h3>
                <Link 
                  href="/women/rings" 
                  className="text-sm text-gray-200 hover:text-white transition-colors underline mt-1 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            
            {/* Gift Sets */}
            <div className="group relative overflow-hidden rounded-md aspect-square">
              <Image 
                src="/giftsets-hero.png" 
                alt="Gift Sets"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-medium text-lg">Gift Sets</h3>
                <Link 
                  href="/gift-sets" 
                  className="text-sm text-gray-200 hover:text-white transition-colors underline mt-1 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            
            {/* Women's Anklets */}
            <div className="group relative overflow-hidden rounded-md aspect-square">
              <Image 
                src="/women-anklets.png" 
                alt="Women's Anklets"
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-medium text-lg">Women&apos;s Anklets</h3>
                <Link 
                  href="/women/anklets" 
                  className="text-sm text-gray-200 hover:text-white transition-colors underline mt-1 inline-block"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
      


      {/* Women's Jewelry Feature */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Heading level={2}>Women&apos;s Jewelry</Heading>
              <Text variant="body" className="text-gray-600">
                Explore our exquisite selection of women&apos;s jewelry, from elegant watches and timeless necklaces to stunning rings and bracelets. Each piece is crafted with precision and designed to complement your unique style.
              </Text>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                {womensCategories.map((category) => (
                  <Link 
                    key={category.href}
                    href={category.href}
                    className="block p-3 border border-gray-200 rounded hover:border-gold hover:bg-gold/5 transition-colors"
                  >
                    <h4 className="font-medium">{category.name}</h4>
                    <p className="text-sm text-gray-600">Explore our {category.name.toLowerCase()}</p>
                  </Link>
                ))}
              </div>
              
              <div className="pt-4">
                <Button 
                  href="/women"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-black"
                >
                  Browse All Women&apos;s Jewelry
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <Image
                src="/women-hero1.png"
                alt="Women's Jewelry"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </Container>
      </section>

      
      {/* Men's Jewelry Feature */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-full order-2 md:order-1">
              <Image
                src="/mens-collection-hero.png"
                alt="Men's Jewelry"
                fill
                className="object-cover rounded-md"
              />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <Heading level={2}>Men&apos;s Luxury Collection</Heading>
              <Text variant="body" className="text-gray-600">
                Our men&apos;s luxury collection features premium watches, sophisticated bracelets, elegant rings, and distinguished necklaces. 
                Crafted with precision and designed for the modern gentleman, each piece embodies timeless style.
              </Text>
              
              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link 
                  href="/men/watches" 
                  className="block p-3 border border-gray-200 rounded hover:border-gold hover:bg-gold/5 transition-colors"
                >
                  <h4 className="font-medium">Watches</h4>
                  <p className="text-sm text-gray-600">Premium timepieces</p>
                </Link>
                
                <Link 
                  href="/men/bracelets" 
                  className="block p-3 border border-gray-200 rounded hover:border-gold hover:bg-gold/5 transition-colors"
                >
                  <h4 className="font-medium">Bracelets</h4>
                  <p className="text-sm text-gray-600">Elegant wrist wear</p>
                </Link>
                
                <Link 
                  href="/men/rings" 
                  className="block p-3 border border-gray-200 rounded hover:border-gold hover:bg-gold/5 transition-colors"
                >
                  <h4 className="font-medium">Rings</h4>
                  <p className="text-sm text-gray-600">Sophisticated designs</p>
                </Link>
                
                <Link 
                  href="/men/necklaces" 
                  className="block p-3 border border-gray-200 rounded hover:border-gold hover:bg-gold/5 transition-colors"
                >
                  <h4 className="font-medium">Necklaces</h4>
                  <p className="text-sm text-gray-600">Distinguished pieces</p>
                </Link>
              </div>
              
              <div className="pt-4">
                <Button 
                  href="/men"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-gold"
                >
                  Explore Men&apos;s Collection
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Perfume & Gift Sets */}
      <section className="py-16 bg-gray-50">
        <Container>
          <Heading level={2} className="text-center mb-12">Luxury Fragrances & Gift Sets</Heading>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Perfume */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-80">
                <Image
                  src="/perfume-hero.png"
                  alt="Luxury Perfumes"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Premium Fragrances</h3>
                <p className="text-gray-600 mb-4">
                  Discover our collection of exquisite perfumes, crafted from the finest ingredients to create 
                  signature scents that leave a lasting impression.
                </p>
                <Button 
                  href="/perfume"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-black"
                >
                  Shop Perfumes
                </Button>
              </div>
            </div>
            
            {/* Gift Sets */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative h-80">
                <Image
                  src="/giftsets-hero.png"
                  alt="Luxury Gift Sets"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Curated Gift Sets</h3>
                <p className="text-gray-600 mb-4">
                  Make any occasion special with our carefully curated gift sets, combining our finest jewelry pieces
                  and fragrances in elegant presentation boxes.
                </p>
                <Button 
                  href="/gift-sets"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-black"
                >
                  Explore Gift Sets
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
      
      {/* Premium Leather Goods Feature - Replaced with International Shopping */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <Heading level={2}>International Shopping</Heading>
              <Text variant="body" className="text-gray-600">
                Experience the convenience of global luxury shopping with our international delivery service.
                We ship our exquisite jewelry, premium fragrances, and curated gift sets to customers worldwide,
                bringing the elegance of Zahra Al Dahab to your doorstep, wherever you are.
              </Text>
              <div className="pt-4">
                <Button 
                  href="/international-shipping"
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-black"
                >
                  International Shipping Details
                </Button>
              </div>
            </div>
            
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <Image
                src="/globe.png"
                alt="International Shopping"
                fill
                className="object-cover rounded-md"
              />
            </div>
          </div>
        </Container>
      </section>
      
      {/* About/Quality Statement */}
      <section className="py-16">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square md:aspect-auto md:h-full">
              <Image
                src="/about-heritage.png"
                alt="Craftsmanship"
                fill
                className="object-cover rounded-md"
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
                  href="/about/our-story"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-gold"
                >
                  Our Story
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Heading level={2} className="mb-4">Questions?</Heading>
            <Text variant="body" className="text-gray-600 mb-8">
              Our customer service team is ready to assist you with any questions about our products, 
              orders, or special requests. We&apos;re here to make your shopping experience exceptional.
            </Text>
            <Button 
              href="/about/contact"
              variant="primary"
              className="bg-black text-white px-8 py-3 hover:bg-gold hover:text-black transition-colors"
            >
              Contact Us
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );  
}
