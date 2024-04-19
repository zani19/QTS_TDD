"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangulo_1 = require("../src/triangulo");
//Teste para isósceles válido contendo a permutação dos mesmos valores - Requisito 4 da atividade
test('Triângulo isósceles válido com lados A e B iguais', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(5, 5, 3)).toBe('Isósceles');
});
test('Triângulo isósceles válido com lados A e C iguais', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(5, 3, 5)).toBe('Isósceles');
});
test('Triângulo isósceles válido com lados B e C iguais', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(3, 5, 5)).toBe('Isósceles');
});
