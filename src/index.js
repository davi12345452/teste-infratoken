const coordenadas = {
    "N": [1, [0, 1]], 
    "W": [2, [-1, 0]], 
    "S": [3, [0, -1]], 
    "E": [4, [1, 0]], 
};

function move_M(movment) {
    const coordenada = movment[2];
    const _movment = coordenadas[coordenada];
    return [movment[0] + _movment[1][0], movment[1] + _movment[1][1], movment[2]];
}

function move_R(movment) {
    const coordenada = movment[2];
    const index = coordenadas[coordenada][0];
    let newDirection;
    if (index == 1) {
        newDirection = 4;
    } else {
        newDirection = index % 4 - 1;
    }
    for (const dir in coordenadas) {
        if (coordenadas[dir][0] === newDirection) {
            return [movment[0], movment[1], dir];
        }
    }
}

function move_L(movment) {
    const coordenada = movment[2];
    const index = coordenadas[coordenada][0]; 
    let newDirection;
    if (index == 4) {
        newDirection = 1;
    } else {
        newDirection = index % 4 + 1;
    }
    for (const dir in coordenadas) {
        if (coordenadas[dir][0] === newDirection) {
            return [movment[0], movment[1], dir];
        }
    }
}

console.log(move_R([1, 1, 'N']))
