/*let frutas = ["Melon", "manzana","pera"];
console.log(frutas);
frutas.unshift("Sandia");
console.log(frutas);
//para eliminar 
let eliminaFruta = frutas.pop();
console.log(frutas);*/

//INICIO DE ARREGLO PARA ALMACENAR TAREAS 
let tareas = [];
// funcion para mostrar menu 
function mostrarMenu(){
    return parseInt(prompt(`
            "Opciones disponibles"
            1.- Agregar Tarea
            2.- Ver todas las tareas
            3.- Marcar la tarea completada 
            4.- Salir
            "Elige una opcion"
        `));
};
//Funcion para agregar tarea 
function agregarTarea(){
    let nombre = prompt("Ingresa el nombre de la tarea: ")
    if(nombre){
      let tarea = {
            nombre:nombre,
            completada: false
      };
      tareas.push(tarea);
      alert("Tarea Agregada de forma exitosa :))");
    }else{
            alert("Nombre de la tarea no puuede estar vacio");
    }
};
//Ver todas las tareas 
function verTareas(){
    if(tareas.length === 0){
        alert("No hay tareas en lista");
    }else{
        let mensaje = "Lista de tareas \n";
        tareas.forEach((tarea, index)=>{
            mensaje+=`${index+1}.- ${tarea.nombre} [${tarea.completada?"Completada":"Pendiente"}]\n`;
        });
        alert(mensaje);
    }
};
//Funcion para marcar tareas completadas 
function marcarTareaCompletada() {
    let numero = parseInt(prompt("Introduce el numero de la tarea completada: "));
    if(numero > 0 && numero <= tareas.length){
        tareas[numero-1].completada = true;
        alert(`La tarea "${tareas[numero-1].nombre}" ha sido marcada como completada`);
    }else{
            alert("Numero invalido")
    }
};
    // Funcion para manejar el flujo de programa 
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opcion no valida, intenta nuevamente");
        }
    }  
    alert("Finalizando programa"); 
};


iniciarPrograma();