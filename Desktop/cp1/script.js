/*Crie um programa que declare a variável como String depois
 converta para float
  e em
 seguida apresente apenas dois numeros depois da virgula*/

let minhaString = "123.456";
let meuFloat = parseFloat(minhaString).toFixed(2);

console.log(meuFloat); // Saída: "123.46"