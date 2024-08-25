let nombre = String(prompt("Ingresa tu Nombre: "));
console.log("Tu nombre es: " + nombre);
let nacionalidad = String(prompt("Ingresa tu nacionalidad: "));
console.log("Tu nacionalidad es: " +  nacionalidad);
let edad = parseInt(prompt("Ingresa tu edad"));
console.log("Tu edad es: " + edad);
let estatura = parseFloat(prompt("Ingresa tu estatura en mts: "));
console.log("Tu estatura es : " + estatura);
let peso_kg = parseInt(prompt("Ingresa tu peso(kg): "));
console.log("Tu peso es: " + peso_kg)
let imc = peso_kg/(estatura * estatura);
console.log("Tu imc es: " + imc);