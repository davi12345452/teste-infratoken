function logCreator(initialPosition, movementsDone) {
    console.log(`
    -------------------------------------------
    - Posição inicial: (${initialPosition[0]}, ${initialPosition[1]}) voltado para ${initialPosition[2]}
    -------------------------------------------
    `)
    movementsDone.forEach(element => {
        console.log(`
        - ${element}
        `)
    });
    console.log(`
    --------------------------------------------
    `)
}

module.exports = logCreator;