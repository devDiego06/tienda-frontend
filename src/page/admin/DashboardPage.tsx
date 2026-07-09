import React from 'react';

export default function DashboardPage() {
    const orders = [
        {
            id: '#TB-9823',
            client: 'Marco Arrieta',
            initials: 'MA',
            status: 'Preparando',
            statusColor: 'tertiary',
            timeline: 2,
            total: '$42.000',
        },
        {
            id: '#TB-9824',
            client: 'Lucia Castro',
            initials: 'LC',
            status: 'En Ruta',
            statusColor: 'amber',
            timeline: 3,
            total: '$128.500',
            pulse: true,
        },
        {
            id: '#TB-9821',
            client: 'Juan Perez',
            initials: 'JP',
            status: 'Entregado',
            statusColor: 'green',
            timeline: 5,
            total: '$15.200',
        },
    ];

    const salesData = [40, 65, 50, 85, 100, 70, 45];

    const dayName = Date().toString().split(' ')[0];
    const dayNumber = Date().toString().split(' ')[1];
    const monthName = Date().toString().split(' ')[2];
    const year = Date().toString().split(' ')[3];

    return (
        <div className="ml-0 md:ml-72 p-4 md:p-margin min-h-screen pb-24 md:pb-4">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 relative">
                <div>
                    <h2 className="display-bold text-display-sm leading-tight text-primary">Dashboard</h2>
                    <p className="text-label-md text-on-surface-variant mt-1">
                        {dayName}, {dayNumber} {monthName} {year}
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex bg-surface-container-high rounded-full p-1 border border-outline-variant/20">
                        <button className="px-4 py-1.5 rounded-full bg-primary-container text-on-primary-fixed font-bold text-label-md">
                            Hoy
                        </button>
                        <button className="px-4 py-1.5 rounded-full text-on-surface-variant font-medium text-label-md hover:text-primary transition-colors">
                            Semana
                        </button>
                        <button className="px-4 py-1.5 rounded-full text-on-surface-variant font-medium text-label-md hover:text-primary transition-colors">
                            Mes
                        </button>
                    </div>
                    <div className="relative group">
                        <div className="pulse-dot absolute -top-1 -right-1"></div>
                        <button className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:border-primary-container/30 transition-all">
                            <span className="material-symbols-outlined text-primary">notifications</span>
                        </button>
                    </div>
                </div>
            </header>

            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter mb-gutter">
                <div className="bg-primary-container p-card-padding rounded-xl flex flex-col justify-between min-h-[160px] neon-glow-lime backdrop-blur-xl shadow-xl">
                    <div className="flex justify-between items-start">
                        <span className="text-label-md text-on-primary-fixed opacity-80 uppercase tracking-widest">
                            Ventas hoy
                        </span>
                        <span className="material-symbols-outlined text-on-primary-fixed">trending_up</span>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-display-md font-bold text-on-primary-fixed">$347K</h3>
                        <div className="flex items-center gap-1 mt-1 text-on-primary-fixed font-bold">
                            <span className="material-symbols-outlined text-sm">arrow_upward</span>
                            <span className="text-xs">12% vs ayer</span>
                        </div>
                    </div>
                </div>
                <div className="glass-card p-card-padding rounded-xl flex flex-col justify-between min-h-[160px]">
                    <div className="flex justify-between items-start">
                        <span className="text-label-md text-on-surface-variant uppercase tracking-widest">
                            Pedidos activos
                        </span>
                        <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500">
                            <span className="material-symbols-outlined text-[18px]">timer</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-display-md font-bold text-amber-500">24</h3>
                        <p className="text-xs text-on-surface-variant mt-1">4 próximos a vencer</p>
                    </div>
                </div>
                <div className="glass-card p-card-padding rounded-xl flex flex-col justify-between min-h-[160px]">
                    <div className="flex justify-between items-start">
                        <span className="text-label-md text-on-surface-variant uppercase tracking-widest">
                            Entregados hoy
                        </span>
                        <div className="w-8 h-8 rounded-full bg-primary-container/10 flex items-center justify-center text-primary-container">
                            <span className="material-symbols-outlined text-[18px]">check_circle</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-display-md font-bold text-primary-container">89</h3>
                        <p className="text-xs text-on-surface-variant mt-1">Eficiencia del 98.2%</p>
                    </div>
                </div>
                <div className="glass-card p-card-padding rounded-xl flex flex-col justify-between min-h-[160px]">
                    <div className="flex justify-between items-start">
                        <span className="text-label-md text-on-surface-variant uppercase tracking-widest">
                            Ticket promedio
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-[18px]">payments</span>
                        </div>
                    </div>
                    <div className="mt-4">
                        <h3 className="text-display-md font-bold text-white">$38K</h3>
                        <p className="text-xs text-on-surface-variant mt-1">+5% este periodo</p>
                    </div>
                </div>
            </section>
            {/* CHART DE VENTAS */}
            <section className="grid grid-cols-1 lg:grid-cols-10 gap-gutter mb-gutter">
                <div className="lg:col-span-6 glass-card rounded-xl p-card-padding relative overflow-hidden">
                    <div className="flex justify-between items-center mb-8">
                        <h4 className="text-headline-lg text-primary">Tendencia de ventas</h4>
                        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary">
                            more_horiz
                        </span>
                    </div>

                    <div className="flex items-end justify-between h-64 gap-3">
                        {salesData.map((h, i) => (
                            <div
                                key={i}
                                className={`flex-1 rounded-t-lg transition-all cursor-pointer relative group ${i === 4
                                    ? 'bg-primary-container chart-stripe'
                                    : 'bg-surface-container-high hover:bg-primary-container/20'
                                    }`}
                                style={{ height: `${h}%` }}
                            >
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-surface-container-highest px-2 py-1 rounded text-caption opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    ${h}k
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-on-surface-variant text-label-sm">
                        <span>Lun</span>
                        <span>Mar</span>
                        <span>Mie</span>
                        <span>Jue</span>
                        <span>Vie</span>
                        <span>Sab</span>
                        <span>Dom</span>
                    </div>
                </div>
                {/* CHART CIRCLE DE ENTREGAS */}
                <div className="lg:col-span-4 glass-card rounded-xl p-card-padding flex flex-col">
                    <h4 className="text-headline-lg text-primary mb-8">Tipo de entrega</h4>
                    <div className="flex-1 flex items-center justify-center relative">
                        <svg className="w-48 h-48 transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                fill="transparent"
                                r="40"
                                stroke="#2a2a2a"
                                strokeWidth="12"
                            ></circle>
                            <circle
                                cx="50"
                                cy="50"
                                fill="transparent"
                                r="40"
                                stroke="#c3f400"
                                strokeDasharray="251.2"
                                strokeDashoffset="105.5"
                                strokeLinecap="round"
                                strokeWidth="12"
                            ></circle>
                            <circle
                                cx="50"
                                cy="50"
                                fill="transparent"
                                r="40"
                                stroke="#00f0ff"
                                strokeDasharray="251.2"
                                strokeDashoffset="211"
                                strokeLinecap="round"
                                strokeWidth="12"
                            ></circle>
                        </svg>
                        <div className="absolute flex flex-col items-center">
                            <span className="text-stat-lg font-bold display-bold">113</span>
                            <span className="text-caption text-on-surface-variant uppercase">Total</span>
                        </div>
                    </div>
                    <div className="mt-8 space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-primary-container"></div>
                                <span className="text-label-md text-on-surface">Domicilio</span>
                            </div>
                            <span className="font-bold text-primary-container">58%</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-tertiary-fixed-dim"></div>
                                <span className="text-label-md text-on-surface">Recogida</span>
                            </div>
                            <span className="font-bold text-tertiary-fixed-dim">42%</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="glass-card rounded-xl overflow-hidden mb-gutter">
                <div className="p-card-padding border-b border-outline-variant/10 flex justify-between items-center">
                    <h4 className="text-headline-lg text-primary">Pedidos en vivo</h4>
                    <button className="text-primary-container text-label-md font-bold hover:underline">
                        Ver todo
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-surface-container-low/50 text-on-surface-variant text-label-sm uppercase tracking-wider">
                            <tr>
                                <th className="px-gutter py-4 font-medium">Orden ID</th>
                                <th className="px-gutter py-4 font-medium">Cliente</th>
                                <th className="px-gutter py-4 font-medium">Estado</th>
                                <th className="px-gutter py-4 font-medium">Timeline</th>
                                <th className="px-gutter py-4 font-medium">Total</th>
                            </tr>
                        </thead>
                        {/* //TABLA DE PEDIDOS EN VIVO */}
                        <tbody className="divide-y divide-outline-variant/10">
                            {orders.map((order, i) => (
                                <tr key={i} className="hover:bg-surface-container-high/30 transition-colors">
                                    <td className="px-gutter py-5 font-medium text-primary">{order.id}</td>
                                    <td className="px-gutter py-5">
                                        <div className="flex items-center gap-3">
                                            {/* <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-bold">
                                                {order.initials}
                                            </div> */}
                                            <span className="text-label-md">{order.client}</span>
                                        </div>
                                    </td>
                                    <td className="px-gutter py-5">
                                        <span
                                            className={`px-3 py-1 rounded-full text-label-sm font-bold uppercase tracking-tight ${order.statusColor === 'tertiary'
                                                ? 'bg-tertiary-container/10 text-tertiary-fixed-dim'
                                                : order.statusColor === 'amber'
                                                    ? 'bg-amber-500/10 text-amber-500'
                                                    : 'bg-green-500/10 text-green-500'
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="px-gutter py-5">
                                        <div className="flex items-center gap-1">
                                            {[1, 2, 3, 4, 5].map((step) => (
                                                <React.Fragment key={step}>
                                                    <div
                                                        className={`w-2 h-2 rounded-full ${step <= order.timeline
                                                            ? 'bg-primary-container'
                                                            : 'bg-outline-variant'
                                                            } ${step === order.timeline && order.pulse
                                                                ? 'animate-pulse bg-amber-500'
                                                                : ''
                                                            }`}
                                                    ></div>
                                                    {step < 5 && (
                                                        <div
                                                            className={`h-0.5 w-4 ${step < order.timeline
                                                                ? 'bg-primary-container'
                                                                : 'bg-outline-variant'
                                                                }`}
                                                        ></div>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </td>
                                    <td className="px-gutter py-5 font-medium">{order.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
}