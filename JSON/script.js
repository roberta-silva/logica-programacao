//JSON
//sem usar JSON
// let name = "roberta";
// let age = 27;
// let products = ["mouse", "teclado", "monitor"];
// let productsValues = [29.99, 129.99, 899.99];

// generateInvoice(name, products, age);

// function generateInvoice(name, products, age) {
//   console.log(`O comprador é ${name}`);
//   console.log(`A idade é ${age}`);
//   console.log("------------------");
//   console.log(`O produto é ${products[0]}`);
//   console.log(`O valor é ${productsValues[0]}`);
// }

//usando JSON
let invoice = {
  name: "roberta",
  age: 27,
  products: {
    0: ["mouse", 29.9],
    1: ["teclado", 129.99],
    2: ["monitor", 899.99],
  },
  taxes: "98.90",
};
console.log(invoice);
// console.log(invoice.name);
// console.log(invoice.products);

generateInvoice(invoice);

function generateInvoice(invoice) {
  console.log(`O comprador é ${invoice.name}`);
  console.log(`A idade é ${invoice.age}`);
  console.log("------------------");

  for (let index in invoice.products) {
    let [productName, productPrice] = invoice.products[index];
    console.log(`${productName}: R$ ${productPrice}`);
  }
}
