/*Relacionales
let resultado = 10 > 5;
console.log(resultado);
*/
/*const entradas = [
    {A: TRUE, B: TRUE},
    {A: FALSE, B: TRUE}, 
    {A: TRUE, B: FALSE}, 
    {A: FALSE, B: FALSE},  
];
entradas.forEach(({A, B})=>{
    const resultadoAND = A&&B;
    const resultadoB = A||B;
});
console.log('A: ${A}')  */
/*let nombreMat = prompt("En que materia estas? ");
if(nombreMat === "web2"){
    console.log("Bien :))");
} else {
    console.log("Que mal :((");
};*/

//Numero entre 1 y 10 

let numero = parseInt(prompt("Dame un numero entre 1-10: "));
if(numero <= 10 && numero >=1){
    console.log("Bien")
}else{
    console.log("Mal")
}
console.log(numero);
