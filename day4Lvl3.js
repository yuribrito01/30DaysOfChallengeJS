//Escreva um programa que informe o número de dias em um mês.

let mes = "abril"
let days = 0
mes = mes.toUpperCase()

switch(mes){
    case "JANEIRO": days = 31;
        break;
    case "FEVEREIRO": days = 28;
        break;
    case "MARÇO": days = 31;
        break;
    case "ABRIL": days = 30;
        break;
    case "MAIO": days = 31;
        break;
    case "JUNHO": days = 30;
        break;
    case "JULHO": days = 31;
        break;
    case "AGOSTO": days = 31;
        break;
    case "SETEMBRO": days = 30;
        break;
    case "OUTUBRO": days = 31
        break;
    case "NOVEMBRO": days = 30;
        break;
    case "DEZEMBRO": days = 31;
        break;
}

console.log(`Esse mes possui ${days} dias`);