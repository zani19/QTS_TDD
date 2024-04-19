"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangulo_1 = require("../src/triangulo");
//Testar os tipos de triângulos - Requisitos 1, 2 e 3 da atividade
test('Triângulo escaleno válido', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(3, 4, 5)).toBe('Escaleno');
});
test('Triângulo isósceles válido', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(5, 5, 3)).toBe('Isósceles');
});
test('Triângulo equilátero válido', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(3, 3, 3)).toBe('Equilátero');
});
