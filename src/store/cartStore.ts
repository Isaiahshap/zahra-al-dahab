import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '@/components/product/ProductCard';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  addItem: (product: Product, quantity: number) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      
      addItem: (product: Product, quantity: number) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item: CartItem) => item.product.id === product.id);
        
        if (existingItem) {
          // Update quantity if item already exists
          set({
            items: currentItems.map((item: CartItem) => 
              item.product.id === product.id 
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ),
            totalItems: get().totalItems + quantity
          });
        } else {
          // Add new item
          set({
            items: [...currentItems, { product, quantity }],
            totalItems: get().totalItems + quantity
          });
        }
      },
      
      removeItem: (productId: number) => {
        const currentItems = get().items;
        const itemToRemove = currentItems.find((item: CartItem) => item.product.id === productId);
        
        if (itemToRemove) {
          set({
            items: currentItems.filter((item: CartItem) => item.product.id !== productId),
            totalItems: get().totalItems - itemToRemove.quantity
          });
        }
      },
      
      updateQuantity: (productId: number, quantity: number) => {
        const currentItems = get().items;
        const itemToUpdate = currentItems.find((item: CartItem) => item.product.id === productId);
        
        if (itemToUpdate) {
          const quantityDifference = quantity - itemToUpdate.quantity;
          
          set({
            items: currentItems.map((item: CartItem) => 
              item.product.id === productId 
                ? { ...item, quantity }
                : item
            ),
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