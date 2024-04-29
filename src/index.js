const move = require('./movements/move');
const initialPositionCleaner = require('./input/initial-position-validator');
const movementCleaner = require('./input/movement-validator');
const logCreator = require('./outuput/log-creator')
const finalPositionCleaner = require('./outuput/final-position-cleaner');
const movementsDoneCleaner = require('./outuput/movements-done-cleaner');
const dbSaveData = require('./outuput/db-save-data');

/**
 * Arquivo central da aplicação. Rodar esse código para testar essa versão. Ele recebe movimentos a se fazer
 * e a posição inicial, manipulando os dados, aplicando a lógica neles e devolvendo um log, além de salvar,
 * caso sucedido, o movimento no banco de dados improvisado.
 */
function programV1(initialPosition, movementsToDo){
    // Limpando os dados recebidos para usar na função que aplica a lógica.
    const _initialPosition = initialPositionCleaner(initialPosition);
    const _movementsToDo = movementCleaner(movementsToDo);

    // Aplicando a lógica, ela devolve um array com todos movimentos feitos
    const _movementsDone = move(_initialPosition, _movementsToDo);

    // Limpando os dados resultantes da lógica, caminho feito e posição final
    const finalPosition = finalPositionCleaner(_movementsDone);
    const movementsDone = movementsDoneCleaner(_movementsDone);

    // Criando um objeto com as informações do movimento feito
    const dataToSave = {
        initial_position: initialPosition,
        movements_to_do: movementsToDo,
        movements_done: movementsDone,
        final_position: finalPosition,
        created_at: new Date(),
    }
    // Dando um log nas informações do movimento
    logCreator(dataToSave);
    // Salvando no db.json as informações do movimento feito.
    dbSaveData(dataToSave);
}

programV1('1 1 N', 'LRLRLRMRLLR');
//programV1('3 3 E',  'MRRMMRMRRM');