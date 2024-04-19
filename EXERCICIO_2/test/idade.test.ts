import { Pessoa } from '../src/app';

describe('Pessoa', () => {

  test('A idade deve estar no intervalo [1, 200]', () => {
    const email = { id: 1, name: 'exemplo@email.com' };
    const pessoa = new Pessoa(1, 'João Silva', 25, email);

    expect(pessoa.idade).toBeGreaterThanOrEqual(1);
    expect(pessoa.idade).toBeLessThanOrEqual(200);
  });
});