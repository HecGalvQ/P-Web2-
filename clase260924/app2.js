function numeroAleatorio(min, max){
    return Math.floor(Math.random()*(max-min));
}

console.log(numeroAleatorio(5, 15))