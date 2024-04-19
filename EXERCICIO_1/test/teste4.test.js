"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangulo_1 = require("../src/triangulo");
//Teste soma de 2 lados é igual ao teceiro lado / permutação - Requisitos 7 e 8 da atividade
test('Triângulo onde a soma de dois lados é igual ao terceiro lado', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(3, 3, 6)).toBe('Não é um triângulo válido');
});
test('Triângulo onde a soma dos lados A e B é igual ao lado C', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(3, 3, 6)).toBe('Não é um triângulo válido');
});
test('Triângulo onde a soma dos lados A e C é igual ao lado B', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(3, 6, 3)).toBe('Não é um triângulo válido');
});
test('Triângulo onde a soma dos lados B e C é igual ao lado A', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(6, 3, 3)).toBe('Não é um triângulo válido');
});
