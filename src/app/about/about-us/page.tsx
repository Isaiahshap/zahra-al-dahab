import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zahra Al Dahab represents the pinnacle of luxury jewelry and accessories,
            with a commitment to exceptional craftsmanship and timeless design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <Image 
              src="/images/about-heritage.jpg" 
              alt="Our Heritage"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Heritage</h2>
            <p className="text-gray-600 mb-4">
              Founded in 1987, Zahra Al Dahab began as a small family-owned jewelry boutique in the heart of Dubai.
              Our passion for exceptional craftsmanship and design quickly established us as one of the region&apos;s
              most respected luxury brands.
            </p>
            <p className="text-gray-600 mb-4">
              For over three decades, we have maintained our commitment to quality, sourcing only the finest
              materials and working with skilled artisans who share our dedication to perfection.
            </p>
            <p className="text-gray-600">
              Today, Zahra Al Dahab operates in multiple countries, bringing our luxurious collections to
              discerning customers worldwide while honoring our rich heritage and traditional values.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 lg:grid-flow-row-dense">
          <div className="flex flex-col justify-center lg:col-start-1">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Our Values</h2>
            <p className="text-gray-600 mb-4">
              Quality is at the heart of everything we do. We believe in creating pieces that not only captivate
              with their beauty but endure as heirlooms to be treasured for generations.
            </p>
            <p className="text-gray-600 mb-4">
              We are committed to ethical sourcing and sustainable practices. All our diamonds are conflict-free,
              and we work closely with suppliers who share our dedication to responsible business practices.
            </p>
            <p className="text-gray-600">
              Customer satisfaction is paramount. We strive to provide an exceptional shopping experience,
              with personalized service that ensures each client finds the perfect piece to express their
              unique style and commemorate their special moments.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden lg:col-start-2">
            <Image 
              src="/images/about-commitment.jpg" 
              alt="Our Values"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">Our Team</h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Behind Zahra Al Dahab is a dedicated team of professionals, from expert gemologists and
            master craftsmen to customer service specialists, all working together to uphold our
            standards of excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="/images/team-member-1.jpg" 
                  alt="Team Member"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Fatima Al-Mansouri</h3>
              <p className="text-gray-600">Founder & Creative Director</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="/images/team-member-2.jpg" 
                  alt="Team Member"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Ahmed Hassan</h3>
              <p className="text-gray-600">Master Jeweler</p>
            </div>
            
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="/images/team-member-3.jpg" 
                  alt="Team Member"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-gray-600">Head of Customer Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 