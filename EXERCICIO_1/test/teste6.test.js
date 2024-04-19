"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangulo_1 = require("../src/triangulo");
// Teste três valores igual a 0 - Requisito 11 da atividade
test('Triângulo com três valores igual a zero', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(0, 0, 0)).toBe('Não é um triângulo válido');
});
