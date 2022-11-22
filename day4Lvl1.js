//Se o usuário tiver 18 anos ou mais, dê feedback: 'Você tem idade suficiente para dirigir'
// mas se não tiver 18 anos, dê outro feedback informando para esperar o número de anos que ele precisa para completar 18 anos.

const idade = 15;

idade >= 18 ? console.log("Voce tem idade suficiente para dirigir!") : console.log(`Espere ${18 - idade} Anos para tirar sua carta.`)//Espere 3 Anos para tirar sua carta.

//Números pares são divisíveis por 2 e o resto é zero. Como você verifica se um número é par ou não usando JavaScript?

const number = 9;

number%2 == 0 ? console.log("O numero é par") : console.log("O numero é impar");//O numero é impar

//Escreva um código que possa dar notas aos alunos de acordo com suas pontuações
function range(start,end){
    const numeros =[];
    for(let i=start;i<=end;i++){
        numeros.push(i)
    }
    return numeros;
}
const nota = 40;
let letra = "";
let rangeA = range(80,100), rangeB = range(70,89), rangeC = range(60,69), rangeD = range(50,59), rangeF = range(0,49);

if(rangeA.includes(nota)){
    letra = "A";
}else if (rangeB.includes(nota)){
    letra = "B";
}else if (rangeC.includes(nota)){
    letra = "C";
}else if (rangeD.includes(nota)){
    letra = "D";
}else if (rangeF.includes(nota)){
    letra = "F";
}

console.log(`Sua nota é ${letra}`);//Sua nota é F