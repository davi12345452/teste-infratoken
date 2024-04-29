/**
 * Essa é a função que limpa a entrada de posição inicial. É necessário verificar
 * se as cooerdenadas x e y são válidas e se a cooerdanada (S W E N) também é válida.
 * Além disso, devolve de uma maneira adequada para ser usada na lógica do programa.
 */

function validateInitialPosition(position) {
    const parts = position.split(' ');
    if (parts.length !== 3) {
        throw new Error('A posição inicial deve conter três partes separadas por espaço.');
    }
    const x = parseInt(parts[0]);
    const y = parseInt(parts[1]);
    const direction = parts[2];
    if (isNaN(x) || isNaN(y)) {
        throw new Error('As coordenadas x e y devem ser números inteiros.');
    }
    if (!['S', 'E', 'W', 'N'].includes(direction)) {
        throw new Error('A direção deve ser uma das seguintes: S, E, W ou N.');
    }
    return [ x, y, direction ];
}

module.exports = validateInitialPosition;