import { tipoDeTriangulo } from '../src/triangulo';

// Teste soma de 2 lados é menor que o terceiro lado / permutação - Requisitos 9 e 10 da atividade

test('Triângulo onde a soma de dois lados é menor que o terceiro lado', () => {
    expect(tipoDeTriangulo(2, 2, 6)).toBe('Não é um triângulo válido');
  });

test('Triângulo onde a soma dos lados A e B é menor que o lado C', () => {
  expect(tipoDeTriangulo(1, 1, 3)).toBe('Não é um triângulo válido');
});

test('Triângulo onde a soma dos lados A e C é menor que o lado B', () => {
  expect(tipoDeTriangulo(1, 3, 1)).toBe('Não é um triângulo válido');
});

test('Triângulo onde a soma dos lados B e C é menor que o lado A', () => {
  expect(tipoDeTriangulo(3, 1, 1)).toBe('Não é um triângulo válido');
});