const move = require('./movements/move');
const initialPositionCleaner = require('./input/initial-position-validator');
const movementCleaner = require('./input/movment-validator');
const logCreator = require('./outuput/log-creator')
const finalPositionCleaner = require('./outuput/final-position-cleaner');
const movementsDoneCleaner = require('./outuput/movements-done-cleaner');
const dbSaveData = require('./outuput/db-save-data');

function programV1(initialPosition, movementsToDo){
    const _initialPosition = initialPositionCleaner(initialPosition);
    const _movementsToDo = movementCleaner(movementsToDo);
    const _movementsDone = move(_initialPosition, _movementsToDo);
    const finalPosition = finalPositionCleaner(_movementsDone);
    const movementsDone = movementsDoneCleaner(_movementsDone);
    const dataToSave = {
        initial_position: initialPosition,
        movements_to_do: movementsToDo,
        movements_done: movementsDone,
        final_position: finalPosition,
        created_at: new Date(),
    }
    logCreator(dataToSave);
    dbSaveData(dataToSave);
}

programV1('1 1 N', 'LRLRLRMRLLR');
//programV1('3 3 E',  'MRRMMRMRRM');