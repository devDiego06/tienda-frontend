import { Navigate, useNavigate } from "react-router-dom";
import { formatCurrency } from "../../helpers";
import { useCart } from "../../hooks/useCart"




export default function ProductCart() {

    const { items, addToCart, removeFromCart, updateQuantity, totalPrice, subtotal } = useCart();

    const navigate = useNavigate();


    const checkOutButton = () => {
        if(items.length === 0) return;
        navigate('/checkout');
    }


    return (
        <aside className="fixed right-0 top-0 h-screen w-80 bg-surface-container-lowest border-l border-outline-variant/10 z-50 flex flex-col p-6 shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-headline-lg text-on-surface">Tu Pedido</h2>
                <div className="relative">
                    <span className="material-symbols-outlined text-on-surface-variant">shopping_cart</span>
                    <span className="absolute -top-2 -right-2 bg-primary-container text-on-primary-fixed text-caption w-5 h-5 flex items-center justify-center rounded-full font-black border-2 border-surface-container-lowest">{items.length}</span>
                </div>
            </div>
            {/* <!-- Cart Items List --> */}
            <div className="flex-1 custom-scrollbar overflow-y-auto pr-2 space-y-6">
                {/* <!-- Cart Item 1 --> */}
                {
                    items.map((item) => {
                        return (
                            <div key={item.product.id} className="flex gap-4 group">
                                <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden shrink-0 border border-outline-variant/10">
                                    <img alt="Fresas" className="w-full h-full object-cover" src={item.product.imageUrl} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-on-surface font-bold truncate leading-tight">{item.product.name}</p>
                                    <p className="text-xs text-on-surface-variant mt-1">{item.quantity} x {formatCurrency(item.product.price)}</p>
                                    <div className="flex items-center gap-3 mt-2">
                                        <button onClick={() => updateQuantity(item.product.id, -1)} className="w-6 h-6 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container transition-colors flex items-center justify-center"><span className="material-symbols-outlined text-xs">remove</span></button>
                                        <span className="text-label-sm text-on-surface">{item.quantity}</span>
                                        <button onClick={() => addToCart(item.product)} className="w-6 h-6 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container transition-colors flex items-center justify-center"><span className="material-symbols-outlined text-xs">add</span></button>
                                    </div>
                                </div>
                                <button onClick={() => removeFromCart(item.product.id)}  className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error transition-all self-start">
                                    <span className="material-symbols-outlined text-sm">delete</span>
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            {/* <!-- Checkout Summary --> */}
            <div className="mt-auto pt-6 border-t border-outline-variant/10 space-y-4">
                <div className="flex justify-between items-center text-on-surface-variant">
                    <span className="text-label-md">Subtotal</span>
                    <span className="font-medium">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex justify-between items-center text-on-surface-variant">
                    <span className="text-label-md">Envío</span>
                    <span className="font-medium text-primary-container">{formatCurrency(2000)}</span>
                </div>
                <div className="flex justify-between items-center text-on-surface pt-2">
                    <span className="text-label-md font-bold">Total</span>
                    <span className="text-2xl font-bold text-primary-container">{ formatCurrency(subtotal + 2000)}</span>
                </div>
                <button onClick={() => checkOutButton()} className={`w-full ${items.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-100'} bg-primary-container text-on-primary-fixed py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all neon-glow flex items-center justify-center gap-2`}>
                    Proceder al Pago
                    <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <div className="flex items-center justify-center gap-4 py-2 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <span className="material-symbols-outlined text-sm">credit_card</span>
                    <span className="material-symbols-outlined text-sm">account_balance_wallet</span>
                    <span className="material-symbols-outlined text-sm">contactless</span>
                </div>
            </div>
        </aside>
    )
}
