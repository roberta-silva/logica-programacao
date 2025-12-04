//desafio 1
const entrada = gets();

function calcularSaldo(operacoes) {
  let saldo = 0;

  const listaOperacoes = operacoes.split(",");

  listaOperacoes.forEach((operacao) => {
    const [tipo, valorStr] = operacao.trim().split(" ");
    const valor = parseInt(valorStr);

    if (tipo === "deposito") {
      saldo += valor;
    } else if (tipo === "saque") {
      saldo -= valor;
    }
  });

  return saldo.toString();
}

print(calcularSaldo(entrada));

//desafio 2
function calcularImposto(salario) {
  if (salario <= 3000) {
    return salario * 0.05;
  }

  const excedente = salario - 3000;
  return excedente * 0.1;
}

// Entrada do usuário
let salario = parseFloat(gets());

// Cálculo do imposto
let imposto = calcularImposto(salario);

// Saída formatada com duas casas decimais
print(imposto.toFixed(2));
