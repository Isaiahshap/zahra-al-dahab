import { MetadataRoute } from 'next';

// Define all static routes
const routes = [
  '',
  '/about',
  '/contact',
  '/mens',
  '/womens',
  '/jewellery',
  '/perfumes',
  '/gift-sets',
  '/shop',
  '/collections',
  '/brand',
];

// You would typically fetch these from your CMS or database
const collections = [
  'fan',
  'petite',
  'diamond-classic',
  'diamond-oval',
  'classic',
  'joory',
  'heritage',
  'oval',
  'charming',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://zahraaldahab.com';
  
  // Base routes
  const staticRoutes = routes.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // Collection routes
  const collectionRoutes = collections.map(collection => ({
    url: `${baseUrl}/collections/${collection}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  return [...staticRoutes, ...collectionRoutes];
} 