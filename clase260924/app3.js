/* Parte declarativa
function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min));
}
console.log(numeroAleatorio(5, 15))
*/
/*let calculaAleatorio = function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min))
}
console.log(calculaAleatorio(1,11));
*/

//Funcion flecha
/*let numero = (max, min)=> Math.floor(Math.random()*(max-min)+min);
console.log(numero(15, 1));*/
let frutas = ["manzana", "pera", "durazno"];
//frutas.forEach(valor => console.log(valor));
frutas.forEach((valor, index, vector) => {
    console.log(valor);
    console.log(index);
    console.log(vector);
}
);


