//'O amor é a melhor coisa deste mundo. Alguns encontraram seu amor e alguns ainda estão procurando por seu amor.'
//Conte o número de palavras amor nesta frase.

let frase = 'O amor é a melhor coisa deste mundo. Alguns encontraram seu amor e alguns ainda estão procurando por seu amor.';

palavraAmor = frase.match(/amor/gi);  //[ 'amor', 'amor', 'amor' ]

console.log(palavraAmor.length); //3
