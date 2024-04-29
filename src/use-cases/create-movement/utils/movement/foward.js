/**
 * Movimento que faz quando é um M. Dentro do coordenadas.json
 * estão os movimentos M para cada posição (S E N W). 
 */

function foward(coordinates, position) {
    const [x, y, direction] = position;
    const [dx, dy] = coordinates[direction][1];
    return [x + dx, y + dy, direction];
}

module.exports = foward;