//estrutura de decisão
// switch/case/break/default

let fruta = "morango";

switch (fruta) {
  case "laranja":
    console.log("suco de laranja");
    break; //para quando encontra a situacao

  case "maca":
    console.log("suco de maça");
    break;

  case "banana":
  case "morango":
    console.log(`vitamina de ${fruta}`);
    break;

  default: //caso nao encontre
    console.log("suco generico");
}
