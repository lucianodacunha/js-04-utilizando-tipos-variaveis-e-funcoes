const aleatorioEntre = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)+ min)
}

// 1
function saudacao(nome){
  return `Olá ${nome}!`;
}

console.log(saudacao('Aluno'));


// 2
function verificaIdade(idade){
  return idade >= 18 ? `${idade} anos: Maior de Idade` : `${idade} anos: Menor de Idade`;
}

const idade = aleatorioEntre(1, 80);
console.log(verificaIdade(idade));


// 3
function ehPalindromo(palavra){
  const original = palavra.split("").toString();
  const reversed = palavra.split("").reverse().toString();
  if (original === reversed){
    return `A palavra ${palavra} É palindromo.`;
  } else {
    return `A palavra ${palavra} NÃO É palindromo.`;
  };
}

const palavras = ["roma", "ovo", "novo", "ata"];
const palavra = palavras[aleatorioEntre(0, 3)]
console.log(ehPalindromo(palavra));


// 4 
function maior(a, b, c){
  let maior = a;

  if (b > maior)
    maior = b;

  if (c > maior)
    maior = c;
  
  return maior;
}

const a = aleatorioEntre(1, 100);
const b = aleatorioEntre(1, 100);
const c = aleatorioEntre(1, 100);

console.log(`O maior entre ${a}, ${b}, ${c} é: ${maior(a,b,c)}`);


// 5
const potencia = (base, exp) => {
  return base ** exp;
}

const x = aleatorioEntre(1, 10);
const y = aleatorioEntre(1, 10);


console.log(`${x} ^ ${y}: ${potencia(x, y)}`);