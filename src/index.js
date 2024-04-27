const coordenadas = {
    "N": [0, [0, 1]], 
    "W": [1, [-1, 0]], 
    "S": [2, [0, -1]], 
    "E": [3, [1, 0]], 
};

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
        movments[i] = postion;
    }
    console.log(movments[movmentsToDo.length - 1])
    return movments[-1];
}

// Teste 1
const teste1 = move([1, 2, 'N'], ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']);

// Teste 2
const teste2 = move([3, 3, 'E'], ['M', 'R', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']);

