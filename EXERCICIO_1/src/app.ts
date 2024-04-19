import prompt from 'prompt-sync';
import { tipoDeTriangulo } from './triangulo';

const ps = prompt();

let ladoA = Number(ps('Insira um valor para o lado A do triângulo: '));
let ladoB = Number(ps('Insira um valor para o lado B do triângulo: '));
let ladoC = Number(ps('Insira um valor para o lado C do triângulo: '));

console.log(tipoDeTriangulo(ladoA, ladoB, ladoC));