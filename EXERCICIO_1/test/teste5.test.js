"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangulo_1 = require("../src/triangulo");
// Teste soma de 2 lados é menor que o terceiro lado / permutação - Requisitos 9 e 10 da atividade
test('Triângulo onde a soma de dois lados é menor que o terceiro lado', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(2, 2, 6)).toBe('Não é um triângulo válido');
});
test('Triângulo onde a soma dos lados A e B é menor que o lado C', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(1, 1, 3)).toBe('Não é um triângulo válido');
});
test('Triângulo onde a soma dos lados A e C é menor que o lado B', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(1, 3, 1)).toBe('Não é um triângulo válido');
});
test('Triângulo onde a soma dos lados B e C é menor que o lado A', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(3, 1, 1)).toBe('Não é um triângulo válido');
});
