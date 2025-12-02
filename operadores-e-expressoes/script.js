//operadores aritmeticos
//adicao
let moradores = 3 + 2;
console.log(moradores); // 5

//subtracao
let portasRestantes = 5 - 1;
console.log(portasRestantes); // 4

//multiplicacao
let janelasTotal = 2 * 4;
console.log(janelasTotal); // 8

//divisao
let cadeirasPorMesa = 12 / 3;
console.log(cadeirasPorMesa); // 4

//modulo %
let sobraDeLadrilhos = 25 % 6;
// 25 ladrilhos para o piso, caixas com capacidade de 6
console.log(sobraDeLadrilhos); // 1 (sobra 1 ladrilho)

//operadores relacionais
// igual ==
let quartos = 3;
let quartosDesejados = 3;

let isEqual = quartos == quartosDesejados;
console.log(isEqual); // true

//diferente !=
let vagasGaragem = 1;
let vagasNecessarias = 2;

let naoIgual = vagasGaragem != vagasNecessarias;
console.log(naoIgual); // true

//maior que >
let tamanhoQuintal = 50; // m²
let tamanhoMinimo = 30;

let maiorQue = tamanhoQuintal > tamanhoMinimo;
console.log(maiorQue); // true

//menor que <
let idadeCasa = 15; // anos
let limiteParaReforma = 20;

let menor = idadeCasa < limiteParaReforma;
console.log(menor); // true

//maior ou igual >=
let andarDaCasa = 2;
let minimoAndares = 2;

let maiorOuIgual = andarDaCasa >= minimoAndares;
console.log(maiorOuIgual); // true

//menor ou igual
let consumoEnergia = 180; // kWh
let limiteConsumo = 200;

let menorOuIgual = consumoEnergia <= limiteConsumo;
console.log(menorOuIgual); // true

//operadores lógicos
//AND lógico &&
let temGaragem = true;
let temQuintal = true;

if (temGaragem && temQuintal) {
  console.log("A casa é perfeita para a família!");
}
// Só entra no IF se a casa tiver garagem E quintal

//OR logico ||
let temPiscina = false;
let temChurrasqueira = true;

if (temPiscina || temChurrasqueira) {
  console.log("A casa tem área de lazer!");
}
// Entra no IF porque tem churrasqueira (mesmo sem piscina) OR

//NOT logico !
let precisaReforma = false;

if (!precisaReforma) {
  console.log("A casa está pronta para morar!");
}
// O ! transforma 'false' em 'true', então o IF é executado

//operadores de atribuicao
//atribuicao =
let totalQuartos = 5;
// A casa tem 5 quartos

//adicao e atribuicao +=
let moradores1 = 3;
moradores1 += 2;
// Chegaram mais 2 moradores
console.log(moradores1); // 5

//subtracao e atribuicao -=
let cadeiras = 10;
cadeiras -= 3;
// 3 cadeiras foram retiradas da sala
console.log(cadeiras); // 7

//multiplicacao e atribuicao *=
let plantas = 4;
plantas *= 3;
// Cada planta foi dividida em 3 mudas
console.log(plantas); // 12

//divisao e atribuicao /=
let litrosDeTinta = 20;
litrosDeTinta /= 2;
// A reforma usou metade da tinta
console.log(litrosDeTinta); // 10

//modulo e atribuicao %=
let pisos = 10;
pisos %= 3;
// Colocando pisos em caixas de 3, sobram:
console.log(pisos); // 1

//operadores de incremento e decremento
//incremento ++
let moradores2 = 0;
moradores2++;
// Chegou mais 1 morador na casa
console.log(moradores2); // 1

//decremento --
let lampadasAcesas = 5;
lampadasAcesas--;
// Uma lâmpada foi apagada
console.log(lampadasAcesas); // 4
