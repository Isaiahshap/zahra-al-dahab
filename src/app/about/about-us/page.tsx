import Image from "next/image";

export default function AboutUsPage() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">The Al Mansouri Family</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over three generations, the Al Mansouri family has been the creative force behind Zahra Al Dahab, 
            bringing their passion for exceptional craftsmanship and timeless design to the world of luxury jewelry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px] overflow-hidden">
            <Image 
              src="/about-heritage.png" 
              alt="Family Heritage"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Family Heritage</h2>
            <p className="text-gray-600 mb-4">
              The story of Zahra Al Dahab begins with Ibrahim Al Mansouri, who founded a small jewelry boutique in 1987 
              in the heart of Dubai. Drawing on traditional craftsmanship passed down through generations, Ibrahim&apos;s 
              unique designs quickly caught the attention of Dubai&apos;s elite.
            </p>
            <p className="text-gray-600 mb-4">
              As the family business grew, Ibrahim&apos;s children Fatima, Ahmed, and Abdulrahman joined the company, 
              each bringing their own talents and vision while honoring their father&apos;s commitment to excellence.
            </p>
            <p className="text-gray-600">
              Today, the third generation of Al Mansouris is continuing the family legacy, expanding Zahra Al Dahab 
              internationally while maintaining the personal touch and attention to detail that has defined their family 
              business from the beginning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 lg:grid-flow-row-dense">
          <div className="flex flex-col justify-center lg:col-start-1">
            <h2 className="text-3xl font-semibold mb-6 text-gray-900">Family Values</h2>
            <p className="text-gray-600 mb-4">
              The Al Mansouri family believes that true luxury is built on integrity and excellence. Their commitment to 
              quality has been passed down through generations, with each family member personally overseeing aspects of 
              the design and production process.
            </p>
            <p className="text-gray-600 mb-4">
              The family has maintained their traditional values while embracing innovation. They were among the first in the 
              region to adopt ethical sourcing practices, ensuring all their diamonds are conflict-free and working only with 
              suppliers who share their commitment to responsible business.
            </p>
            <p className="text-gray-600">
              For the Al Mansouris, every customer is treated like family. This philosophy has built lifelong relationships 
              with clients who trust the family to create pieces for their most significant moments, from engagements to 
              anniversaries and family heirlooms.
            </p>
          </div>
          <div className="relative h-[400px] overflow-hidden lg:col-start-2">
            <Image 
              src="/about-commitment.png" 
              alt="Family Values"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-gray-900">The Al Mansouri Family Today</h2>
          <p className="text-gray-600 text-center mb-10 max-w-3xl mx-auto">
            Three generations of the Al Mansouri family are actively involved in the business today, 
            each bringing their unique expertise while honoring their shared heritage and vision for the future.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="/team-member-1.png" 
                  alt="Fatima Al-Mansouri"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Fatima Al-Mansouri</h3>
              <p className="text-gray-600">Creative Director & Second Generation</p>
              <p className="text-gray-500 mt-2 text-sm">
                Fatima inherited her father&apos;s eye for design and has been the creative force behind the brand&apos;s most iconic collections.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="/team-member-2.png" 
                  alt="Ahmed Al-Mansouri"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Ahmed Al-Mansouri</h3>
              <p className="text-gray-600">Master Jeweler & Second Generation</p>
              <p className="text-gray-500 mt-2 text-sm">
                Ahmed mastered traditional crafting techniques under his father&apos;s guidance and now leads our team of artisans.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative h-64 w-64 mx-auto mb-4 rounded-full overflow-hidden">
                <Image 
                  src="/team-member-3.png" 
                  alt="Abdulrahman Al-Mansouri"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold">Abdulrahman Al-Mansouri</h3>
              <p className="text-gray-600">Head of Customer Experience & Second Generation</p>
              <p className="text-gray-500 mt-2 text-sm">
                Abdulrahman ensures that the family&apos;s commitment to personal service extends through every aspect of the customer experience.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Family Legacy</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              As the Al Mansouri family looks to the future, they remain dedicated to their founding principles while 
              embracing new technologies and sustainable practices. The third generation is now beginning to make 
              their mark, ensuring that the family legacy will continue to shine for generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 