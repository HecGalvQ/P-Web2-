//Adivinar un numero 
function adivinaNumero() {
    // Generar un número aleatorio entre 1 y 10
    const numeroSecreto = Math.floor(Math.random() * 10) + 1;
  
    // Solicitar al usuario que ingrese un número
    const numeroUsuario = parseInt(prompt("Adivina el número (entre 1 y 10):"));
  
   
    if (numeroUsuario === numeroSecreto) {
      alert("¡Felicidades! Adivinaste el número correcto.");
    } else if (numeroUsuario > 10 || numeroUsuario < 1) {
      alert("Por favor, ingresa un número válido entre 1 y 10.");
    } else {
      alert("Lo siento, el número era " + numeroSecreto + ". Inténtalo de nuevo.");
    }
  }

  adivinaNumero();