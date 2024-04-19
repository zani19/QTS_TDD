export function tipoDeTriangulo(ladoA: number, ladoB: number, ladoC: number): string {
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        if (ladoA === ladoB && ladoB === ladoC) {
            return 'Equilátero';
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            return 'Isósceles';
        } else {
            return 'Escaleno';
        }
    } else {
        return 'Não é um triângulo válido';
    }
}