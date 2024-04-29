const move = require('./movimentos');
const initialPositionCleaner = require('./input-validation/initial-position-validator');
const cleanInputMovements = require('./input-validation/movement-validator');

/**
 * Aqui está o INDEX da aplicação. Ou seja, ele está agregando a função de lógica
 * e as funções que limpam os dados de entrada. Os testes são referentes aos exemplos da explicação.
 */
function programV1(initial, movement){
    const initialPosition = initialPositionCleaner(initial);
    const _movement = cleanInputMovements(movement);
    return move(initialPosition, _movement);
}

const teste1 = programV1('1 2 N', 'LMLMLMLMM');
const teste2 = programV1('3 3 E', 'MRRMMRMRRM');

console.log(
    `
    TESTE NÚMERO 1:
    ESPERADO:  1,3,N
    RESULTADO: ${teste1}`
)

console.log(
    `
    TESTE NÚMERO 2:
    ESPERADO:  2,3,S
    RESULTADO: ${teste2}`
)