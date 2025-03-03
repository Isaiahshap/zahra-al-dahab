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
import { jewelryCategories, jewelryFeatured, sharedCollections } from "./jewelry";

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
    name: "Jewelry",
    href: "/jewelry",
    dropdown: jewelryCategories,
  },
  {
    name: "Perfume",
    href: "/perfume",
  },
  {
    name: "Gift Sets",
    href: "/gift-sets",
    dropdown: [
      { name: "For Her", href: "/gift-sets/for-her" },
      { name: "For Him", href: "/gift-sets/for-him" },
      { name: "Occasion Gifts", href: "/gift-sets/occasion" },
    ],
  },
  {
    name: "Leather Goods",
    href: "/leather-goods",
  },
];

// Featured content mapping for dropdowns
export const featuredMapping = {
  Women: womensFeatured,
  Jewelry: jewelryFeatured,
  Men: [
    {
      title: "Premium Watches",
      image: "/images/mens-watches.jpg",
      link: "/men/watches",
      description: "Discover our luxury timepieces",
    },
    {
      title: "Gold Collection",
      image: "/images/mens-gold.jpg",
      link: "/men/collections/gold",
      description: "Sophisticated gold pieces for men",
    },
    {
      title: "New Arrivals",
      image: "/images/mens-new-arrivals.jpg",
      link: "/men/new-arrivals",
      description: "Just landed in our collection",
    },
  ],
};

// Collections data
export const collections = [
  ...womensCollections,
  ...sharedCollections,
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