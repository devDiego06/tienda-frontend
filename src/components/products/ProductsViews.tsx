import {  type Product } from "../../types";
import { BANNER_CONFIG } from "../../types";
import ProductCard from "./ProductCard";




interface PropsProductsViews {
    products: Product[],
    // filterProductsByCategory: () => void;
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

export default function ProductsViews({ products  } : PropsProductsViews) {
    console.log(products);
    
  return (
    <main className="ml-64 mr-80 min-h-screen flex flex-col flex-1 p-margin">
                {/* <!-- 2. Search & Sort Bar --> */}
                <header className="flex flex-col md:flex-row items-center gap-gutter mb-12 sticky top-0 z-40 bg-background/80 backdrop-blur-md p-6 rounded-3xl ">
                    <div className="relative flex-1 group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors">search</span>
                        <input className="w-full bg-surface-container-low border-outline-variant/10 rounded-2xl py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary-container outline-none focus:border-transparent transition-all placeholder:text-on-surface-variant/50" placeholder="¿Qué estás buscando hoy?" type="text" />
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
                            <h2 className="text-display-md text-primary tracking-tighter">Catálogo Completo</h2>
                            <p className="text-on-surface-variant mt-2 text-body-md max-w-md">Productos frescos seleccionados diariamente de granjas locales.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/10 hover:bg-surface-container transition-all">
                                <span className="material-symbols-outlined">filter_list</span>
                            </button>
                        </div>
                    </div>
                    {/* <!-- 3. Enhanced Product Cards (Bento Grid Style) --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Product 1 --> */}
                        <ProductCard products={products} />

                    </div>
                </section>
            </main>
  )
}
