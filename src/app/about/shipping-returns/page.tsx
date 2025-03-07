import Image from "next/image";
import Link from "next/link";
import { 
  TruckIcon, 
  ArrowPathRoundedSquareIcon, 
  GlobeAltIcon, 
  ClockIcon, 
  ShieldCheckIcon,
  GiftIcon
} from "@heroicons/react/24/outline";

export default function ShippingReturnsPage() {
  return (
    <div className="bg-[#f8f5f1]">
      {/* Hero section */}
      <div className="relative h-[400px]">
        <Image 
          src="/images/shipping-hero.jpg" 
          alt="Shipping & Returns"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#D4AF37]" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}>
              Shipping & Returns
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}>
              Our premium policies are designed to ensure your satisfaction and peace of mind with every purchase
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <p className="text-lg text-[#5D4037] max-w-3xl mx-auto leading-relaxed">
            At Zahra Al Dahab, we understand that purchasing luxury jewelry is a special experience. 
            Our shipping and returns policies are crafted with the same attention to detail and commitment to excellence 
            that characterizes our jewelry collections.
          </p>
        </div>
        
        {/* Luxury service badges */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-xl text-center border border-[#E8DFD8] hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-[#f8f5f1] rounded-full flex items-center justify-center mx-auto mb-4">
              <ShieldCheckIcon className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h3 className="text-lg font-semibold text-[#3A2618] mb-2">Insured Shipping</h3>
            <p className="text-[#5D4037] text-sm">All packages are fully insured for your peace of mind</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl text-center border border-[#E8DFD8] hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-[#f8f5f1] rounded-full flex items-center justify-center mx-auto mb-4">
              <GiftIcon className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h3 className="text-lg font-semibold text-[#3A2618] mb-2">Luxury Packaging</h3>
            <p className="text-[#5D4037] text-sm">Elegant presentation with our signature gift boxes</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl text-center border border-[#E8DFD8] hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-[#f8f5f1] rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h3 className="text-lg font-semibold text-[#3A2618] mb-2">30-Day Returns</h3>
            <p className="text-[#5D4037] text-sm">Hassle-free return process on eligible items</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-xl text-center border border-[#E8DFD8] hover:shadow-2xl transition-all">
            <div className="w-16 h-16 bg-[#f8f5f1] rounded-full flex items-center justify-center mx-auto mb-4">
              <GlobeAltIcon className="h-8 w-8 text-[#D4AF37]" />
            </div>
            <h3 className="text-lg font-semibold text-[#3A2618] mb-2">Global Delivery</h3>
            <p className="text-[#5D4037] text-sm">Shipping to luxury destinations worldwide</p>
          </div>
        </div>
      </div>

      {/* Shipping section */}
      <div className="bg-[#3A2618] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 mb-16">
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <TruckIcon className="h-10 w-10 text-[#D4AF37] mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Shipping Policy
                </h2>
              </div>
              <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
              <p className="text-white/90 mb-6 leading-relaxed">
                At Zahra Al Dahab, we take pride in delivering your precious items safely and promptly. 
                We offer several shipping options to meet your needs, ensuring that your luxury purchase 
                arrives in perfect condition.
              </p>
              <p className="text-white/90 leading-relaxed">
                All items are carefully packaged in our signature gift boxes and secured in discreet outer 
                packaging for protection during transit. Every shipment is fully insured for its entire value.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#3A2618] mb-6 border-b border-[#E8DFD8] pb-4">
                    Shipping Methods & Timeframes
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="w-16 h-16 bg-[#f8f5f1] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-[#D4AF37] font-semibold">01</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#3A2618] mb-1">Standard Shipping</h4>
                        <p className="text-[#5D4037] mb-1">5-7 business days</p>
                        <p className="text-[#D4AF37]">Complimentary for orders over $500</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-16 h-16 bg-[#f8f5f1] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-[#D4AF37] font-semibold">02</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#3A2618] mb-1">Express Shipping</h4>
                        <p className="text-[#5D4037] mb-1">2-3 business days</p>
                        <p className="text-[#D4AF37]">$35 flat rate</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-16 h-16 bg-[#f8f5f1] rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-[#D4AF37] font-semibold">03</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#3A2618] mb-1">International Shipping</h4>
                        <p className="text-[#5D4037] mb-1">7-14 business days</p>
                        <p className="text-[#D4AF37]">Rates vary by destination</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-[#D4AF37] mb-6">
              Additional Shipping Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <ClockIcon className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Processing Time</h4>
                  <p className="text-white/80 text-sm">
                    In-stock items are typically processed within 1-2 business days. Custom or personalized items may require additional time.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <GlobeAltIcon className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">International Orders</h4>
                  <p className="text-white/80 text-sm">
                    International orders may be subject to import duties and taxes, which are the responsibility of the recipient.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <ShieldCheckIcon className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Insurance</h4>
                  <p className="text-white/80 text-sm">
                    All shipments are fully insured for the entire value of your purchase, providing complete peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Returns section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16 mb-16">
            <div className="md:w-1/2 order-2 md:order-1">
              <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="p-8">
                  <h3 className="text-xl font-bold text-[#3A2618] mb-6 border-b border-[#E8DFD8] pb-4">
                    Return Process
                  </h3>
                  
                  <div className="space-y-8">
                    <ol className="relative border-l border-[#E8DFD8]">
                      <li className="mb-8 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-[#D4AF37] rounded-full -left-4 ring-4 ring-white">
                          <span className="text-white font-medium">1</span>
                        </span>
                        <h4 className="text-lg font-semibold text-[#3A2618] mb-1">Contact Us</h4>
                        <p className="text-[#5D4037] text-sm mb-2">
                          Email our customer service team at returns@zahra-al-dahab.com or call +971 4 123 4567 within 30 days of receiving your order.
                        </p>
                      </li>
                      
                      <li className="mb-8 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-[#D4AF37] rounded-full -left-4 ring-4 ring-white">
                          <span className="text-white font-medium">2</span>
                        </span>
                        <h4 className="text-lg font-semibold text-[#3A2618] mb-1">Receive Return Authorization</h4>
                        <p className="text-[#5D4037] text-sm mb-2">
                          We&apos;ll email you a return authorization and prepaid shipping label within 1-2 business days.
                        </p>
                      </li>
                      
                      <li className="mb-8 ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-[#D4AF37] rounded-full -left-4 ring-4 ring-white">
                          <span className="text-white font-medium">3</span>
                        </span>
                        <h4 className="text-lg font-semibold text-[#3A2618] mb-1">Package Your Return</h4>
                        <p className="text-[#5D4037] text-sm mb-2">
                          Place the item in its original packaging with all tags attached, and secure it in the outer shipping box.
                        </p>
                      </li>
                      
                      <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-8 h-8 bg-[#D4AF37] rounded-full -left-4 ring-4 ring-white">
                          <span className="text-white font-medium">4</span>
                        </span>
                        <h4 className="text-lg font-semibold text-[#3A2618] mb-1">Refund Processing</h4>
                        <p className="text-[#5D4037] text-sm">
                          Once we receive and inspect your return, we&apos;ll process your refund to the original payment method within 5-7 business days.
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 order-1 md:order-2">
              <div className="flex items-center mb-6">
                <ArrowPathRoundedSquareIcon className="h-10 w-10 text-[#D4AF37] mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-[#3A2618]">
                  Returns & Exchanges
                </h2>
              </div>
              <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
              <p className="text-[#5D4037] mb-6 leading-relaxed">
                We want you to be completely satisfied with your Zahra Al Dahab purchase. If for any reason 
                you are not, we offer a straightforward return and exchange policy designed with your 
                convenience in mind.
              </p>
              
              <div className="bg-[#fcf9f5] p-6 rounded-xl mb-6 border border-[#E8DFD8]">
                <h4 className="font-semibold text-[#3A2618] mb-2">Return Eligibility:</h4>
                <ul className="space-y-2 text-[#5D4037]">
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">✦</span>
                    <span>Items returned within 30 days of delivery</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">✦</span>
                    <span>Items in original, unworn condition with all tags attached</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#D4AF37] mr-2">✦</span>
                    <span>Items with original packaging intact</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#f8e9e9] p-6 rounded-xl border border-[#e8d0d0]">
                <h4 className="font-semibold text-[#9C4146] mb-2">Non-Returnable Items:</h4>
                <ul className="space-y-2 text-[#9C4146]">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Custom or personalized pieces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Items marked as &quot;Final Sale&quot;</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Items showing signs of wear or alteration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-[#3A2618] rounded-xl p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40">
              <svg viewBox="0 0 100 100" className="absolute top-0 right-0 text-[#D4AF37] opacity-10" width="160" height="160">
                <path fill="currentColor" d="M0,0 L100,0 L100,100 L0,0 Z" />
              </svg>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">International Returns</h3>
              <p className="text-white mb-8 max-w-2xl mx-auto">
                International customers are responsible for return shipping costs and any customs fees.
                Please contact our customer service team for detailed instructions on international returns.
              </p>
              <Link 
                href="/about/contact" 
                className="inline-block bg-[#D4AF37] text-[#3A2618] px-8 py-4 rounded-md font-medium hover:bg-[#E5C363] transition-colors shadow-xl"
              >
                Contact Customer Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ section */}
      <div className="bg-[#f8f5f1] py-16 border-t border-[#E8DFD8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3A2618] mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#E8DFD8] mb-16">
            <div className="divide-y divide-[#E8DFD8]">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#3A2618] mb-2">Do you ship to all countries?</h3>
                <p className="text-[#5D4037]">
                  We ship to most countries worldwide. However, there are some restrictions based on customs regulations. 
                  Please contact our customer service team if you&apos;re unsure about shipping to your location.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#3A2618] mb-2">How long will it take to receive my refund?</h3>
                <p className="text-[#5D4037]">
                  Once we receive and inspect your return, refunds are processed within 5-7 business days. 
                  The time it takes for the refund to appear in your account depends on your financial institution, typically 3-10 additional business days.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#3A2618] mb-2">Can I exchange an item instead of returning it?</h3>
                <p className="text-[#5D4037]">
                  Yes, we&apos;re happy to process exchanges for a different size or style. Please contact our customer service team to initiate an exchange.
                  For limited edition pieces, exchanges are subject to availability.
                </p>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[#3A2618] mb-2">What if my item arrives damaged?</h3>
                <p className="text-[#5D4037]">
                  In the rare event that an item arrives damaged, please contact us within 48 hours of receipt with photos of the damage.
                  We&apos;ll arrange for a replacement or refund immediately.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              href="/about/faq" 
              className="inline-block bg-[#3A2618] text-white px-8 py-4 rounded-md font-medium hover:bg-[#5D4037] transition-colors shadow-lg"
            >
              View All FAQs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 