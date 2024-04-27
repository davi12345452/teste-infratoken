const coordenadas = require('./coordenadas.json')

function move_M(movment) {
    const coordenada = movment[2];
    const _movment = coordenadas[coordenada];
    return [movment[0] + _movment[1][0], movment[1] + _movment[1][1], movment[2]];
}

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
    console.log(movments[movmentsToDo.length - 1])
    return movments[-1];
}

module.exports = move;