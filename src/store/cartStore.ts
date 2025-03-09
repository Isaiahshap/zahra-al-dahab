import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/components/product/ProductCard';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize?: string;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  addItem: (product: Product, quantity: number, selectedSize?: string) => void;
  removeItem: (productId: number, selectedSize?: string) => void;
  updateQuantity: (productId: number, quantity: number, selectedSize?: string) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      
      addItem: (product: Product, quantity: number, selectedSize?: string) => {
        const currentItems = get().items;
        // Create a copy of the product with the selected size
        const productWithSize = selectedSize 
          ? { ...product, selectedSize } 
          : product;
        
        // Check if the same product with the same size exists
        const existingItemIndex = currentItems.findIndex(
          (item: CartItem) => 
            item.product.id === product.id && 
            ((!selectedSize && !item.selectedSize) || item.selectedSize === selectedSize)
        );
        
        if (existingItemIndex !== -1) {
          // Update quantity if item with same size already exists
          const updatedItems = [...currentItems];
          updatedItems[existingItemIndex] = {
            ...updatedItems[existingItemIndex],
            quantity: updatedItems[existingItemIndex].quantity + quantity
          };
          
          set({
            items: updatedItems,
            totalItems: get().totalItems + quantity
          });
        } else {
          // Add new item with the selected size
          set({
            items: [...currentItems, { product: productWithSize, quantity, selectedSize }],
            totalItems: get().totalItems + quantity
          });
        }
      },
      
      removeItem: (productId: number, selectedSize?: string) => {
        const currentItems = get().items;
        
        // Find the specific item to remove (matching product ID and size)
        const itemToRemoveIndex = currentItems.findIndex(
          (item: CartItem) => 
            item.product.id === productId && 
            ((!selectedSize && !item.selectedSize) || item.selectedSize === selectedSize)
        );
        
        if (itemToRemoveIndex !== -1) {
          const itemToRemove = currentItems[itemToRemoveIndex];
          set({
            items: currentItems.filter((_, index) => index !== itemToRemoveIndex),
            totalItems: get().totalItems - itemToRemove.quantity
          });
        }
      },
      
      updateQuantity: (productId: number, quantity: number, selectedSize?: string) => {
        const currentItems = get().items;
        
        // Find the specific item to update (matching product ID and size)
        const itemToUpdateIndex = currentItems.findIndex(
          (item: CartItem) => 
            item.product.id === productId && 
            ((!selectedSize && !item.selectedSize) || item.selectedSize === selectedSize)
        );
        
        if (itemToUpdateIndex !== -1) {
          const itemToUpdate = currentItems[itemToUpdateIndex];
          const quantityDifference = quantity - itemToUpdate.quantity;
          
          const updatedItems = [...currentItems];
          updatedItems[itemToUpdateIndex] = {
            ...updatedItems[itemToUpdateIndex],
            quantity
          };
          
          set({
            items: updatedItems,
            totalItems: get().totalItems + quantityDifference
          });
        }
      },
      
      clearCart: () => {
        set({
          items: [],
          totalItems: 0
        });
      }
    }),
    {
      name: 'cart-storage', // name for the persisted storage
    }
  )
); 