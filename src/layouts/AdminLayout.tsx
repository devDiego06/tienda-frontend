import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ProductModal } from '../components/admin/ProductModal';
import Sidebar from '../components/ui/SideNavBar';

export default function AdminLayout() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const location = useLocation();
    const isDashboard = location.pathname === '/admin/dashboard';
    const isProducts = location.pathname === '/admin/products';

    return (
        <div className="min-h-screen">

            <Sidebar onNewProduct={() => setIsModalOpen(true)} />

            <main className="ml-5 p-6">
                <Outlet />
            </main>

            {
                isProducts && (
                    <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                )
            }

            {isDashboard && (
                <button
                    className="fixed bottom-24 md:bottom-8 right-8 w-14 h-14 bg-primary-container text-on-primary-fixed rounded-full shadow-xl shadow-primary-container/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50"
                    type="button"
                >
                    <span className="material-symbols-outlined font-bold">add</span>
                </button>
            )}

            <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface/80 backdrop-blur-md border-t border-outline-variant/10 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] rounded-t-xl">
                <Link
                    to="/admin/dashboard"
                    className={`flex flex-col items-center justify-center ${location.pathname === '/admin/dashboard' ? 'text-primary-container scale-110' : 'text-on-surface-variant opacity-70'}`}
                >
                    <span className="material-symbols-outlined">home</span>
                    <span className="text-caption font-medium">Inicio</span>
                </Link>
                <Link
                    to="/admin/products"
                    className={`flex flex-col items-center justify-center ${location.pathname === '/admin/products' ? 'text-primary-container scale-110' : 'text-on-surface-variant opacity-70'}`}
                >
                    <span className="material-symbols-outlined">inventory_2</span>
                    <span className="text-caption font-medium">Prod.</span>
                </Link>

            </nav>
        </div>
    );
}
