function validarPosicaoInicial(posicao) {
    const partes = posicao.split(' ');
    if (partes.length !== 3) {
        throw new Error('A posição inicial deve conter três partes separadas por espaço.');
    }
    const x = parseInt(partes[0]);
    const y = parseInt(partes[1]);
    const direcao = partes[2];
    if (isNaN(x) || isNaN(y)) {
        throw new Error('As coordenadas x e y devem ser números inteiros.');
    }
    if (!['S', 'E', 'W', 'N'].includes(direcao)) {
        throw new Error('A direção deve ser uma das seguintes: S, E, W ou N.');
    }
    return [ x, y, direcao ];
}

module.exports = validarPosicaoInicial;