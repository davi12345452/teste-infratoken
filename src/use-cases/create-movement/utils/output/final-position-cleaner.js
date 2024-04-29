/**
 * Essa função pega os dados devolvidos pelo move.js, a lógica do programa, e limpa eles
 * para poder dar um log e salvar no DB improvisado. Essa função pega a posição final.
 */
function finalPositionCleaner(movementsDone) {
    const finalPosition = movementsDone[movementsDone.length -1];
    return `${finalPosition[0]} ${finalPosition[1]} ${finalPosition[2]}`
}

module.exports = finalPositionCleaner;