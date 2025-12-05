//funçoes
function torrar() {
  console.log("torrando pão");
  injetarPao();
}
torrar();

function injetarPao() {
  console.log("preparando para injetar o pão");
  console.log("finalizando");
}

//usando uma funcao para chamar varias funcoes
main();
function main() {
  getData();
  checkValues();
  sendToDatabase();
}
function getData() {
  console.log("pegando dados do usuário");
}
function checkValues() {
  console.log("validando dados");
}
function sendToDatabase() {
  console.log("cadastrando dados");
}

//exercicio memorizacao
function enviarDados() {
  let nomeDoBanco = "banco-de-dados";
  console.log(`salvando dados em ${nomeDoBanco}`);

  if (3 === 3) {
    console.log("senha validada");
  }
}

//funcoes com parametros
//parametro opcional deixar no final
torrarPao("pao de forma", 80.5, "maria");
torrarPao("pao integral", 99.9, "joao");
torrarPao("pao frances", 33.5);
torrarPao("pao italiano", 90.0, "pedro");

function torrarPao(pao, valor, nome = "cliente") {
  console.log(`torrada feita com ${pao}`);
  console.log(`o valor total é ${valor}`);
  console.log(`pedido de ${nome}`);
}

//escopo de variavel
// console.log(pao); // retorna erro, pq a variavel pao so pode ser acessda dentro da funcao
//var declara a variavel globalmente - não recomendavel
//let só existe dentro do escopo

//exemplo fixacao
createStringConnection("db_products", "felipe", "9876");
function createStringConnection(databaseName, user, pass) {
  console.log(
    `connect:DBCONNECT;user=${user};pass=${pass};initial_database=${databaseName}`
  );
}

//funcoes com retorno
let resultado = soma(5, 5);

console.log(`o resultado dessa funcao é ${resultado}`);

function soma(numA, numB) {
  let somatorio = numA + numB;
  return somatorio;
}

//exemplo return primeiro nome
let userName = getFirstName("Roberta Silva", " ");
console.log(`Seja bem-vindo(a) ${userName}`);

userName = getFirstName("Maria-Joao-Silva", "-");
console.log(`Seja bem-vindo(a) ${userName}`);

function getFirstName(name, splitChar) {
  let firstName = name.split(splitChar)[0]; // split vai quebrar o txt sempre que encontrar o caracter definido " " espaço
  return firstName;
}
