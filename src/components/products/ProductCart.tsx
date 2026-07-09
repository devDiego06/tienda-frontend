

export default function ProductCart() {
  return (
    <aside className="fixed right-0 top-0 h-screen w-80 bg-surface-container-lowest border-l border-outline-variant/10 z-50 flex flex-col p-6 shadow-2xl shadow-black/50">
    <div className="flex items-center justify-between mb-8">
        <h2 className="text-headline-lg text-on-surface">Tu Pedido</h2>
        <div className="relative">
            <span className="material-symbols-outlined text-on-surface-variant">shopping_cart</span>
            <span className="absolute -top-2 -right-2 bg-primary-container text-on-primary-fixed text-caption w-5 h-5 flex items-center justify-center rounded-full font-black border-2 border-surface-container-lowest">3</span>
        </div>
    </div>
    {/* <!-- Cart Items List --> */}
    <div className="flex-1 custom-scrollbar overflow-y-auto pr-2 space-y-6">
        {/* <!-- Cart Item 1 --> */}
        <div className="flex gap-4 group">
            <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden shrink-0 border border-outline-variant/10">
                <img alt="Fresas" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPZyo9V-kgGPdjpmqmkQIMwryiJmj33-75pwsOFpXOoUYkBeMKHjYyJeQRxLJXil0seAGr8eXFI3gJMcwkZu4Xcxapb3GH3J2QoRFiYGpWBUAmsOs01pugm_R-CykmFCWjPH-04tgj_Vd3YuqVk8upbLF1K592UnWvP1MasE5oqT3eGIHdFYbc_9-VPPChoK35ij2hGRMJmNQ2P8d32nCKWjJ2UIlzM9ayUmVteMyq6a08map1Ns9C9AWABqMFv7zkt-13jui1Zxc" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-on-surface font-bold truncate leading-tight">Fresas Orgánicas</p>
                <p className="text-xs text-on-surface-variant mt-1">1 x $4.50</p>
                <div className="flex items-center gap-3 mt-2">
                    <button className="w-6 h-6 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container transition-colors flex items-center justify-center"><span className="material-symbols-outlined text-xs">remove</span></button>
                    <span className="text-label-sm text-on-surface">1</span>
                    <button className="w-6 h-6 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container transition-colors flex items-center justify-center"><span className="material-symbols-outlined text-xs">add</span></button>
                </div>
            </div>
            <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error transition-all self-start">
                <span className="material-symbols-outlined text-sm">delete</span>
            </button>
        </div>
        {/* <!-- Cart Item 2 --> */}
        <div className="flex gap-4 group">
            <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden shrink-0 border border-outline-variant/10">
                <img alt="Leche" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC67EayvKHJEmZspjUz7wPAFgH3VTYTyslMwm8GNYGpZR_TneQ5ob4L3NzexRLUq_uFt2EA6KF5Th_OVe9IrFgHjnJhWaqdZTZZfwTbxNSPXNZKu3OD0ir1Msj381W9sVdq-d_VSOBXww3sooBij-rFfJtAFG3j1zBehIi_qAJOxyApYXRo65SqfVIuHTgeEsaJnRpp6nt_vYT8eMPAEdsALFYpc62PtUbP58k4FJKGenfL-IdUe2vDLpGwDGzLbt1IOllfvo04nTA" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-on-surface font-bold truncate leading-tight">Leche Entera A2</p>
                <p className="text-xs text-on-surface-variant mt-1">2 x $3.25</p>
                <div className="flex items-center gap-3 mt-2">
                    <button className="w-6 h-6 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container transition-colors flex items-center justify-center"><span className="material-symbols-outlined text-xs">remove</span></button>
                    <span className="text-label-sm text-on-surface">2</span>
                    <button className="w-6 h-6 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container transition-colors flex items-center justify-center"><span className="material-symbols-outlined text-xs">add</span></button>
                </div>
            </div>
            <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error transition-all self-start">
                <span className="material-symbols-outlined text-sm">delete</span>
            </button>
        </div>
    </div>
    {/* <!-- Checkout Summary --> */}
    <div className="mt-auto pt-6 border-t border-outline-variant/10 space-y-4">
        <div className="flex justify-between items-center text-on-surface-variant">
            <span className="text-label-md">Subtotal</span>
            <span className="font-medium">$11.00</span>
        </div>
        <div className="flex justify-between items-center text-on-surface-variant">
            <span className="text-label-md">Envío</span>
            <span className="font-medium text-primary-container">GRATIS</span>
        </div>
        <div className="flex justify-between items-center text-on-surface pt-2">
            <span className="text-label-md font-bold">Total</span>
            <span className="text-2xl font-bold text-primary-container">$11.00</span>
        </div>
        <button className="w-full bg-primary-container text-on-primary-fixed py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-all neon-glow flex items-center justify-center gap-2">
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
