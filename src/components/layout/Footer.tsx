import Link from "next/link";
import Image from "next/image";
import { categories, collections } from "@/lib/navigation";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e5e5] dark:border-[#262626]">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="w-32 h-16 relative flex items-center justify-start">
                <Image 
                  src="/images/logo.svg" 
                  alt="Zahra Al Dahab" 
                  width={90} 
                  height={50}
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-600 mb-6 text-sm">
              Zahra Al Dahab is a luxury jewelry brand offering exquisite collections of fine jewelry, 
              watches, and gifts for all occasions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 12h8"></path>
                  <path d="M12 8v8"></path>
                  <circle cx="12" cy="12" r="10"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-medium mb-4 font-heading">Shop</h3>
            <ul className="space-y-2">
              {categories.slice(0, 6).map((category) => (
                <li key={category.name}>
                  <Link 
                    href={category.href}
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h3 className="text-lg font-medium mb-4 font-heading">Collections</h3>
            <ul className="space-y-2">
              {collections.slice(0, 6).map((collection) => (
                <li key={collection.name}>
                  <Link 
                    href={collection.href}
                    className="text-gray-600 hover:text-black transition-colors text-sm"
                  >
                    {collection.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4 font-heading">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/about"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/shipping"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link 
                  href="/faq"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link 
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="mt-12 pt-8 border-t border-[#e5e5e5] dark:border-[#262626]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-medium mb-4 font-heading">Subscribe to our newsletter</h3>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-gray-50 border border-gray-200 rounded-l-sm px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-black"
                  required
                />
                <button 
                  type="submit"
                  className="bg-black text-white px-4 py-2.5 text-sm rounded-r-sm hover:bg-gray-800 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="text-right text-gray-500 text-sm">
              <p>&copy; {new Date().getFullYear()} Zahra Al Dahab. All rights reserved.</p>
              <p className="mt-2">Designed and developed with ♥ in Dubai, UAE</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
} 