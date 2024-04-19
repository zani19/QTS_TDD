export class Email {
    id: number;
    name: string;
  
    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }
  }
  
  export class Pessoa {
    id: number;
    nome: string;
    idade: number;
    email: Email;
  
    constructor(id: number, nome: string, idade: number, email: Email) {
      this.id = id;
      this.nome = nome;
      this.idade = idade;
      this.email = email;
    }
  }
  
  let email = new Email(1, 'exemplo@email.com');
  let pessoa = new Pessoa(1, 'João', 25, email);
  
  console.log(pessoa);