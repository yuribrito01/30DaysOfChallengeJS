//1.'O amor é a melhor coisa deste mundo. Alguns encontraram seu amor e alguns ainda estão procurando por seu amor.'
//Conte o número de palavras amor nesta frase.

let frase = 'O amor é a melhor coisa deste mundo. Alguns encontraram seu amor e alguns ainda estão procurando por seu amor.';

palavraAmor = frase.match(/amor/gi);  //[ 'amor', 'amor', 'amor' ]

console.log(palavraAmor.length); //3


//2. Use match() para contar o número de todos porque na seguinte frase: 
//'Você não pode terminar uma frase com porque porque porque é uma conjunção'
 let frase2 = 'Você não pode terminar uma frase com porque porque porque é uma conjunção';

 palavraPorque = frase2.match(/porque/gi);  //[ 'porque', 'porque', 'porque' ]

console.log(palavraPorque.length); //3

//Limpe o texto e encontre a palavra mais frequente (dica, use substituir e expressões regulares).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

sentenceClear = sentence.replace(/[%-&-#-@]/g, '');


console.log(sentenceClear)


