import { Pessoa, Email } from '../src/app';

describe('Pessoa', () => {
  test('O nome é composto por ao menos 2 partes e deve ser composto de letras', () => {
    const email = new Email(1, 'joao.silva@email.com');
    const pessoa = new Pessoa(1, 'João Silva', 25, email);
    const partesNome = pessoa.nome.split(' ');

    expect(partesNome.length).toBeGreaterThanOrEqual(2);

    partesNome.forEach(parte => {
        expect(parte).toMatch(/^[A-Za-zÀ-ÖØ-öø-ÿ]+$/);
    });
  });
});