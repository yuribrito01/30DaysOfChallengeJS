//Se o comprimento do seu nome for maior que 7, diga, seu nome é longo, caso contrário, diga que seu nome é curto.
let nome = "Yuri"

nome.length > 7 ? console.log("Seu nome é longo") : console.log("Seu nome é curto"); //Seu nome é curto

//Compare o comprimento do seu primeiro nome e o comprimento do seu nome de família e você deve obter esta saída.

let lastName = "Brito";
let size;

lastName.length > nome.length ? size = "smaller" : size = "longer" ;

console.log(`Your first name, ${nome} is ${size} than your family name, ${lastName}`); //Your first name, Yuri is smaller than your family name, Brito