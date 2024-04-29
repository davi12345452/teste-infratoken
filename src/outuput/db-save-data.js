const fs = require('fs');

/**
 * Essa função está recebendo um objeto com as informações do movimento realizado
 * e salvando do DB improvisado, o db.json.
 */
function dbSaveData(movements) {
    let data = {};
    try {
        data = JSON.parse(fs.readFileSync('db.json', 'utf8'));
    } catch (error) {
        data = {};
    }
    if (!data.movements) {
        data.movements = [];
    }
    data.movements.push(movements);
    fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
}

module.exports = dbSaveData;
