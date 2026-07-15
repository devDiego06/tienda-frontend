
import { Link, useLocation, useNavigate } from 'react-router-dom';
import type { NavItem } from '../../types';
import { useAuthStore } from '../../store/Auth.store';


const navItems: NavItem[] = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: 'dashboard' },
    { path: '/admin/pedidos', label: 'Pedidos', icon: 'shopping_cart' },
    { path: '/admin/products', label: 'Productos', icon: 'inventory_2' },
    { path: '/tienda', label: 'Tienda', icon: 'storefront' },
    { path: '/clientes', label: 'Clientes', icon: 'group' },
    { path: '/pagos', label: 'Pagos', icon: 'payments' },
];

interface SidebarProps {
    onNewProduct?: () => void;
}

export default function Sidebar({ onNewProduct }: SidebarProps) {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;
    const { clearAuth } = useAuthStore()
    const navigate = useNavigate();

    const handleLogout = () => {
        clearAuth();
        navigate('/login', { replace: true });
    }

    return (
        <aside className="bg-surface-container-lowest/80 backdrop-blur-xl w-64 fixed left-4 top-4 bottom-4 overflow-y-auto border border-outline-variant/20 flex flex-col gap-margin p-margin z-50 rounded-xl shadow-xl transition-all">
            <div className="mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
                        <span
                            className="material-symbols-outlined text-on-primary-fixed"
                            style={{ fontVariationSettings: '"FILL" 1' }}
                        >
                            storefront
                        </span>
                    </div>
                    <div>
                        <h1 className="text-body-md font-bold text-primary-container tracking-tight">
                            Tienda
                        </h1>
                    </div>
                </div>
            </div>

            <nav className="flex flex-col gap-2 flex-1">
                {navItems.map((item) => (
                    <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${isActive(item.path)
                            ? 'text-on-primary-fixed bg-primary-container font-bold scale-95'
                            : 'text-on-surface-variant hover:text-primary-container hover:bg-surface-container-high/50'
                            }`}
                    >
                        <span
                            className="material-symbols-outlined"
                            style={isActive(item.path) ? { fontVariationSettings: '"FILL" 1' } : {}}
                        >
                            {item.icon}
                        </span>
                        <span className="text-label-md">{item.label}</span>
                    </Link>
                ))}
            </nav>

            {location.pathname === '/admin/products' && onNewProduct && (
                <div className="mt-4 mb-4">
                    <button
                        onClick={onNewProduct}
                        className="w-full flex items-center justify-center gap-2 bg-primary-container text-on-primary-container py-3 rounded-xl font-bold hover:opacity-90 transition-opacity"
                    >
                        <span className="material-symbols-outlined">add</span>
                        Nuevo Producto
                    </button>
                </div>
            )}

            <div className="mt-auto border-t border-outline-variant/10 pt-4 flex flex-col gap-2">
                <button
                    type="button"
                    className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-error transition-colors rounded-lg text-left"
                    onClick={handleLogout}
                >
                    <span className="material-symbols-outlined">logout</span>
                    <span className="text-label-md">Salir</span>
                </button>
            </div>
        </aside>
    );


};