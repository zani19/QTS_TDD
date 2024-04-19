"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../src/app");
describe('Pessoa', () => {
    test('O objeto Pessoa deve ter pelo menos um objeto da classe Email associado', () => {
        const email = new app_1.Email(1, 'exemplo@email.com');
        const pessoa = new app_1.Pessoa(1, 'Pedro Paulo Silva', 37, email);
        expect(pessoa.email).toBeInstanceOf(app_1.Email);
    });
});
describe('Email', () => {
    test('O nome da classe Email deve estar no formato "_____@____._____", sendo que cada parte deve ter ao menos um caractere', () => {
        const email = new app_1.Email(1, 'exemplo@email.com');
        // Verifica se o nome do email está no formato correto
        const partesEmail = email.name.split('@');
        expect(partesEmail.length).toBe(2);
        const partesDominio = partesEmail[1].split('.');
        expect(partesDominio.length).toBeGreaterThanOrEqual(2);
        partesEmail.forEach(parte => {
            expect(parte.length).toBeGreaterThanOrEqual(1);
        });
        partesDominio.forEach(parte => {
            expect(parte.length).toBeGreaterThanOrEqual(1);
        });
    });
});
