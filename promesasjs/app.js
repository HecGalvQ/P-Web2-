/*Promesas es un objeto que representa el fallo de una op asincrona 
Estados:
se crea con un constructor que toma una funcion como  argumento 
resolve y reject 
*/
const operacionPromesa = (num1, num2) => {
  const resultado = num1 + num2;
  return new Promise (resolve =>{
    setTimeout(()=>{
        resolve(resultado)
    }, 300);
  });  
}

operacionPromesa(1, 3)
    .then(result => console.log(result));