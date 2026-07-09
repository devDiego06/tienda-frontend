
export default function ProductsViews() {
  return (
    <main className="ml-64 mr-80 min-h-screen flex flex-col p-margin">
                {/* <!-- 2. Search & Sort Bar --> */}
                <header className="flex flex-col md:flex-row items-center gap-gutter mb-12 sticky top-0 z-40 bg-background/80 backdrop-blur-md p-6 rounded-3xl">
                    <div className="relative flex-1 group">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors">search</span>
                        <input className="w-full bg-surface-container-low border-outline-variant/10 rounded-2xl py-4 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary-container outline-none focus:border-transparent transition-all placeholder:text-on-surface-variant/50" placeholder="¿Qué estás buscando hoy?" type="text" />
                    </div>
                    <div className="flex items-center gap-3 bg-surface-container-low p-1.5 rounded-2xl border border-outline-variant/10">
                        <span className="text-xs font-bold text-on-surface-variant px-3 uppercase tracking-tighter">Ordenar:</span>
                        <button className="bg-surface-container-high text-primary-container px-4 py-2 rounded-xl text-label-md font-bold transition-all shadow-lg">Popular</button>
                        <button className="text-on-surface-variant px-4 py-2 rounded-xl text-label-md font-bold hover:bg-surface-container-high transition-all">Precio</button>
                        <button className="text-on-surface-variant px-4 py-2 rounded-xl text-label-md font-bold hover:bg-surface-container-high transition-all">Nuevos</button>
                    </div>
                </header>
                {/* <!-- Product Section --> */}
                <section className="mb-12">
                    <div className="flex items-end justify-between mb-8">
                        <div>
                            <h2 className="text-display-md text-primary tracking-tighter">Catálogo Completo</h2>
                            <p className="text-on-surface-variant mt-2 text-body-md max-w-md">Productos frescos seleccionados diariamente de granjas locales.</p>
                        </div>
                        <div className="flex gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/10 hover:bg-surface-container transition-all">
                                <span className="material-symbols-outlined">filter_list</span>
                            </button>
                        </div>
                    </div>
                    {/* <!-- 3. Enhanced Product Cards (Bento Grid Style) --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* <!-- Product 1 --> */}
                        <div className="glass-card rounded-[24px] p-5 flex flex-col group overflow-hidden">
                            <div className="relative w-full aspect-square rounded-2xl bg-surface-container-highest mb-4 overflow-hidden">
                                <div className="absolute top-3 left-3 bg-primary-container text-on-primary-fixed px-3 py-1 rounded-full text-caption font-black uppercase tracking-widest z-10 neon-glow">Popular</div>
                                <img alt="Fresa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A macro photograph of fresh organic strawberries with glistening water droplets, set against a dark, minimalist background. The lighting is dramatic and focused, highlighting the vibrant red texture of the fruit and the deep greens of the leaves. The style is hyper-realistic with high contrast, aligning with a luxury dark dashboard aesthetic using charcoal and electric lime accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXs9js_DzWfLIP3RYIZduuZ4ZxIUc0t--RXgS7BgS2dmOlGEPyRjUfh6nixzgQ_TdLMc8RpRR-a2Udq-KRvw66u_ClRyo5fKUTzvFmw3wGOl2BN8qR2XLqqDPy9Qu7IfGz20SJRdfwd7YRnxu82VqgAQt6W-dNbGjsy8cC7hGR9ssBbdMJ2MFg5lGEF0T0ua8E-FRTZlRyVgJJljR82nmndXI2thpSJ_IuP5vzOnugNIR_ecQZmGqvYUvJdCEU6X1sqSmLaNP2XSk" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-headline-lg text-on-surface leading-tight mb-1">Fresas Orgánicas</h3>
                                <p className="text-on-surface-variant text-label-sm mb-4">Caja 500g • Directo de Valle</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-primary-container">$4.50</span>
                                    <div className="flex items-center gap-1">
                                        <button className="bg-primary-container text-on-primary-fixed w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl hover:scale-105 active:scale-95 transition-all" onClick={null}>
                                            <span className="material-symbols-outlined">add</span>
                                        </button>
                                        <div className="hidden stepper-controls flex items-center bg-surface-container-highest rounded-xl p-1">
                                            <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary-container"><span className="material-symbols-outlined text-sm">remove</span></button>
                                            <span className="px-3 text-primary-container">1</span>
                                            <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-primary-container"><span className="material-symbols-outlined text-sm">add</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product 2 --> */}
                        <div className="glass-card rounded-[24px] p-5 flex flex-col group overflow-hidden">
                            <div className="relative w-full aspect-square rounded-2xl bg-surface-container-highest mb-4 overflow-hidden">
                                <div className="absolute top-3 left-3 bg-tertiary-fixed text-on-tertiary-fixed px-3 py-1 rounded-full text-caption font-black uppercase tracking-widest z-10">Nuevo</div>
                                <img alt="Leche" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A sleek, modern glass bottle of farm-fresh whole milk standing on a reflective black surface. Subtle cyan and white rim lighting creates a high-tech, futuristic dairy product presentation. The background is a deep charcoal texture, maintaining a cohesive neon-minimalist visual language with sharp clarity and elegant composition." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDz5spwUhdp2EoGG3TaQlhetJ3ZgLxZduC9DbGnEkxkjfPZ_0i3sNI4nanYQOdSbuV55kNmuMNfdn8aGIwEEXuUgpUzHAYxGBYNEDzi6lR8QPIKdRuPD14sovA-bvm4av_iPABDrH5dH_VA3whRiumjnlc4jIrmBaSUE8OKKrczTe4fbfCEyHlpppKXhIY0wYaAOa8YqEb_WI4NPmQ6ZxJFa5Vcvxgnzzk6Rnt6jIcTjwWmJBkaosulHlzJSqBoeoiRd0ZM4JZURoA" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-headline-lg text-on-surface leading-tight mb-1">Leche Entera A2</h3>
                                <p className="text-on-surface-variant text-label-sm mb-4">Envase vidrio 1L • Sin hormonas</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-primary-container">$3.25</span>
                                    <button className="bg-primary-container text-on-primary-fixed w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl hover:scale-105 active:scale-95 transition-all">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product 3 --> */}
                        <div className="glass-card rounded-[24px] p-5 flex flex-col group overflow-hidden">
                            <div className="relative w-full aspect-square rounded-2xl bg-surface-container-highest mb-4 overflow-hidden">
                                <img alt="Pan" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Gourmet sourdough bread loaves with a perfect golden-brown crust and artistic scores, arranged on a dark slate background. The lighting is warm and directional, casting soft shadows that emphasize the artisanal texture. The overall mood is sophisticated and organic, fitting into a high-performance retail dashboard environment with deep blacks and vibrant lime accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC16kuPJ7gAZhmgDxh26BQRHEyAKqTK_Rscmnd_GbRktkaB7KAwxLsdNtWESTfn2raGcnS3_gjiXWJJykqrimWGRjs1KeI90gH0IUpgnpGhvGCsuuRBGUWAcdnoXGcp8XxO4f5xFIJ_cZSmVbguvWJ1FnAqjTBJkOMxbY34EjGxVcP99zg-i9Nc_PSKCIPfHLvw7f5lTcv3QOf28TLTIfMro-NCIxozGL5eYWCedhSFX_vI2-_2gHfCm27PEixKmM6kcZV5SN6zVXA" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-headline-lg text-on-surface leading-tight mb-1">Pan de Masa Madre</h3>
                                <p className="text-on-surface-variant text-label-sm mb-4">Horneado hoy • 750g</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-primary-container">$5.90</span>
                                    <button className="bg-primary-container text-on-primary-fixed w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl hover:scale-105 active:scale-95 transition-all">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product 4 --> */}
                        <div className="glass-card rounded-[24px] p-5 flex flex-col group overflow-hidden">
                            <div className="relative w-full aspect-square rounded-2xl bg-surface-container-highest mb-4 overflow-hidden">
                                <img alt="Burger" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A premium gourmet wagyu beef burger patty with vibrant green lettuce and ripe tomato, presented in a dark, atmospheric culinary setting. High-contrast lighting focuses on the juiciness of the meat and the crispness of the vegetables. The style is modern-corporate meets neon-futurism, with sharp edges and a sophisticated charcoal backdrop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuARynk0LMKdUH35Dk3CGh7_-jBQTCjLYDksB7jno_u-UlfeuLUbqVXqgbNiJDEoV4Pbn12MitK6TRP1y9abtJuNHH6qZyfDVIJ4x5JvE3edAxm-JtAG6kRcMvQd9jvgLE2Y6xfoWsmHHgut-MmdGePd7JWKAE7c-r4iX-HVLmB4WXDGi75FBsp8uEkqr--UdpIUYyZ6SqSleGQF7nVUG7JX46QDGNcXUvYXQgshUFP7jRQfFw5rmn6Tab_iBmF88-oSzw-63ebi5-w" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-headline-lg text-on-surface leading-tight mb-1">Carne Molida Premium</h3>
                                <p className="text-on-surface-variant text-label-sm mb-4">Wagyu Cross • 450g</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-primary-container">$12.50</span>
                                    <button className="bg-primary-container text-on-primary-fixed w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl hover:scale-105 active:scale-95 transition-all">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product 5 --> */}
                        <div className="glass-card rounded-[24px] p-5 flex flex-col group overflow-hidden">
                            <div className="relative w-full aspect-square rounded-2xl bg-surface-container-highest mb-4 overflow-hidden">
                                <div className="absolute top-3 right-3 bg-error text-on-error px-3 py-1 rounded-full text-caption font-black uppercase tracking-widest z-10">¡Oferta!</div>
                                <img alt="Naranjas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="Sun-ripened organic oranges with lush green leaves, set against a dark textured background. The scene is illuminated with a vibrant, warm glow that makes the citrus colors explode. The design aesthetic is clean and high-performance, emphasizing freshness through high-contrast digital depth and neon lime accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6iWG6fakLLcHwJSHFNkltDYLdmv4KNhLMBq7EHYnLI81o0gR3Z-Q76TO-aBbMxcJ3ActZ3AIc3ZFqZj4qqtj47M1kFqulzZCewrGGNeti4Xumlqvq65zBcAP9kkBruR3954WR7bwtOK-29epTkkaZr-eMpOxf8V7Vg234wE4zwhZbEmvkLfa3wb1IIrY4Yhi4NFj6Pn3Q4BFKFBWYzThYPH0KqI9w1rRZ7TkC0TkDGsc4I0MPcS49g7MZ8K6ky6vimW-N_qUggPA" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-headline-lg text-on-surface leading-tight mb-1">Naranja de Zumo</h3>
                                <p className="text-on-surface-variant text-label-sm mb-4">Malla 2kg • Dulce extra</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-primary-container">$3.80</span>
                                    <button className="bg-primary-container text-on-primary-fixed w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl hover:scale-105 active:scale-95 transition-all">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Product 6 --> */}
                        <div className="glass-card rounded-[24px] p-5 flex flex-col group overflow-hidden">
                            <div className="relative w-full aspect-square rounded-2xl bg-surface-container-highest mb-4 overflow-hidden">
                                <img alt="Aceitunas" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="A minimalist presentation of premium extra virgin olive oil and green olives in a sleek black ceramic bowl. The lighting is cool and sophisticated, creating sharp highlights on the oil's surface. The background is a matte dark charcoal, maintaining the professional neon-minimalist dashboard aesthetic with high visual clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2gLAExq6j-E6jT_Zw4dkp4-TlDyVR-f1ZAxtNc5cqAVYPPFbmsEwL77YnJo1ATko3LmV5XLscSGjvrspjN-JhojtNNNaj0r_docDI3oCjy4ENfYB93UrixyRao0BGaKmTU7wtv6R3cg2BnHNQnIi5Ld4RcuihOQZWc0Ye1eucYqVDS2VRz1eBu7e6a_cGnqhwLTfmlmNvW3L_ZhBWLUZAM3eNo8ZY-Nmz9NnRX5tIgFBAvp4ML6BUVWgFvMNCH-U2HnSEJEONetI" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-headline-lg text-on-surface leading-tight mb-1">Aceitunas Gordal</h3>
                                <p className="text-on-surface-variant text-label-sm mb-4">Frasco 300g • Aliño secreto</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-primary-container">$4.20</span>
                                    <button className="bg-primary-container text-on-primary-fixed w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xl hover:scale-105 active:scale-95 transition-all">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
  )
}
