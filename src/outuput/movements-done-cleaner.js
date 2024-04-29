/**
 * Essa função pega os dados devolvidos pelo move.js, a lógica do programa, e limpa eles
 * para poder dar um log e salvar no DB improvisado. Essa função pega todos movimentos.
 */
function movementsDoneCleaner(movementsDone) {
    const dataToReturn = []
    movementsDone.forEach(movement => {
        dataToReturn.push(`${movement[0]} ${movement[1]} ${movement[2]}`)
    });
    return dataToReturn;
}

module.exports = movementsDoneCleaner;