const fs = require('fs');

function dbSaveData(movements) {
    // Lê os dados atuais do arquivo, se existir
    let data = {};
    try {
        data = JSON.parse(fs.readFileSync('db.json', 'utf8'));
    } catch (error) {
        // Se o arquivo não existir ou estiver vazio, inicializa com um objeto vazio
        data = {};
    }

    // Adiciona os novos movimentos à matriz de movimentos existente
    if (!data.movements) {
        data.movements = [];
    }
    data.movements.push(movements);

    // Escreve os dados atualizados no arquivo JSON
    fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
}

module.exports = dbSaveData;
