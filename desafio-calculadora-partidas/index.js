//uma solucao
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function determinarNivel(vitorias) {
  if (vitorias < 10) {
    return "Ferro";
  } else if (vitorias <= 20) {
    return "Bronze";
  } else if (vitorias <= 50) {
    return "Prata";
  } else if (vitorias <= 80) {
    return "Ouro";
  } else if (vitorias <= 90) {
    return "Diamante";
  } else if (vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

// Função juntando tudo
function resultadoRank(vitorias, derrotas) {
  const saldo = calcularSaldo(vitorias, derrotas);
  const nivel = determinarNivel(vitorias);

  return `O Herói tem de saldo de ${saldo} está no nível de ${nivel}`;
}
// exemplo:
console.log(resultadoRank(35, 10));

//outra solucao
function calcularNivel(vitorias, derrotas) {
  let saldoVitorias = vitorias - derrotas;
  let nivel = "";

  if (vitorias < 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }

  return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}
// exemplo
console.log(calcularNivel(75, 20));
