function escoger(eleccion) {
    var compu = parseInt(Math.random() * 3);
    var compuTexto;
    switch (compu){
        case 0:
            compuTexto = "piedra";
            break;
        case 1:
            compuTexto = "papel";
            break;
        case 2:
            compuTexto = "tijera";
            break;
    };
    
    var usuario = 0;
    switch (eleccion){
        case "piedra":
            usuario = 0;
            break;
        case "papel":
            usuario = 1;
            break;
        case "tijera":
            usuario = 2;
            break;
    };
    var resultado = (usuario - compu) % 3;
    switch (resultado) {
        case 0:
            resultado = "empate";
            break;
        case 1:
            resultado = "ganador";
            break;
        case -2:
            resultado = "ganador";
            break;
        case 2:
            resultado = "perdedor";
            break;
        case -1:
            resultado = "perdedor";
            break;
    };
    resultado = resultado + "... yo escogí " + compuTexto;
    document.getElementById("r").innerHTML = resultado;
    console.log(resultado);
};