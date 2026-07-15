import { Link, useLocation } from 'react-router-dom';

const navItems = [
    { path: '/admin/dashboard', label: 'Inicio', icon: 'home' },
    { path: '/admin/products', label: 'Prod.', icon: 'inventory_2' },
];

export default function AdminBottomNav() {
    const location = useLocation();

    return (
        <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-3 md:hidden bg-surface/80 backdrop-blur-md border-t border-outline-variant/10 shadow-[0_-4px_10px_rgba(0,0,0,0.1)] rounded-t-xl">
            {navItems.map((item) => {
                const isActive = location.pathname === item.path;

                return (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex flex-col items-center justify-center ${isActive ? 'text-primary-container scale-110' : 'text-on-surface-variant opacity-70'}`}
                    >
                        <span className="material-symbols-outlined">{item.icon}</span>
                        <span className="text-caption font-medium">{item.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}