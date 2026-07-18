import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "../types";

export const DeliveryType = {
  HOME_DELIVERY: 'home_delivery',
  STORE_PICKUP:'store_pickup'
} as const;

interface CartState {
    items: CartItem[];
    deliveryType: string;
    customerNote: string;


    //acciones
    setItems: (items: CartItem[]) => void;
    setDeliveryType: (type: string) => void;
    setCustomerNote: (note: string) => void;
    clearCart: () => void;

}

export const useCartStore = create<CartState>()(
        persist(
            (set) => ({
                items: [],
                deliveryType: DeliveryType.HOME_DELIVERY || DeliveryType.STORE_PICKUP,
                customerNote: '',

                setItems: (items) => set({ items}),
                setDeliveryType: (type) => set({ deliveryType: type}),
                setCustomerNote: (note) => set({ customerNote: note}),
                clearCart: () => set({items: [], customerNote: ''}),  
            }),
            { name: 'cart-storage' }
        )
    )
