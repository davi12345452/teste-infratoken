const move = require('./utils/movement/move');
const validateInitialPosition = require('./utils/input/initial-position-validator');
const validateMovementsToDo = require('./utils/input/movement-to-do-validator');
const cleanFinalPosition = require('./utils/output/final-position-cleaner');
const cleanMovementsDone = require('./utils/output/movements-done-cleaner');

function createMovement(initialPosition, movementsToDo) {
    const initialPositionValidated = validateInitialPosition(initialPosition);
    const movementsToDoValidated = validateMovementsToDo(movementsToDo);
    const movementsDone = move(initialPositionValidated, movementsToDoValidated);

    return {
        initial_position: initialPosition,
        movements_to_do: movementsToDo,
        movements_done: cleanMovementsDone(movementsDone),
        final_position: cleanFinalPosition(movementsDone),
        created_at: new Date(),
    };
}

module.exports = createMovement;