import { NavigationItem } from "./navigation";

// Main women's categories and subcategories
export const womensCategories: NavigationItem[] = [
  { name: "Watches", href: "/women/watches" },
  { name: "Necklaces", href: "/women/necklaces" },
  { name: "Rings", href: "/women/rings" },
  { name: "Bracelets", href: "/women/bracelets" },
  { name: "Earrings", href: "/women/earrings" },
  { name: "Anklets", href: "/women/anklets" },
  { name: "Personalized", href: "/women/personalized" },
];

// Collections specific to women's jewelry
export const womensCollections: NavigationItem[] = [
  {
    name: "Fan Collection",
    href: "/women/collections/fan",
    description: "Elegant fan-inspired jewelry pieces with intricate detailing",
    image: "/images/collections/fan.jpg",
  },
  {
    name: "Diamond Classic",
    href: "/women/collections/diamond-classic",
    description: "Timeless diamond pieces with classic elegance",
    image: "/images/collections/diamond-classic.jpg",
  },
  {
    name: "Petite",
    href: "/women/collections/petite",
    description: "Delicate timepieces for the refined woman",
    image: "/images/collections/petite.jpg",
  },
  {
    name: "Joory",
    href: "/women/collections/joory",
    description: "Contemporary designs with an artistic flair",
    image: "/images/collections/joory.jpg",
  },
];

// Featured content for women's dropdown
export const womensFeatured = [
  {
    title: "Rings Collection",
    image: "/women-rings.png",
    link: "/women/rings",
    description: "Timeless pieces for every occasion",
  },
  {
    title: "Bracelets Collection",
    image: "/women-bracelets.png",
    link: "/women/bracelets",
    description: "Discover our latest additions",
  },
  {
    title: "Watches Collection",
    image: "/women-watches.png",
    link: "/women/watches",
    description: "Discover our latest additions",
  },
]; 