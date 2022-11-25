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
console.log(shoppingCart);