const move = require('./movimentos')

/**
 * Aqui estão os testes que estavam nos exemplos da explicação direto na função de lógica MOVE
 * com as entradas "sujas".
 */
const teste1 = move([1, 2, 'N'], ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']);
const teste2 = move([3, 3, 'E'], ['M', 'R', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']);

console.log(
    `
    TESTE NÚMERO 1:
    ESPERADO: 1,3,N
    RESULTADO: ${teste1}`
)

console.log(
    `
    TESTE NÚMERO 2:
    ESPERADO: 2,3,S
    RESULTADO: ${teste2}`
)