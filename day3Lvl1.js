//Declare firstName, lastName, age, isMarried  e atribua valor
// a ela e use o operador typeof para verificar diferentes tipos de dados.

let firstName = "Yuri"
let lastName = "Brito"
let age = 20
let isMarried = false


console.log(typeof firstName);  //string
console.log(typeof lastName);  //string
console.log(typeof age);  //number
console.log(typeof isMarried);  //boolean

//Verifique se o tipo de '10' é igual a 10

console.log(typeof '10' == typeof 10); //false

//Verifique se parseInt('9.8') é igual a 10

console.log(parseInt('9.8') == 10); //false //parseInt('9.8') = 9