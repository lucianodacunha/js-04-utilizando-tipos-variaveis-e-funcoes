// 1
let saldo = 1000.0;
let valor = Math.floor(Math.random() * (500 - 100 + 1)+ 100);
const operacoes = ["sacar", "depositar"][Math.floor(Math.random() * 2)];

console.log(`Saldo atual: ${saldo}`);

if ("sacar" === operacoes) {
  console.log(`Sacando ${valor}...`);
  saldo -= valor;
} else {
  console.log(`Depositando ${valor}...`);
  saldo += valor;
};

console.log(`Saldo atual: ${saldo}`);


// 2
const num = Math.floor(Math.random() * (100 - 1 + 1)+ 1);
const resp = num % 2 === 0 ? "par" : "impar";
console.log(`O número ${num} é ${resp}`);


// 3 
const admin = [true, false][Math.floor(Math.random() * (1 - 0 + 1)+ 0)];
const logado = [true, false][Math.floor(Math.random() * (1 - 0 + 1)+ 0)];

console.log(`Usuário está logado? ${logado}, ` + 
            `Tem permissão de Admin? ${admin}, ` +
            `Pode acessar o sistema? ${admin && logado}`);


// 4
const maiorQue18 = [true, false][Math.floor(Math.random() * (1 - 0 + 1)+ 0)];
const estaAcompanhado = 
  [true, false][Math.floor(Math.random() * (1 - 0 + 1)+ 0)];

console.log(`É maior de idade? ${maiorQue18}, ` + 
            `Está acompanhando? ${estaAcompanhado}, ` +
            `Pode entrar? ${maiorQue18 || estaAcompanhado}`);


// 5
const idadeMinima = 18;
const idadeDoUsuario = Math.floor(Math.random() * (80 - 12 + 1)+ 12);
const mensagem = `Idadade Mínima: ${idadeMinima}\n` +
                 `Idade do Usuário: ${idadeDoUsuario}\n` +
                 `Entrada STATUS`;

if (idadeDoUsuario >= idadeMinima){
  console.log(mensagem.replace("STATUS", "PERMITIDA"));
} else {
  console.log(mensagem.replace("STATUS", "PROIBIDA"));
}
