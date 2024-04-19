import { tipoDeTriangulo } from '../src/triangulo';

//Teste soma de 2 lados é igual ao teceiro lado / permutação - Requisitos 7 e 8 da atividade

test('Triângulo onde a soma de dois lados é igual ao terceiro lado', () => {
  expect(tipoDeTriangulo(3, 3, 6)).toBe('Não é um triângulo válido');
});

test('Triângulo onde a soma dos lados A e B é igual ao lado C', () => {
  expect(tipoDeTriangulo(3, 3, 6)).toBe('Não é um triângulo válido');
});

test('Triângulo onde a soma dos lados A e C é igual ao lado B', () => {
  expect(tipoDeTriangulo(3, 6, 3)).toBe('Não é um triângulo válido');
});

test('Triângulo onde a soma dos lados B e C é igual ao lado A', () => {
  expect(tipoDeTriangulo(6, 3, 3)).toBe('Não é um triângulo válido');
});
