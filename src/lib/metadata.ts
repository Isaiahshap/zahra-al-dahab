import type { Metadata } from 'next';

// Base metadata configuration
export const baseMetadata: Metadata = {
  title: {
    default: 'Zahra Al Dahab | Luxury Jewelry',
    template: '%s | Zahra Al Dahab',
  },
  description: 'Premium luxury jewelry store offering exquisite collections of fine jewelry, watches, and gift sets.',
  keywords: ['luxury jewelry', 'dubai jewelry', 'fine jewelry', 'gold jewelry', 'diamond jewelry', 'watches'],
  authors: [{ name: 'Zahra Al Dahab' }],
  creator: 'Zahra Al Dahab',
  publisher: 'Zahra Al Dahab',
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  metadataBase: new URL('https://zahraaldahab.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'Zahra Al Dahab',
    title: 'Zahra Al Dahab | Luxury Jewelry',
    description: 'Premium luxury jewelry store offering exquisite collections of fine jewelry, watches, and gift sets.',
    url: 'https://zahraaldahab.com',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zahra Al Dahab Luxury Jewelry',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zahra Al Dahab | Luxury Jewelry',
    description: 'Premium luxury jewelry store offering exquisite collections of fine jewelry, watches, and gift sets.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png' },
    ],
  },
};

// Generate metadata for specific pages
export function generateMetadata(
  title: string,
  description?: string,
  path?: string,
  ogImage?: string,
): Metadata {
  const updatedTitle = title;
  const updatedDescription = description || baseMetadata.description;
  
  return {
    ...baseMetadata,
    title: updatedTitle,
    description: updatedDescription,
    alternates: {
      canonical: path ? path : '/',
    },
    openGraph: {
      ...baseMetadata.openGraph,
      title: updatedTitle,
      description: updatedDescription as string,
      url: path ? `https://zahraaldahab.com${path}` : 'https://zahraaldahab.com',
      images: ogImage ? [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${updatedTitle} - Zahra Al Dahab`,
        },
      ] : baseMetadata.openGraph?.images,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: updatedTitle,
      description: updatedDescription as string,
      images: ogImage ? [ogImage] : baseMetadata.twitter?.images,
    },
  };
}

// Schema.org structured data for product pages
export function generateProductJsonLd(product: {
  name: string;
  description: string;
  image: string;
  price: number;
  priceCurrency: string;
  sku: string;
  availability: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    offers: {
      '@type': 'Offer',
      priceCurrency: product.priceCurrency,
      price: product.price,
      availability: product.availability,
      url: product.url,
    },
  };
}

// Schema.org structured data for the organization
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Zahra Al Dahab',
  url: 'https://zahraaldahab.com',
  logo: 'https://zahraaldahab.com/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+971-123-4567',
    contactType: 'customer service',
    availableLanguage: ['English', 'Arabic'],
  },
  sameAs: [
    'https://www.instagram.com/zahraaldahab',
    'https://www.facebook.com/zahraaldahab',
  ],
}; 