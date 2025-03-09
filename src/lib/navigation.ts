export interface NavigationItem {
  name: string;
  href: string;
  image?: string;
  description?: string;
}

export interface CategoryItem {
  name: string;
  href: string;
  dropdown?: NavigationItem[];
  image?: string;
}

// Import the women's and jewelry navigation items
import { womensCategories, womensFeatured, womensCollections } from "./womens";

// Main navigation categories
export const categories: CategoryItem[] = [
  {
    name: "Men",
    href: "/men",
    dropdown: [
      { name: "Watches", href: "/men/watches" },
      { name: "Bracelets", href: "/men/bracelets" },
      { name: "Rings", href: "/men/rings" },
      { name: "Necklaces", href: "/men/necklaces" },
    ],
  },
  {
    name: "Women",
    href: "/women",
    dropdown: womensCategories,
  },
  {
    name: "About",
    href: "/about",
    dropdown: [
      { name: "About Us", href: "/about/about-us" },
      { name: "FAQ", href: "/about/faq" },
      { name: "Contact Us", href: "/about/contact" },
      { name: "Shipping & Returns", href: "/about/shipping-returns" },
    ],
  },
  {
    name: "Perfume",
    href: "/perfume",
  },
  {
    name: "Gift Sets",
    href: "/gift-sets",
  },
];

// Featured content mapping for dropdowns
export const featuredMapping = {
  Women: womensFeatured,
  About: [
    {
      title: "Our Heritage",
      image: "/about-heritage1.png",
      link: "/about/about-us",
      description: "The history and craftsmanship behind Zahra Al Dahab",
    },
    {
      title: "Customer Care",
      image: "/about-customer-care.png",
      link: "/about/contact",
      description: "How we can assist you with your purchase",
    },
    {
      title: "Our Commitment",
      image: "/about-commitment.png",
      link: "/about/about-us",
      description: "Quality and service that exceeds expectations",
    },
  ],
  Men: [
    {
      title: "Premium Watches",
      image: "/mens-watches.jpg",
      link: "/men/watches",
      description: "Discover our luxury timepieces",
    },
    {
      title: "Rings Collection",
      image: "/mens-rings.png",
      link: "/men/rings",
      description: "Sophisticated gold pieces for men",
    },
    {
      title: "Bracelets Collection",
      image: "/mens-bracelets.png",
      link: "/men/bracelets",
      description: "Stylish bracelets for men",
    },
  ],
};


// Collections data
export const collections = [
  ...womensCollections,
  {
    name: "Oval",
    slug: "oval",
    href: "/collections/oval",
    description: "Elegant oval-shaped timepieces",
    image: "https://images.unsplash.com/photo-1569397362733-62198705a444?q=80&w=1973&auto=format&fit=crop",
  },
  {
    name: "Charming",
    slug: "charming",
    href: "/collections/charming",
    description: "Captivating pieces designed to charm",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1974&auto=format&fit=crop",
  },
]; 