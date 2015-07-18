var inicioFrase = function (){
var fraseOriginal = prompt("Dime una frase");

var palabra = fraseOriginal.replace(/\s+/g, '');
palabra = palabra.toLowerCase();

var caracterActual = 0;
chequeoIterativo(caracterActual);
	function chequeoIterativo (x){
		var primerLetra = palabra.charAt(x);
		var ultimaLetra = palabra.charAt(palabra.length - x - 1);
		if (x -  palabra.length /2 < 0) {
			if (primerLetra == ultimaLetra) {
				console.log(primerLetra.toUpperCase() + " es igual a " + ultimaLetra.toUpperCase() );
				chequeoIterativo (x + 1);
			} else{
				console.log("no es palindromo");
			}
		} else {
			console.log("SI es palindromo");
		}
	}
}