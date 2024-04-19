"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const triangulo_1 = require("../src/triangulo");
test('Triângulo onde a soma de dois lados é menor que o terceiro lado', () => {
    expect((0, triangulo_1.tipoDeTriangulo)(1, 1, 3)).toBe('Não é um triângulo válido');
});
