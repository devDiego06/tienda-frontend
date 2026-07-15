import { useEffect, useMemo, useState } from 'react';
import { productsApi } from '../../api/productos/products.api';
import { Toggle } from '../../components/ui/Toggle';
import EditProductModal from '../../components/products/EditProductModal';
import type { Product } from '../../types';

const moneyFormatter = new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
});

const STORE_ID = import.meta.env.VITE_STORE_ID;

export default function ProductsPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [products, setProducts] = useState<Product[]>([]);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function loadProducts() {
            try {
                setLoading(true);
                setError(null);
                const data = await productsApi.getByStore(STORE_ID);

                if (!cancelled) {
                    setProducts(data);
                }
            } catch (requestError: any) {
                if (!cancelled) {
                    setError(requestError?.message ?? 'No se pudieron cargar los productos');
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadProducts();

        return () => {
            cancelled = true;
        };
    }, []);

    const filteredProducts = useMemo(() => {
        const normalizedQuery = query.trim().toLowerCase();

        if (!normalizedQuery) {
            return products;
        }

        return products.filter((product) => {
            return [product.name, product.category, product.description]
                .filter(Boolean)
                .some((value) => value.toLowerCase().includes(normalizedQuery));
        });
    }, [products, query]);

    const totalProducts = products.length;
    const availableProducts = products.filter((product) => product.available).length;
    const inventoryValue = products.reduce((total, product) => total + product.price, 0);


    return (
        <div className="ml-0 md:ml-72 flex-1 p-4 md:p-margin min-h-screen custom-scrollbar overflow-y-auto pb-24 md:pb-4">
            <header className="flex flex-col xl:flex-row justify-between items-start xl:items-center mb-10 gap-4">
                <div>
                    <h2 className="text-display-sm font-bold text-on-surface">Gestión de Productos</h2>
                    <p className="text-body-md text-on-surface-variant">Administra el inventario de tu tienda en tiempo real.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full xl:w-auto">
                    <div className="relative group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-fixed transition-colors">
                            search
                        </span>
                        <input
                            className="bg-surface-container-low border border-outline-variant/20 rounded-xl pl-12 pr-4 py-3 w-full sm:w-80 focus:ring-2 focus:ring-primary-fixed focus:border-transparent outline-none transition-all text-on-surface"
                            placeholder="Buscar productos..."
                            type="text"
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </div>
                    <div className="flex items-center gap-3 bg-surface-container-high p-2 rounded-full border border-outline-variant/10">
                        <img
                            alt="Admin Avatar"
                            className="w-10 h-10 rounded-full"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZezLeSG_6owtw084TFt0ffUheqKPsfSAy8huLBMFG8oZYpiqGJIKicHNzoybWmsu1GFyKveA0kbRH52ELMXlSOwTLBjY_8lh1z6SM9_0MaB909XGstTpAA2xLfZJfGCjW4NXDVktvArXMIV8JwIkle-rNNfHHLxKmAdtb6XznRMcEqE4eDKVoYINLnc-eK_HKTVWjXF86izs-Qkvhf41BLNZ-3Gj99VqdqMnQTRL993p2YnqYv1N394pbuEEdWy9pTS9NOHhQDhg"
                        />
                        <div className="pr-3 hidden xl:block">
                            <p className="text-label-md font-bold text-on-surface leading-tight">Admin User</p>
                            <p className="text-label-sm text-on-surface-variant">Propietario</p>
                        </div>
                    </div>
                </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter mb-10">
                <div className="glass-card p-6 rounded-xl">
                    <p className="text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">Total Productos</p>
                    <h3 className="text-display-sm font-bold text-primary-container">{totalProducts}</h3>
                </div>
                <div className="glass-card p-6 rounded-xl">
                    <p className="text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">Disponibles</p>
                    <h3 className="text-display-sm font-bold text-error">{availableProducts}</h3>
                </div>
                <div className="glass-card p-6 rounded-xl">
                    <p className="text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">Filtrados</p>
                    <h3 className="text-headline-lg font-bold text-on-surface">{filteredProducts.length}</h3>
                </div>
                <div className="glass-card p-6 rounded-xl border-l-4 border-l-primary-container">
                    <p className="text-label-sm text-on-surface-variant mb-2 uppercase tracking-wider">Valor Inventario</p>
                    <h3 className="text-headline-lg font-bold text-on-surface">{moneyFormatter.format(inventoryValue)}</h3>
                </div>
            </section>

            <section className="glass-card rounded-xl overflow-hidden mb-20">
                <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
                    <h4 className="text-headline-lg font-bold">Listado de Inventario</h4>
                    <div className="flex gap-2">
                        <button className="p-2 hover:bg-surface-variant/20 rounded-lg text-on-surface-variant" type="button">
                            <span className="material-symbols-outlined">filter_list</span>
                        </button>
                        <button className="p-2 hover:bg-surface-variant/20 rounded-lg text-on-surface-variant" type="button">
                            <span className="material-symbols-outlined">download</span>
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    {loading && (
                        <div className="p-6 text-on-surface-variant">Cargando productos...</div>
                    )}

                    {error && (
                        <div className="p-6 text-error">{error}</div>
                    )}

                    <table className="w-full text-left border-collapse">
                        <thead className="bg-surface-container-high/50 text-label-sm text-on-surface-variant uppercase tracking-wider">
                            <tr>
                                <th className="px-6 py-4 font-medium">Producto</th>
                                <th className="px-6 py-4 font-medium">Categoría</th>
                                <th className="px-6 py-4 font-medium">Precio</th>
                                <th className="px-6 py-4 font-medium">Estado</th>
                                <th className="px-6 py-4 font-medium text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/10">
                            {filteredProducts.map((product) => (
                                <tr key={product.id} className="hover:bg-surface-variant/10 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-lg bg-surface-container overflow-hidden border border-outline-variant/20">
                                                <img className="w-full h-full object-cover" src={product.imageUrl} alt={product.name} />
                                            </div>
                                            <div>
                                                <p className="font-bold text-on-surface">{product.name}</p>
                                                <p className="text-caption text-on-surface-variant">ID: {product.id}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="bg-surface-variant px-3 py-1 rounded-full text-caption text-on-surface">
                                            {product.category}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-on-surface">{moneyFormatter.format(product.price)}</td>
                                    <td className="px-6 py-4">
                                        <Toggle
                                            defaultChecked={product.available}
                                            label={product.available ? 'Disponible' : 'No Disp.'}
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button
                                                className="p-2 text-on-surface-variant hover:text-primary-container hover:bg-primary-container/10 rounded-lg transition-all"
                                                type="button"
                                                onClick={() => setIsOpen(true)}
                                            >
                                                <span className="material-symbols-outlined text-sm">edit</span>
                                            </button>
                                            <button
                                                className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container/10 rounded-lg transition-all"
                                                type="button"
                                            >
                                                <span className="material-symbols-outlined text-sm">delete</span>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 bg-surface-container/30 border-t border-outline-variant/10 flex justify-between items-center">
                    <span className="text-caption text-on-surface-variant">Mostrando 1-10 de 124 productos</span>
                    <div className="flex gap-1">
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-surface-container-highest text-primary-container font-bold text-xs" type="button">
                            1
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-variant/20 text-on-surface-variant text-xs" type="button">
                            2
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-variant/20 text-on-surface-variant text-xs" type="button">
                            3
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-variant/20 text-on-surface-variant" type="button">
                            <span className="material-symbols-outlined text-sm">chevron_right</span>
                        </button>
                    </div>
                </div>
            </section>
            <EditProductModal isOpen={isOpen} onClose={() => setIsOpen(false)}  />
        </div>
    );
}
