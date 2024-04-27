const move = require('./movimentos');
const initialPositionCleaner = require('./input-validation/initial-position-validator');
const movmentCleaner = require('./input-validation/movment-validator');

function programV1(initial, movment){
    const initialPosition = initialPositionCleaner(initial);
    const _movment = movmentCleaner(movment);
    move(initialPosition, _movment);
}


programV1('1 1 N', 'LRLRLRMRLLR');