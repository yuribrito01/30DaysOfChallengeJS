//Primeiro remova todas as pontuações e mude a string para array e conte o número de palavras no array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
 text = text.replace(/[,-.]/g, '') //I love teaching and empowering people I teach HTML CSS JS React Python
 text = text.split(" ")// 'I', 'love', 'teaching', 'and', 'empowering', 'people', 'I', 'teach', 'HTML', 'CSS', 'JS','React','Python'
 text = text.length
 console.log(text);//13

 //No carrinho de compras a seguir, adicione, remova, edite itens
 const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
//adicione 'Carne' no início do seu carrinho de compras
shoppingCart.unshift('Meat');
//adicione Sugar no final do seu carrinho de compras
shoppingCart.push('Sugar');// 'Meat', 'Milk', 'Coffee', 'Tea', 'Honey', 'Sugar'
//Remova o mel
const positionTea = shoppingCart.indexOf('Tea');
shoppingCart.splice(positionTea,1);
console.log(shoppingCart); //'Meat', 'Milk', 'Coffee', 'Honey', 'Sugar' 
//modificar honey para 'cheese'
const positionHoney = shoppingCart.indexOf('Honey')
shoppingCart[positionHoney] = 'Cheese';
console.log(shoppingCart);//[ 'Meat', 'Milk', 'Coffee', 'Cheese', 'Sugar' ]

//Na matriz de países, verifique se 'Ethiopia' existe na matriz, se existir, imprima 'ETHIOPIA'. Se não existir, adicione à lista de países.
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ];
  countries.includes('Ethiopia') ? console.log('ethiopia'.toUpperCase()) : countries.push('Ethiopia'); //ETHIOPIA

  //Concatene as duas variáveis ​​a seguir e armazene-as em uma variável fullStack.
  const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
  const backEnd = ['Node','Express', 'MongoDB']
  const fullStack = frontEnd.concat(backEnd)
  console.log(fullStack);//'HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'Express', 'MongoDB'


