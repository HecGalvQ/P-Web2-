/*let carrito = [];
let fruta = prompt("Ingresa una fruta");
carrito.push(fruta);

console.log(carrito);
while( confirm("Deseas agregar otra fruta?")){
    let fruta = prompt("Ingresa una fruta");
    carrito.push(fruta);    
};
mensaje = "Tienes:\n ";
carrito.forEach((frutas, index)=>{
    mensaje += `${index+1}.- ${frutas}\n`;   
})
alert(`Usted tiene:\n ${mensaje}`)
*/
// A)
let a = "X";
vertical = "Resultado:\n "
for (equis in a){
    vertical +=`
    ${a}\n
    ${a}\n
    ${a}\n
    ${a}\n`
}
alert(vertical)

let b = "X";
horizontal = "Resultado:\n "
for (equis in b){
    horizontal +=`${b}${b}${b}${b}`
}
alert(horizontal)
//B)
// Solicitar número 
let cantidad = prompt("Ingresa el número de x:");

// Solicitar formato de impresión al usuario
let formato = prompt("¿Cómo deseas imprimir los asteriscos? (Escribe 'horizontal' o 'vertical'):");

// Variable para almacenar el resultado
let resultado = "";

// Usar un ciclo for para generar el resultado
if (formato.toLowerCase() === "horizontal") {
    for (let i = 0; i < cantidad; i++) {
        resultado += "X";  
    }
    alert(resultado);  // Mostrar en una sola línea en el alert
} else if (formato.toLowerCase() === "vertical") {
    for (let i = 0; i < cantidad; i++) {
        resultado += "*\n";  // Concatenar
    }
    alert(resultado);  // Mostrar asteriscos en nuevas líneas en el alert
} else {
    alert("Opción no válida.");
}
//C)
// Imprimir un cuadrado de 4x4
let resultadoCuadrado = "";

for (let i = 0; i < 4; i++) {  // Bucle para cada fila
    for (let j = 0; j < 4; j++) {  
        resultadoCuadrado += "X";  // Concatenar 
    }
    resultadoCuadrado += "\n";  //Salto de línea después de cada fila
}

alert(resultadoCuadrado);  
//D)
//Tablas 1 al 10
let resultadoTabla = "";

for (let i = 1; i <= 10; i++) {  // Recorrer la primera parte de la tabla
    for (let j = 1; j <= 10; j++) {  // Recorrer la segunda parte de la tabla
        resultadoTabla += i + " X " + j + " = " + (i * j) + "\n";  // Concatenar multiplicación
    }
    resultadoTabla += "\n"; 
}

alert(resultadoTabla);  
