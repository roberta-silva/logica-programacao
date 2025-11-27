//saída
console.log("Digite o nome do seu jogador");

//declarar variavel
let nickname = "Roberta";

//concatenar msg fixa + variavel
console.log("Bem vindo(a) " + nickname);
console.log(nickname + " entrou no servidor");

//variavel vs constante
console.log("Pokemon Go diz: tem um novo pokemon na região");
console.log("Pokemon Go diz: você foi derrotado por um líder");
//'pokemon go' é uma constante

const notificacao = "Pokemon Go diz:";
console.log(notificacao + " tem um novo pokemon na região");
console.log(notificacao + " você foi derrotado por um líder");

//fixação const x let
let poteCafe = "Café pilão";
let poteAcucar = "Açucar cristal";
let poteBiscoito = "Biscoito maizena";
const mensagemDaVovo = "Na cozinha da vovó hoje tem: ";

console.log(mensagemDaVovo + poteCafe + " " + poteAcucar + " " + poteBiscoito);

poteCafe = "Café 3 corações";
console.log(
  mensagemDaVovo + poteCafe + ", " + poteAcucar + " e " + poteBiscoito
);

//tipos variaveis
let nomePokemon;
let nivelPokemon;
let pontosVidaPokemon;
let pokemonSexo;
let selecionavel;

nomePokemon = "Pikachu";
nivelPokemon = 20;
pontosVidaPokemon = 45;
pokemonSexo = "M";
selecionavel = true;

//nome, idade, numero telefone, cpf, endereço, recebe aposentadoria
// string = texto; nnumber; boolean = logicos;
let nomePessoa = "Maria"; //string
let idade = 70; //number
let telefone = "51 999 999 999"; //valores que não serão usados matematicamente - armazenar como string
let cpf = "00000000000";
let endereco = "Rua dos limoeiros, numero 75, bairro centro";

idade = 71;

let aposentadoria = true;

//cadastro pet
// nome, especie, raca, idade, vacinacao
let nomePet = "Mel";
let especiePet = "cachorro";
let racaPet = "SRD";
let idadePet = 5;
let vacinado = true;

//vetores e matrizes
let nomesPokemons = ["pikachu", "charmander", "bulbasauro"];
console.log(nomesPokemons);
console.log(nomesPokemons[0]);
nomesPokemons.pop(); //remove o ultimo elemento da array
console.log(nomesPokemons);
console.log(nomesPokemons.length); // 2 0,1,2
console.log(nomesPokemons.length - 1); // 1 - ultimo
