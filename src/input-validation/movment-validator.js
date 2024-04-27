function limparEntradaMovimentos(movimentos) {
    if (typeof movimentos !== 'string') {
        throw new Error('A entrada deve ser uma string');
    }
    const letrasValidas = ['L', 'R', 'M'];
    const movimentosLimpos = [];
    for (let i = 0; i < movimentos.length; i++) {
        const caractere = movimentos[i];
        if (letrasValidas.includes(caractere)) {
            movimentosLimpos.push(caractere);
        } else {
            throw new Error(`Caractere inválido encontrado: '${caractere}'. Os movimentos devem conter apenas 'L', 'R' ou 'M'.`);
        }
    }
    return movimentosLimpos;
}

module.exports = limparEntradaMovimentos;