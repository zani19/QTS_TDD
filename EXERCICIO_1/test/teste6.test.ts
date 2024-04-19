import { tipoDeTriangulo } from '../src/triangulo';

// Teste três valores igual a 0 - Requisito 11 da atividade

test('Triângulo com três valores igual a zero', () => {
    expect(tipoDeTriangulo(0, 0, 0)).toBe('Não é um triângulo válido');
  });
