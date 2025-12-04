//laços de repetição
//FOR
for (let contador = 0; contador < 4; contador++) {
  console.log(contador); // vai rodar 1 vez para cada numero enquanto for menor que 4
  console.log("aumentar o contador");
}

let pontosDeVida = 0;
for (let i = 0; i < 10; i++) {
  pontosDeVida += 1;
  console.log(`tomou poção mágica`);
}
console.log(pontosDeVida);

//while - alternativa ao for
let contadorWhile = 0;
while (contadorWhile < 3) {
  console.log("ola");
  contadorWhile++;
}

//do while
let contadorDoWhile = 0;

do {
  console.log("ola do while");
  contadorDoWhile++;
} while (contadorDoWhile < 3);
