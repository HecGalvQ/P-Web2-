let compras = [];
let fruta = prompt("Ingresa una fruta ");

compras.push(fruta);
while(confirm("ingresa una fruta al carrito")){
    let fruta2 = prompt("Ingresa otra fruta: ");
    compras.push(fruta2); 
}
console.log("Las frutas que compraste son: ");
for(let valArreglo of compras){
console.log(valArreglo);
}

compras.forEach((fruta, indice) => {
    console.log(`${indice + 1}.- ${fruta}`)
});