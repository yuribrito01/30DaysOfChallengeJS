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

//3. Limpe o texto e encontre a palavra mais frequente (dica, use substituir e expressões regulares).

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

let sentenceClear = sentence.replace(/[%-&-#-@]/g, ''); //I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting 
                                                        //than any other jobs Does this motivate you to be a teacher! This DaysOfJavaScript is also the result of love of teaching

sentenceClear = sentenceClear.split(' ');

// 4. Calcule a renda anual total da pessoa extraindo os números do texto a seguir.
// 'Ele ganha 5.000 euros de salário por mês, 10.000 euros de bônus anual, 15.000 euros de cursos online por mês.'

let frase3 = 'Ele ganha 5.000 euros de salário por mês, 10.000 euros de bônus anual, 15.000 euros de cursos online por mês.';
let tiraPonto = frase3.replace(/[.]/g,''); //Aqui estou tirando os pontos dos numeros
let numerosDaSenteca = tiraPonto.match(/\d+/g) //'5000', '10000', '15000'
//numerosDaSenteca = parseInt(numerosDaSenteca);
let rendaAnual = ((numerosDaSenteca[0]*12) + (+numerosDaSenteca[1]) + (numerosDaSenteca[2]*12));

console.log(`A renda anual total dessa pessoa é de ${rendaAnual} Euros`); //A renda anual total dessa pessoa é de 250000 Euros
