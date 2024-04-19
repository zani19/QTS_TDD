"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangulo_1 = require("../src/triangulo");
//Teste valores = 0 e valor negativo - Requisitos 5 e 6 da atividade
test('Triângulo com um lado igual a zero', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(0, 3, 5)).toBe('Não é um triângulo válido');
});
test('Triângulo com um lado com valor negativo', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(-1, 3, 5)).toBe('Não é um triângulo válido');
});
