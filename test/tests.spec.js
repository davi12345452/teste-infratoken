const coordinates = require('../src/assets/coordenadas.json');

const move = require('../src/use-cases/create-movement/utils/movement/move');
const foward = require('../src/use-cases/create-movement/utils/movement/foward');
const rotate = require('../src/use-cases/create-movement/utils/movement/rotate');

const validateInitialPosition = require('../src/use-cases/create-movement/utils/input/initial-position-validator');
const cleanInputMovements = require('../src/use-cases/create-movement/utils/input/movement-to-do-validator');

const finalPositionCleaner = require('../src/use-cases/create-movement/utils/output/final-position-cleaner');
const movementsDoneCleaner = require('../src/use-cases/create-movement/utils/output/movements-done-cleaner');

const createMovement = require('../src/use-cases/create-movement/index');

/**
 * Testes das funções de lógica da aplicação. 
 */

// Testes na função que faz a movimentação completa
describe("Testando a função move", () => {
    it("Teste 1 da explicação", () => {
        const result = move([1, 2, 'N'], ['L', 'M', 'L', 'M', 'L', 'M', 'L', 'M', 'M']);
        expect(result[result.length - 1]).toEqual([1, 3, 'N']);
    });

    it("Teste 2 da explicação", () => {
        const result = move([3, 3, 'E'], ['M', 'R', 'R', 'M', 'M', 'R', 'M', 'R', 'R', 'M']);
        expect(result[result.length - 1]).toEqual([2, 3, 'S']);
    });
});

// Teste da função que move para frente
describe("Testando a função foward", () => {
    it("Deve se mover uma casa para à oeste", () => {
        const result = foward(coordinates, [1, 2, 'W']);
        expect(result).toEqual([0, 2, 'W']);
    });

    it("Deve se mover uma casa ao sul", () => {
        const result = foward(coordinates, [1, 2, 'S']);
        expect(result).toEqual([1, 1, 'S']);
    });
});

// Teste da função que faz a rotação em 90 graus, tanto para esquerda, quanto para direita
describe("Testando a função rotate", () => {
    it("Deve se virar 90 graus, indo do sentido W ao S", () => {
        const result = rotate(coordinates, [1, 2, 'W'], false);
        expect(result).toEqual([1, 2, 'S']);
    });

    it("Deve se virar 90 graus, indo do sentido W ao N", () => {
        const result = rotate(coordinates, [1, 2, 'W'], true);
        expect(result).toEqual([1, 2, 'N']);
    });
});

/**
 * Função geral da aplicação. Ela agrega todas as funções, entrada, saída e a lógica.
 */

describe("Testando a função rotate", () => {
    it("Testando a posição final do exemplo 2 na função geral", () => {
        const result = createMovement('1 2 N', 'LMLMLMLMM');
        expect(result.final_position).toEqual('1 3 N');
    });

    it("Testando a posição final do exemplo 2 na função geral", () => {
        const result = createMovement('3 3 E', 'MRRMMRMRRM');
        expect(result.final_position).toEqual('2 3 S');
    });

    it("Testando erro de posição inicial sem espaço", () => {
        expect(() => {
            createMovement('33 E', 'MRRMMRMRRM');
        }).toThrow('A posição inicial deve conter três partes separadas por espaço.');
    });

    it("Testando erro de coordenada x y inválida", () => {
        expect(() => {
            createMovement('3 E E', 'MRRMMRMRRM');
        }).toThrow('As coordenadas x e y devem ser números inteiros.');
    });

    it("Testando erro de sentido inválido", () => {
        expect(() => {
            createMovement('1 2 H', 'MRRMMRMRRM');
        }).toThrow('A direção deve ser uma das seguintes: S, E, W ou N.');
    });

    it("Testando erro de movimento inválido por não ser string", () => {
        expect(() => {
            createMovement('1 2 E', 2);
        }).toThrow('A entrada deve ser uma string');
    });

    it("Testando erro de movimento inválido por ter algo além de L R e M", () => {
        expect(() => {
            createMovement('1 2 E', 'LMRSLMR');
        }).toThrow(`Caractere inválido encontrado: 'S'. Os movimentos devem conter apenas 'L', 'R' ou 'M'.`);
    });
});
