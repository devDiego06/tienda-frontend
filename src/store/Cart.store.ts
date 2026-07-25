import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '../types';

export const DeliveryType = {
  HOME_DELIVERY: 'home_delivery',
  STORE_PICKUP: 'store_pickup',
} as const;

export type DeliveryTypeValue = typeof DeliveryType[keyof typeof DeliveryType];

interface CartState {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      setItems: (items) => set({ items }),
      clearCart: () => {
        set({ items: [] });
        localStorage.removeItem('cart-storage');
      },
    }),
    { name: 'cart-storage' }
  )
);
