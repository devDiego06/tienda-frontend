
import { formatCurrency } from '../../helpers'
import { useCart } from '../../hooks/useCart'
import type { Product } from '../../types'


interface PropsProductsCard{
    products: Product[]
}



export default function ProductCard({ products }: PropsProductsCard) {

    const { addToCart, totalItems} = useCart();

  return (
    (
        products.map((product) => (
            <div key={product.id} className="glass-card rounded-[24px] p-5 flex flex-col group overflow-hidden">
                            <div className="relative w-full aspect-square rounded-2xl bg-surface-container-highest mb-4 overflow-hidden">
                                {/* BANNER */}
                                {/* <div className="absolute top-3 left-3 bg-primary-container text-on-primary-fixed px-3 py-1 rounded-full text-caption font-black uppercase tracking-widest z-10 neon-glow">Popular</div> */}
                                <img alt="Fresa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A macro photograph of fresh organic strawberries with glistening water droplets, set against a dark, minimalist background. The lighting is dramatic and focused, highlighting the vibrant red texture of the fruit and the deep greens of the leaves. The style is hyper-realistic with high contrast, aligning with a luxury dark dashboard aesthetic using charcoal and electric lime accents." src={product.imageUrl} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-headline-lg text-on-surface leading-tight mb-1">{product.name}</h3>
                                <p className="text-on-surface-variant text-label-sm mb-4">{product.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-primary-container">{formatCurrency(product.price)}</span>
                                    <div className="flex items-center gap-1">
                                        <button onClick={() => addToCart(product)} className="bg-primary-container text-on-primary-fixed w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl hover:scale-105 active:scale-95 transition-all" >
                                            <span className="material-symbols-outlined">add</span>
                                        </button>
                                        <div className={`${totalItems > 0 ? ' stepper-controls flex items-center bg-surface-container-highest rounded-xl p-1' : 'hidden'}`}>
                                            <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary-container"><span className="material-symbols-outlined text-sm">remove</span></button>
                                            <span className="px-3 text-primary-container">1</span>
                                            <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary-container"><span className="material-symbols-outlined text-sm">add</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        ))
    )
  )
}
