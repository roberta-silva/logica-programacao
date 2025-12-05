class formaDeBolo {
  constructor(saborDaMassa, SaborRecheio) {
    this.saborDaMassa = saborDaMassa;
    this.SaborRecheio = SaborRecheio;
  }
  escrever() {
    console.log(
      `Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.SaborRecheio}`
    );
  }
  assar() {
    console.log(`bolo de ${this.saborDaMassa} assando`);
  }
}
let boloFesta = new formaDeBolo("chocolate", "nutella");
let boloPremium = new formaDeBolo("baunilha", "coco");

// console.log(boloFesta);
// console.log(boloFesta.saborDaMassa);

boloFesta.escrever();
boloPremium.escrever();
boloPremium.assar();
