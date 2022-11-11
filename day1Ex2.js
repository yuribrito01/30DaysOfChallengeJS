//1.'O amor é a melhor coisa deste mundo. Alguns encontraram seu amor e alguns ainda estão procurando por seu amor.'
//Conte o número de palavras amor nesta frase.

let frase = 'O amor é a melhor coisa deste mundo. Alguns encontraram seu amor e alguns ainda estão procurando por seu amor.';

palavraAmor = frase.match(/amor/gi);  //[ 'amor', 'amor', 'amor' ]

console.log(palavraAmor.length); //3


//2. Use match() para contar o número de todos porque na seguinte frase: 
//'Você não pode terminar uma frase com porque porque porque é uma conjunção'
 let frase2 = 'Você não pode terminar uma frase com porque porque porque é uma conjunção';

 palavraPorque = frase2.match(/porque/gi);  //[ 'amor', 'amor', 'amor' ]

console.log(palavraPorque.length); //3

