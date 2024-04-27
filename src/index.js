const move = require('./movimentos');
const initialPositionCleaner = require('./input-validation/initial-position-validator');
const movmentCleaner = require('./input-validation/movment-validator');
const logCreator = require('./outuput/log-creator')

function programV1(initial, movment){
    const initialPosition = initialPositionCleaner(initial);
    const _movment = movmentCleaner(movment);
    const final = move(initialPosition, _movment);
    logCreator(initialPosition, final)
}


//programV1('1 1 N', 'LRLRLRMRLLR');
programV1('3 3 E',  'MRRMMRMRRM');