const coordinates = require('./coordenadas.json');

/**
 * Movimento que faz quando é um M. Dentro do coordenadas.json
 * estão os movimentos M para cada posição (S E N W). 
 */
function foward(movement) {
    const [x, y, direction] = movement;
    const [dx, dy] = coordinates[direction][1];
    return [x + dx, y + dy, direction];
}

/**
 * Essa função faz a rotação realmente. Ela recebe o posicionamento e para
 * qual lado deve virar, em forma de boolean (True: vira para R; False: vira para L) 
 */
function rotate(direction, clockwise = true) {
    const rotations = clockwise ? 3: 1;
    const index = coordinates[direction][0];
    const newIndex = (index + rotations) % 4;
    for (const dir in coordinates) {
        if (coordinates[dir][0] === newIndex) {
            return dir;
        }
    }
}

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
            position[2] = rotate(position[2], movement === 'R');
        } else {
            position = foward(position);
        }
        movements.push(position);
    }

    console.log(movements[movements.length - 1]);
    return movements;
}

module.exports = move;
