import React from 'react'

export default function ItemCart() {
  return (
    <div className="flex gap-4 group">
            <div className="w-16 h-16 rounded-xl bg-surface-container-high overflow-hidden shrink-0 border border-outline-variant/10">
                <img alt="Fresas" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPZyo9V-kgGPdjpmqmkQIMwryiJmj33-75pwsOFpXOoUYkBeMKHjYyJeQRxLJXil0seAGr8eXFI3gJMcwkZu4Xcxapb3GH3J2QoRFiYGpWBUAmsOs01pugm_R-CykmFCWjPH-04tgj_Vd3YuqVk8upbLF1K592UnWvP1MasE5oqT3eGIHdFYbc_9-VPPChoK35ij2hGRMJmNQ2P8d32nCKWjJ2UIlzM9ayUmVteMyq6a08map1Ns9C9AWABqMFv7zkt-13jui1Zxc" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-on-surface font-bold truncate leading-tight">Fresas Orgánicas</p>
                <p className="text-xs text-on-surface-variant mt-1">1 x $4.50</p>
                <div className="flex items-center gap-3 mt-2">
                    <button className="w-6 h-6 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container transition-colors flex items-center justify-center"><span className="material-symbols-outlined text-xs">remove</span></button>
                    <span className="text-label-sm text-on-surface">1</span>
                    <button className="w-6 h-6 rounded-lg bg-surface-container-high text-on-surface-variant hover:text-primary-container transition-colors flex items-center justify-center"><span className="material-symbols-outlined text-xs">add</span></button>
                </div>
            </div>
            <button className="text-on-surface-variant opacity-0 group-hover:opacity-100 hover:text-error transition-all self-start">
                <span className="material-symbols-outlined text-sm">delete</span>
            </button>
        </div>
  )
}
