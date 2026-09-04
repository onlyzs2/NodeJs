export function formatarMoeda(valor) {
    if (!Number.isFinite(valor)) {
        throw new TypeError('Valor monetário deve ser um numero finito');
    }
    return new Intl.NumberFormat('pr-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}