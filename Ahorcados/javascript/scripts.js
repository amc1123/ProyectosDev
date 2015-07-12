var conjuntoFacil = ["hola", "adios", "vaca", "perro", "mama", "leche"];
var conjuntoMedio = ["pajaro", "amigo", "coladera", "Japon"];
var conjuntoDificil = ["estrdújula", "calabacitas", "regateo", "tenochtitlan"];
document.getElementById("palabraElegida").style.display = "none";
document.getElementById("panel").style.display = "none";
var elegido = new String();
var letrasUtilizadas = new String();
var develado = new String();
var erroresTotales = 0;
var erroresLimite = 10;



function asignarPalabra(x){
	var conjunto;
	switch (x){
		case "facil":
			conjunto = conjuntoFacil;
			break;
		case "medio":
			conjunto = conjuntoMedio;
			break;
		case "dificil":
			conjunto = conjuntoDificil;
			break;
	}
	var tamaño = conjunto.length;
	var aleatorio = parseInt(Math.random() * tamaño);
	elegido = conjunto[aleatorio];
	for (var i = elegido.length; i > 0; i--) {
		develado = develado + "-";
	}
	document.getElementById("escoger-nivel").style.display = "none";
	document.getElementById("palabraElegida").style.display = "initial";
	document.getElementById("panel").style.display = "initial";
	document.getElementById('laPalabra').innerHTML = develado;
};


function probarLetra(){
	var frasePropuesta = document.getElementById("input").value;
	var largoFrase = frasePropuesta.length + 0;
	//falta corregir esto... por aglún motivo no checa el lenght = 0;
	if (largoFrase == 0) {
		alert("Se debe proporcionar al menos UNA letra. Favor de corregir");
	} else {
		if (letrasUtilizadas.indexOf(frasePropuesta) >= 0) {
			alert("Esa letra ya fue utilizada...");
		} else {
			// Eso lleva el registro de las letras/frases ya utilizadas
			if (letrasUtilizadas.length > 0) {
				letrasUtilizadas = letrasUtilizadas + ", " + frasePropuesta;
			} else {
				letrasUtilizadas = frasePropuesta;
			}
			document.getElementById("letrasUtilizadas").innerHTML = 
				letrasUtilizadas;


			var indexInicial = elegido.indexOf(frasePropuesta);
			var indexFinal = elegido.lastIndexOf(frasePropuesta);
			var indexActual = indexInicial;

			if (indexInicial == -1) {
				//Esto incrementa el valor de error
				erroresTotales ++;
				document.getElementById("ahorcado").src = "images/" + erroresTotales + ".png";
				if (erroresTotales == erroresLimite){
					alert("Has perdido... era " + elegido.toUpperCase());
					location.reload();
				}

			} else {
				// Esto inserta las letras adivinadas al pánel de respuestas
				while (indexActual != -1) {
					develado = develado.substr(0,indexActual) + frasePropuesta + 
						develado.substr(indexActual+largoFrase);
					indexActual = elegido.indexOf(frasePropuesta,indexActual + 1);
				}
				document.getElementById("laPalabra").innerHTML = develado;
				
				// Esto refresca la página cuando se terminó el juego y ganó
				if (develado == elegido) {
					alert("Felicidades, es " + elegido.toUpperCase());
					location.reload();
				}
			}
		}
	}
	document.getElementById("input").value = null;
	// document.
}
