const miPromesa = new Promise((resolve, reject)=>{
    const exito = false;
    setTimeout(()=>{
    if(exito){
        resolve("Operacion exitosa");
    }else{
        reject("Error");
    }
    }, 300);
});
