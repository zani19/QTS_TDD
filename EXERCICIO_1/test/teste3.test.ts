import { tipoDeTriangulo } from '../src/triangulo';

//Teste valores = 0 e valor negativo - Requisitos 5 e 6 da atividade

test('Triângulo com um lado igual a zero', () => {
  expect(tipoDeTriangulo(0, 3, 5)).toBe('Não é um triângulo válido');
});

test('Triângulo com um lado com valor negativo', () => {
  expect(tipoDeTriangulo(-1, 3, 5)).toBe('Não é um triângulo válido');
});
