"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "./MobileMenu";
import { categories, featuredMapping } from "@/lib/navigation";
import EnhancedDropdownMenu from "./EnhancedDropdownMenu";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const promoText = "RAMADAN SALE | UP TO 30% OFF";
  const [timeLeft, setTimeLeft] = useState({ days: 33, hours: 3, minutes: 17, seconds: 38 });
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Handle dropdown hover
  const handleMouseEnter = (category: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(category);
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setIsDropdownVisible(false);
    }, 500); // Increased delay for smoother transition
    setHoverTimeout(timeout);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Countdown timer effect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.seconds > 0) {
        setTimeLeft({ ...timeLeft, seconds: timeLeft.seconds - 1 });
      } else if (timeLeft.minutes > 0) {
        setTimeLeft({ ...timeLeft, minutes: timeLeft.minutes - 1, seconds: 59 });
      } else if (timeLeft.hours > 0) {
        setTimeLeft({ ...timeLeft, hours: timeLeft.hours - 1, minutes: 59, seconds: 59 });
      } else if (timeLeft.days > 0) {
        setTimeLeft({ ...timeLeft, days: timeLeft.days - 1, hours: 23, minutes: 59, seconds: 59 });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Format time with leading zeros
  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <>
      {/* Top promotional banner */}
      <div className="w-full bg-[#0F1113] text-white text-xs md:text-sm py-1 px-4 flex justify-center items-center">
        <p className="text-center tracking-wide">
          {promoText} | {timeLeft.days} : {formatTime(timeLeft.hours)} : {formatTime(timeLeft.minutes)} : {formatTime(timeLeft.seconds)}
        </p>
      </div>

      {/* Navbar container - make this sticky instead of just the header */}
      <div className="sticky top-0 z-50 bg-white">
        {/* Main navigation */}
        <header className={`w-full transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}>
          <div className="container mx-auto px-4">
            <div className="relative flex items-center h-20">
              {/* Mobile menu toggle */}
              <div className="md:hidden z-10">
                <button 
                  className="flex items-center"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {isMobileMenuOpen ? (
                      <>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </>
                    ) : (
                      <>
                        <line x1="3" y1="12" x2="21" y2="12" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </>
                    )}
                  </svg>
                </button>
              </div>

              {/* Left navigation links - Desktop */}
              <nav className="hidden md:flex items-center z-10 w-1/3">
                {categories.slice(0, 3).map((category) => (
                  <div 
                    key={category.name}
                    className="relative px-4"
                    onMouseEnter={() => handleMouseEnter(category.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      href={category.href}
                      className={`uppercase text-sm tracking-wide text-black font-medium transition-colors relative
                        hover:text-gray-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                        after:bg-black after:transform after:scale-x-0 after:origin-left 
                        after:transition-transform after:duration-300
                        ${activeDropdown === category.name ? 'after:scale-x-100' : 'hover:after:scale-x-100'}`}
                    >
                      {category.name}
                    </Link>
                  </div>
                ))}
              </nav>

              {/* Logo - Arabic text - Absolutely centered */}
              <div className="absolute left-0 right-0 mx-auto flex justify-center items-center">
                <Link href="/" className="flex flex-col items-center justify-center">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-[#D4AF50]" style={{ fontFamily: 'Arial, sans-serif' }}>زهرة الذهب</p>
                    <p className="text-sm tracking-[0.2em] font-medium text-[#D4AF37] mt-1">ZAHRA AL DAHAB</p>
                  </div>
                </Link>
              </div>

              {/* Right navigation links - Desktop */}
              <nav className="hidden md:flex items-center justify-end z-10 w-1/3 ml-auto">
                {categories.slice(3, 5).map((category) => (
                  <div 
                    key={category.name}
                    className="relative px-4"
                    onMouseEnter={() => handleMouseEnter(category.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link 
                      href={category.href}
                      className={`uppercase text-sm tracking-wide text-black font-medium transition-colors relative
                        hover:text-gray-600 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 
                        after:bg-black after:transform after:scale-x-0 after:origin-left 
                        after:transition-transform after:duration-300
                        ${activeDropdown === category.name ? 'after:scale-x-100' : 'hover:after:scale-x-100'}`}
                    >
                      {category.name}
                    </Link>
                  </div>
                ))}
              
                {/* Right icons */}
                <div className="flex items-center space-x-4 ml-4">
                  <Link href="/account" className="hidden md:block text-black">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="lucide lucide-user"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </Link>
                  <Link href="/cart" className="relative text-black">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="lucide lucide-shopping-bag"
                    >
                      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    <span className="absolute -top-1 -right-1 flex items-center justify-center w-4 h-4 text-xs text-white bg-black rounded-full">0</span>
                  </Link>
                  <button className="hidden md:block text-black">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="1.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="lucide lucide-search"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </header>

        {/* Dropdown menus - now inside the sticky container */}
        <AnimatePresence>
          {isDropdownVisible && activeDropdown && (
            <EnhancedDropdownMenu
              items={categories.find(c => c.name === activeDropdown)?.dropdown || []}
              category={activeDropdown}
              onMouseEnter={() => {
                if (hoverTimeout) {
                  clearTimeout(hoverTimeout);
                  setHoverTimeout(null);
                }
                setIsDropdownVisible(true);
              }}
              onMouseLeave={handleMouseLeave}
              featured={featuredMapping[activeDropdown as keyof typeof featuredMapping] || []}
            />
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <MobileMenu 
              categories={categories} 
              onClose={() => setIsMobileMenuOpen(false)} 
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
} 