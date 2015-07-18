var arreglo = [];
var resultados = [];

function agregarNumero(){
	var nuevoNumero = NaN;
	while(isNaN(nuevoNumero)){
		nuevoNumero = Number(prompt("Indicar Nuevo Numero",""));
	}

	var largoArreglo = (isNaN(Number(arreglo.length)) ? 0 : arreglo.length);
	arreglo[largoArreglo] = nuevoNumero;
	document.getElementById("listadoNumeros").innerHTML = arreglo.join(", ");
}

function evaluacion(){
	var largoArreglo = arreglo.length;
	for (i = 0; i < largoArreglo; i++){
		var numeroActual = arreglo[i];
		//esto se brinca los elementos que YA fueron evaluados, para no evaluar dos veces...
		if (arreglo.indexOf(numeroActual) < i ){
			continue;
		}
		//esto evalua el numero de veces que si se encontró 
		var numeroDeVeces = 0;
		var j = i;
		while (j != -1){
			numeroDeVeces++;
			var siguienteIndex = arreglo.indexOf(numeroActual, j + 1);
			j = siguienteIndex;
		}
		var largoResultados = (isNaN(Number(resultados.length)) ? 0 : resultados.length);
		resultados[largoResultados] = [numeroActual, numeroDeVeces];
	}
	document.getElementById("resul").innerHTML = resultados;
}

function comparador(a, b){
	return a - b;
}