import { formatCurrency } from "../../helpers";
import { useCart } from "../../hooks/useCart";

export default function ChechkoutPage() {

    const { items, addToCart, removeFromCart, updateQuantity, totalPrice, subtotal, deliveryCost } = useCart();



console.log(items);


    return (
        <main className="pt-24 pb-32 px-4 md:px-margin max-w-[1500px] mx-auto min-h-screen">
            <header className="mb-10">
                <h1 className="font-display-md text-display-md text-primary-fixed mb-2">Finalizar Pedido</h1>
                <p className="font-body-md text-on-surface-variant">Revisa tus productos y elige la forma de entrega.</p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-gutter items-start">
                {/* <!-- Left Column: Cart Details (60%) --> */}
                <section className="lg:col-span-6 space-y-8">
                    <div className="glass-card rounded-xl overflow-hidden">
                        <div className="p-card-padding border-b border-white/5 bg-white/5">
                            <h2 className="font-headline-lg text-headline-lg">Tu Carrito</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-label-md text-on-surface-variant border-b border-white/5">
                                        <th className="p-4 font-medium">Producto</th>
                                        <th className="p-4 font-medium">Precio</th>
                                        <th className="p-4 font-medium text-center">Cantidad</th>
                                        <th className="p-4 font-medium text-right">Subtotal</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {/* <!-- Item 1 --> */}
                                    {
                                        items.map((item) => {
                                            return (
                                                <tr key={item.product.id} className="group hover:bg-white/5 transition-colors">
                                                    <td className="p-4">
                                                        <div className="flex items-center gap-4">
                                                            <img alt={item.product.name} src={item.product.imageUrl} className="w-16 h-16 rounded-lg object-cover" />
                                                            <div>
                                                                <p className="font-body-md font-bold text-on-surface">{item.product.name}</p>
                                                                <input className="mt-1 w-full bg-surface-container-lowest border border-white/10 rounded-lg p-2 text-label-sm text-on-surface-variant focus:border-primary-fixed transition-all" placeholder="Nota del producto..." type="text" />
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="p-4 font-body-md">{'$'+item.product.price}</td>
                                                    <td className="p-4">
                                                        <div className="flex items-center justify-center gap-3">
                                                            {/* boton - */}
                                                            {/* <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary transition-all active:scale-90">-</button> */}
                                                            <span className="font-body-md w-4 text-center">{item.quantity}</span>
                                                            {/* boton + */}
                                                            {/* <button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary-fixed hover:text-on-primary transition-all active:scale-90">+</button> */}
                                                        </div>
                                                    </td>
                                                    <td className="p-4 text-right font-body-md font-bold text-primary-fixed">{
                                                        formatCurrency(item.product.price * item.quantity)
                                                    }</td>
                                                </tr>
                                            )

                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="glass-card rounded-xl p-card-padding">
                        <label className="block text-label-md font-bold mb-3 text-on-surface-variant uppercase tracking-wider">Observaciones Generales</label>
                        <textarea className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 text-body-md text-on-surface focus:ring-2 focus:ring-primary-fixed/20 transition-all resize-none" placeholder="Escribe aquí instrucciones adicionales para tu pedido..."
                            rows={4}
                        />
                    </div>
                </section>
                {/* <!-- Right Column: Order Summary (40%) --> */}
                <aside className="lg:col-span-4 space-y-6">
                    {/* <!-- Delivery Type --> */}
                    <div className="glass-card rounded-xl p-card-padding">
                        <h3 className="text-label-md font-bold mb-4 text-on-surface-variant uppercase tracking-wider">Tipo de Entrega</h3>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-4 rounded-xl border-2 border-primary-fixed bg-primary-fixed/10 cursor-pointer transition-all">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary-fixed">delivery_dining</span>
                                    <div>
                                        <p className="font-body-md font-bold text-primary-fixed">Domicilio </p>
                                        <p className="text-label-sm text-on-surface-variant opacity-80">Te lo llevamos</p>
                                    </div>
                                </div>
                                <div className="w-5 h-5 rounded-full bg-primary-fixed flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-on-primary"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl border border-white/10 hover:border-white/20 cursor-pointer transition-all">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-on-surface-variant">storefront</span>
                                    <div>
                                        <p className="font-body-md font-bold text-on-surface">Recoger en tienda</p>
                                        <p className="text-label-sm text-on-surface-variant opacity-60">Recoge cuando quieras</p>
                                    </div>
                                </div>
                                <div className="w-5 h-5 rounded-full border border-white/20"></div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Payment Method --> */}
                    <div className="glass-card rounded-xl p-card-padding">
                        <h3 className="text-label-md font-bold mb-4 text-on-surface-variant uppercase tracking-wider">Método de Pago</h3>
                        <div className="grid grid-cols-1 gap-3">
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-primary-fixed/30 cursor-pointer transition-all bg-white/5">
                                <span className="material-symbols-outlined text-on-surface-variant">payments</span>
                                <div>
                                    <p className="font-body-md font-bold text-on-surface">Efectivo</p>
                                    <p className="text-label-sm text-on-surface-variant opacity-60">Paga al recibir</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 rounded-xl border border-white/10 hover:border-primary-fixed/30 cursor-pointer transition-all bg-white/5">
                                <span className="material-symbols-outlined text-on-surface-variant">account_balance_wallet</span>
                                <div>
                                    <p className="font-body-md font-bold text-on-surface">Transferencia</p>
                                    <p className="text-label-sm text-on-surface-variant opacity-60">Nequi · PSE · QR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Total Breakdown --> */}
                    <div className="glass-card rounded-xl p-card-padding relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <span className="material-symbols-outlined">shopping_cart_checkout</span>
                        </div>
                        <div className="space-y-4 relative z-10">
                            <div className="flex justify-between items-center text-on-surface-variant">
                                <span className="font-medium">Subtotal</span>
                                <span className="font-medium">{formatCurrency(subtotal)}</span>
                            </div>
                            <div className="flex justify-between items-center text-on-surface-variant">
                                <span className="font-medium">Envío</span>
                                <span className="font-medium">$2.000</span>
                            </div>
                            <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                                <span className="font-extrabold text-headline-lg">Total</span>
                                <span className=" font-extrabold text-headline-lg text-primary-fixed">{formatCurrency(totalPrice + 2000)}</span>
                            </div>
                            <button className="w-full mt-6 bg-primary-fixed text-on-primary py-4 rounded-xl font-bold text-[18px] hover:brightness-110 hover:shadow-[0_0_20px_rgba(195,244,0,0.3)] transition-all active:scale-[0.98]">
                                Realizar Pedido
                            </button>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    )
}
