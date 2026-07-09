

export default function SideNav() {
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
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl active-nav-bg text-primary-container font-bold border-l-2 border-primary-container" href="#">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>grid_view</span>
                        <span className="text-label-md">Todos</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high/50 transition-all" href="#">
                        <span className="material-symbols-outlined">nutrition</span>
                        <span className="text-label-md">Frutas</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high/50 transition-all" href="#">
                        <span className="material-symbols-outlined">eco</span>
                        <span className="text-label-md">Verduras</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high/50 transition-all" href="#">
                        <span className="material-symbols-outlined">egg</span>
                        <span className="text-label-md">Lácteos</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high/50 transition-all" href="#">
                        <span className="material-symbols-outlined">bakery_dining</span>
                        <span className="text-label-md">Panadería</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high/50 transition-all" href="#">
                        <span className="material-symbols-outlined">restaurant</span>
                        <span className="text-label-md">Carnes</span>
                    </a>
                    <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-container-high/50 transition-all" href="#">
                        <span className="material-symbols-outlined">local_bar</span>
                        <span className="text-label-md">Bebidas</span>
                    </a>
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
                </div>
            </aside>
  )
}
