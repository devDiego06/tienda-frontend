import { useMemo, useState } from "react";
import {  type Product } from "../../types";
import { BANNER_CONFIG } from "../../types";
import ProductCard from "./ProductCard";






interface PropsProductsViews {
    products: Product[],
    // filterProductsByCategory: () => void;
    category: string
    ordenarProductos: (criterio: string) => void;
}


function ProductBanner({ banner }: { banner: Product['banner'] }) {
    if (!banner) return null;
    const config = BANNER_CONFIG[banner.type];
    const positionClass = config.position === 'right' ? 'right-3' : 'left-3';
    return (
      <div
        className={`absolute top-3 ${positionClass} px-3 py-1 rounded-full text-caption font-black uppercase tracking-widest z-10 ${config.className}`}
      >
        {config.label}
      </div>
    );
  }

export default function ProductsViews({ products, category, ordenarProductos }: PropsProductsViews) {

      const [query, setQuery] = useState('');
      

    const filterCategoryName = products.filter(product => product.category === category).map(product => product.category)[0] || 'Todos los productos';

//filtrar los productos por nombre o descripción según la query de búsqueda

        const filteredProducts = useMemo(() => {
            const normalizedQuery = query.trim().toLowerCase();
    
            if (!normalizedQuery) {
                return products;
            }
    
            return products.filter((product) => {
                return [product.name, product.description]
                    .filter(Boolean)
                    .some((value) => value.toLowerCase().includes(normalizedQuery));
            });
        }, [products, query]);




    console.log(filteredProducts);
    
  return (
    <main className="ml-64 mr-80 min-h-screen flex flex-col flex-1 p-margin">
                {/* <!-- 2. Search & Sort Bar --> */}
                <header className="flex flex-col md:flex-row items-center gap-gutter mb-12 sticky top-0 z-40 bg-background/80 backdrop-blur-md p-6 rounded-3xl ">
                    <div className="relative flex-1 group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors">search</span>
                        <input className="w-full bg-surface-container-low border-outline-variant/10 rounded-2xl py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary-container outline-none focus:border-transparent transition-all placeholder:text-on-surface-variant/50" 
                        placeholder="¿Qué estás buscando hoy?" 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        type="text" />
                    </div>
                    <div className="flex items-center gap-3 bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant/10">
                        <span className="text-label-md font-bold text-on-surface-variant px-3 uppercase tracking-tighter">Ordenar:</span>
                        <button className="bg-surface-container-high text-primary-container px-4 py-2 rounded-xl text-label-md font-bold transition-all shadow-lg">Popular</button>
                        <button className="text-on-surface-variant px-4 py-2 rounded-xl text-label-md font-bold hover:bg-surface-container-high transition-all">Precio</button>
                        <button className="text-on-surface-variant px-4 py-2 rounded-xl text-label-md font-bold hover:bg-surface-container-high transition-all">Nuevos</button>
                    </div>
                </header>
                {/* <!-- Product Section --> */}
                <section className="mb-12">
                    <div className="flex items-end justify-between mb-8">
                        <div>
                            <h2 className="text-display-md text-primary tracking-tighter">{filterCategoryName}</h2>
                            <p className="text-on-surface-variant mt-2 text-body-md max-w-md">Productos frescos seleccionados diariamente de granjas locales.</p>
                        </div>
                        <div className="flex gap-1">
                             <select onChange={(e) => ordenarProductos(e.target.value)} className="bg-surface-container-low border-outline-variant/10 rounded-2xl py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary-container outline-none focus:border-transparent transition-all placeholder:text-on-surface-variant/50">
                        <option value="defecto">Defecto</option>
                        <option value="precio-asc">Precio: Menor a Mayor</option>
                        <option value="precio-desc">Precio: Mayor a Menor</option>
                        <option value="nombre-asc">Nombre: A-Z</option>
                        <option value="nombre-desc">Nombre: Z-A</option>
                    </select>
                        </div>
                    </div>
                    {/* <!-- 3. Enhanced Product Cards (Bento Grid Style) --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Product 1 --> */}
                        <ProductCard products={filteredProducts} />

                    </div>


                </section>
            </main>
  )
}
