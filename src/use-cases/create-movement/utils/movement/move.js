const coordinates = require('../../../../assets/coordenadas.json');
const foward = require('./foward');
const rotate = require('./rotate');
/**
 * Essa função recebe uma posição inicial ([x, y, POSIÇÃO]) e um array com movimentos a se fazerem:
 * (['L', 'R'...]). Ela devolve um array com cada passo que se deu. É necessário fornecer informações
 * limpas aqui. No input validation há dois arquivos que limpam de acordo para essa função.
 */

function move(initialPosition, movementsToDo) {
    let movements = [];
    let position = initialPosition;

    for (const movement of movementsToDo) {
        if (movement === 'L' || movement === 'R') {
            position = rotate(coordinates, position, movement === 'R');
        } else {
            position = foward(coordinates, position);
        }
        movements.push(position);
    }
    return movements;
}

module.exports = move;