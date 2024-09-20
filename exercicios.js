// 1
const test = true;
const result = 100;
const word = "hello";

console.log(typeof(test));
console.log(typeof(result));
console.log(typeof(word));


// 2
const nome = "Fulano";
const sobrenome = "De Tal";
const nomeCompleto = nome + " " + sobrenome;
console.log(nomeCompleto);


// 3
const primeira = "Feliz";
const segunda = 2025;
const terceira = `${primeira} ${segunda}`;
console.log(terceira);


// 4
let valor = 42;
console.log(valor);

valor = 100;
console.log(valor);


// 5
// bloco 1
var xpto1 = 100;

if (true){
  console.log(xpto1);
  var xpto2 = 200;
}

console.log(xpto2);

let xpto3 = 100;

if (true){
  console.log(xpto3);
  let xpto4 = 200;
}

// xpto4 is not defined
// console.log(xpto4);


// 6
const possibilidades = [true, false];
let estaChovendo = possibilidades[Math.floor(Math.random() * (1 - 0 + 1)) + 0];

if (estaChovendo){
  console.log("Levar guarda-chuvas");
} else {
  console.log("Não levar guarda-chuvas");
}