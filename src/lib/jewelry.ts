import { NavigationItem } from "./navigation";
import { womensCategories } from "./womens";

// Main jewelry categories
export const jewelryCategories: NavigationItem[] = [
  { name: "Necklaces", href: "/jewelry/necklaces" },
  { name: "Rings", href: "/jewelry/rings" },
  { name: "Bracelets", href: "/jewelry/bracelets" },
  { name: "Earrings", href: "/jewelry/earrings" },
  { name: "Anklets", href: "/jewelry/anklets" },
  { name: "Watches", href: "/jewelry/watches" },
];

// Gender-specific jewelry links
export const genderJewelry = {
  men: [
    { name: "Men's Watches", href: "/men/watches" },
    { name: "Men's Bracelets", href: "/men/bracelets" },
    { name: "Men's Rings", href: "/men/rings" },
    { name: "Men's Necklaces", href: "/men/necklaces" },
  ],
  women: womensCategories.map(category => ({
    name: `Women's ${category.name}`,
    href: category.href,
    key: category.href
  }))
};

// Collections that apply to both men and women
export const sharedCollections: NavigationItem[] = [
  {
    name: "Heritage Collection",
    href: "/jewelry/collections/heritage",
    description: "Designs inspired by rich cultural heritage",
    image: "/images/collections/heritage.jpg",
  },
  {
    name: "Classic Collection",
    href: "/jewelry/collections/classic",
    description: "Timeless designs that never go out of style",
    image: "/images/collections/classic.jpg",
  },
];

// Featured content for jewelry dropdown
export const jewelryFeatured = [
  {
    title: "Men's Collection",
    image: "/images/mens-jewelry.jpg",
    link: "/men/jewelry",
    description: "Bold and sophisticated designs for men",
  },
  {
    title: "Women's Collection",
    image: "/images/womens-jewelry.jpg",
    link: "/women/jewelry",
    description: "Elegant and timeless pieces for women",
  },
  {
    title: "Exclusive Sets",
    image: "/images/jewelry-sets.jpg",
    link: "/jewelry/sets",
    description: "Perfectly matched jewelry sets for any occasion",
  },
]; 