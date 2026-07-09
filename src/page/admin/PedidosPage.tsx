import { useState } from "react";
import ButtonFilter from "../../components/ui/ButtonFilter";
import DetailsOrder from "../../components/ui/DetailsOrder";

export default function PedidosPage() {

  const [isOpen, setIsOpen] = useState(false);

  return (



    <div className="l-0 md:ml-72 flex-1 p-4 md:p-margin min-h-screen custom-scrollbar overflow-y-auto pb-24 md:pb-4">

      <header className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-display-md font-bold text-primary tracking-tight">Pedidos</h2>
          <p className="text-body-md text-on-surface-variant">Pedidos activos de la tienda en tiempo real</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-surface-container-high p-3 rounded-lg hover:bg-surface-container-highest transition-colors">
            <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
          </button>
          <button className="bg-primary-container text-on-primary-fixed font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition-transform active:scale-95">
            <span className="material-symbols-outlined" data-icon="add">add</span>
            Nuevo Pedido
          </button>
        </div>
      </header>
      <section className="flex items-center justify-between mb-8 gap-4 relative">
        {/* <!-- Filters Row --> */}
        <div className="flex flex-wrap gap-4 mb-8">
          <ButtonFilter label="Todos" active={true} />
          <ButtonFilter label="Recibidos" />
          <ButtonFilter label="Preparando" />
          <ButtonFilter label="En camino" />
          <ButtonFilter label="Entregados" />
        </div>
      </section>

      {/* Tabla de pedidos */}
      <section className="glass-card rounded-xl overflow-hidden mb-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-outline-variant/10 text-on-surface-variant text-label-sm uppercase tracking-wider">
              <th className="px-gutter py-5 font-medium">ID</th>
              <th className="px-gutter py-5 font-medium">Cliente</th>
              <th className="px-gutter py-5 font-medium">Items</th>
              <th className="px-gutter py-5 font-medium">Total</th>
              <th className="px-gutter py-5 font-medium">Entrega</th>
              <th className="px-gutter py-5 font-medium">Pago</th>
              <th className="px-gutter py-5 font-medium">Estado</th>
              <th className="px-gutter py-5 font-medium text-right">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {/* <!-- Row 1 --> */}
            <tr className="order-row-hover transition-all duration-200 cursor-pointer border-l-4 border-l-transparent hover:border-l-primary-container" onClick={() => setIsOpen(true)}>
              <td className="px-gutter py-6">
                <span className="text-[#B2E9] font-medium text-label-md">#TB-2940</span>
              </td>
              <td className="px-gutter py-6">
                <div className="flex items-center gap-3">
                  {/* <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-xs">MA</div> */}
                  <span className="font-medium text-on-surface">Marco Aurelio</span>
                </div>
              </td>
              <td className="px-gutter py-6 text-on-surface-variant text-sm">3 Productos</td>
              <td className="px-gutter py-6 font-bold text-primary-container">$45.500</td>
              <td className="px-gutter py-6">
                <span className="flex items-center gap-1.5 bg-surface-container-highest px-3 py-1 rounded-full text-label-sm font-medium">
                  🛵 Domicilio
                </span>
              </td>
              <td className="px-gutter py-6 text-sm">Efectivo</td>
              <td className="px-gutter py-6">
                <span className="flex items-center gap-1.5 text-tertiary-fixed-dim text-label-sm font-bold">
                  <span className="w-2 h-2 rounded-full bg-tertiary-fixed-dim status-glow"></span>
                  RECIBIDO
                </span>
              </td>
              <td className="px-gutter py-6 text-right">
                <button className="bg-primary-container/10 text-primary-container border border-primary-container/30 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 float-right hover:bg-primary-container hover:text-black transition-all">
                  Avanzar <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                </button>
              </td>
            </tr>
            {/* <!-- Row 2 --> */}
            <tr className="order-row-hover transition-all duration-200 cursor-pointer border-l-4 border-l-transparent">
              <td className="px-gutter py-6">
                <span className="text-[#B2E9] font-medium text-label-md">#TB-2938</span>
              </td>
              <td className="px-gutter py-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-bold text-xs text-primary">SC</div>
                  <span className="font-medium text-on-surface">Sara Castro</span>
                </div>
              </td>
              <td className="px-gutter py-6 text-on-surface-variant text-sm">1 Producto</td>
              <td className="px-gutter py-6 font-bold text-primary-container">$12.200</td>
              <td className="px-gutter py-6">
                <span className="flex items-center gap-1.5 bg-surface-container-highest px-3 py-1 rounded-full text-label-sm font-medium">
                  🏪 Recogida
                </span>
              </td>
              <td className="px-gutter py-6 text-sm">Transfer</td>
              <td className="px-gutter py-6">
                <span className="flex items-center gap-1.5 text-primary-fixed text-label-sm font-bold">
                  <span className="w-2 h-2 rounded-full bg-primary-fixed status-glow"></span>
                  PREPARANDO
                </span>
              </td>
              <td className="px-gutter py-6 text-right">
                <button className="bg-primary-container/10 text-primary-container border border-primary-container/30 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 float-right hover:bg-primary-container hover:text-black transition-all">
                  Avanzar <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      {/* Se pasan los props para que peuda abrir el modal */}
      <DetailsOrder isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>

  )
}
