interface DetailsOrderProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DetailsOrder({ isOpen, onClose }: DetailsOrderProps) {

    
    if (!isOpen) return null;

    return (
        <>
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] opacity-100 transition-opacity duration-300"
                onClick={onClose}
                aria-hidden="true"
            />
            <aside className="fixed right-0 top-0 h-screen w-full max-w-[480px] bg-surface-container-lowest border-l border-outline-variant/20 z-[70] translate-x-0 transition-transform duration-500 ease-in-out p-margin overflow-y-auto flex flex-col">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <span className="text-[#B2E9] text-headline-lg font-medium">#TB-2940</span>
                        <h3 className="text-headline-lg text-on-surface mt-1">Detalle del Pedido</h3>
                    </div>
                    <button
                        className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
                        onClick={onClose}
                        type="button"
                        aria-label="Cerrar detalle del pedido"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div className="glass-card p-card-padding rounded-xl mb-8">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-primary-container text-on-primary-fixed flex items-center justify-center font-black text-lg">
                            MA
                        </div>
                        <div>
                            <h4 className="font-bold text-on-surface">Marco Aurelio</h4>
                            <p className="text-sm text-on-surface-variant">+57 301 234 5678</p>
                        </div>
                    </div>
                    <div className="space-y-3 border-t border-outline-variant/10 pt-4">
                        <div className="flex justify-between text-sm">
                            <span className="text-on-surface-variant">Dirección</span>
                            <span className="text-on-surface font-medium">Calle 45 # 12-34, Apt 402</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-on-surface-variant">Tipo Entrega</span>
                            <span className="font-bold text-tertiary-fixed-dim">DOMICILIO 🛵</span>
                        </div>
                    </div>
                </div>
                <div className="flex-1 space-y-4 mb-8">
                    <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest px-2">
                        Productos (3)
                    </h4>
                    <div className="glass-card p-4 rounded-lg flex gap-4">
                        <div className="w-16 h-16 bg-surface-container-high rounded-lg overflow-hidden shrink-0">
                            <img
                                alt="Bread"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsLGM2yOdGWx2n3mfyKWHFgfg7i2bK0ehGIghUY3AhTVmozFz6Qu2Ali4wnWuo9n0e-natubV9G00T6t8kG-5dmPdqcgNJCyyyYx5bXgyAus3b4ka7OSidYDMm0WKS4jkW2_9c2ElKjqKIUTF7Su01h1Hm_rzmERzJcJxfjrxgfn05Xp0sLfY3kU-ypeYNYSXxxLDxj3PArSEpTY50V5TjyMrdu_25VHU9Y3chbPKXfrlBDm_8nWn9s5F72NAVUhtIQYJZoWKKRbQ"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <span className="font-bold text-on-surface">Pan Artesanal x2</span>
                                <span className="text-label-md text-on-surface-variant">$15.000</span>
                            </div>
                            <p className="text-xs text-on-surface-variant mt-1">Snapshot: $7.500 c/u</p>
                            <div className="mt-2 bg-yellow-500/10 border border-yellow-500/20 px-3 py-1.5 rounded-md text-label-sm text-yellow-200">
                                <span className="font-bold">Nota:</span> Bien tostado por favor.
                            </div>
                        </div>
                    </div>
                    <div className="glass-card p-4 rounded-lg flex gap-4">
                        <div className="w-16 h-16 bg-surface-container-high rounded-lg overflow-hidden shrink-0">
                            <img
                                alt="Coffee"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD37TNLmceNvM0IhQOzndiCGwkik8Y2o5sOBObgXMOlid3Y6R0PLuHMLqVhpTcD0fLHLRsXv0bMu9NzxgVjOo4NxyViWg0QSiQxEfUzkrnk_wd6ts1kA7VDN38rKYkx5wMSbI2vZAdhOmLDQa9NJprqochfyeUQ7a1GW4ix9gz7_kgXxTxSLKc-n0AfZn87JVrgc7EYaKxJIfXpAGgwRX9yds9IusY9HB8Q4VFVldhiNQc5qLDjfisj252jun7IuNELo0cmbz7xgQ0"
                            />
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between">
                                <span className="font-bold text-on-surface">Café Especial 500g</span>
                                <span className="text-label-md text-on-surface-variant">$30.500</span>
                            </div>
                            <p className="text-xs text-on-surface-variant mt-1">Snapshot: $30.500 c/u</p>
                        </div>
                    </div>
                </div>
                <div className="mb-8 px-2">
                    <h4 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-6">
                        Línea de tiempo
                    </h4>
                    <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-outline-variant/30">
                        <div className="relative">
                            <div className="absolute -left-[28px] top-1 w-[18px] h-[18px] rounded-full bg-primary-container flex items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-black"></span>
                            </div>
                            <p className="text-sm font-bold text-on-surface">Pedido Recibido</p>
                            <p className="text-label-sm text-on-surface-variant">Hoy, 10:45 AM</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[28px] top-1 w-[18px] h-[18px] rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center"></div>
                            <p className="text-sm font-medium text-on-surface-variant">En Preparación</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[28px] top-1 w-[18px] h-[18px] rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center"></div>
                            <p className="text-sm font-medium text-on-surface-variant">Despachado</p>
                        </div>
                    </div>
                </div>
                <div className="mt-auto pt-6 border-t border-outline-variant/20">
                    <div className="flex justify-between items-end mb-6">
                        <span className="text-on-surface-variant font-bold text-sm uppercase">Total Pedido</span>
                        <span className="text-display-md font-black text-primary-container">$45.500</span>
                    </div>
                    <button
                        className="w-full bg-primary-container text-black font-black py-4 rounded-xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-all"
                        type="button"
                    >
                        ACEPTAR Y PREPARAR <span className="material-symbols-outlined">restaurant</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
