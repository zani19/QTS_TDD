import { tipoDeTriangulo } from '../src/triangulo';



test('Triângulo onde a soma de dois lados é menor que o terceiro lado', () => {
  expect(tipoDeTriangulo(1, 1, 3)).toBe('Não é um triângulo válido');
});