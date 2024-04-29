/**
 * Essa função é a utilizada para dar log ao usuário que testa a aplicação. Ela da um log bem completo,
 * indicando posição inicial, quais movimentos iriam acontecer e como aconteceu, terminando com a posição
 * final. 
 */

function logCreator(movement) {
    const { initial_position, movements_done, final_position, movements_to_do } = movement;

    console.log(`
-------------------------------------------
- Posição inicial: (${initial_position})
- Caminho a ser percorrido: ${movements_to_do}
-------------------------------------------
`);

    console.log("- Movimentos realizados:");
    movements_done.forEach(element => {
        console.log(`  ${element}`);
    });

    console.log(`
- Posição final: (${final_position})
--------------------------------------------
`);
}

module.exports = logCreator;

