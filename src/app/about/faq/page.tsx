"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQPage() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What makes Zahra Al Dahab jewelry special?",
      answer: "Zahra Al Dahab jewelry is crafted using only the finest materials, including ethically sourced gemstones and precious metals. Each piece is meticulously designed and created by our master craftsmen with decades of experience, ensuring exceptional quality and attention to detail.",
      category: "General"
    },
    {
      question: "Do you offer customization services?",
      answer: "Yes, we provide personalization services for many of our pieces. From engraving to custom designs, our team works closely with clients to create one-of-a-kind jewelry that perfectly captures their vision and personal style. Please contact our customer service team for more information.",
      category: "Products & Services"
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and bank transfers. For high-value purchases, we also offer wire transfer options. All payments are processed securely through encrypted channels.",
      category: "Ordering & Payment"
    },
    {
      question: "What is your shipping policy?",
      answer: "We offer complimentary standard shipping on all orders over $500. Express and international shipping options are available at additional cost. All items are carefully packaged in our signature gift boxes and shipped fully insured. For more details, please visit our Shipping & Returns page.",
      category: "Shipping & Delivery"
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items in their original, unworn condition with all tags attached. Custom or personalized pieces are final sale. Returns are processed within 5-7 business days of receipt, and refunds are issued to the original payment method.",
      category: "Returns & Refunds"
    },
    {
      question: "How do I care for my jewelry?",
      answer: "To maintain the beauty of your Zahra Al Dahab pieces, we recommend storing them in their original packaging when not in use. Clean gold and platinum jewelry with warm water and mild soap, and diamonds with a specialized diamond cleaning solution. For pearls and softer gemstones, wipe gently with a soft cloth. Avoid exposure to chemicals, perfumes, and extreme temperatures.",
      category: "Product Care"
    },
    {
      question: "Do your products come with a warranty?",
      answer: "Yes, all Zahra Al Dahab jewelry comes with a 2-year warranty covering manufacturing defects. We also offer complimentary cleaning and inspection services at our boutiques to ensure your pieces remain in perfect condition.",
      category: "Warranty & Repairs"
    },
    {
      question: "Are your diamonds ethically sourced?",
      answer: "We are committed to responsible sourcing practices. All our diamonds are conflict-free and comply with the Kimberley Process. We work with suppliers who adhere to rigorous ethical standards throughout the supply chain.",
      category: "Ethical Practices"
    },
    {
      question: "How can I determine my ring size?",
      answer: "We offer a comprehensive ring sizing guide on our website. For the most accurate measurement, we recommend visiting one of our boutiques for professional sizing. If ordering online, our customer service team can assist with sizing questions and provide guidance based on your measurements.",
      category: "Sizing & Fit"
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Yes, all orders are presented in our signature packaging at no additional cost. For special occasions, we offer premium gift wrapping options, including personalized gift messages and special packaging.",
      category: "Gifts & Special Occasions"
    }
  ];

  // Group FAQ items by category
  const categories = Array.from(new Set(faqItems.map(item => item.category)));
  const groupedFAQs = categories.reduce((acc, category) => {
    acc[category] = faqItems.filter(item => item.category === category);
    return acc;
  }, {} as Record<string, FAQItem[]>);

  return (
    <div className="bg-[#f8f5f1]">
      {/* Hero section */}
      <div className="relative h-[400px]">
        <Image 
          src="/images/faq-hero.jpg" 
          alt="Frequently Asked Questions"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.4)] to-[rgba(0,0,0,0.7)]"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#D4AF37]" style={{ textShadow: "0px 2px 4px rgba(0,0,0,0.3)" }}>
              Frequently Asked Questions
            </h1>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed" style={{ textShadow: "0px 1px 2px rgba(0,0,0,0.5)" }}>
              Find answers to common questions about our products, services, and policies
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16">
          <p className="text-[#5D4037] text-lg text-center mb-8">
            Browse our FAQ categories below or reach out to our customer service team if you need further assistance.
          </p>
          
          {/* Category quick links */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <a 
                key={index}
                href={`#${category.toLowerCase().replace(/[&\s]+/g, '-')}`}
                className="px-5 py-3 bg-white rounded-full shadow-md border border-[#E8DFD8] text-[#3A2618] hover:bg-[#D4AF37] hover:text-white hover:border-[#D4AF37] transition-colors duration-300"
              >
                {category}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              id={category.toLowerCase().replace(/[&\s]+/g, '-')}
              className="scroll-mt-24"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center mr-4 shadow-md">
                  <span className="text-white text-xl font-semibold">{category.charAt(0)}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#3A2618]">
                  {category}
                </h2>
              </div>

              <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-[#E8DFD8]">
                <div className="divide-y divide-[#E8DFD8]">
                  {groupedFAQs[category].map((item, itemIndex) => {
                    const index = faqItems.findIndex(faq => faq.question === item.question);
                    const isOpen = openItem === index;
                    
                    return (
                      <div key={itemIndex} className={isOpen ? "bg-[#fcf9f5]" : ""}>
                        <button
                          className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-[#fcf9f5] focus:outline-none focus:bg-[#fcf9f5] transition-colors"
                          onClick={() => toggleItem(index)}
                        >
                          <span className="text-lg font-medium text-[#3A2618] pr-6">{item.question}</span>
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center border border-[#D4AF37] bg-white flex-shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#D4AF37]' : ''}`}>
                            <ChevronDownIcon 
                              className={`w-5 h-5 ${isOpen ? 'text-white transform rotate-180' : 'text-[#D4AF37]'} transition-all duration-300`} 
                            />
                          </div>
                        </button>
                        
                        <div 
                          className={`px-6 overflow-hidden transition-all duration-300 ${
                            isOpen ? 'max-h-[400px] py-4 pb-6 border-t border-[#E8DFD8]' : 'max-h-0'
                          }`}
                        >
                          <p className="text-[#5D4037] leading-relaxed">{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact section */}
        <div className="mt-20 bg-[#3A2618] rounded-xl p-12 text-center relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-24 h-24">
            <svg viewBox="0 0 100 100" className="absolute top-0 right-0 text-[#D4AF37] opacity-10">
              <path fill="currentColor" d="M0,0 L100,0 L100,100 L0,0 Z" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24">
            <svg viewBox="0 0 100 100" className="absolute bottom-0 left-0 text-[#D4AF37] opacity-10">
              <path fill="currentColor" d="M0,100 L100,100 L0,0 L0,100 Z" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Still Have Questions?</h3>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Our customer service team is here to help with any questions not answered above. Feel free to reach out, and we&apos;ll be delighted to assist you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="mailto:customer.service@zahra-al-dahab.com" 
                className="px-6 py-3 bg-white text-[#3A2618] rounded-md font-medium hover:bg-[#f8f5f1] transition-colors"
              >
                Email Us
              </a>
              <a 
                href="/about/contact" 
                className="px-6 py-3 bg-[#D4AF37] text-[#3A2618] rounded-md font-medium hover:bg-[#E5C363] transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        {/* Jewelry care tips section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#3A2618]">Jewelry Care Tips</h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-4 mb-6"></div>
            <p className="text-[#5D4037] max-w-3xl mx-auto">
              Proper care ensures your precious pieces maintain their beauty for generations to come
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#E8DFD8] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#fcf9f5] flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#3A2618]">Storage</h3>
              <p className="text-[#5D4037] text-center">
                Store each piece separately in soft pouches or the original box to prevent scratches. Keep in a cool, dry place away from direct sunlight.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#E8DFD8] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#fcf9f5] flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#3A2618]">Cleaning</h3>
              <p className="text-[#5D4037] text-center">
                Clean gold and platinum with mild soap and warm water. For diamonds, use a specialized solution. Always rinse thoroughly and dry with a soft cloth.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-[#E8DFD8] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 rounded-full bg-[#fcf9f5] flex items-center justify-center mb-6 mx-auto">
                <svg className="w-8 h-8 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-4 text-[#3A2618]">Precautions</h3>
              <p className="text-[#5D4037] text-center">
                Remove jewelry before swimming, bathing, or using household chemicals. Avoid exposure to perfumes and cosmetics that can damage precious metals and gemstones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 