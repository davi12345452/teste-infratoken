/**
 * Essa função faz a rotação realmente. Ela recebe o posicionamento e para
 * qual lado deve virar, em forma de boolean (True: vira para R; False: vira para L) 
 */

function rotate(coordinates, position, clockwise = true) {
    const [x, y, direction] = position;
    const rotations = clockwise ? 3 : 1;
    const index = coordinates[direction][0];
    const newIndex = (index + rotations) % 4;
    for (const dir in coordinates) {
        if (coordinates[dir][0] === newIndex) {
            return [x, y, dir];
        }
    }
}

module.exports = rotate;