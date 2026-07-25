import { formatCurrency } from "../helpers";
import { useCartStore } from "../store/Cart.store";
import type { Product } from "../types";

export function useCart(){
    const { items, setItems, clearCart } = useCartStore();

    const addToCart = (product: Product) => {
        const existingItem = items.find((i) => i.product.id === product.id);
        if(existingItem){
            if(existingItem.quantity >= 10) return;
            setItems(items.map((i) => i.product.id === product.id ? {...i, quantity: i.quantity + 1} : i));
        } else {
            setItems([...items, { product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId: string) => {
        setItems(items.filter((i) => i.product.id !== productId));
    };

    const updateQuantity = (productId: string, delta: number) => {
        const existingItem = items.find((i) => i.product.id === productId);
        if (!existingItem) return;

        const nextQuantity = existingItem.quantity + delta;

        if (nextQuantity <= 0) {
            return removeFromCart(productId);
        }

        setItems(items.map((i) => i.product.id === productId ? { ...i, quantity: nextQuantity } : i));
    };

    // Observación individual por producto — se llena en la pantalla de checkout
    const updateNote = (productId: string, note: string) => {
        setItems(items.map((i) => i.product.id === productId ? {...i, note} : i));
    };

    const subtotal = items.reduce((subtotal, item) => subtotal + item.product.price * item.quantity, 0);
    const deliveryCost = formatCurrency(2000)
    const totalItems = items.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = items.reduce((total, item) => total + item.product.price * item.quantity, 0);

    return {
        items,
        totalItems,
        totalPrice,
        subtotal,
        deliveryCost,
        addToCart,
        removeFromCart,
        updateQuantity,
        updateNote,
        clearCart,
    };
}