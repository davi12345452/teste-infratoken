/**
 * Importando os dados do arquivo JSON que diz sobre cada movimento.
 */
const coordenadas = require('./coordenadas.json')

/**
 * Função que recebe um posicionamento e devolve um movimento
 * de uma casa para a frente
 */
function move_M(movment) {
    const coordenada = movment[2];
    const _movment = coordenadas[coordenada];
    return [movment[0] + _movment[1][0], movment[1] + _movment[1][1], movment[2]];
}

/**
 * Função que recebe um posicionamento e devolve um movimento de
 * rotação 90 graus para a direita
 */
function move_R(movment) {
    const coordenada = movment[2];
    const index = coordenadas[coordenada][0];
    let newDirection = (index + 3) % 4;
    for (const dir in coordenadas) {
        if (coordenadas[dir][0] === newDirection) {
            return [movment[0], movment[1], dir];
        }
    }
}

/**
 * Função que recebe um posicionamento e devolve um movimento de
 * rotação 90 graus para a esquerda
 */
function move_L(movment) {
    const coordenada = movment[2];
    const index = coordenadas[coordenada][0]; 
    const newDirection = (index + 1) % 4;
    for (const dir in coordenadas) {
        if (coordenadas[dir][0] === newDirection) {
            return [movment[0], movment[1], dir];
        }
    }
}

/**
 * Essa função recebe uma posição inicial e uma sequência de movimentos para se
 * fazer. Ela se utiliza das funções anteriores para devolver a posição final.
 */

function move(initialPosition, movmentsToDo) {
    let movments = [];
    let postion = initialPosition;
    for(let i = 0; i < movmentsToDo.length; i++) {
        if (movmentsToDo[i] == 'L') {
            postion = move_L(postion);
        } else if ( movmentsToDo[i] == 'R') {
            postion = move_R(postion);
        } else {
            postion = move_M(postion);
        }
        movments.push(postion);
    }
    return movments[movmentsToDo.length - 1];
}

module.exports = move;