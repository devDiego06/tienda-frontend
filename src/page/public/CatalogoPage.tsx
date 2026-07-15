import { useEffect, useState } from "react";

import { productsApi } from "../../api/productos/products.api";

import ProductCart from "../../components/products/ProductCart";
import ProductsViews from "../../components/products/ProductsViews";
import SideNav from "../../components/products/SideNav";
import type { Product } from "../../types";




export default function CatalogoPage() {

    const [products, setProducts] = useState<Product[]>([]);
    const [category, setCategory] = useState<string>('all');
    const STORE_ID = import.meta.env.VITE_STORE_ID;

    useEffect(() => {
    
      productsApi.getByStore(STORE_ID).then(data => setProducts(data))
     
    }, [])
    

    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);

    const filterProductsByCategory = (e: React.ChangeEvent<HTMLButtonElement>) => {
        setCategory(e.currentTarget.value);
    }
    console.log(category);
    
   
    
    
    


    return (
        <div>
            {/* <!-- 1. SideNav (Categories) --> */}
            <SideNav selectedCategory={category} onSelectedCategory={setCategory} />
            {/* <!-- Main Content Area --> */}
            <ProductsViews products={filteredProducts} />
            {/* <!-- 4. Quick-View Shopping Cart (Right Panel) --> */}
           <ProductCart />
        </div>
    )
}
