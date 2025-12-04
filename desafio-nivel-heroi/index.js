let heroi = {
  nome: "CodeHero",
  xp: 0,
};

// Somando XP 5 vezes
for (let i = 0; i < 5; i++) {
  heroi.xp += 1000;
  console.log("Ganhou 1.000 xps");
}

let nivel = "";

if (heroi.xp <= 1000) {
  nivel = "Ferro";
} else if (heroi.xp <= 2000) {
  nivel = "Bronze";
} else if (heroi.xp <= 5000) {
  nivel = "Prata";
} else if (heroi.xp <= 7000) {
  nivel = "Ouro";
} else if (heroi.xp <= 8000) {
  nivel = "Platina";
} else if (heroi.xp <= 9000) {
  nivel = "Ascendente";
} else if (heroi.xp <= 10000) {
  nivel = "Imortal";
} else {
  nivel = "Radiante";
}
console.log(`O Herói de nome ${heroi.nome} está no nível de ${nivel}`);

//Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
