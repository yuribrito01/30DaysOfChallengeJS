let challenge ='30 Days Of JavaScript';
console.log(challenge);
console.log(challenge.length);


console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substring(0,2));
console.log(challenge.substring(3,21));


console.log(challenge.includes('Script'));

console.log(challenge.split(' '));

console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt("j"));

console.log(challenge.indexOf("a"));

console.log(challenge.lastIndexOf("a"));

//Use indexOf para encontrar a posição da primeira ocorrência da palavra porque na frase a seguir:
//'Você não pode terminar uma frase com porque porque porque é uma conjunção'
let frase = 'Você não pode terminar uma frase com porque porque porque é uma conjunção'
console.log(frase.indexOf('porque'));

//Use lastIndexOf para encontrar a posição da última ocorrência da palavra porque na frase
console.log(frase.lastIndexOf('porque'));

//Use a pesquisa para encontrar a posição da primeira ocorrência da palavra porque na frase
console.log(frase.search('porque'));

//Verifique se 'on' é encontrado em python e jargão
let frase2 = "python e jargão";
console.log(frase2.includes("on"));

//Gere um número aleatório entre 0 e 100 inclusive.
let radonNum = Math.random() 
console.log(Math.ceil(radonNum*100));

//Acesse os caracteres de string 'JavaScript' usando um número aleatório.
let JavaScript = "javaScript"
console.log(JavaScript.charAt(Math.floor((Math.random())*11)));

