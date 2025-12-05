class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    } else if (this.tipo === "guerreiro") {
      ataque = "espada";
    } else if (this.tipo === "monge") {
      ataque = "artes marciais";
    } else if (this.tipo === "ninja") {
      ataque = "shuriken";
    } else {
      ataque = "um ataque desconhecido";
    }
    console.log(`o ${this.tipo} atacou usando ${ataque}`);
  }
}
let heroi1 = new heroi("CodeHero", 30, "guerreiro");

heroi1.atacar();

//
class Heroi2 {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    const ataques = {
      mago: "magia",
      guerreiro: "espada",
      monge: "artes marciais",
      ninja: "shuriken",
    };

    const ataque = ataques[this.tipo] || "um ataque desconhecido";

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi2 = new Heroi2("LadyLoop", 30, "ninja");
heroi2.atacar();
