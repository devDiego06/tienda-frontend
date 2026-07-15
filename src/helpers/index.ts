//Formateador de moneda

export function formatCurrency(quantity: number) {
    return new Intl.NumberFormat('en-CO', {
        style: 'currency', currency: 'COP'
    }).format(quantity)
}