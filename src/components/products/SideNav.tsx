import type { SetStateAction } from "react"
import { useAuthStore } from "../../store/Auth.store"
import { useNavigate } from "react-router-dom"

interface PropsSidenav {
    selectedCategory: string
    onSelectedCategory: React.Dispatch<SetStateAction<string>>
}

const isSelectedCategory = (category: string, selectedCategory: string) => {
    if(category === selectedCategory) {
        return 'active-nav-bg text-primary-container font-bold border-l-2 border-primary-container'
    }
}



export default function SideNav({ selectedCategory, onSelectedCategory }: PropsSidenav) {



     const { clearAuth } = useAuthStore()
    const navigate = useNavigate();

    const handleLogout = () => {
        clearAuth();
        navigate('/login', { replace: true });
    }


  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-surface-container-lowest border-r border-outline-variant/10 z-50 flex flex-col p-6">
                <div className="mb-10">
                    <h1 className="text-headline-lg font-black text-primary-container tracking-tight">Tienda Barrio</h1>
                    <p className="text-caption uppercase tracking-widest text-on-surface-variant mt-1 font-bold">Catálogo Premium</p>
                </div>
                <nav className="flex-1 space-y-2 custom-scrollbar overflow-y-auto pr-2">
                    <div className="mb-4">
                        <span className="text-label-sm font-bold text-on-surface-variant uppercase tracking-wider pl-4">Categorías</span>
                    </div>
                    <button value="all" onClick={() => onSelectedCategory('all')}  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${isSelectedCategory('all', selectedCategory) ? 'active-nav-bg text-primary-container font-bold border-l-2 border-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high/50'} transition-all`}>
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                        <span className="text-label-md">Todos</span>
                    </button>
                    <button value="Frutas y Verduras" onClick={() => onSelectedCategory('Frutas y Verduras')}  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${isSelectedCategory('Frutas y Verduras', selectedCategory) ? 'active-nav-bg text-primary-container font-bold border-l-2 border-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high/50'} transition-all`}>
                        <span className="material-symbols-outlined">nutrition</span>
                        <span className="text-label-md">Frutas y Verduras</span>
                    </button>
                      <button value="Granos" onClick={() => onSelectedCategory('Granos')}  className={`flex items-center gap-3 px-4 py-3 rounded-xl ${isSelectedCategory('Granos', selectedCategory) ? 'active-nav-bg text-primary-container font-bold border-l-2 border-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high/50'} transition-all`}>
                        <span className="material-symbols-outlined">grain</span>
                        <span className="text-label-md">Granos</span>
                    </button>
                    <button value="Lácteos" onClick={() => onSelectedCategory('Lácteos')} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${isSelectedCategory('Lácteos', selectedCategory) ? 'active-nav-bg text-primary-container font-bold border-l-2 border-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high/50'} transition-all`}>
                        <span className="material-symbols-outlined">egg</span>
                        <span className="text-label-md">Lácteos</span>
                    </button>
                    <button value="Panadería" onClick={() => onSelectedCategory('Panadería')} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${isSelectedCategory('Panadería', selectedCategory) ? 'active-nav-bg text-primary-container font-bold border-l-2 border-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high/50'} transition-all`}>
                        <span className="material-symbols-outlined">bakery_dining</span>
                        <span className="text-label-md">Panadería</span>
                    </button>
                    <button value="Carnes" onClick={() => onSelectedCategory('Carnes')} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${isSelectedCategory('Carnes', selectedCategory) ? 'active-nav-bg text-primary-container font-bold border-l-2 border-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high/50'} transition-all`}>
                        <span className="material-symbols-outlined">restaurant</span>
                        <span className="text-label-md">Carnes</span>
                    </button>
                    <button value="Bebidas" onClick={() => onSelectedCategory('Bebidas')} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${isSelectedCategory('Bebidas', selectedCategory) ? 'active-nav-bg text-primary-container font-bold border-l-2 border-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high/50'} transition-all`}>
                        <span className="material-symbols-outlined">local_bar</span>
                        <span className="text-label-md">Bebidas</span>
                    </button>
                    <button value="Aseo" onClick={() => onSelectedCategory('Aseo')} className={`flex items-center gap-3 px-4 py-3 rounded-xl ${isSelectedCategory('Aseo', selectedCategory) ? 'active-nav-bg text-primary-container font-bold border-l-2 border-primary-container' : 'text-on-surface-variant hover:bg-surface-container-high/50'} transition-all`}>
                        <span className="material-symbols-outlined">cleaning_services</span>
                        <span className="text-label-md">Aseo</span>
                    </button>
                </nav>
                <div className="mt-auto pt-6 border-t border-outline-variant/10">
                    <div className="flex items-center gap-3 p-2 hover:bg-surface-container-high/50 rounded-xl cursor-pointer transition-all">
                        <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden">
                            <img alt="User" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQpqn54c7XXrc0SL4iq5ooJqZfVmUOynSSmjreuBwHIIEpGjMMNGU5bTZiAyFyq6otQ5Qi1xERbQskiqIR5KtYUIp8zguOtztpgy1YKn6UdX5wj0mQKMxdTZHTxNOJg1cj8WAzxBbg-6ZFGCAMk0mSSSqKDmwbodNbuaG_QIVAomhzE5z_rykLUV6bl4Ky-iIKF_owLQq30f8lgNY89Ni3ccjqGT_mcdM4yB9ru-sxkYX0assCcd6bneNELbRZP6FikDzNC7F0Gf8" />
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <p className="text-on-surface font-bold truncate">Carlos G.</p>
                            <p className="text-label-sm text-on-surface-variant truncate">Premium User</p>
                        </div>
                        <span className="material-symbols-outlined text-on-surface-variant">settings</span>
                    </div>
                    <a
                    className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-error transition-colors rounded-lg"
                    onClick={handleLogout}
                >
                    <span className="material-symbols-outlined">logout</span>
                    <span onClick={handleLogout} className="text-label-md">Salir</span>
                </a>
                </div>
            </aside>
  )
}
