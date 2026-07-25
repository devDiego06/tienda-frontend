import { Toggle } from '../ui/Toggle';

interface EditProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    categorys: string[];
}

export default function EditProductModal({ isOpen, onClose, categorys }: EditProductModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" id="edit-product-modal">
            <div className="modal-overlay absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
            <div className="glass-card w-full max-w-2xl rounded-xl relative z-10 overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300" style={{ background: '#141414' }}>
                <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
                    <h3 className="text-headline-lg text-primary-fixed">Editar Producto</h3>
                    <button
                        className="text-on-surface-variant hover:text-white transition-colors"
                        onClick={onClose}
                        type="button"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <form
                    className="p-margin space-y-6"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onClose();
                    }}
                >
                    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-outline-variant/30 rounded-xl hover:border-primary-fixed/50 transition-colors group cursor-pointer">
                        <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2 group-hover:text-primary-fixed transition-colors">add_photo_alternate</span>
                        <p className="text-body-md font-medium text-on-surface">Cambiar Imagen del Producto</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-label-md font-bold text-on-surface">Nombre del Producto</label>
                            <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-fixed outline-none transition-all" type="text" defaultValue="Arroz Premium 1kg" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-label-md font-bold text-on-surface">Categoría</label>
                             <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-fixed outline-none transition-all appearance-none text-on-surface">
                            {
                                categorys.map((cat, index) => (
                                 <option key={index}>{cat}</option>     
                                ))
                                
                            }
                             </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                        <div className="space-y-2">
                            <label className="text-label-md font-bold text-on-surface">Precio (COP)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">$</span>
                                <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-primary-fixed outline-none transition-all" type="number" defaultValue="4500" />
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                            <span className="text-label-md font-bold text-on-surface">Estado</span>
                            <Toggle defaultChecked />
                        </div>
                    </div>
                    <div className="pt-6 border-t border-outline-variant/20 flex gap-4">
                        <button className="flex-1 px-6 py-3 border border-outline-variant/30 text-on-surface font-bold rounded-xl hover:bg-surface-variant/20 transition-all" onClick={onClose} type="button">Cancelar</button>
                        <button className="flex-1 px-6 py-3 neon-lime-btn font-bold rounded-xl primary-glow hover:opacity-90 transition-all" type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
