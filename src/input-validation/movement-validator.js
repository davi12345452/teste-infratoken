/**
 * Essa função limpa a entrada de movimentos a se fazer. Como assim? Por exemplo, a
 * lógica do programa recebe em forma de Array e não em uma string completa. Além disso
 * há um tratamento de erros.
 */

function cleanInputMovements(movements) {
    if (typeof movements !== 'string') {
        throw new Error('A entrada deve ser uma string');
    }
    const validLetters = ['L', 'R', 'M'];
    const cleanMovements = [];
    for (let i = 0; i < movements.length; i++) {
        const caractere = movements[i];
        if (validLetters.includes(caractere)) {
            cleanMovements.push(caractere);
        } else {
            throw new Error(`Caractere inválido encontrado: '${caractere}'. Os movimentos devem conter apenas 'L', 'R' ou 'M'.`);
        }
    }
    return cleanMovements;
}

module.exports = cleanInputMovements;