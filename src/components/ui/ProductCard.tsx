import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    slug: string;
    price: number;
    image: string;
    category: string;
    isNew?: boolean;
    isOnSale?: boolean;
    salePrice?: number;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const { name, slug, price, image, category, isNew, isOnSale, salePrice } = product;
  
  // Format price to AED currency
  const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('en-AE', {
      style: 'currency',
      currency: 'AED',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden">
      <Link href={`/products/${slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image || "/images/products/placeholder.jpg"}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* New badge */}
          {isNew && (
            <div className="absolute top-2 left-2 bg-black text-white text-xs font-sans px-2 py-1 uppercase tracking-wider">
              New
            </div>
          )}
          
          {/* Sale badge */}
          {isOnSale && (
            <div className="absolute top-2 right-2 bg-accent text-white text-xs font-sans px-2 py-1 uppercase tracking-wider">
              Sale
            </div>
          )}
          
          {/* Quick view button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white text-black text-sm font-sans px-4 py-2 uppercase tracking-wider transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              Quick View
            </button>
          </div>
        </div>
        
        <div className="mt-3">
          <div className="text-xs font-sans text-gray-500 uppercase tracking-wider mb-1">{category}</div>
          <h3 className="font-heading text-lg hover:text-primary transition-colors duration-200">{name}</h3>
          <div className="flex items-center gap-2 mt-1 font-sans">
            {isOnSale && salePrice ? (
              <>
                <span className="text-accent font-medium">{formatPrice(salePrice)}</span>
                <span className="line-through text-gray-400 text-sm">{formatPrice(price)}</span>
              </>
            ) : (
              <span className="font-medium">{formatPrice(price)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
} 