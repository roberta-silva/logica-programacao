let ligado = true;
if (ligado) {
  console.log("executou o comando");
} else {
  console.log("não executou o comando");
}
let possuiOvos = false;

let itensComprados = "";
if (possuiOvos) {
  itensComprados = "Leite";
} else {
  itensComprados = "nenhum";
  console.log("não havia ovo");
}
console.log("item comprado: " + itensComprados);

//if, else if, else
let nivelFome = 1;
if (nivelFome === 1) {
  console.log("sem fome");
} else if (nivelFome === 2) {
  console.log("pouca fome");
} else {
  console.log("muita fome");
}
