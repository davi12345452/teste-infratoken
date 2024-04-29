function movementsDoneCleaner(movementsDone) {
    const dataToReturn = []
    movementsDone.forEach(movement => {
        dataToReturn.push(`${movement[0]} ${movement[1]} ${movement[2]}`)
    });
    return dataToReturn;
}

module.exports = movementsDoneCleaner;