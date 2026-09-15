export function formatarMoeda(valor){
    return Intl.NumberFormat('pt-BR',{//formata moeda
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}