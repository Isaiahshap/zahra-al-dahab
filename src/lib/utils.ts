/**
 * Formats a price value to display with appropriate decimal places
 * @param price - The price value to format
 * @returns Formatted price string with 2 decimal places if needed
 */
export function formatPrice(price: number): string {
  // If the price is a whole number, don't show decimal places
  if (Math.floor(price) === price) {
    return price.toString();
  }
  
  // Otherwise format with 2 decimal places
  return price.toFixed(2);
}

/**
 * Creates a URL-friendly slug from a string
 * @param text - The text to convert to a slug
 * @returns A lowercase, hyphenated slug
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/--+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
}

/**
 * Truncates a string to a specified length and adds ellipsis
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * Delay for a specified number of milliseconds
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Check if we're in a browser environment
 */
export const isBrowser = typeof window !== 'undefined'; 