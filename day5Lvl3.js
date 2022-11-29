//O seguinte é uma matriz de 10 alunos com idades:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

//Classifique a matriz e encontre a idade mínima e máxima
ages.sort();
console.log(`A idade minima é ${ages[0]} e a idade maxima é ${ages[ages.length-1]}`)//A idade minima é 19 e a idade maxima é 26

//Encontre a idade mediana (um item do meio ou dois itens do meio divididos por dois)
console.log(`A idade mediana é ${(ages[ages.length/2])/2}`);//A idade mediana é 12

//Encontre a idade média (todos os itens divididos pelo número de itens)
let soma = 0
for(i=0;i<ages.length;i++){
    soma += ages[i]
}
console.log(`A idade media é ${soma/ages.length}`);