var conjuntoFacil = ["hola", "adios", "vaca", "perro", "mama", "leche"];
var conjuntoMedio = ["pajaro", "amigo", "coladera", "Japon"];
var conjuntoDificil = ["estrdújula", "calabacitas", "regateo", "tenochtitlan"];

var elegido = new string;

var letrasUtilizadas;

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
	var elegido = conjunto[aleatorio];

	//aqui debe de poner la palabra en el html y luego ocultarla por guiones
	//esto está aún pendinete.
	//es algo con string.replace(texto viejo, nuevo texto)

	return elegido;
}


function porbarLetra(x){
	var l = document.getElementById('letraPropuesta').value;

	if (letrasUtilizadas.indexOf(l,1) < 1 ) {
		letrasUtilizadas = letrasUtilizadas + l;
		//aqui correr el funciton que quita los espacios incógnitos y mete
		//valores encontrados
	}
}