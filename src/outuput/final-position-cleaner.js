
function finalPositionCleaner(movementsDone) {
    const finalPosition = movementsDone[movementsDone.length -1];
    return `${finalPosition[0]} ${finalPosition[1]} ${finalPosition[2]}`
}

module.exports = finalPositionCleaner;