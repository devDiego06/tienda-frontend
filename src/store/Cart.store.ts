import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { CartItem } from '../types';

export const DeliveryType = {
  HOME_DELIVERY: 'HOME_DELIVERY',
  STORE_PICKUP: 'STORE_PICKUP',
} as const;

export const PaymentMethod = {
  CASH: 'CASH',
  TRANSFER: 'TRANSFER'
};

export type DeliveryTypeValue = typeof DeliveryType[keyof typeof DeliveryType];
export type PaymentMethodValue = typeof PaymentMethod[keyof typeof PaymentMethod];

interface CartState {
  items: CartItem[];
  setItems: (items: CartItem[]) => void;
  clearCart: () => void;
  deliveryType?: DeliveryTypeValue;
  setDeliveryType: (type: DeliveryTypeValue) => void;
  paymentMethod?: PaymentMethodValue;
  setPaymentMethod: (method: PaymentMethodValue) => void;
  customerNote?: string;
  setCustomerNote: (note: string) => void;
  itemNotes: Record<string, string>;
  setItemNotes: (notes: Record<string, string>) => void;

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
      deliveryType: undefined,
      setDeliveryType: (type) => set({ deliveryType: type }),
      paymentMethod: undefined,
      setPaymentMethod: (method) => set({ paymentMethod: method }),
      customerNote: undefined,
      setCustomerNote: (note) => set({ customerNote: note }),
      itemNotes: {},
      setItemNotes: (notes) => set({ itemNotes: notes }),
    }),
    { name: 'cart-storage' }
  )
);
