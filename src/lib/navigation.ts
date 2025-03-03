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
    dropdown: [
      { name: "Watches", href: "/women/watches" },
      { name: "Best Sellers", href: "/women/best-sellers" },
      { name: "Jewellery", href: "/women/jewellery" },
      { name: "Personalized", href: "/women/personalized" },
      { name: "Shop By Collection", href: "/women/collections" },
    ],
  },
  {
    name: "Jewelery",
    href: "/jewelery",
    dropdown: [
      { name: "Necklaces", href: "/jewelery/necklaces" },
      { name: "Rings", href: "/jewelery/rings" },
      { name: "Bracelets", href: "/jewelery/bracelets" },
      { name: "Earrings", href: "/jewelery/earrings" },
      { name: "Anklets", href: "/jewelery/anklets" },
    ],
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

// Collections data
export const collections = [
  {
    name: "Fan Collection",
    slug: "fan",
    href: "/collections/fan",
    description: "Elegant fan-inspired jewelry pieces with intricate detailing",
    image: "https://images.unsplash.com/photo-1613843451161-17303d8d5fd9?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Petite",
    slug: "petite",
    href: "/collections/petite",
    description: "Delicate timepieces for the refined woman",
    image: "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Diamond Classic",
    slug: "diamond-classic",
    href: "/collections/diamond-classic",
    description: "Timeless diamond pieces with classic elegance",
    image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Diamond Oval",
    slug: "diamond-oval",
    href: "/collections/diamond-oval",
    description: "Oval-shaped diamond pieces with a modern twist",
    image: "https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Classic",
    slug: "classic",
    href: "/collections/classic",
    description: "Timeless designs that never go out of style",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Joory",
    slug: "joory",
    href: "/collections/joory",
    description: "Contemporary designs with an artistic flair",
    image: "https://images.unsplash.com/photo-1631982690223-8aa7e50bd80f?q=80&w=1974&auto=format&fit=crop",
  },
  {
    name: "Heritage",
    slug: "heritage",
    href: "/collections/heritage",
    description: "Designs inspired by rich cultural heritage",
    image: "https://images.unsplash.com/photo-1633810513000-1afaea3ca5cf?q=80&w=1974&auto=format&fit=crop",
  },
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