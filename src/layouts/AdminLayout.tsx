import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ProductModal } from '../components/admin/ProductModal';
import AdminBottomNav from '../components/layout/AdminBottomNav';
import Sidebar from '../components/ui/SideNavBar';

export default function AdminLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();
    const isProducts = location.pathname === '/admin/products';

    return (
        <div className="min-h-screen">

            <Sidebar onNewProduct={() => setIsModalOpen(true)} />

            <main className="ml-5 p-6">
                <Outlet />
            </main>

            {isProducts && (
                <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            )}

            <AdminBottomNav />
        </div>
    );
}
