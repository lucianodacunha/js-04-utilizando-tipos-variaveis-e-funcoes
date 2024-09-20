
// escopo de função
function soma(a, b){
  let c = a + b;
  return c;
}

// c não está acessivel.
// console.log(c);
const result = soma(1, 2);
console.log(result);

// escopoa de bloco
const test = true;
if (test) {
  let resp = "sim";
  console.log(resp);  
}
