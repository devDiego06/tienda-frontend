import { Toggle } from '../ui/Toggle';

interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ProductModal({ isOpen, onClose }: ProductModalProps) {
    if (!isOpen) return null;

      const categorias = products.map(product => product.category).filter((value, index, self) => self.indexOf(value) === index)

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="modal-overlay absolute inset-0" onClick={onClose} />
            <div className="glass-card w-full max-w-2xl rounded-xl relative z-10 overflow-hidden shadow-2xl animate-in">
                <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
                    <h3 className="text-headline-lg font-bold text-primary-container">Nuevo Producto</h3>
                    <button
                        className="text-on-surface-variant hover:text-white transition-colors"
                        onClick={onClose}
                        type="button"
                    >
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
                <form
                    className="p-margin space-y-6 max-h-[819px] overflow-y-auto custom-scrollbar"
                    onSubmit={(e) => {
                        e.preventDefault();
                        onClose();
                    }}
                >
                    <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-outline-variant/30 rounded-xl hover:border-primary-fixed/50 transition-colors group cursor-pointer">
                        <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2 group-hover:text-primary-fixed transition-colors">
                            add_photo_alternate
                        </span>
                        <p className="text-body-md font-medium text-on-surface">Subir Imagen del Producto</p>
                        <p className="text-label-sm text-on-surface-variant">JPG, PNG o WEBP (Máx. 2MB)</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-label-md font-bold text-on-surface">Nombre del Producto</label>
                            <input
                                className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-fixed outline-none transition-all text-on-surface"
                                placeholder="Ej. Arroz Diana"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-label-md font-bold text-on-surface">Categoría</label>
                            <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-fixed outline-none transition-all appearance-none text-on-surface">
                                <option>Seleccionar categoría</option>
                                <option>Granos</option>
                                <option>Lácteos</option>
                                <option>Aseo</option>
                                <option>Bebidas</option>
                                <option>Panadería</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-label-md font-bold text-on-surface">Descripción</label>
                        <textarea
                            className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary-fixed outline-none transition-all text-on-surface"
                            placeholder="Detalles del producto, peso, marca..."
                            rows={3}
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                        <div className="space-y-2">
                            <label className="text-label-md font-bold text-on-surface">Precio (COP)</label>
                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">$</span>
                                <input
                                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl pl-8 pr-4 py-3 focus:ring-2 focus:ring-primary-fixed outline-none transition-all text-on-surface"
                                    placeholder="0"
                                    type="number"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between bg-surface-container-low p-4 rounded-xl border border-outline-variant/10">
                            <span className="text-label-md font-bold text-on-surface">Disponible inmediatamente</span>
                            <Toggle defaultChecked />
                        </div>
                    </div>
                    <div className="pt-6 border-t border-outline-variant/20 flex gap-4">
                        <button
                            className="flex-1 px-6 py-3 border border-outline-variant/30 text-on-surface font-bold rounded-xl hover:bg-surface-variant/20 transition-all"
                            onClick={onClose}
                            type="button"
                        >
                            Cancelar
                        </button>
                        <button
                            className="flex-1 px-6 py-3 bg-primary-container text-on-primary-container font-bold rounded-xl hover:opacity-90 transition-all"
                            type="submit"
                        >
                            Guardar Producto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
