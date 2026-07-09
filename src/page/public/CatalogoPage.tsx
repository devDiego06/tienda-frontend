import ProductCart from "../../components/products/ProductCart";
import ProductsViews from "../../components/products/ProductsViews";
import SideNav from "../../components/products/SideNav";


export default function CatalogoPage() {


    return (
        <div className="flex gap-gutter">
            {/* <!-- 1. SideNav (Categories) --> */}
            <SideNav />
            {/* <!-- Main Content Area --> */}
            <ProductsViews />
            {/* <!-- 4. Quick-View Shopping Cart (Right Panel) --> */}
           <ProductCart />
        </div>
    )
}
