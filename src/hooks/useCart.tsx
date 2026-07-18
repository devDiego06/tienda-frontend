import { useCartStore } from "../store/Cart.store";
import type { Product } from "../types";

export function useCart(){
    const { items, deliveryType, customerNote, setItems, setDeliveryType, setCustomerNote, clearCart } = useCartStore();

    const addToCart = (product: Product) => {
        const existingItem = items.find((i) => i.product.id === product.id);
        if(existingItem){
            setItems(items.map((i) => i.product.id === product.id ? {...i, quantity: i.quantity + 1} : i));
        } else {
            setItems([...items, { product, quantity: 1 }]);
        }
    }


    const removeFromCart = (productId: string) => {
        setItems(items.filter((i) => i.product.id !== productId));
    }

    const updateQuantity = (productId: string, quantity: number) => {
        if(quantity <= 0) return removeFromCart(productId);

        setItems(items.map((i) => i.product.id === productId ? {...i, quantity} : i));
    }

    const totalItems = items.reduce((total, item) => total + item.quantity, 0);

    const totalPrice  = items.reduce((total, item) => total + item.product.price * item.quantity, 0);


    return {
        items,
        deliveryType,
        customerNote,
        addToCart,
        removeFromCart,
        updateQuantity,
        totalItems,
        totalPrice
    }
}