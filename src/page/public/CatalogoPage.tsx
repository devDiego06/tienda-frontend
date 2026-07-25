import { useEffect, useMemo, useState } from "react";

import { productsApi } from "../../api/productos/products.api";

import ProductCart from "../../components/products/ProductCart";
import ProductsViews from "../../components/products/ProductsViews";
import SideNav from "../../components/products/SideNav";
import type { Product } from "../../types";




export default function CatalogoPage() {

    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<string>('all');
    const [orden, setOrden] = useState<string>('defecto');
    
    const STORE_ID = import.meta.env.VITE_STORE_ID;

    useEffect(() => {
    
      productsApi.getByStore(STORE_ID).then(data => setAllProducts(data))
     
    }, [STORE_ID]);

    const filteredProducts = useMemo(() => {
        return category === 'all'
            ? allProducts
            : allProducts.filter(product => product.category === category);
    }, [allProducts, category]);

    const displayedProducts = useMemo(() => {
        const productosOrdenados = [...filteredProducts];

        switch (orden) {
            case 'precio-asc':
                return productosOrdenados.sort((a, b) => a.price - b.price);
            case 'precio-desc':
                return productosOrdenados.sort((a, b) => b.price - a.price);
            case 'nombre-asc':
                return productosOrdenados.sort((a, b) => a.name.localeCompare(b.name));
            case 'nombre-desc':
                return productosOrdenados.sort((a, b) => b.name.localeCompare(a.name));
            case 'defecto':
            default:
                return productosOrdenados;
        }
    }, [filteredProducts, orden]);


    const ordenarProductos = (criterio: string) => {
        setOrden(criterio);
    }


    return (
        <div>
            {/* <!-- 1. SideNav (Categories) --> */}
            <SideNav selectedCategory={category} onSelectedCategory={setCategory} />
            {/* <!-- Main Content Area --> */}
            <ProductsViews ordenarProductos={ordenarProductos} category={category} products={displayedProducts} />
            {/* <!-- 4. Quick-View Shopping Cart (Right Panel) --> */}
           <ProductCart />
        </div>
    )
}
